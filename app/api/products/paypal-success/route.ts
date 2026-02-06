import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import { prisma } from "@/lib/prisma";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function getPayPalBaseUrl(): string {
  return PAYPAL_MODE === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

async function getPayPalAccessToken(): Promise<string> {
  const response = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
}

async function capturePayPalOrder(orderId: string): Promise<any> {
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(
    `${getPayPalBaseUrl()}/v2/checkout/orders/${orderId}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.json();
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");
    const productSlug = searchParams.get("productSlug");
    const productName = searchParams.get("productName");
    const price = searchParams.get("price");

    if (!token || !productSlug || !productName || !price) {
      return NextResponse.redirect(`${SITE_URL}/products?error=missing_params`);
    }

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.redirect(`${SITE_URL}/auth/login?callbackUrl=/library`);
    }

    const captureData = await capturePayPalOrder(token);

    if (captureData.status !== "COMPLETED") {
      console.error("PayPal capture failed:", captureData);
      return NextResponse.redirect(`${SITE_URL}/products/${productSlug}?error=payment_failed`);
    }

    const existingPurchase = await prisma.purchase.findFirst({
      where: {
        userId: session.user.id,
        productSlug,
        status: "completed",
      },
    });

    if (!existingPurchase) {
      await prisma.purchase.create({
        data: {
          userId: session.user.id,
          productSlug,
          productName: decodeURIComponent(productName),
          price: parseFloat(price),
          currency: "USD",
          paypalOrderId: token,
          paypalPayerId: captureData.payer?.payer_id,
          transactionId: captureData.purchase_units?.[0]?.payments?.captures?.[0]?.id,
          status: "completed",
        },
      });
    }

    return NextResponse.redirect(
      `${SITE_URL}/products/success?product=${productSlug}`
    );
  } catch (error) {
    console.error("PayPal success callback error:", error);
    return NextResponse.redirect(`${SITE_URL}/products?error=processing_failed`);
  }
}
