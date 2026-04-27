export interface SupportTicketAttachment {
  id: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
  createdAt: string;
}

export interface SupportTicketMessage {
  id: string;
  ticketId?: string;
  sender: string;
  senderName: string;
  content: string;
  createdAt: string;
  attachments: SupportTicketAttachment[];
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  name: string;
  email: string;
  subject: string;
  description: string;
  product: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  messages: SupportTicketMessage[];
  source?: "database" | "file-only" | "backup";
}

