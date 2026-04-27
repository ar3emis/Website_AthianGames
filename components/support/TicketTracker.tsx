"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

const PRIORITY_STYLES: Record<string, string> = {
  low:    "bg-slate-500/15 text-slate-400",
  normal: "bg-sky-500/15 text-sky-400",
  high:   "bg-orange-500/15 text-orange-400",
  urgent: "bg-red-500/15 text-red-400",
};

export function TicketTracker() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchTickets(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setLoaded(false);
    try {
      const res = await fetch(`/api/support/tickets?email=${encodeURIComponent(email)}`);
      const data = await readJsonResponse<{ error?: string; tickets?: SupportTicket[] }>(res);
      if (!res.ok) {
        throw new Error(getResponseError(res, data, "Failed to load tickets."));
      }

      setTickets(data?.tickets || []);
      setLoaded(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Lookup form */}
      <form onSubmit={fetchTickets} className="flex gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to find tickets"
          className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Loading…" : "Find Tickets"}
        </button>
      </form>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      {loaded && tickets.length === 0 && (
        <div className="text-center py-10 text-muted-foreground text-sm">
          No tickets found for <strong>{email}</strong>.
        </div>
      )}

      {loaded && tickets.length > 0 && (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() =>
                router.push(
                  `/support/tickets/${ticket.id}?email=${encodeURIComponent(email.trim().toLowerCase())}`
                )
              }
              className="w-full text-left p-4 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs text-muted-foreground">{ticket.ticketNumber}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${STATUS_STYLES[ticket.status] ?? STATUS_STYLES.open}`}>
                    {STATUS_LABELS[ticket.status] ?? ticket.status}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${PRIORITY_STYLES[ticket.priority] ?? PRIORITY_STYLES.normal}`}>
                    {ticket.priority}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {new Date(ticket.updatedAt).toLocaleDateString()}
                </span>
              </div>
              <p className="font-medium text-sm group-hover:text-primary transition-colors">{ticket.subject}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {ticket.messages.length} message{ticket.messages.length !== 1 ? "s" : ""}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}



