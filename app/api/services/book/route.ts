import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

// PayPal configuration - you'll need to set these in your .env file
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox"; // "sandbox" or "live"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "your-email@example.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const PAYPAL_MERCHANT_EMAIL = process.env.PAYPAL_MERCHANT_EMAIL || "sameek.kundu@athiangames.com";

// Google Calendar API configuration
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const consultationTypes: Record<string, { name: string; duration: number; price: number }> = {
  "quick-consultation": { name: "Quick Consultation", duration: 30, price: 30 },
  "standard-consultation": { name: "Standard Consultation", duration: 60, price: 50 },
  "extended-consultation": { name: "Extended Session", duration: 120, price: 90 },
};

// Generate a unique booking ID
function generateBookingId(): string {
  return `BOOK-${Date.now()}-${uuidv4().substring(0, 8).toUpperCase()}`;
}

// Get PayPal access token
async function getPayPalAccessToken(): Promise<string> {
  const baseUrl = PAYPAL_MODE === "live" 
    ? "https://api-m.paypal.com" 
    : "https://api-m.sandbox.paypal.com";

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
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

// Create PayPal order
async function createPayPalOrder(bookingId: string, amount: number, description: string, baseUrl: string): Promise<string> {
  const baseUrlApi = PAYPAL_MODE === "live" 
    ? "https://api-m.paypal.com" 
    : "https://api-m.sandbox.paypal.com";

  const accessToken = await getPayPalAccessToken();

  const response = await fetch(`${baseUrlApi}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: bookingId,
          description: description,
          payee: PAYPAL_MERCHANT_EMAIL ? { email_address: PAYPAL_MERCHANT_EMAIL } : undefined,
          amount: {
            currency_code: "USD",
            value: amount.toFixed(2),
          },
        },
      ],
      application_context: {
        brand_name: "Athian Games",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `${baseUrl}/api/services/paypal-success?bookingId=${bookingId}`,
        cancel_url: `${baseUrl}/services/book?cancelled=true`,
      },
    }),
  });

  const data = await response.json();
  
  // Find the approval URL
  const approvalUrl = data.links?.find((link: any) => link.rel === "approve")?.href;
  
  return approvalUrl || "";
}

// Generate Google Meet link (simplified version - stores booking for manual creation)
// For automatic Google Meet creation, you'd need to implement Google Calendar API
function generateMeetLink(bookingId: string): string {
  // In a full implementation, this would use Google Calendar API to create an event with Meet
  // For now, we generate a placeholder that you can replace with actual Meet links
  return `https://meet.google.com/lookup/${bookingId.toLowerCase()}`;
}

// Store booking in memory (in production, use a database)
import { bookings, Booking } from "@/lib/services/bookingStore";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { consultationType, date, time, name, email, message, price } = body;
    const baseUrl = req.headers.get("origin") || SITE_URL;

    // Validate required fields
    if (!consultationType || !name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate consultation type
    const consultation = consultationTypes[consultationType];
    if (!consultation) {
      return NextResponse.json(
        { error: "Invalid consultation type" },
        { status: 400 }
      );
    }

    // Generate booking ID
    const bookingId = generateBookingId();

    // Create booking record
    const booking: Booking = {
      id: bookingId,
      consultationType,
      sessionName: consultation.name,
      duration: consultation.duration,
      price: consultation.price,
      date,
      time,
      name,
      email,
      message,
      status: "pending",
      createdAt: new Date().toISOString(),
      meetLink: generateMeetLink(bookingId),
    };

    // Store booking
    bookings.set(bookingId, booking);

    // Create PayPal order if credentials are available
    let paypalUrl = "";
    if (PAYPAL_CLIENT_ID && PAYPAL_CLIENT_SECRET) {
      try {
        paypalUrl = await createPayPalOrder(
          bookingId,
          consultation.price,
          `${consultation.name} - ${date} at ${time}`,
          baseUrl
        );
      } catch (paypalError) {
        console.error("PayPal error:", paypalError);
        // Continue without PayPal for testing
      }
    }

    // If no PayPal URL (testing mode), simulate success
    if (!paypalUrl) {
      paypalUrl = `${baseUrl}/api/services/paypal-success?bookingId=${bookingId}&test=true`;
    }

    return NextResponse.json({
      success: true,
      bookingId,
      paypalUrl,
      message: "Booking created. Please complete payment.",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}

