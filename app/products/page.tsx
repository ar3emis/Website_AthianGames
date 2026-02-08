import { Metadata } from "next";
import { ProductsView } from "@/components/products/ProductsView";
import { getAllProducts } from "@/lib/products/productData";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse all Unreal Engine tools, plugins, assets, and resources from Athian Games",
};

export default function ProductsPage() {
  // Get all non-deleted products server-side
  const allProducts = getAllProducts();

  // Transform to the format ProductsView expects
  const products = allProducts.map((product: any) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    shortDescription: product.summary,
    price: product.price || null,
    category: product.category,
    engineVersions: product.engineVersions,
    isExternal: !!product.externalUrl,
    externalUrl: product.externalUrl || "",
    platform: product.externalUrl?.includes('fab.com') ? 'fab' : 
              product.externalUrl?.includes('marketplace') ? 'unreal-marketplace' : 
              'athian-games',
    isFeatured: product.isFeatured || false,
    thumbnail: product.thumbnail,
  }));

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
        <ProductsView initialProducts={products} />
      </div>
    </div>
  );
}
