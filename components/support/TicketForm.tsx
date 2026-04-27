"use client";

import { useState } from "react";
import { getResponseError, readJsonResponse } from "@/lib/support/http";

interface TicketFormProps {
  onSuccess: (ticket: { ticketNumber: string; id: string; email: string; accessUrl: string }) => void;
}

const PRIORITIES = [
  { value: "low", label: "Low — General question" },
  { value: "normal", label: "Normal — Something isn't working" },
  { value: "high", label: "High — Blocking my project" },
  { value: "urgent", label: "Urgent — Critical issue" },
];

export function TicketForm({ onSuccess }: TicketFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
    product: "dynamic-mesh-occluder",
    priority: "normal",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const set = (key: string, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await readJsonResponse<{ error?: string; ticket?: { ticketNumber: string; id: string; accessUrl: string } }>(res);
      if (!res.ok || !data?.ticket) {
        throw new Error(getResponseError(res, data, "Failed to submit ticket."));
      }

      onSuccess({
        ticketNumber: data.ticket.ticketNumber,
        id: data.ticket.id,
        email: form.email,
        accessUrl: data.ticket.accessUrl,
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Your Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="John Smith"
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Email Address <span className="text-red-500">*</span></label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Product</label>
          <select
            value={form.product}
            onChange={(e) => set("product", e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          >
            <option value="dynamic-mesh-occluder">Dynamic Mesh Occluder</option>
            <option value="minimap-map-and-navigation-system">Minimap &amp; Navigation System</option>
            <option value="runtime-fbx-import">Runtime FBX Import</option>
            <option value="fabric-ai">FabricAI</option>
            <option value="general">General / Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Priority</label>
          <select
            value={form.priority}
            onChange={(e) => set("priority", e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          >
            {PRIORITIES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Subject <span className="text-red-500">*</span></label>
        <input
          type="text"
          required
          value={form.subject}
          onChange={(e) => set("subject", e.target.value)}
          placeholder="Brief description of your issue"
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Description <span className="text-red-500">*</span></label>
        <textarea
          required
          rows={6}
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
          placeholder="Please describe your issue in detail. Include what you expected to happen, what actually happened, and any steps to reproduce it."
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
        />
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting…" : "Submit Ticket"}
      </button>
    </form>
  );
}

