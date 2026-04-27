import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import { notifyUserTicketCreated } from "@/lib/email/supportEmail";
import { buildSupportTicketAccessUrl } from "@/lib/support/ticketAccess";
import {
  getSupportTicketsFromBackupByEmail,
  mergeSupportTickets,
  readSupportTicketBackups,
  saveSupportTicketBackup,
  serializeSupportTicket,
  SUPPORT_TICKET_DETAIL_INCLUDE,
} from "@/lib/support/ticketBackup";

const SUPPORT_EMAIL = process.env.CONTACT_EMAIL || "sameek.kundu@athiangames.com";

// ── helpers ──────────────────────────────────────────────────────────

/** Next sequential ticket number based on the highest existing one. */
async function generateTicketNumber(): Promise<string> {
  const existingTickets = await prisma.supportTicket.findMany({
    select: { ticketNumber: true },
  });

  let nextNum = 1;
  for (const ticket of existingTickets) {
    const match = ticket.ticketNumber.match(/^TKT-(\d+)$/);
    if (!match) {
      continue;
    }

    nextNum = Math.max(nextNum, parseInt(match[1], 10) + 1);
  }

  return `TKT-${String(nextNum).padStart(4, "0")}`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Send email notification about a new support ticket. */
async function notifySupport(
  ticket: {
    id: string;
    ticketNumber: string;
    subject: string;
    name: string;
    email: string;
    product: string;
    priority: string;
    description: string;
  },
  source: "database" | "file-only"
) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const badge =
      source === "file-only"
        ? `<span style="color:#ef4444;font-weight:bold;">⚠️ DATABASE FAILED — saved to file only</span><br/><br/>`
        : "";

    await transporter.sendMail({
      from: `"Athian Games Support" <${process.env.SMTP_USER}>`,
      to: SUPPORT_EMAIL,
      subject: `[${(ticket.priority || "normal").toUpperCase()}] New Ticket ${ticket.ticketNumber}: ${ticket.subject}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:auto;padding:24px;background:#111;color:#eee;border-radius:12px;">
          ${badge}
          <h2 style="margin:0 0 16px;">🎫 ${escapeHtml(ticket.ticketNumber)} — ${escapeHtml(ticket.subject)}</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:6px 12px;color:#999;">From</td>    <td style="padding:6px 12px;">${escapeHtml(ticket.name)} &lt;${escapeHtml(ticket.email)}&gt;</td></tr>
            <tr><td style="padding:6px 12px;color:#999;">Product</td> <td style="padding:6px 12px;">${escapeHtml(ticket.product)}</td></tr>
            <tr><td style="padding:6px 12px;color:#999;">Priority</td><td style="padding:6px 12px;">${escapeHtml(ticket.priority)}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#1a1a1a;border-radius:8px;white-space:pre-wrap;">${escapeHtml(ticket.description)}</div>
          <div style="margin-top:24px;">
            <a href="${buildSupportTicketAccessUrl(ticket.id, ticket.email)}" style="display:inline-block;padding:10px 18px;background:#818cf8;color:#fff;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">Open Ticket</a>
          </div>
        </div>
      `,
    });
    console.log(`[support] Email notification sent for ${ticket.ticketNumber}`);
  } catch (err) {
    // Email failure should never block the user — just log it.
    console.error("[support] Email notification failed:", err);
  }
}

// ── POST /api/support/tickets ────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, description, product, priority } = body;

    if (!name || !email || !subject || !description) {
      return NextResponse.json(
        { error: "Name, email, subject and description are required." },
        { status: 400 }
      );
    }

    const trimmed = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      description: description.trim(),
      product: product || "general",
      priority: priority || "normal",
    };

    // ── Try database first ──
    try {
      const ticketNumber = await generateTicketNumber();

      const ticket = await prisma.supportTicket.create({
        data: {
          ticketNumber,
          ...trimmed,
          status: "open",
          messages: {
            create: {
              sender: "user",
              senderName: trimmed.name,
              content: trimmed.description,
            },
          },
        },
        include: SUPPORT_TICKET_DETAIL_INCLUDE,
      });

      const normalizedTicket = serializeSupportTicket(ticket);
      const accessUrl = buildSupportTicketAccessUrl(normalizedTicket.id, normalizedTicket.email, {
        created: true,
      });

      // Always keep a file backup + notify via email (non-blocking)
      await saveSupportTicketBackup(normalizedTicket);
      void notifySupport(normalizedTicket, "database");
      void notifyUserTicketCreated(normalizedTicket);

      return NextResponse.json({ ticket: { ...normalizedTicket, accessUrl } }, { status: 201 });
    } catch (dbError: any) {
      // ── Database failed — fall back to file storage ──
      console.error("[support] DB insert failed, falling back to file:", dbError?.message || dbError);

      const fallbackId = `TKT-FB-${Date.now()}`;
      const createdAt = new Date().toISOString();

      const fallbackTicket = {
        id: fallbackId,
        ticketNumber: fallbackId,
        ...trimmed,
        status: "open",
        createdAt,
        updatedAt: createdAt,
        messages: [
          {
            id: `msg-${Date.now()}`,
            ticketId: fallbackId,
            sender: "user",
            senderName: trimmed.name,
            content: trimmed.description,
            createdAt,
            attachments: [],
          },
        ],
        source: "file-only" as const,
      };

      const normalizedFallbackTicket = serializeSupportTicket(fallbackTicket);
      const accessUrl = buildSupportTicketAccessUrl(normalizedFallbackTicket.id, normalizedFallbackTicket.email, {
        created: true,
      });

      await saveSupportTicketBackup(normalizedFallbackTicket);
      void notifySupport(normalizedFallbackTicket, "file-only");
      void notifyUserTicketCreated(normalizedFallbackTicket);

      return NextResponse.json({ ticket: { ...normalizedFallbackTicket, accessUrl } }, { status: 201 });
    }
  } catch (error: any) {
    console.error("[support/tickets POST] Unexpected error:", error?.message || error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// GET /api/support/tickets?email=xxx  — tickets for a given email (user portal)
// GET /api/support/tickets?admin=1    — all tickets (admin only, checks secret header)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email")?.trim().toLowerCase();
    const admin = searchParams.get("admin");

    if (admin === "1") {
      const secret = req.headers.get("x-admin-secret");
      if (secret !== process.env.ADMIN_SYNC_SECRET) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
      }

      let databaseTickets = [] as ReturnType<typeof serializeSupportTicket>[];
      try {
        const tickets = await prisma.supportTicket.findMany({
          orderBy: { createdAt: "desc" },
          include: SUPPORT_TICKET_DETAIL_INCLUDE,
        });
        databaseTickets = tickets.map(serializeSupportTicket);
      } catch (dbError) {
        console.error("[support/tickets GET admin] Database lookup failed:", dbError);
      }

      const backupTickets = await readSupportTicketBackups();
      return NextResponse.json({ tickets: mergeSupportTickets(databaseTickets, backupTickets) });
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    let databaseTickets = [] as ReturnType<typeof serializeSupportTicket>[];
    try {
      const tickets = await prisma.supportTicket.findMany({
        where: { email },
        orderBy: { updatedAt: "desc" },
        include: SUPPORT_TICKET_DETAIL_INCLUDE,
      });
      databaseTickets = tickets.map(serializeSupportTicket);
    } catch (dbError) {
      console.error("[support/tickets GET user] Database lookup failed:", dbError);
    }

    const backupTickets = await getSupportTicketsFromBackupByEmail(email);
    return NextResponse.json({ tickets: mergeSupportTickets(databaseTickets, backupTickets) });
  } catch (error: any) {
    console.error("[support/tickets GET] Unexpected error:", error?.message || error);
    return NextResponse.json(
      { error: "Failed to load tickets right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}

