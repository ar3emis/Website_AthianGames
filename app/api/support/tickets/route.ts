import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Generate next ticket number like TKT-0001 (uses count for reliability)
async function generateTicketNumber(): Promise<string> {
  const count = await prisma.supportTicket.count();
  return `TKT-${String(count + 1).padStart(4, "0")}`;
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

    // Retry up to 3 times in case of unique constraint collision on ticketNumber
    let ticket = null;
    let lastError: unknown = null;

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const ticketNumber = await generateTicketNumber();

        ticket = await prisma.supportTicket.create({
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
        break; // success
      } catch (err: any) {
        lastError = err;
        // P2002 = unique constraint violation — retry with a new ticket number
        if (err?.code === "P2002") {
          continue;
        }
        throw err; // non-retryable error
      }
    }

    if (!ticket) {
      console.error("[support/tickets POST] All retries failed:", lastError);
      return NextResponse.json(
        { error: "Failed to create ticket. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ticket }, { status: 201 });
  } catch (error) {
    console.error("[support/tickets POST]", error);
    return NextResponse.json(
      { error: "Failed to create ticket. Please try again." },
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

