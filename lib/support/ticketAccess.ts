import { createHmac, timingSafeEqual } from "crypto";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://athiangames.com";
const ACCESS_SECRET =
  process.env.SUPPORT_TICKET_SECRET ||
  process.env.NEXTAUTH_SECRET ||
  process.env.ADMIN_SYNC_SECRET ||
  "athian-games-support-ticket-access";
const DEFAULT_TTL_MS = 1000 * 60 * 60 * 24 * 30;

interface SupportTicketAccessPayload {
  id: string;
  email: string;
  exp: number;
}

function signPayload(payload: string) {
  return createHmac("sha256", ACCESS_SECRET).update(payload).digest("base64url");
}

export function createSupportTicketAccessToken(id: string, email: string, ttlMs = DEFAULT_TTL_MS) {
  const payload = Buffer.from(
    JSON.stringify({ id, email: email.toLowerCase(), exp: Date.now() + ttlMs } satisfies SupportTicketAccessPayload)
  ).toString("base64url");

  return `${payload}.${signPayload(payload)}`;
}

export function verifySupportTicketAccessToken(token?: string | null) {
  if (!token) {
    return null;
  }

  const [payload, signature] = token.split(".");
  if (!payload || !signature) {
    return null;
  }

  const expectedSignature = signPayload(payload);
  const providedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (providedBuffer.length !== expectedBuffer.length) {
    return null;
  }

  if (!timingSafeEqual(providedBuffer, expectedBuffer)) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf-8")) as SupportTicketAccessPayload;
    if (!parsed.id || !parsed.email || !parsed.exp || parsed.exp < Date.now()) {
      return null;
    }
    return { ...parsed, email: parsed.email.toLowerCase() };
  } catch {
    return null;
  }
}

export function buildSupportTicketAccessUrl(id: string, email: string, options?: { created?: boolean }) {
  const token = createSupportTicketAccessToken(id, email);
  const url = new URL(`/support/tickets/${id}`, SITE_URL);
  url.searchParams.set("token", token);

  if (options?.created) {
    url.searchParams.set("created", "1");
  }

  return url.toString();
}

