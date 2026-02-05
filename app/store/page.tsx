import { Metadata } from "next";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters } from "@/components/products/ProductFilters";

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
          <h1 className="mb-4">Asset Store</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Production-ready tools and assets for Unreal Engine.
            Direct purchases. No middleman. All revenue supports independent development.
          </p>
        </div>

        {/* Filters and grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Filters sidebar */}
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <ProductFilters />
          </aside>

          {/* Product grid */}
          <div className="lg:col-span-9">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
