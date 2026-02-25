import { NextRequest, NextResponse } from "next/server";

/**
 * Check if the request is coming from localhost
 * Admin routes should only be accessible from localhost for security
 */
export function isLocalhost(req: NextRequest): boolean {
  const hostname = req.headers.get("host") || "";
  return (
    hostname.includes("localhost") ||
    hostname.includes("127.0.0.1") ||
    hostname.startsWith("192.168.")
  );
}

/**
 * Middleware to check if request is from localhost
 * Returns an error response if not from localhost
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
