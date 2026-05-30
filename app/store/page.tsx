import { Metadata } from "next";
import { ProductGrid } from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "Store",
  description: "Browse premium Unreal Engine assets and plugins from Athian Games",
};

export default function StorePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="mb-4">Product Store</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse the current Athian Games product catalog and open the product pages for details, documentation, and marketplace links.
          </p>
        </div>

        <ProductGrid />
      </div>
    </div>
  );
}
