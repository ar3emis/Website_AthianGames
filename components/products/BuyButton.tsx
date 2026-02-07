"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ShoppingCart, Loader2 } from "lucide-react";

interface BuyButtonProps {
  productSlug: string;
  productName: string;
  price: number;
}

export function BuyButton({ productSlug, productName, price }: BuyButtonProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBuy = async () => {
    if (status === "unauthenticated") {
      router.push(`/auth/login?callbackUrl=/products/${productSlug}`);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/products/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug,
          productName,
          price,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      // Check if it's a FREE testing purchase
      if (data.free && data.redirectUrl) {
        // Show success message and redirect to library
        setError(""); // Clear any errors
        router.push(data.redirectUrl);
        return;
      }

      if (data.approvalUrl) {
        window.location.href = data.approvalUrl;
      } else {
        throw new Error("No approval URL received");
      }
    } catch (err: any) {
      setError(err.message || "Failed to process checkout");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleBuy}
        disabled={isLoading}
        size="lg"
        className="min-w-[180px]"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Buy Now - ${price}
          </>
        )}
      </Button>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
