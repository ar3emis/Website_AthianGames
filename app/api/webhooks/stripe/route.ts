import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/server";
import { prisma } from "@/lib/prisma";
import { getProductBySlug } from "@/lib/products/productData";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "No signature provided" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;

      // Get product details
      const productSlug = session.metadata?.productSlug;
      const userId = session.metadata?.userId;

      if (productSlug && userId) {
        try {
          // Get product data to retrieve downloadUrl
          const product = getProductBySlug(productSlug);
          
          // Create purchase record
          await prisma.purchase.create({
            data: {
              userId: userId,
              productSlug: productSlug,
              productName: session.metadata?.productName || "Unknown Product",
              price: (session.amount_total || 0) / 100, // Convert from cents
              currency: session.currency?.toUpperCase() || "USD",
              transactionId: session.payment_intent as string,
              status: "completed",
              downloadUrl: (product as any)?.downloadUrl || null,
              downloadCount: 0,
              maxDownloads: 5,
            },
          });

          console.log("Purchase created:", {
            productSlug,
            userId,
            downloadUrl: (product as any)?.downloadUrl,
          });
        } catch (error) {
          console.error("Failed to create purchase:", error);
        }
      }

      console.log("Payment successful:", {
        sessionId: session.id,
        customerEmail: session.customer_details?.email,
        productId: session.metadata?.productId,
        amount: session.amount_total,
      });

      break;

    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("PaymentIntent succeeded:", paymentIntent.id);
      break;

    case "payment_intent.payment_failed":
      const failedPayment = event.data.object as Stripe.PaymentIntent;
      console.log("Payment failed:", failedPayment.id);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
