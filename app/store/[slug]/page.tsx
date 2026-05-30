import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getProductBySlug } from "@/lib/products/productData";

interface StoreProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const legacyStoreSlugs: Record<string, string> = {
  "volumetric-nebula": "volumetric-clouds-and-nebula",
};

export async function generateMetadata({
  params,
}: StoreProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const productSlug = legacyStoreSlugs[slug] ?? slug;
  const product = getProductBySlug(productSlug);

  return {
    title: product ? `${product.name} | Athian Games` : "Product Not Found",
  };
}

export default async function StoreProductPage({ params }: StoreProductPageProps) {
  const { slug } = await params;
  const productSlug = legacyStoreSlugs[slug] ?? slug;

  if (!getProductBySlug(productSlug)) {
    notFound();
  }

  redirect(`/products/${productSlug}`);
}
