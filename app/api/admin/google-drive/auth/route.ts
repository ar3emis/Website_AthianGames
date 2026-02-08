import { NextRequest, NextResponse } from "next/server";

// OAuth configuration - using existing Google credentials
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/admin/google-drive/callback`;

// GET - Start OAuth flow
export async function GET(req: NextRequest) {
  try {
    if (!GOOGLE_CLIENT_ID) {
      return NextResponse.json(
        { error: "Google Client ID not configured" },
        { status: 500 }
      );
    }

    // Get the return URL from query params (so we can return to the same page)
    const { searchParams } = new URL(req.url);
    const returnUrl = searchParams.get("returnUrl") || "/admin/products";

    // Generate OAuth authorization URL
    const authParams = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: GOOGLE_REDIRECT_URI,
      response_type: "code",
      scope: "https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.metadata.readonly",
      access_type: "offline",
      prompt: "consent",
      state: returnUrl, // Pass the return URL through state parameter
    });

    const authorizeUrl = `https://accounts.google.com/o/oauth2/v2/auth?${authParams.toString()}`;

    console.log("🔑 Starting OAuth flow, will return to:", returnUrl);

    return NextResponse.json({
      success: true,
      authorizeUrl,
    });
  } catch (error) {
    console.error("Google Drive auth error:", error);
    return NextResponse.json(
      { error: "Failed to generate authorization URL" },
      { status: 500 }
    );
  }
}
