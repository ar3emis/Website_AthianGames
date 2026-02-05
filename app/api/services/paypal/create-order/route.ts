import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const PAYPAL_MERCHANT_EMAIL = process.env.PAYPAL_MERCHANT_EMAIL || "sameek.kundu@athiangames.com";

// Get PayPal API base URL
function getPayPalBaseUrl(): string {
  return PAYPAL_MODE === "live" 
    ? "https://api-m.paypal.com" 
    : "https://api-m.sandbox.paypal.com";
}

// Get PayPal access token
async function getPayPalAccessToken(): Promise<string> {
  const baseUrl = getPayPalBaseUrl();

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  
  if (!data.access_token) {
    throw new Error("Failed to get PayPal access token");
  }
  
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    // Check if PayPal is configured
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      return NextResponse.json(
        { error: "PayPal is not configured. Please set up PayPal credentials." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { amount, currency = "USD", description, bookingData } = body;

    if (!amount || !description) {
      return NextResponse.json(
        { error: "Amount and description are required" },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();
    const baseUrl = getPayPalBaseUrl();

    // Create a unique reference ID
    const referenceId = `BOOK-${Date.now()}-${uuidv4().substring(0, 8).toUpperCase()}`;

    const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: referenceId,
            description: description,
            custom_id: JSON.stringify({
              ...bookingData,
              bookingId: referenceId,
            }),
            amount: {
              currency_code: currency,
              value: amount.toFixed(2),
            },
            payee: {
              email_address: PAYPAL_MERCHANT_EMAIL,
            },
          },
        ],
        payment_source: {
          paypal: {
            experience_context: {
              brand_name: "Athian Games",
              locale: "en-US",
              landing_page: "LOGIN",
              user_action: "PAY_NOW",
              payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
            },
          },
        },
      }),
    });

    const orderData = await response.json();

    if (orderData.error) {
      console.error("PayPal order creation error:", orderData);
      return NextResponse.json(
        { error: orderData.error_description || "Failed to create PayPal order" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      orderId: orderData.id,
      bookingId: referenceId,
    });
  } catch (error: any) {
    console.error("PayPal create order error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create PayPal order" },
      { status: 500 }
    );
  }
}
