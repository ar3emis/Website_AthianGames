import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyUserAdminReply } from "@/lib/email/supportEmail";
import { saveSupportAttachments } from "@/lib/support/attachmentStorage";
import { verifySupportTicketAccessToken } from "@/lib/support/ticketAccess";
import {
  appendBackupTicketMessage,
  getSupportTicketFromBackup,
  serializeSupportTicket,
  SUPPORT_TICKET_DETAIL_INCLUDE,
  syncSupportTicketBackup,
} from "@/lib/support/ticketBackup";
import type { SupportTicketAttachment } from "@/types/support";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// POST /api/support/tickets/[id]/messages — add follow-up message
export async function POST(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const contentType = req.headers.get("content-type") || "";

    let content = "";
    let senderName = "";
    let email = "";
    let accessToken = "";
    let attachmentFiles: File[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      content = String(formData.get("content") || "");
      senderName = String(formData.get("senderName") || "");
      email = String(formData.get("email") || "");
      accessToken = String(formData.get("accessToken") || "");
      attachmentFiles = formData
        .getAll("attachments")
        .filter((value): value is File => value instanceof File && value.size > 0);
    } else {
      const body = await req.json();
      content = String(body.content || "");
      senderName = String(body.senderName || "");
      email = String(body.email || "");
      accessToken = String(body.accessToken || "");
    }

    if (!content.trim() || !senderName.trim()) {
      return NextResponse.json({ error: "Content and sender name are required." }, { status: 400 });
    }

    const adminSecret = req.headers.get("x-admin-secret");
    const isAdminRequest = adminSecret === process.env.ADMIN_SYNC_SECRET;
    const tokenPayload = verifySupportTicketAccessToken(accessToken);
    const normalizedEmail = email.trim().toLowerCase();

    let ticket = null;
    try {
      ticket = await prisma.supportTicket.findUnique({ where: { id } });
    } catch (dbError) {
      console.error("[support/tickets/:id/messages POST] Database lookup failed:", dbError);
    }

    if (ticket) {
      const tokenAuthorized =
        Boolean(tokenPayload) && tokenPayload?.id === ticket.id && tokenPayload.email === ticket.email;

      if (!isAdminRequest && !tokenAuthorized && ticket.email !== normalizedEmail) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
      }

      const sender = isAdminRequest ? "support" : "user";
      const nextStatus = sender === "support" ? "waiting" : "open";
      const savedAttachments = await saveSupportAttachments(attachmentFiles);

      const result = await prisma.$transaction(async (tx) => {
        const createdMessage = await tx.ticketMessage.create({
          data: {
            ticketId: id,
            sender,
            senderName: senderName.trim(),
            content: content.trim(),
          },
        });

        if (savedAttachments.length > 0) {
          await tx.ticketAttachment.createMany({
            data: savedAttachments.map((attachment) => ({
              ticketId: id,
              messageId: createdMessage.id,
              fileName: attachment.fileName,
              fileUrl: attachment.fileUrl,
              fileSize: attachment.fileSize,
              mimeType: attachment.mimeType,
            })),
          });
        }

        await tx.supportTicket.update({
          where: { id },
          data: {
            updatedAt: new Date(),
            status: nextStatus,
          },
        });

        return tx.supportTicket.findUniqueOrThrow({
          where: { id },
          include: SUPPORT_TICKET_DETAIL_INCLUDE,
        });
      });

      const normalizedTicket = serializeSupportTicket(result);
      await syncSupportTicketBackup(id);

      if (isAdminRequest) {
        void notifyUserAdminReply(normalizedTicket, content.trim());
      }

      const createdMessage = normalizedTicket.messages[normalizedTicket.messages.length - 1];
      return NextResponse.json({ message: createdMessage, ticket: normalizedTicket }, { status: 201 });
    }

    const backupTicket = await getSupportTicketFromBackup(id, tokenPayload?.email || normalizedEmail || undefined);
    if (!backupTicket) {
      return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
    }

    const tokenAuthorized =
      Boolean(tokenPayload) && tokenPayload?.id === backupTicket.id && tokenPayload.email === backupTicket.email;

    if (!isAdminRequest && !tokenAuthorized && backupTicket.email !== normalizedEmail) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const sender = isAdminRequest ? "support" : "user";
    const savedAttachments = await saveSupportAttachments(attachmentFiles);
    const backupAttachments: SupportTicketAttachment[] = savedAttachments.map((attachment, index) => ({
      id: `${Date.now()}-${index}`,
      fileName: attachment.fileName,
      fileUrl: attachment.fileUrl,
      fileSize: attachment.fileSize,
      mimeType: attachment.mimeType,
      createdAt: new Date().toISOString(),
    }));

    const updatedBackupTicket = await appendBackupTicketMessage({
      ticketId: id,
      sender,
      senderName,
      content,
      attachments: backupAttachments,
    });

    if (!updatedBackupTicket) {
      return NextResponse.json({ error: "Failed to update this ticket." }, { status: 500 });
    }

    if (isAdminRequest) {
      void notifyUserAdminReply(updatedBackupTicket, content.trim());
    }

    const createdMessage = updatedBackupTicket.messages[updatedBackupTicket.messages.length - 1];
    return NextResponse.json({ message: createdMessage, ticket: updatedBackupTicket }, { status: 201 });
  } catch (error: any) {
    console.error("[support/tickets/:id/messages POST] Unexpected error:", error?.message || error);
    return NextResponse.json({ error: error?.message || "Failed to send reply." }, { status: 500 });
  }
}

