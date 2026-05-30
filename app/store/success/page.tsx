import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Purchase Complete",
  description: "Athian Games purchase confirmation.",
};

export default function StoreSuccessPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom max-w-2xl">
        <Card>
          <CardContent className="p-8 text-center">
            <CheckCircle className="mx-auto mb-5 h-12 w-12 text-primary" />
            <h1 className="mb-4">Purchase Complete</h1>
            <p className="mb-8 text-muted-foreground">
              Thank you. If your product access does not appear automatically, contact support with your order details.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/products">
                <Button>Browse Products</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary">Contact Support</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
