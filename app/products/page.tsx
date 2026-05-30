import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductsView } from "@/components/products/ProductsView";
import { getCategoryHref, productCategories } from "@/lib/products/categories";
import { getAllProducts } from "@/lib/products/productData";
import { getSiteUrl } from "@/lib/site";
import { generateCollectionPageStructuredData } from "@/lib/utils/structuredData";

// Re-read overrides on every request so admin changes appear immediately
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Unreal Engine Products, Plugins, Blueprints, Shaders and VFX",
  description:
    "Browse the Athian Games catalog of Unreal Engine plugins, Blueprint systems, shaders, VFX, volumetric products, MetaHuman assets, UMG tools, runtime databases, and workflow products.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Athian Games Unreal Engine Products",
    description:
      "Browse Athian Games Unreal Engine plugins, Blueprint systems, shaders, VFX, MetaHuman assets, UMG tools, runtime database products, and workflow tools.",
    url: "/products",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athian Games Products",
    description:
      "Browse Athian Games Unreal Engine plugins, Blueprint systems, shaders, VFX, MetaHuman assets, UMG tools, runtime database products, and workflow tools.",
    images: ["/images/twitter-image.jpg"],
  },
};

export default function ProductsPage() {
  // Get all non-deleted products server-side
  const allProducts = getAllProducts();
  const baseUrl = getSiteUrl();

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

  const collectionStructuredData = generateCollectionPageStructuredData({
    name: "Athian Games Products",
    description:
      "Athian Games catalog of Unreal Engine plugins, Blueprint systems, shaders, VFX, volumetric products, and MetaHuman assets.",
    url: `${baseUrl}/products`,
    items: products
      .filter((product) => product.category !== "wip")
      .map((product) => ({
        name: product.name,
        url: `${baseUrl}/products/${product.slug}`,
        image: product.thumbnail ? `${baseUrl}${product.thumbnail}` : undefined,
      })),
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData),
        }}
      />

      <div className="container-custom">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="mb-4">Products</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Professional Unreal Engine code plugins, VFX, shaders, Metahuman characters, and Blueprint-ready systems.
            Browse product media, marketplace links, support details, and documentation where available.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold">Browse by category</h2>
          <div className="flex flex-wrap gap-3">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href={getCategoryHref(category.id)}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 to-accent/5 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="mb-2 text-2xl font-bold">Looking for a specific Unreal Engine solution?</h2>
              <p className="text-muted-foreground">
                Use the search-intent landing pages for minimaps, runtime databases,
                runtime FBX import, post-process shaders, MetaHuman child characters,
                and UMG tree views.
              </p>
            </div>
            <Link href="/unreal-engine">
              <Button variant="secondary" size="lg">
                Open Solution Pages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Products with category navigation */}
        <ProductsView initialProducts={products} />
      </div>
    </div>
  );
}
