ls aimport { NextRequest, NextResponse } from "next/server";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";

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

// Store confirmed bookings (in production, use a database)
const confirmedBookings = new Map<string, any>();

export async function POST(req: NextRequest) {
  try {
    // Check if PayPal is configured
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      return NextResponse.json(
        { error: "PayPal is not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { orderId, bookingData } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();
    const baseUrl = getPayPalBaseUrl();

    // Capture the payment
    const response = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const captureData = await response.json();

    if (captureData.error) {
      console.error("PayPal capture error:", captureData);
      return NextResponse.json(
        { error: captureData.error_description || "Failed to capture payment" },
        { status: 500 }
      );
    }

    if (captureData.status !== "COMPLETED") {
      return NextResponse.json(
        { error: "Payment was not completed" },
        { status: 400 }
      );
    }

    // Extract booking info from custom_id
    const purchaseUnit = captureData.purchase_units?.[0];
    const captureDetails = purchaseUnit?.payments?.captures?.[0];
    
    // Get payer info
    const payer = captureData.payer;
    
    // Create confirmed booking record
    const bookingId = purchaseUnit?.reference_id || `BOOK-${Date.now()}`;
    const booking = {
      id: bookingId,
      ...bookingData,
      paypalOrderId: orderId,
      paypalTransactionId: captureDetails?.id,
      payerEmail: payer?.email_address,
      payerName: `${payer?.name?.given_name || ""} ${payer?.name?.surname || ""}`.trim(),
      amount: captureDetails?.amount?.value,
      currency: captureDetails?.amount?.currency_code,
      status: "confirmed",
      paidAt: new Date().toISOString(),
    };

    // Store the booking
    confirmedBookings.set(bookingId, booking);

    // TODO: Send confirmation email
    // TODO: Create Google Calendar event with Meet link
    
    console.log("✅ Payment captured successfully:", {
      bookingId,
      orderId,
      transactionId: captureDetails?.id,
      amount: captureDetails?.amount?.value,
    });

    return NextResponse.json({
      success: true,
      bookingId,
      transactionId: captureDetails?.id,
      status: "confirmed",
      message: "Payment successful! You will receive a confirmation email shortly.",
    });
  } catch (error: any) {
    console.error("PayPal capture order error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to capture payment" },
      { status: 500 }
    );
  }
}

// Export for other routes to access
export { confirmedBookings };
