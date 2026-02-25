import { NextRequest, NextResponse } from "next/server";

/**
 * Check if the request is coming from localhost.
 * Handles: localhost, 127.0.0.1, ::1, and local network IPs.
 */
export function isLocalhost(req: NextRequest): boolean {
  // Check Host header (strips port before comparing)
  const host = (req.headers.get("host") || "").split(":")[0].toLowerCase();
  if (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host.startsWith("192.168.") ||
    host.startsWith("10.")
  ) {
    return true;
  }

  // Check X-Forwarded-For / forwarded headers (set by Next.js dev server)
  const forwarded =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "";
  const clientIp = forwarded.split(",")[0].trim();
  if (
    clientIp === "127.0.0.1" ||
    clientIp === "::1" ||
    clientIp.startsWith("192.168.") ||
    clientIp.startsWith("10.")
  ) {
    return true;
  }

  // In dev mode, always allow (Next.js local dev server)
  if (process.env.NODE_ENV === "development") {
    return true;
  }

  return false;
}

/**
 * Middleware to check if request is from localhost.
 * Returns an error response if not from localhost.
 */
export function requireLocalhost(req: NextRequest): NextResponse | null {
  if (!isLocalhost(req)) {
    return NextResponse.json(
      { error: "Admin API is only accessible from localhost" },
      { status: 403 }
    );
  }
  return null;
}
