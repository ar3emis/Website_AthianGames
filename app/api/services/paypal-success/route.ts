import { NextRequest, NextResponse } from "next/server";
import { bookings } from "../book/route";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "your-email@example.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Email sending function (using a simple approach - in production use SendGrid, Resend, etc.)
async function sendEmail(to: string, subject: string, html: string) {
  // In production, implement with your preferred email service
  // Example with SendGrid, Resend, or Nodemailer
  console.log(`📧 Email to ${to}: ${subject}`);
  console.log(html);
  
  // For now, we'll just log it. Implement your email service here.
  return true;
}

// Capture PayPal payment
async function capturePayPalPayment(orderId: string): Promise<boolean> {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    return true; // Testing mode
  }

  const baseUrl = PAYPAL_MODE === "live" 
    ? "https://api-m.paypal.com" 
    : "https://api-m.sandbox.paypal.com";

  // Get access token
  const tokenResponse = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  // Capture the payment
  const captureResponse = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const captureData = await captureResponse.json();
  return captureData.status === "COMPLETED";
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const bookingId = searchParams.get("bookingId");
  const token = searchParams.get("token"); // PayPal order ID
  const isTest = searchParams.get("test") === "true";

  if (!bookingId) {
    return NextResponse.redirect(`${SITE_URL}/services?error=missing_booking`);
  }

  // Get booking from storage
  const booking = bookings.get(bookingId);
  
  if (!booking) {
    return NextResponse.redirect(`${SITE_URL}/services?error=booking_not_found`);
  }

  // Capture PayPal payment (if not test mode)
  if (!isTest && token) {
    try {
      const captured = await capturePayPalPayment(token);
      if (!captured) {
        return NextResponse.redirect(`${SITE_URL}/services?error=payment_failed`);
      }
    } catch (error) {
      console.error("Payment capture error:", error);
      return NextResponse.redirect(`${SITE_URL}/services?error=payment_error`);
    }
  }

  // Update booking status
  booking.status = "confirmed";
  booking.paidAt = new Date().toISOString();
  bookings.set(bookingId, booking);

  // Format the date nicely
  const formattedDate = new Date(booking.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Send confirmation email to customer
  const customerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; }
        .detail { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
        .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
        .meet-link { background: #4285f4; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
        .meet-link a { color: white; text-decoration: none; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">Booking Confirmed! ✅</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Your consultation has been scheduled</p>
        </div>
        <div class="content">
          <p>Hi ${booking.name},</p>
          <p>Thank you for booking a consultation with Athian Games. Here are your booking details:</p>
          
          <div class="detail">
            <span><strong>Session:</strong></span>
            <span>${booking.sessionName}</span>
          </div>
          <div class="detail">
            <span><strong>Date:</strong></span>
            <span>${formattedDate}</span>
          </div>
          <div class="detail">
            <span><strong>Time:</strong></span>
            <span>${booking.time} EST</span>
          </div>
          <div class="detail">
            <span><strong>Duration:</strong></span>
            <span>${booking.duration} minutes</span>
          </div>
          <div class="detail">
            <span><strong>Amount Paid:</strong></span>
            <span>$${booking.price}</span>
          </div>

          <div class="meet-link">
            <p style="margin: 0 0 10px 0;">📹 Join your meeting at the scheduled time:</p>
            <a href="${booking.meetLink}">${booking.meetLink}</a>
          </div>

          <h3>What's Next?</h3>
          <ul>
            <li>Add this event to your calendar</li>
            <li>Prepare any questions or code you'd like to discuss</li>
            <li>Join the Google Meet link 5 minutes before the scheduled time</li>
          </ul>

          <p>If you need to reschedule, please contact us at least 24 hours in advance.</p>
          
          <p>Looking forward to our session!</p>
          <p><strong>Athian Games</strong></p>
        </div>
      </div>
    </body>
    </html>
  `;

  await sendEmail(
    booking.email,
    `Booking Confirmed: ${booking.sessionName} on ${formattedDate}`,
    customerEmailHtml
  );

  // Send notification email to admin
  const adminEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #10b981; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; }
        .detail { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">💰 New Booking Received!</h1>
        </div>
        <div class="content">
          <p><strong>A new consultation has been booked and paid for.</strong></p>
          
          <div class="detail">
            <span><strong>Booking ID:</strong></span>
            <span>${booking.id}</span>
          </div>
          <div class="detail">
            <span><strong>Client Name:</strong></span>
            <span>${booking.name}</span>
          </div>
          <div class="detail">
            <span><strong>Client Email:</strong></span>
            <span>${booking.email}</span>
          </div>
          <div class="detail">
            <span><strong>Session:</strong></span>
            <span>${booking.sessionName}</span>
          </div>
          <div class="detail">
            <span><strong>Date:</strong></span>
            <span>${formattedDate}</span>
          </div>
          <div class="detail">
            <span><strong>Time:</strong></span>
            <span>${booking.time} EST</span>
          </div>
          <div class="detail">
            <span><strong>Amount:</strong></span>
            <span>$${booking.price}</span>
          </div>
          <div class="detail">
            <span><strong>Meet Link:</strong></span>
            <span><a href="${booking.meetLink}">${booking.meetLink}</a></span>
          </div>

          ${booking.message ? `
          <h3>Client's Message:</h3>
          <p style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            ${booking.message}
          </p>
          ` : ''}

          <p style="margin-top: 20px;"><strong>Action Required:</strong> Create a Google Calendar event and update the Meet link if needed.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await sendEmail(
    ADMIN_EMAIL,
    `💰 New Booking: ${booking.sessionName} - ${booking.name}`,
    adminEmailHtml
  );

  // Redirect to success page
  const successUrl = new URL(`${SITE_URL}/services/success`);
  successUrl.searchParams.set("bookingId", bookingId);
  
  return NextResponse.redirect(successUrl.toString());
}
