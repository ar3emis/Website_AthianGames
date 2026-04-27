import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyUserStatusChange } from "@/lib/email/supportEmail";
import { verifySupportTicketAccessToken } from "@/lib/support/ticketAccess";
import {
  getSupportTicketFromBackup,
  serializeSupportTicket,
  SUPPORT_TICKET_DETAIL_INCLUDE,
  syncSupportTicketBackup,
  updateBackupTicketStatus,
} from "@/lib/support/ticketBackup";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/support/tickets/[id] — fetch one ticket with all messages
export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email")?.toLowerCase() || null;
    const token = searchParams.get("token");
    const tokenPayload = verifySupportTicketAccessToken(token);

    const adminSecret = req.headers.get("x-admin-secret");
    const isAdmin = adminSecret === process.env.ADMIN_SYNC_SECRET;

    let ticket = null;
    try {
      ticket = await prisma.supportTicket.findUnique({
        where: { id },
        include: SUPPORT_TICKET_DETAIL_INCLUDE,
      });
    } catch (dbError) {
      console.error("[support/tickets/:id GET] Database lookup failed:", dbError);
    }

    if (ticket) {
      const tokenAuthorized =
        Boolean(tokenPayload) && tokenPayload?.id === ticket.id && tokenPayload.email === ticket.email;

      if (!isAdmin && !tokenAuthorized && ticket.email !== email) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
      }

      return NextResponse.json({ ticket: serializeSupportTicket(ticket) });
    }

    const backupTicket = await getSupportTicketFromBackup(id, tokenPayload?.email || email);
    if (!backupTicket) {
      return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
    }

    const tokenAuthorized =
      Boolean(tokenPayload) && tokenPayload?.id === backupTicket.id && tokenPayload.email === backupTicket.email;

    if (!isAdmin && !tokenAuthorized && backupTicket.email !== email) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    return NextResponse.json({ ticket: backupTicket });
  } catch (error: any) {
    console.error("[support/tickets/:id GET] Unexpected error:", error?.message || error);
    return NextResponse.json({ error: "Failed to load this ticket." }, { status: 500 });
  }
}

// PATCH /api/support/tickets/[id] — update status/priority (admin only)
export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const secret = req.headers.get("x-admin-secret");
    if (secret !== process.env.ADMIN_SYNC_SECRET) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const { status, priority } = body;

    let ticket = null;
    try {
      ticket = await prisma.supportTicket.update({
        where: { id },
        data: {
          ...(status && { status }),
          ...(priority && { priority }),
        },
        include: SUPPORT_TICKET_DETAIL_INCLUDE,
      });
    } catch (dbError) {
      console.error("[support/tickets/:id PATCH] Database update failed:", dbError);
    }

    if (ticket) {
      const normalizedTicket = serializeSupportTicket(ticket);
      await syncSupportTicketBackup(id);

      if (status === "resolved" || status === "closed") {
        void notifyUserStatusChange(normalizedTicket);
      }

      return NextResponse.json({ ticket: normalizedTicket });
    }

    const backupTicket = status ? await updateBackupTicketStatus(id, status) : await getSupportTicketFromBackup(id);
    if (!backupTicket) {
      return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
    }

    if (status === "resolved" || status === "closed") {
      void notifyUserStatusChange(backupTicket);
    }

    return NextResponse.json({ ticket: backupTicket });
  } catch (error: any) {
    console.error("[support/tickets/:id PATCH] Unexpected error:", error?.message || error);
    return NextResponse.json({ error: "Failed to update this ticket." }, { status: 500 });
  }
}

