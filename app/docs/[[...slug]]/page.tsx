import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products/productData";
import { getDocumentation } from "@/lib/docs/docsData";
import DocLayout from "@/components/docs/DocLayout";
import DocsIndex from "@/components/docs/DocsIndex";

interface DocsPageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const productSlug = slug?.[0];

  if (!productSlug) {
    return {
      title: "Documentation - Athian Games",
      description: "Browse documentation for all Athian Games products",
    };
  }

  const product = getProductBySlug(productSlug);
  if (!product) return { title: "Documentation Not Found" };

  return {
    title: `${product.name} - Documentation`,
    description: `Complete documentation for ${product.name}`,
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const productSlug = slug?.[0];
  const sectionSlug = slug?.[1];

  if (!productSlug) return <DocsIndex />;

  const product = getProductBySlug(productSlug);
  if (!product) notFound();

  const docs = getDocumentation(productSlug);
  if (!docs) notFound();

  const currentSection =
    (sectionSlug ? docs.sections.find((s) => s.slug === sectionSlug) : null) ??
    docs.sections[0];

  return (
    <DocLayout
      product={{ name: product.name, slug: productSlug, externalUrl: product.externalUrl }}
      docs={docs}
      currentSection={currentSection}
    />
  );
}
