import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const SUPPORT_EMAIL = process.env.CONTACT_EMAIL || "sameek.kundu@athiangames.com";
const BACKUP_DIR = path.join(process.cwd(), "data", "support-tickets");

// ── helpers ──────────────────────────────────────────────────────────

/** Next sequential ticket number based on the highest existing one. */
async function generateTicketNumber(): Promise<string> {
  const latest = await prisma.supportTicket.findFirst({
    orderBy: { ticketNumber: "desc" },
    select: { ticketNumber: true },
  });

  let nextNum = 1;
  if (latest?.ticketNumber) {
    const match = latest.ticketNumber.match(/TKT-(\d+)/);
    if (match) nextNum = parseInt(match[1], 10) + 1;
  }
  return `TKT-${String(nextNum).padStart(4, "0")}`;
}

/** Save ticket JSON to data/support-tickets/ as a fallback. */
function saveTicketToFile(ticket: Record<string, unknown>) {
  try {
    if (!fs.existsSync(BACKUP_DIR)) {
      fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }
    const filename = `${ticket.ticketNumber || "UNKNOWN"}_${Date.now()}.json`;
    fs.writeFileSync(
      path.join(BACKUP_DIR, filename),
      JSON.stringify(ticket, null, 2),
      "utf-8"
    );
    console.log(`[support] Ticket backed up to ${filename}`);
  } catch (err) {
    console.error("[support] File backup also failed:", err);
  }
}

/** Send email notification about a new support ticket. */
async function notifySupport(ticket: Record<string, unknown>, source: "database" | "file-only") {
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
      subject: `[${(ticket.priority as string || "normal").toUpperCase()}] New Ticket ${ticket.ticketNumber}: ${ticket.subject}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:auto;padding:24px;background:#111;color:#eee;border-radius:12px;">
          ${badge}
          <h2 style="margin:0 0 16px;">🎫 ${ticket.ticketNumber} — ${ticket.subject}</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:6px 12px;color:#999;">From</td>    <td style="padding:6px 12px;">${ticket.name} &lt;${ticket.email}&gt;</td></tr>
            <tr><td style="padding:6px 12px;color:#999;">Product</td> <td style="padding:6px 12px;">${ticket.product}</td></tr>
            <tr><td style="padding:6px 12px;color:#999;">Priority</td><td style="padding:6px 12px;">${ticket.priority}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#1a1a1a;border-radius:8px;white-space:pre-wrap;">${ticket.description}</div>
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
        include: { messages: true },
      });

      // Always keep a file backup + notify via email (non-blocking)
      saveTicketToFile({ ...ticket, source: "database" });
      notifySupport({ ...ticket }, "database");

      return NextResponse.json({ ticket }, { status: 201 });
    } catch (dbError: any) {
      // ── Database failed — fall back to file storage ──
      console.error("[support] DB insert failed, falling back to file:", dbError?.message || dbError);

      const fallbackTicket = {
        ticketNumber: `TKT-FB-${Date.now()}`,
        ...trimmed,
        status: "open",
        createdAt: new Date().toISOString(),
      };

      saveTicketToFile({ ...fallbackTicket, source: "file-fallback", dbError: dbError?.message });
      notifySupport(fallbackTicket, "file-only");

      return NextResponse.json(
        {
          ticket: {
            id: fallbackTicket.ticketNumber,
            ticketNumber: fallbackTicket.ticketNumber,
            ...trimmed,
            status: "open",
            createdAt: fallbackTicket.createdAt,
            messages: [],
          },
        },
        { status: 201 }
      );
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
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  const admin = searchParams.get("admin");

  if (admin === "1") {
    const secret = req.headers.get("x-admin-secret");
    if (secret !== process.env.ADMIN_SYNC_SECRET) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const tickets = await prisma.supportTicket.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        messages: { orderBy: { createdAt: "asc" } },
        _count: { select: { messages: true } },
      },
    });
    return NextResponse.json({ tickets });
  }

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const tickets = await prisma.supportTicket.findMany({
    where: { email: email.toLowerCase() },
    orderBy: { updatedAt: "desc" },
    include: {
      messages: { orderBy: { createdAt: "asc" } },
    },
  });

  return NextResponse.json({ tickets });
}

