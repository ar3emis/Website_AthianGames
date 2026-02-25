import { NextRequest, NextResponse } from "next/server";
import { jsonStorage } from "@/lib/storage/jsonStorage";

export const dynamic = "force-dynamic";

/**
 * GET /api/admin/beta/export?token=<ADMIN_SYNC_SECRET>
 *
 * Returns all beta signups as JSON.
 * Protected by a shared secret token instead of localhost check,
 * so localhost dev can pull signups from the deployed Netlify server.
 *
 * Set ADMIN_SYNC_SECRET in both .env (local) and Netlify environment variables.
 */
export async function GET(req: NextRequest) {
  const secret = process.env.ADMIN_SYNC_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "ADMIN_SYNC_SECRET is not configured on this server" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token || token !== secret) {
    return NextResponse.json(
      { error: "Unauthorized: invalid or missing token" },
      { status: 401 }
    );
  }

  try {
    const signups = await jsonStorage.findMany();
    return NextResponse.json({
      success: true,
      signups,
      totalSignups: signups.length,
    });
  } catch (error) {
    console.error("Failed to export beta signups:", error);
    return NextResponse.json(
      { error: "Failed to export signups", detail: String(error) },
      { status: 500 }
    );
  }
}

