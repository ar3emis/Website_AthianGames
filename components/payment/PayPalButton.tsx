"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface PayPalButtonProps {
  amount: number;
  currency?: string;
  description: string;
  bookingData: {
    consultationType: string;
    date: string;
    time: string;
    timeIST: string;
    name: string;
    email: string;
    message: string;
  };
  onSuccess: (details: any) => void;
  onError: (error: any) => void;
  onCancel?: () => void;
  disabled?: boolean;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function PayPalButton({
  amount,
  currency = "USD",
  description,
  bookingData,
  onSuccess,
  onError,
  onCancel,
  disabled = false,
}: PayPalButtonProps) {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const buttonRendered = useRef(false);

  // Load PayPal SDK
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    
    if (!clientId) {
      setError("PayPal is not configured. Please contact support.");
      setLoading(false);
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existingScript) {
      if (window.paypal) {
        setSdkReady(true);
        setLoading(false);
      } else {
        existingScript.addEventListener("load", () => {
          setSdkReady(true);
          setLoading(false);
        });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currency}&intent=capture`;
    script.async = true;

    script.onload = () => {
      setSdkReady(true);
      setLoading(false);
    };

    script.onerror = () => {
      setError("Failed to load PayPal. Please try again.");
      setLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      // Don't remove script as it might be used by other components
    };
  }, [currency]);

  // Render PayPal buttons
  useEffect(() => {
    if (!sdkReady || !window.paypal || !paypalRef.current || buttonRendered.current || disabled) {
      return;
    }

    buttonRendered.current = true;

    window.paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "gold",
          shape: "rect",
          label: "paypal",
          height: 45,
        },
        createOrder: async () => {
          try {
            // Create order on server
            const response = await fetch("/api/services/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                amount,
                currency,
                description,
                bookingData,
              }),
            });

            const data = await response.json();

            if (data.error) {
              throw new Error(data.error);
            }

            return data.orderId;
          } catch (err: any) {
            onError(err);
            throw err;
          }
        },
        onApprove: async (data: any) => {
          try {
            // Capture payment on server
            const response = await fetch("/api/services/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: data.orderID,
                bookingData,
              }),
            });

            const details = await response.json();

            if (details.error) {
              throw new Error(details.error);
            }

            onSuccess(details);
          } catch (err: any) {
            onError(err);
          }
        },
        onCancel: () => {
          if (onCancel) onCancel();
        },
        onError: (err: any) => {
          console.error("PayPal error:", err);
          onError(err);
        },
      })
      .render(paypalRef.current);
  }, [sdkReady, amount, currency, description, bookingData, onSuccess, onError, onCancel, disabled]);

  if (error) {
    return (
      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm text-center">
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-6">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
        <span className="ml-2 text-sm text-muted-foreground">Loading PayPal...</span>
      </div>
    );
  }

  return (
    <div className={disabled ? "opacity-50 pointer-events-none" : ""}>
      <div ref={paypalRef} className="min-h-[50px]" />
    </div>
  );
}
