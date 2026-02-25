import { NextRequest, NextResponse } from "next/server";
import { requireLocalhost } from "@/lib/auth/adminAuth";
import { jsonStorage } from "@/lib/storage/jsonStorage";
import type { BetaSignup } from "@/lib/storage/jsonStorage";

export const dynamic = "force-dynamic";

/**
 * POST /api/admin/beta/sync-from-server
 *
 * Fetches beta signups from a remote deployed URL (e.g. your Netlify site)
 * and merges them into the local JSON storage. Deduplicates by signup ID.
 *
 * Body: { serverUrl: "https://yoursite.netlify.app" }
 *
 * Only callable from localhost.
 */
export async function POST(req: NextRequest) {
  const localhostCheck = requireLocalhost(req);
  if (localhostCheck) return localhostCheck;

  try {
    const body = await req.json();
    const serverUrl: string | undefined = body?.serverUrl;

    if (!serverUrl) {
      return NextResponse.json(
        { error: "serverUrl is required in the request body" },
        { status: 400 }
      );
    }

    // Strip trailing slash
    const base = serverUrl.replace(/\/$/, "");
    const syncSecret = process.env.ADMIN_SYNC_SECRET;
    if (!syncSecret) {
      return NextResponse.json(
        { error: "ADMIN_SYNC_SECRET is not set in your local .env file" },
        { status: 500 }
      );
    }
    // Use the /export endpoint which is protected by token, not localhost check
    const remoteUrl = `${base}/api/admin/beta/export?token=${encodeURIComponent(syncSecret)}`;

    let remoteSignups: BetaSignup[] = [];

    try {
      const res = await fetch(remoteUrl, {
        headers: { Accept: "application/json" },
        redirect: "follow",
      });

      if (!res.ok) {
        const text = await res.text();
        return NextResponse.json(
          {
            error: `Remote server returned ${res.status}`,
            detail: text.substring(0, 300),
          },
          { status: 502 }
        );
      }

      const data = await res.json();

      if (!data?.success || !Array.isArray(data?.signups)) {
        return NextResponse.json(
          { error: "Remote server returned unexpected response", detail: JSON.stringify(data).substring(0, 300) },
          { status: 502 }
        );
      }

      remoteSignups = data.signups as BetaSignup[];
    } catch (fetchErr) {
      return NextResponse.json(
        { error: `Failed to reach remote server: ${String(fetchErr)}` },
        { status: 502 }
      );
    }

    if (remoteSignups.length === 0) {
      return NextResponse.json({ success: true, merged: 0, message: "No signups found on remote server." });
    }

    // Load local signups and merge (remote wins on conflict, dedupe by id)
    const localSignups = await jsonStorage.findMany();
    const localById = new Map(localSignups.map((s) => [s.id, s]));

    let mergedCount = 0;
    for (const remote of remoteSignups) {
      if (!localById.has(remote.id)) {
        // New signup from server — add it locally
        await jsonStorage.create({
          data: {
            email: remote.email,
            name: remote.name,
            productSlug: remote.productSlug,
            productName: remote.productName,
            message: remote.message,
            status: remote.status as BetaSignup["status"],
            invitedAt: remote.invitedAt,
            acceptedAt: remote.acceptedAt,
          },
        });
        mergedCount++;
      }
    }

    return NextResponse.json({
      success: true,
      merged: mergedCount,
      total: remoteSignups.length,
      message: `Synced ${mergedCount} new signup(s) from server (${remoteSignups.length} total on server).`,
    });
  } catch (err) {
    console.error("Sync from server error:", err);
    return NextResponse.json(
      { error: "Sync failed", detail: String(err) },
      { status: 500 }
    );
  }
}

