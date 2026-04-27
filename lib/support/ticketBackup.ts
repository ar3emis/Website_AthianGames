import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import type { SupportTicket, SupportTicketAttachment } from "@/types/support";

const BACKUP_DIR = path.join(process.cwd(), "data", "support-tickets");

export const SUPPORT_TICKET_DETAIL_INCLUDE = {
  messages: {
    orderBy: { createdAt: "asc" as const },
    include: {
      attachments: {
        orderBy: { createdAt: "asc" as const },
      },
    },
  },
};

export type SupportTicketRecord = Prisma.SupportTicketGetPayload<{
  include: typeof SUPPORT_TICKET_DETAIL_INCLUDE;
}>;

function toIsoString(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === "string") {
    return value;
  }

  return new Date(value as string | number | Date).toISOString();
}

function normalizeAttachment(raw: any): SupportTicketAttachment | null {
  if (!raw?.fileName || !raw?.fileUrl) {
    return null;
  }

  return {
    id: String(raw.id || randomUUID()),
    fileName: String(raw.fileName),
    fileUrl: String(raw.fileUrl),
    fileSize: Number(raw.fileSize || 0),
    mimeType: String(raw.mimeType || "application/octet-stream"),
    createdAt: toIsoString(raw.createdAt || new Date().toISOString()),
  };
}

export function serializeSupportTicket(ticket: any): SupportTicket {
  return {
    id: String(ticket.id),
    ticketNumber: String(ticket.ticketNumber),
    name: String(ticket.name),
    email: String(ticket.email).toLowerCase(),
    subject: String(ticket.subject),
    description: String(ticket.description || ""),
    product: String(ticket.product || "general"),
    priority: String(ticket.priority || "normal"),
    status: String(ticket.status || "open"),
    createdAt: toIsoString(ticket.createdAt || new Date().toISOString()),
    updatedAt: toIsoString(ticket.updatedAt || ticket.createdAt || new Date().toISOString()),
    source: ticket.source === "file-only" ? "file-only" : ticket.source === "backup" ? "backup" : "database",
    messages: Array.isArray(ticket.messages)
      ? ticket.messages.map((message: any) => ({
          id: String(message.id || randomUUID()),
          ticketId: message.ticketId ? String(message.ticketId) : String(ticket.id),
          sender: String(message.sender || "user"),
          senderName: String(message.senderName || ticket.name || "User"),
          content: String(message.content || ""),
          createdAt: toIsoString(message.createdAt || ticket.createdAt || new Date().toISOString()),
          attachments: Array.isArray(message.attachments)
            ? message.attachments
                .map(normalizeAttachment)
                .filter(
                  (attachment: SupportTicketAttachment | null): attachment is SupportTicketAttachment =>
                    Boolean(attachment)
                )
            : [],
        }))
      : [],
  };
}

async function ensureBackupDir() {
  await fs.mkdir(BACKUP_DIR, { recursive: true });
}

function getBackupFilePath(ticketNumber: string) {
  const safeName = ticketNumber.replace(/[^a-zA-Z0-9-_]/g, "_");
  return path.join(BACKUP_DIR, `${safeName}.json`);
}

export async function saveSupportTicketBackup(ticket: SupportTicket) {
  await ensureBackupDir();
  await fs.writeFile(getBackupFilePath(ticket.ticketNumber), JSON.stringify(ticket, null, 2), "utf-8");
}

export async function syncSupportTicketBackup(ticketId: string) {
  const ticket = await prisma.supportTicket.findUnique({
    where: { id: ticketId },
    include: SUPPORT_TICKET_DETAIL_INCLUDE,
  });

  if (!ticket) {
    return null;
  }

  const normalized = serializeSupportTicket(ticket);
  await saveSupportTicketBackup(normalized);
  return normalized;
}

function getTicketKey(ticket: SupportTicket) {
  return `${ticket.id}::${ticket.ticketNumber}`;
}

function pickNewest(current: SupportTicket, candidate: SupportTicket) {
  return new Date(candidate.updatedAt).getTime() > new Date(current.updatedAt).getTime() ? candidate : current;
}

export async function readSupportTicketBackups() {
  try {
    const files = await fs.readdir(BACKUP_DIR);
    const tickets = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => {
          try {
            const raw = await fs.readFile(path.join(BACKUP_DIR, file), "utf-8");
            const parsed = JSON.parse(raw);
            return serializeSupportTicket({ ...parsed, source: parsed.source === "file-only" ? "file-only" : "backup" });
          } catch {
            return null;
          }
        })
    );

    const deduped = new Map<string, SupportTicket>();
    for (const ticket of tickets) {
      if (!ticket) {
        continue;
      }

      const key = getTicketKey(ticket);
      const existing = deduped.get(key);
      deduped.set(key, existing ? pickNewest(existing, ticket) : ticket);
    }

    return [...deduped.values()].sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  } catch {
    return [];
  }
}

export async function getSupportTicketsFromBackupByEmail(email: string) {
  const normalizedEmail = email.toLowerCase();
  const tickets = await readSupportTicketBackups();
  return tickets.filter((ticket) => ticket.email === normalizedEmail);
}

export async function getSupportTicketFromBackup(idOrTicketNumber: string, email?: string | null) {
  const tickets = await readSupportTicketBackups();
  const normalizedEmail = email?.toLowerCase();

  return (
    tickets.find((ticket) => {
      const matchesTicket = ticket.id === idOrTicketNumber || ticket.ticketNumber === idOrTicketNumber;
      if (!matchesTicket) {
        return false;
      }

      return normalizedEmail ? ticket.email === normalizedEmail : true;
    }) || null
  );
}

export function mergeSupportTickets(primary: SupportTicket[], secondary: SupportTicket[]) {
  const merged = new Map<string, SupportTicket>();

  for (const ticket of [...primary, ...secondary]) {
    const key = getTicketKey(ticket);
    const existing = merged.get(key);
    merged.set(key, existing ? pickNewest(existing, ticket) : ticket);
  }

  return [...merged.values()].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export async function appendBackupTicketMessage(input: {
  ticketId: string;
  sender: "user" | "support";
  senderName: string;
  content: string;
  attachments?: SupportTicketAttachment[];
}) {
  const ticket = await getSupportTicketFromBackup(input.ticketId);
  if (!ticket) {
    return null;
  }

  ticket.messages.push({
    id: randomUUID(),
    ticketId: ticket.id,
    sender: input.sender,
    senderName: input.senderName.trim(),
    content: input.content.trim(),
    createdAt: new Date().toISOString(),
    attachments: input.attachments || [],
  });

  ticket.updatedAt = new Date().toISOString();
  ticket.status = input.sender === "support" ? "waiting" : "open";
  ticket.source = ticket.source === "file-only" ? "file-only" : "backup";

  await saveSupportTicketBackup(ticket);
  return ticket;
}

export async function updateBackupTicketStatus(ticketId: string, status: string) {
  const ticket = await getSupportTicketFromBackup(ticketId);
  if (!ticket) {
    return null;
  }

  ticket.status = status;
  ticket.updatedAt = new Date().toISOString();
  ticket.source = ticket.source === "file-only" ? "file-only" : "backup";
  await saveSupportTicketBackup(ticket);
  return ticket;
}



