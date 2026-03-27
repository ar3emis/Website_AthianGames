"use client";

import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

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

interface Message {
  id: string;
  sender: string;
  senderName: string;
  content: string;
  createdAt: string;
}

interface Ticket {
  id: string;
  ticketNumber: string;
  subject: string;
  product: string;
  priority: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  messages: Message[];
}

interface TicketDetailProps {
  ticket: Ticket;
  email: string;
  onBack: () => void;
  onUpdated: (ticket: Ticket) => void;
}

export function TicketDetail({ ticket, email, onBack, onUpdated }: TicketDetailProps) {
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function sendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!reply.trim()) return;
    setError("");
    setSending(true);
    try {
      const res = await fetch(`/api/support/tickets/${ticket.id}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: reply,
          senderName: ticket.name,
          email,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send reply.");

      // Refresh ticket
      const ticketRes = await fetch(
        `/api/support/tickets/${ticket.id}?email=${encodeURIComponent(email)}`
      );
      const ticketData = await ticketRes.json();
      if (ticketRes.ok) onUpdated(ticketData.ticket);
      setReply("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  }

  const isClosed = ticket.status === "closed";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all tickets
        </button>

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
      {!isClosed ? (
        <form onSubmit={sendReply} className="border-t border-border pt-5 space-y-3">
          <label className="block text-sm font-medium">Add a follow-up</label>
          <textarea
            rows={4}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Describe any additional details, updates, or questions…"
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
          />
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
      ) : (
        <div className="border-t border-border pt-5 text-sm text-muted-foreground">
          This ticket is closed. <button onClick={() => setReply(" ")} className="text-primary hover:underline">Re-open with a new message</button>
        </div>
      )}
    </div>
  );
}

