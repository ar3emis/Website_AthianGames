import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductsView } from "@/components/products/ProductsView";
import {
  getCategoryHref,
  getProductCategory,
  productCategories,
} from "@/lib/products/categories";
import { getAllProducts } from "@/lib/products/productData";
import { getSiteUrl } from "@/lib/site";
import {
  generateBreadcrumbStructuredData,
  generateCollectionPageStructuredData,
} from "@/lib/utils/structuredData";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getProductCategory(category);

  if (!categoryInfo) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${categoryInfo.name} Products`,
    description: categoryInfo.description,
    alternates: {
      canonical: getCategoryHref(categoryInfo.id),
    },
    openGraph: {
      title: `${categoryInfo.name} Products | Athian Games`,
      description: categoryInfo.description,
      url: getCategoryHref(categoryInfo.id),
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function ProductCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getProductCategory(category);

  if (!categoryInfo) {
    notFound();
  }

  const baseUrl = getSiteUrl();
  const allProducts = getAllProducts().map((product: any) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    shortDescription: product.summary,
    price: product.price || null,
    category: product.category,
    engineVersions: product.engineVersions,
    isExternal: !!product.externalUrl,
    externalUrl: product.externalUrl || "",
    platform: product.externalUrl?.includes("fab.com")
      ? "fab"
      : product.externalUrl?.includes("marketplace")
        ? "unreal-marketplace"
        : "athian-games",
    isFeatured: product.isFeatured || false,
    thumbnail: product.thumbnail,
  }));

  const categoryProducts = allProducts.filter((product) => product.category === category);

  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: baseUrl },
    { name: "Products", url: `${baseUrl}/products` },
    {
      name: categoryInfo.name,
      url: `${baseUrl}${getCategoryHref(categoryInfo.id)}`,
    },
  ]);

  const collectionStructuredData = generateCollectionPageStructuredData({
    name: `${categoryInfo.name} Products`,
    description: categoryInfo.description,
    url: `${baseUrl}${getCategoryHref(categoryInfo.id)}`,
    items: categoryProducts.map((product) => ({
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
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionStructuredData),
        }}
      />

      <div className="container-custom">
        <div className="mb-12">
          <Link
            href="/products"
            className="mb-4 inline-flex text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Back to all products
          </Link>
          <h1 className="mb-4">{categoryInfo.name}</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {categoryInfo.description}
          </p>
        </div>

        <ProductsView initialProducts={allProducts} initialCategory={categoryInfo.id} />
      </div>
    </div>
  );
}
