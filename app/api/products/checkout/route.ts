import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import { prisma } from "@/lib/prisma";
import { getProductBySlug } from "@/lib/products/productData";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Testing account - gets everything FREE
const FREE_TESTING_EMAIL = "sameek.kundu@athiangames.com";

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

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Please login to purchase products" },
        { status: 401 }
      );
    }

    const { productSlug, productName, price, currency = "USD" } = await req.json();

    if (!productSlug || !productName || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ============================================
    // FREE TESTING MODE for sameek.kundu@athiangames.com
    // ============================================
    if (session.user.email === FREE_TESTING_EMAIL) {
      console.log(`🎉 FREE PURCHASE for testing account: ${session.user.email}`);
      
      try {
        // Get product data to retrieve downloadUrl
        const product = getProductBySlug(productSlug);
        
        // Check if purchase already exists
        const existingPurchase = await prisma.purchase.findFirst({
          where: {
            userId: session.user.id,
            productSlug: productSlug,
          },
        });

        if (existingPurchase) {
          console.log(`✅ Purchase already exists, redirecting to library`);
          return NextResponse.json({
            success: true,
            free: true,
            message: "Product already in your library!",
            redirectUrl: "/library",
          });
        }

        // Create FREE purchase for testing
        await prisma.purchase.create({
          data: {
            userId: session.user.id,
            productSlug: productSlug,
            productName: productName,
            price: 0, // FREE for testing
            currency: currency,
            transactionId: `FREE-TEST-${Date.now()}`,
            status: "completed",
            downloadUrl: (product as any)?.downloadUrl || null,
            downloadCount: 0,
            maxDownloads: 999, // Unlimited downloads for testing
          },
        });

        console.log(`✅ FREE purchase created for: ${productName}`);

        return NextResponse.json({
          success: true,
          free: true,
          message: "FREE testing purchase completed!",
          redirectUrl: "/library",
        });
      } catch (error) {
        console.error("Failed to create free purchase:", error);
        return NextResponse.json(
          { error: "Failed to create test purchase" },
          { status: 500 }
        );
      }
    }
    // ============================================
    // END FREE TESTING MODE
    // ============================================

    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      return NextResponse.json(
        { error: "PayPal is not configured" },
        { status: 500 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    const response = await fetch(`${getPayPalBaseUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: productSlug,
            description: productName,
            amount: {
              currency_code: currency,
              value: price.toFixed(2),
            },
            custom_id: session.user.id,
          },
        ],
        application_context: {
          brand_name: "Athian Games",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          return_url: `${SITE_URL}/api/products/paypal-success?productSlug=${productSlug}&productName=${encodeURIComponent(productName)}&price=${price}`,
          cancel_url: `${SITE_URL}/products/${productSlug}?cancelled=true`,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("PayPal error:", data);
      return NextResponse.json(
        { error: "Failed to create PayPal order" },
        { status: 500 }
      );
    }

    const approvalUrl = data.links?.find((link: any) => link.rel === "approve")?.href;

    return NextResponse.json({
      success: true,
      orderId: data.id,
      approvalUrl,
    });
  } catch (error) {
    console.error("Product checkout error:", error);
    return NextResponse.json(
      { error: "Failed to process checkout" },
      { status: 500 }
    );
  }
}
