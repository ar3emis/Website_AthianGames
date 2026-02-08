import { NextRequest, NextResponse } from "next/server";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/admin/google-drive/callback`;

// OAuth callback handler
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const error = searchParams.get("error");
    const state = searchParams.get("state"); // Get the return URL from state

    // Handle user denial
    if (error) {
      const returnUrl = state || "/admin/products";
      const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${returnUrl}?error=${error}`;
      return NextResponse.redirect(redirectUrl);
    }

    if (!code) {
      const returnUrl = state || "/admin/products";
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${returnUrl}?error=no_code`
      );
    }

    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
      console.error("Missing Google credentials");
      const returnUrl = state || "/admin/products";
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${returnUrl}?error=missing_credentials`
      );
    }

    // Exchange code for tokens
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: GOOGLE_REDIRECT_URI,
      }).toString(),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error("Token exchange error:", tokenData);
      const returnUrl = state || "/admin/products";
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${returnUrl}?error=token_exchange_failed`
      );
    }

    // Redirect back to the original page (from state) with token
    const returnUrl = state || "/admin/products";
    const redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${returnUrl}?token=${tokenData.access_token}&google_drive_connected=true`;

    console.log("✅ OAuth success, redirecting to:", returnUrl);
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error("OAuth callback error:", error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/admin/products?error=callback_error`
    );
  }
}
