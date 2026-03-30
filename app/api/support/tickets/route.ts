import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Generate next ticket number like TKT-0001
async function generateTicketNumber(): Promise<string> {
  const latest = await prisma.supportTicket.findFirst({
    orderBy: { ticketNumber: "desc" },
    select: { ticketNumber: true },
  });

  if (!latest) return "TKT-0001";

  const num = parseInt(latest.ticketNumber.replace("TKT-", ""), 10);
  return `TKT-${String((isNaN(num) ? 0 : num) + 1).padStart(4, "0")}`;
}

// POST /api/support/tickets — create a new ticket
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

    const ticketNumber = await generateTicketNumber();

    const ticket = await prisma.supportTicket.create({
      data: {
        ticketNumber,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        description: description.trim(),
        product: product || "general",
        priority: priority || "normal",
        status: "open",
        messages: {
          create: {
            sender: "user",
            senderName: name.trim(),
            content: description.trim(),
          },
        },
      },
      include: { messages: true },
    });

    return NextResponse.json({ ticket }, { status: 201 });
  } catch (error) {
    console.error("[support/tickets POST]", error);
    const message =
      error instanceof Error
        ? error.message
        : "Failed to create ticket. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
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

