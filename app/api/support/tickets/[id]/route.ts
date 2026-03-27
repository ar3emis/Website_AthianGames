import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/support/tickets/[id] — fetch one ticket with all messages
export async function GET(req: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  const ticket = await prisma.supportTicket.findUnique({
    where: { id },
    include: { messages: { orderBy: { createdAt: "asc" } } },
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
  }

  // Non-admin requests must provide the ticket owner's email
  const adminSecret = req.headers.get("x-admin-secret");
  const isAdmin = adminSecret === process.env.ADMIN_SYNC_SECRET;

  if (!isAdmin && ticket.email !== email?.toLowerCase()) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  return NextResponse.json({ ticket });
}

// PATCH /api/support/tickets/[id] — update status/priority (admin only)
export async function PATCH(req: NextRequest, { params }: RouteParams) {
  const secret = req.headers.get("x-admin-secret");
  if (secret !== process.env.ADMIN_SYNC_SECRET) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const { status, priority } = body;

  const ticket = await prisma.supportTicket.update({
    where: { id },
    data: {
      ...(status && { status }),
      ...(priority && { priority }),
    },
    include: { messages: { orderBy: { createdAt: "asc" } } },
  });

  return NextResponse.json({ ticket });
}

