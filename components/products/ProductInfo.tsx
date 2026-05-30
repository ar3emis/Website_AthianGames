"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShoppingCart, Download, FileText, Star } from "lucide-react";
import { getStripe } from "@/lib/stripe/client";

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    tags: string[];
  };
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePurchase = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          amount: product.price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { sessionId } = await response.json();

      const stripe = await getStripe();
      if (!stripe) {
        throw new Error("Stripe failed to load");
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        throw error;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Failed to initiate checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-bold">{product.name}</h1>

      {/* Rating (mock) */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-5 h-5 fill-accent text-accent"
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          4.8 (24 reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-lg text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Price and purchase */}
      <div className="border-t border-b border-border py-6 space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-primary">
            ${product.price}
          </span>
          <span className="text-muted-foreground">one-time payment</span>
        </div>

        <div className="space-y-3">
          <Button
            className="w-full"
            size="lg"
            onClick={handlePurchase}
            isLoading={isLoading}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Purchase Now
          </Button>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center">
            Secure payment via Stripe. Instant download after purchase.
          </p>
        </div>
      </div>

      {/* What's included */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">What's Included</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <Download className="w-4 h-4 text-primary" />
            Full source code access
          </li>
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <FileText className="w-4 h-4 text-primary" />
            Complete documentation
          </li>
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <Download className="w-4 h-4 text-primary" />
            Free updates for 12 months
          </li>
          <li className="flex items-center gap-3 text-sm text-muted-foreground">
            <FileText className="w-4 h-4 text-primary" />
            Email support
          </li>
        </ul>
      </div>

      {/* License info */}
      <div className="p-4 bg-muted/30 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">License:</strong> Multi-project
          commercial license. Use in unlimited projects. No recurring fees.
        </p>
      </div>
    </div>
  );
}
