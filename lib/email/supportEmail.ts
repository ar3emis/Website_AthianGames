import nodemailer from "nodemailer";

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://athiangames.com";

// ── shared wrapper — never throws, just logs ─────────────────────────
async function send(opts: Parameters<ReturnType<typeof createTransporter>["sendMail"]>[0]) {
  try {
    const t = createTransporter();
    const info = await t.sendMail(opts);
    console.log(`[supportEmail] sent to ${opts.to}: ${info.messageId}`);
  } catch (err) {
    console.error("[supportEmail] send failed:", err);
  }
}

// ── notifyUserStatusChange ────────────────────────────────────────────
// Called when admin marks a ticket resolved / closed (or any status change)
export async function notifyUserStatusChange(ticket: {
  ticketNumber: string;
  subject: string;
  email: string;
  name: string;
  status: string;
}) {
  const isResolved = ticket.status === "resolved";
  const isClosed   = ticket.status === "closed";

  if (!isResolved && !isClosed) return; // only email on terminal statuses

  const label      = isResolved ? "Resolved ✅" : "Closed";
  const accentColor = isResolved ? "#22c55e" : "#6b7280";
  const blurb      = isResolved
    ? "Your issue has been resolved by our support team. If everything looks good, no further action is needed."
    : "This ticket has been closed. If you still need help, feel free to open a new ticket.";

  await send({
    from: `"Athian Games Support" <${process.env.SMTP_USER}>`,
    to: ticket.email,
    subject: `[${ticket.ticketNumber}] Your ticket has been ${ticket.status}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:600px;margin:auto;padding:32px;background:#0f0f0f;color:#e5e5e5;border-radius:14px;">
        <div style="margin-bottom:24px;">
          <span style="background:${accentColor};color:#fff;padding:4px 12px;border-radius:999px;font-size:13px;font-weight:600;">${label}</span>
        </div>
        <h2 style="margin:0 0 8px;font-size:20px;">Ticket ${ticket.ticketNumber}</h2>
        <p style="margin:0 0 24px;color:#a1a1aa;font-size:15px;">${ticket.subject}</p>
        <p style="line-height:1.7;color:#d4d4d8;">${blurb}</p>
        <div style="margin-top:28px;border-top:1px solid #27272a;padding-top:20px;font-size:13px;color:#71717a;">
          Still need help?
          <a href="${SITE_URL}/support" style="color:#818cf8;text-decoration:none;">Open a new ticket</a>
          &nbsp;or reply to this email.
        </div>
      </div>
    `,
  });
}

// ── notifyUserAdminReply ──────────────────────────────────────────────
// Called when admin posts a reply message on a ticket
export async function notifyUserAdminReply(ticket: {
  ticketNumber: string;
  subject: string;
  email: string;
  name: string;
  id: string;
}, replyContent: string) {
  await send({
    from: `"Athian Games Support" <${process.env.SMTP_USER}>`,
    to: ticket.email,
    subject: `[${ticket.ticketNumber}] Support replied to your ticket`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:600px;margin:auto;padding:32px;background:#0f0f0f;color:#e5e5e5;border-radius:14px;">
        <div style="margin-bottom:24px;">
          <span style="background:#818cf8;color:#fff;padding:4px 12px;border-radius:999px;font-size:13px;font-weight:600;">New Reply</span>
        </div>
        <h2 style="margin:0 0 8px;font-size:20px;">Ticket ${ticket.ticketNumber}</h2>
        <p style="margin:0 0 20px;color:#a1a1aa;font-size:15px;">${ticket.subject}</p>
        <p style="margin:0 0 8px;color:#71717a;font-size:13px;">Support team replied:</p>
        <div style="padding:16px;background:#1c1c1e;border-radius:10px;border-left:3px solid #818cf8;white-space:pre-wrap;line-height:1.7;font-size:14px;">${replyContent}</div>
        <div style="margin-top:28px;">
          <a href="${SITE_URL}/support" style="display:inline-block;padding:10px 20px;background:#818cf8;color:#fff;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">View &amp; Reply</a>
        </div>
        <div style="margin-top:24px;border-top:1px solid #27272a;padding-top:16px;font-size:12px;color:#71717a;">
          Ticket ID: ${ticket.ticketNumber} · Hi ${ticket.name}, you can track all your tickets at ${SITE_URL}/support
        </div>
      </div>
    `,
  });
}

