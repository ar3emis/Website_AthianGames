import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products/productData";
import { getDocumentation } from "@/lib/docs/docsData";
import DocLayout from "@/components/docs/DocLayout";
import DocsIndex from "@/components/docs/DocsIndex";
import { getSiteUrl } from "@/lib/site";
import { generateBreadcrumbStructuredData } from "@/lib/utils/structuredData";

interface DocsPageProps {
  params: Promise<{ slug?: string[] }>;
}

const LEGACY_SECTION_SLUGS: Record<string, Record<string, string>> = {
  "runtime-fbx-import": {
    "import-function": "getting-started",
  },
};

function resolveSectionSlug(productSlug: string, sectionSlug?: string) {
  if (!sectionSlug) {
    return null;
  }

  return LEGACY_SECTION_SLUGS[productSlug]?.[sectionSlug] ?? sectionSlug;
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const productSlug = slug?.[0];
  const sectionSlug = slug?.[1];

  if (!productSlug) {
    return {
      title: "Documentation - Athian Games",
      description: "Browse documentation for all Athian Games products",
      alternates: {
        canonical: "/docs",
      },
    };
  }

  const product = getProductBySlug(productSlug);
  if (!product) return { title: "Documentation Not Found" };
  const docs = getDocumentation(productSlug);
  const section = docs?.sections.find((entry) => entry.slug === resolveSectionSlug(productSlug, sectionSlug));
  const title = section ? `${product.name} - ${section.title}` : `${product.name} - Documentation`;
  const description = section
    ? `${section.title} documentation for ${product.name}`
    : `Complete documentation for ${product.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: sectionSlug ? `/docs/${productSlug}/${resolveSectionSlug(productSlug, sectionSlug)}` : `/docs/${productSlug}`,
    },
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

  const resolvedSectionSlug = resolveSectionSlug(productSlug, sectionSlug);
  const currentSection =
    (resolvedSectionSlug ? docs.sections.find((s) => s.slug === resolvedSectionSlug) : null) ??
    (sectionSlug ? null : docs.sections[0]);

  if (!currentSection) {
    notFound();
  }

  const baseUrl = getSiteUrl();
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: baseUrl },
    { name: "Documentation", url: `${baseUrl}/docs` },
    { name: product.name, url: `${baseUrl}/docs/${productSlug}` },
    ...(resolvedSectionSlug ? [{ name: currentSection.title }] : []),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <DocLayout
        product={{ name: product.name, slug: productSlug, externalUrl: product.externalUrl }}
        docs={docs}
        currentSection={currentSection}
      />
    </>
  );
}
