"use client";

import { useState } from "react";
import { TicketForm } from "@/components/support/TicketForm";
import { TicketTracker } from "@/components/support/TicketTracker";
import { CheckCircle, Ticket, Search, ArrowLeft } from "lucide-react";

type View = "home" | "submit" | "track";

interface SuccessInfo {
  ticketNumber: string;
  id: string;
  email: string;
}

export default function SupportPortalClient() {
  const [view, setView] = useState<View>("home");
  const [success, setSuccess] = useState<SuccessInfo | null>(null);

  function handleSuccess(info: SuccessInfo) {
    setSuccess(info);
    setView("home");
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-3xl">

        {/* Back nav */}
        {view !== "home" && !success && (
          <button
            onClick={() => setView("home")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Support Center</h1>
          <p className="text-muted-foreground">
            Submit a ticket for any issue and track its progress here.
          </p>
        </div>

        {/* Success state */}
        {success && (
          <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center mb-8">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-1">Ticket Submitted!</h2>
            <p className="text-muted-foreground mb-2">
              Your ticket <span className="font-mono font-semibold text-foreground">{success.ticketNumber}</span> has been created.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              We'll get back to you at <strong>{success.email}</strong>. You can track updates below.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <button
                onClick={() => { setSuccess(null); setView("track"); }}
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Track My Tickets
              </button>
              <button
                onClick={() => { setSuccess(null); setView("home"); }}
                className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Home — two cards */}
        {view === "home" && !success && (
          <div className="grid sm:grid-cols-2 gap-5">
            <button
              onClick={() => setView("submit")}
              className="group text-left p-7 rounded-2xl border border-border/60 bg-gradient-to-br from-muted/40 to-transparent hover:border-primary/60 hover:from-primary/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Ticket className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-bold mb-2">Submit a Ticket</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Report a bug, ask a question, or request help with any Athian Games product.
              </p>
            </button>

            <button
              onClick={() => setView("track")}
              className="group text-left p-7 rounded-2xl border border-border/60 bg-gradient-to-br from-muted/40 to-transparent hover:border-primary/60 hover:from-primary/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-bold mb-2">Track My Tickets</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                View the status of your existing tickets and add follow-up messages.
              </p>
            </button>
          </div>
        )}

        {/* Submit view */}
        {view === "submit" && !success && (
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-transparent p-7">
            <h2 className="text-xl font-bold mb-6">New Support Ticket</h2>
            <TicketForm onSuccess={handleSuccess} />
          </div>
        )}

        {/* Track view */}
        {view === "track" && !success && (
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-transparent p-7">
            <h2 className="text-xl font-bold mb-6">Track Your Tickets</h2>
            <TicketTracker />
          </div>
        )}

        {/* Footer note */}
        {view === "home" && !success && (
          <p className="text-center text-xs text-muted-foreground mt-10">
            You can also email us directly at{" "}
            <a href="mailto:sameek.kundu@athiangames.com" className="text-primary hover:underline">
              sameek.kundu@athiangames.com
            </a>
          </p>
        )}
      </div>
    </div>
  );
}


