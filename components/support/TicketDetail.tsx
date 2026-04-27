"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Paperclip, Send } from "lucide-react";
import {
  SUPPORT_ATTACHMENT_ACCEPT,
  SUPPORT_ATTACHMENT_LIMIT_TEXT,
} from "@/lib/support/attachmentConfig";
import { getResponseError, readJsonResponse } from "@/lib/support/http";
import type { SupportTicket } from "@/types/support";

const STATUS_STYLES: Record<string, string> = {
  open:        "bg-blue-500/15 text-blue-400 border-blue-500/30",
  in_progress: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  waiting:     "bg-purple-500/15 text-purple-400 border-purple-500/30",
  resolved:    "bg-green-500/15 text-green-400 border-green-500/30",
  closed:      "bg-muted text-muted-foreground border-border",
};

const STATUS_LABELS: Record<string, string> = {
  open:        "Open",
  in_progress: "In Progress",
  waiting:     "Waiting on Reply",
  resolved:    "Resolved",
  closed:      "Closed",
};

interface TicketDetailProps {
  ticket: SupportTicket;
  email?: string;
  accessToken?: string;
  backHref?: string;
  backLabel?: string;
  onUpdated: (ticket: SupportTicket) => void;
}

export function TicketDetail({
  ticket,
  email,
  accessToken,
  backHref = "/support",
  backLabel = "Back to support",
  onUpdated,
}: TicketDetailProps) {
  const [reply, setReply] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function sendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim()) return;
    setError("");
    setSending(true);
    try {
      const formData = new FormData();
      formData.append("content", reply);
      formData.append("senderName", ticket.name);

      if (email) {
        formData.append("email", email);
      }

      if (accessToken) {
        formData.append("accessToken", accessToken);
      }

      for (const file of files) {
        formData.append("attachments", file);
      }

      const res = await fetch(`/api/support/tickets/${ticket.id}/messages`, {
        method: "POST",
        body: formData,
      });
      const data = await readJsonResponse<{ error?: string; ticket?: SupportTicket }>(res);
      if (!res.ok || !data?.ticket) {
        throw new Error(getResponseError(res, data, "Failed to send reply."));
      }

      onUpdated(data.ticket);
      setReply("");
      setFiles([]);
      setFileInputKey((value) => value + 1);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>

        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-muted-foreground">{ticket.ticketNumber}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${STATUS_STYLES[ticket.status] ?? STATUS_STYLES.open}`}>
                {STATUS_LABELS[ticket.status] ?? ticket.status}
              </span>
            </div>
            <h2 className="text-lg font-semibold">{ticket.subject}</h2>
          </div>
          <span className="text-xs text-muted-foreground">
            Opened {new Date(ticket.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
          </span>
        </div>
      </div>

      {/* Thread */}
      <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
        {ticket.messages.map((msg) => {
          const isSupport = msg.sender === "support";
          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${isSupport ? "" : "flex-row-reverse"}`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                isSupport
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {isSupport ? "AG" : msg.senderName.charAt(0).toUpperCase()}
              </div>

              {/* Bubble */}
              <div className={`flex-1 max-w-[85%] ${isSupport ? "" : "flex flex-col items-end"}`}>
                <div className={`rounded-xl px-4 py-3 text-sm leading-relaxed ${
                  isSupport
                    ? "bg-primary/10 border border-primary/20 text-foreground"
                    : "bg-muted border border-border text-foreground"
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  {msg.attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.attachments.map((attachment) => (
                        <a
                          key={attachment.id}
                          href={attachment.fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-border/70 bg-background/80 px-3 py-2 text-xs hover:border-primary/50 hover:text-primary transition-colors"
                        >
                          <Paperclip className="w-3.5 h-3.5" />
                          <span className="truncate">{attachment.fileName}</span>
                          <span className="ml-auto text-[11px] text-muted-foreground">
                            {(attachment.fileSize / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-1">
                  <strong>{isSupport ? "Athian Games Support" : msg.senderName}</strong>
                  {" · "}
                  {new Date(msg.createdAt).toLocaleString("en-GB", {
                    day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reply box */}
      <form onSubmit={sendReply} className="border-t border-border pt-5 space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <label className="block text-sm font-medium">Add a follow-up</label>
          {(ticket.status === "resolved" || ticket.status === "closed") && (
            <span className="text-xs text-muted-foreground">
              Sending a new message will reopen this ticket.
            </span>
          )}
        </div>
        <textarea
          rows={4}
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Describe any additional details, updates, or questions…"
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
        />
        <div className="space-y-2">
          <input
            key={fileInputKey}
            type="file"
            multiple
            accept={SUPPORT_ATTACHMENT_ACCEPT}
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
            className="block w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/15"
          />
          <p className="text-xs text-muted-foreground">{SUPPORT_ATTACHMENT_LIMIT_TEXT}</p>
          {files.length > 0 && (
            <ul className="space-y-1 text-xs text-muted-foreground">
              {files.map((file) => (
                <li key={`${file.name}-${file.size}`} className="truncate">
                  {file.name} · {(file.size / 1024 / 1024).toFixed(2)} MB
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={sending || !reply.trim()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {sending ? "Sending…" : "Send Reply"}
        </button>
      </form>
    </div>
  );
}

