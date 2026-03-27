import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// POST /api/support/tickets/[id]/messages — add follow-up message
export async function POST(req: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await req.json();
  const { content, senderName, email } = body;

  if (!content || !senderName) {
    return NextResponse.json({ error: "Content and sender name are required." }, { status: 400 });
  }

  // Verify ownership or admin
  const ticket = await prisma.supportTicket.findUnique({ where: { id } });
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
  }

  const adminSecret = req.headers.get("x-admin-secret");
  const isAdminRequest = adminSecret === process.env.ADMIN_SYNC_SECRET;

  if (!isAdminRequest && ticket.email !== email?.toLowerCase()) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const sender = isAdminRequest ? "support" : "user";

  // If user replies to a resolved/closed ticket, re-open it
  const shouldReopen =
    sender === "user" && (ticket.status === "resolved" || ticket.status === "closed");

  const [message] = await prisma.$transaction([
    prisma.ticketMessage.create({
      data: {
        ticketId: id,
        sender,
        senderName: senderName.trim(),
        content: content.trim(),
      },
    }),
    prisma.supportTicket.update({
      where: { id },
      data: {
        updatedAt: new Date(),
        ...(shouldReopen && { status: "open" }),
        ...(!isAdminRequest && !shouldReopen && { status: "waiting" }),
        ...(isAdminRequest && { status: "waiting" }),
      },
    }),
  ]);

  return NextResponse.json({ message }, { status: 201 });
}

