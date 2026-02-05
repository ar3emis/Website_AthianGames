// PayPal Configuration
// To enable PayPal payments, add these to your .env.local file:
//
// For Sandbox (testing):
// NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_sandbox_client_id
// PAYPAL_CLIENT_SECRET=your_sandbox_secret
// PAYPAL_MODE=sandbox
//
// For Live (production):
// NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_live_client_id
// PAYPAL_CLIENT_SECRET=your_live_secret
// PAYPAL_MODE=live
//
// Get your credentials from: https://developer.paypal.com/dashboard/applications

export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
export const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
export const PAYPAL_MERCHANT_EMAIL = "sameek.kundu@athiangames.com";

// Check if PayPal is configured
export const isPayPalConfigured = Boolean(PAYPAL_CLIENT_ID);

// Get PayPal SDK URL
export function getPayPalScriptUrl(): string {
  if (!PAYPAL_CLIENT_ID) return "";
  return `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture`;
}
