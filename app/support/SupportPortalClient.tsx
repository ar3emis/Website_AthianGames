"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TicketForm } from "@/components/support/TicketForm";
import { TicketTracker } from "@/components/support/TicketTracker";
import { Ticket, Search, ArrowLeft } from "lucide-react";

type View = "home" | "submit" | "track";

export default function SupportPortalClient() {
  const router = useRouter();
  const [view, setView] = useState<View>("home");

  function handleSuccess(info: { accessUrl: string }) {
    router.push(info.accessUrl);
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-custom max-w-3xl">

        {/* Back nav */}
        {view !== "home" && (
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

        {/* Home — two cards */}
        {view === "home" && (
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
        {view === "submit" && (
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-transparent p-7">
            <h2 className="text-xl font-bold mb-6">New Support Ticket</h2>
            <TicketForm onSuccess={handleSuccess} />
          </div>
        )}

        {/* Track view */}
        {view === "track" && (
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-transparent p-7">
            <h2 className="text-xl font-bold mb-6">Track Your Tickets</h2>
            <TicketTracker />
          </div>
        )}

        {/* Footer note */}
        {view === "home" && (
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


