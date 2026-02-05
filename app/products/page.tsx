import { Metadata } from "next";
import { ProductsView } from "@/components/products/ProductsView";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse all Unreal Engine tools, plugins, assets, and resources from Athian Games",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="mb-4">Products</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Professional Unreal Engine tools, plugins, and assets. All products include
            full documentation, commercial licensing, and ongoing support.
          </p>
        </div>

        {/* Products with category navigation */}
        <ProductsView />
      </div>
    </div>
  );
}
