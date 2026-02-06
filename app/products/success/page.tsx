import { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Library } from "lucide-react";

export const metadata: Metadata = {
  title: "Purchase Successful - Athian Games",
  description: "Thank you for your purchase",
};

interface ProductSuccessPageProps {
  searchParams: Promise<{ product?: string }>;
}

export default async function ProductSuccessPage({
  searchParams,
}: ProductSuccessPageProps) {
  const session = await getServerSession(authOptions);
  const params = await searchParams;
  const productSlug = params.product;

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-md w-full px-6 text-center">
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-2xl font-bold mb-4">Purchase Successful!</h1>
          
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase! The product has been added to your library.
          </p>

          <div className="space-y-3">
            <Link href="/library" className="block">
              <Button className="w-full">
                <Library className="w-4 h-4 mr-2" />
                Go to My Library
              </Button>
            </Link>

            {productSlug && (
              <Link href={`/products/${productSlug}`} className="block">
                <Button variant="outline" className="w-full">
                  View Product Details
                </Button>
              </Link>
            )}

            <Link href="/products" className="block">
              <Button variant="ghost" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>

          {session?.user?.email && (
            <p className="mt-6 text-sm text-muted-foreground">
              A confirmation email has been sent to {session.user.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
