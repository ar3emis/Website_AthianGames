"use client";

import { useState, useCallback } from "react";
import { Send, RefreshCw, ChevronDown } from "lucide-react";

const STATUS_OPTIONS = ["open", "in_progress", "waiting", "resolved", "closed"];

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
  waiting:     "Waiting",
  resolved:    "Resolved",
  closed:      "Closed",
};

const PRIORITY_STYLES: Record<string, string> = {
  low:    "text-slate-400",
  normal: "text-sky-400",
  high:   "text-orange-400",
  urgent: "text-red-400 font-semibold",
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
  name: string;
  email: string;
  subject: string;
  product: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  messages: Message[];
}

export default function AdminSupportClient() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Ticket | null>(null);
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  const fetchTickets = useCallback(async (adminSecret: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/support/tickets?admin=1", {
        headers: { "x-admin-secret": adminSecret },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setTickets(data.tickets);
    } catch {
      setTickets([]);
    } finally {
      setLoading(false);
    }
  }, []);

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    const res = await fetch("/api/support/tickets?admin=1", {
      headers: { "x-admin-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setTickets(data.tickets);
      setAuthed(true);
    } else {
      setAuthError("Invalid admin secret.");
    }
    setLoading(false);
  }

  async function updateStatus(ticketId: string, status: string) {
    await fetch(`/api/support/tickets/${ticketId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ status }),
    });
    fetchTickets(secret);
    if (selected?.id === ticketId) setSelected((t) => t ? { ...t, status } : t);
  }

  async function sendReply(e: React.FormEvent) {
    e.preventDefault();
    if (!selected || !reply.trim()) return;
    setSending(true);
    await fetch(`/api/support/tickets/${selected.id}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ content: reply, senderName: "Athian Games Support" }),
    });
    setReply("");
    setSending(false);
    // Refresh
    const res = await fetch(`/api/support/tickets/${selected.id}?email=admin`, {
      headers: { "x-admin-secret": secret },
    });
    const data = await res.json();
    if (res.ok) {
      setSelected(data.ticket);
      setTickets((prev) => prev.map((t) => t.id === data.ticket.id ? data.ticket : t));
    }
  }

  const filtered = filter === "all" ? tickets : tickets.filter((t) => t.status === filter);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleAuth} className="w-full max-w-sm space-y-4 p-8 rounded-2xl border border-border bg-card">
          <h1 className="text-xl font-bold">Admin — Support Tickets</h1>
          <p className="text-sm text-muted-foreground">Enter your admin secret to continue.</p>
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Admin secret"
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          {authError && <p className="text-red-500 text-sm">{authError}</p>}
          <button type="submit" className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-6 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Support Tickets</h1>
            <p className="text-sm text-muted-foreground">{tickets.length} total tickets</p>
          </div>
          <button
            onClick={() => fetchTickets(secret)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Status filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["all", ...STATUS_OPTIONS].map((s) => {
            const count = s === "all" ? tickets.length : tickets.filter((t) => t.status === s).length;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                  filter === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {STATUS_LABELS[s] ?? "All"} <span className="opacity-60 ml-1">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Ticket list */}
          <div className="lg:col-span-2 space-y-2">
            {loading && <p className="text-sm text-muted-foreground py-6 text-center">Loading…</p>}
            {!loading && filtered.length === 0 && (
              <p className="text-sm text-muted-foreground py-6 text-center">No tickets.</p>
            )}
            {filtered.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => setSelected(ticket)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selected?.id === ticket.id
                    ? "border-primary/60 bg-primary/10"
                    : "border-border/60 hover:border-primary/40 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-xs text-muted-foreground">{ticket.ticketNumber}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${STATUS_STYLES[ticket.status]}`}>
                    {STATUS_LABELS[ticket.status]}
                  </span>
                </div>
                <p className="text-sm font-medium truncate">{ticket.subject}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">{ticket.name}</span>
                  <span className={`text-xs ${PRIORITY_STYLES[ticket.priority]}`}>{ticket.priority}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            {!selected ? (
              <div className="rounded-2xl border border-border/40 h-64 flex items-center justify-center text-muted-foreground text-sm">
                Select a ticket to view details
              </div>
            ) : (
              <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
                {/* Ticket header */}
                <div className="p-5 border-b border-border bg-muted/30">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                    <div>
                      <p className="font-mono text-xs text-muted-foreground mb-1">{selected.ticketNumber}</p>
                      <h3 className="font-semibold">{selected.subject}</h3>
                    </div>
                    {/* Status selector */}
                    <div className="relative">
                      <select
                        value={selected.status}
                        onChange={(e) => updateStatus(selected.id, e.target.value)}
                        className={`appearance-none pr-7 pl-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer focus:outline-none ${STATUS_STYLES[selected.status]}`}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                    <span><strong className="text-foreground">From:</strong> {selected.name} ({selected.email})</span>
                    <span><strong className="text-foreground">Product:</strong> {selected.product}</span>
                    <span><strong className="text-foreground">Priority:</strong> <span className={PRIORITY_STYLES[selected.priority]}>{selected.priority}</span></span>
                    <span><strong className="text-foreground">Opened:</strong> {new Date(selected.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-4 max-h-[400px] overflow-y-auto">
                  {selected.messages.map((msg) => {
                    const isSupport = msg.sender === "support";
                    return (
                      <div key={msg.id} className={`flex gap-3 ${isSupport ? "flex-row-reverse" : ""}`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSupport ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          {isSupport ? "AG" : msg.senderName.charAt(0).toUpperCase()}
                        </div>
                        <div className={`flex-1 max-w-[85%] ${isSupport ? "flex flex-col items-end" : ""}`}>
                          <div className={`rounded-xl px-3 py-2.5 text-sm leading-relaxed ${
                            isSupport ? "bg-primary/10 border border-primary/20" : "bg-muted border border-border"
                          }`}>
                            <p className="whitespace-pre-wrap">{msg.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 px-1">
                            {isSupport ? "You (Support)" : msg.senderName}
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

                {/* Reply */}
                <form onSubmit={sendReply} className="p-5 border-t border-border flex gap-3">
                  <textarea
                    rows={2}
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Type your reply…"
                    className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={sending || !reply.trim()}
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 disabled:opacity-50 self-end"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
