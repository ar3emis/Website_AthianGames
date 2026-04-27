"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, Mail, RefreshCw } from "lucide-react";
import { TicketDetail } from "@/components/support/TicketDetail";
import { getResponseError, readJsonResponse } from "@/lib/support/http";
import type { SupportTicket } from "@/types/support";

interface SupportTicketPageClientProps {
  ticketId: string;
  initialEmail?: string;
  initialToken?: string;
  justCreated?: boolean;
}

export function SupportTicketPageClient({
  ticketId,
  initialEmail = "",
  initialToken = "",
  justCreated = false,
}: SupportTicketPageClientProps) {
  const router = useRouter();
  const [ticket, setTicket] = useState<SupportTicket | null>(null);
  const [emailInput, setEmailInput] = useState(initialEmail);
  const [emailAccess, setEmailAccess] = useState(initialEmail);
  const [loading, setLoading] = useState(Boolean(initialToken || initialEmail));
  const [error, setError] = useState("");

  const hasAccessMethod = useMemo(() => Boolean(initialToken || emailAccess), [initialToken, emailAccess]);

  async function fetchTicket(emailOverride?: string) {
    const emailToUse = (emailOverride || emailAccess || "").trim().toLowerCase();
    if (!initialToken && !emailToUse) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();
      if (initialToken) {
        params.set("token", initialToken);
      } else {
        params.set("email", emailToUse);
      }

      const response = await fetch(`/api/support/tickets/${ticketId}?${params.toString()}`, {
        cache: "no-store",
      });
      const data = await readJsonResponse<{ error?: string; ticket?: SupportTicket }>(response);

      if (!response.ok || !data?.ticket) {
        throw new Error(getResponseError(response, data, "Failed to load this ticket."));
      }

      setTicket(data.ticket);
      if (emailToUse) {
        setEmailAccess(emailToUse);
      }
    } catch (err: any) {
      setTicket(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (initialToken || initialEmail) {
      void fetchTicket(initialEmail);
    }
  }, [ticketId, initialToken, initialEmail]);

  function handleEmailAccess(e: React.FormEvent) {
    e.preventDefault();
    const normalizedEmail = emailInput.trim().toLowerCase();
    if (!normalizedEmail) {
      setError("Please enter the email used when creating the ticket.");
      return;
    }

    setEmailAccess(normalizedEmail);
    router.replace(`/support/tickets/${ticketId}?email=${encodeURIComponent(normalizedEmail)}`);
    void fetchTicket(normalizedEmail);
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-4xl space-y-6">
        {justCreated && (
          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-5 text-sm text-green-100">
            <p className="font-semibold text-base text-green-50">Your support ticket has been created.</p>
            <p className="mt-1 text-green-100/90">
              This is your dedicated ticket page. We also sent you an email with a direct “Track My Ticket” button so you can come back here anytime.
            </p>
          </div>
        )}

        {!hasAccessMethod && !ticket && (
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-transparent p-7">
            <h1 className="text-2xl font-bold mb-2">Open Ticket</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Enter the email address used when you created this ticket.
            </p>
            <form onSubmit={handleEmailAccess} className="space-y-4">
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                View Ticket
              </button>
            </form>
          </div>
        )}

        {loading && !ticket && (
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-transparent p-10 text-center text-sm text-muted-foreground">
            <LoaderCircle className="w-8 h-8 mx-auto mb-3 animate-spin text-primary" />
            Loading your ticket…
          </div>
        )}

        {!loading && error && !ticket && hasAccessMethod && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 space-y-4">
            <div>
              <h1 className="text-xl font-semibold">We couldn't load this ticket</h1>
              <p className="text-sm text-red-200/90 mt-1">{error}</p>
            </div>
            <button
              type="button"
              onClick={() => void fetchTicket()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-red-400/30 text-sm font-medium hover:bg-red-500/10 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}

        {ticket && (
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-transparent p-7">
            <TicketDetail
              ticket={ticket}
              email={emailAccess}
              accessToken={initialToken || undefined}
              backHref="/support"
              backLabel="Back to support center"
              onUpdated={(updatedTicket) => setTicket(updatedTicket)}
            />
          </div>
        )}
      </div>
    </div>
  );
}


