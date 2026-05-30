import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { getProductBySlug } from "@/lib/products/productData";
import { getSeoLandingPage, seoLandingPages } from "@/lib/seo/landingPages";
import { getSiteUrl } from "@/lib/site";
import {
  generateBreadcrumbStructuredData,
  generateCollectionPageStructuredData,
} from "@/lib/utils/structuredData";

interface LandingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: LandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/unreal-engine/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} | Athian Games`,
      description: page.description,
      url: `/unreal-engine/${page.slug}`,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function UnrealEngineLandingPage({
  params,
}: LandingPageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  const baseUrl = getSiteUrl();
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: baseUrl },
    { name: "Unreal Engine", url: `${baseUrl}/unreal-engine` },
    { name: page.shortTitle, url: `${baseUrl}/unreal-engine/${page.slug}` },
  ]);
  const collectionStructuredData = generateCollectionPageStructuredData({
    name: page.title,
    description: page.description,
    url: `${baseUrl}/unreal-engine/${page.slug}`,
    items: page.featuredProducts
      .map((item) => {
        const product = getProductBySlug(item.slug);
        if (!product) return null;
        return {
          name: product.name,
          url: `${baseUrl}/products/${product.slug}`,
          image: (product as any).thumbnail
            ? `${baseUrl}${(product as any).thumbnail}`
            : undefined,
        };
      })
      .filter(Boolean) as Array<{ name: string; url: string; image?: string }>,
  });
  const featuredProducts = page.featuredProducts
    .map((item) => {
      const product = getProductBySlug(item.slug);
      if (!product) return null;
      return { item, product };
    })
    .filter(Boolean) as Array<{
    item: (typeof page.featuredProducts)[number];
    product: ReturnType<typeof getProductBySlug>;
  }>;
  const relatedPages = seoLandingPages.filter((entry) => entry.slug !== page.slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
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
        <section className="mb-16 max-w-5xl">
          <Link
            href="/unreal-engine"
            className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Unreal Engine solution pages
          </Link>
          <Badge variant="outline" className="mb-4">
            Unreal Engine product search intent
          </Badge>
          <h1 className="mb-6">{page.heroTitle}</h1>
          <p className="mb-6 max-w-4xl text-xl leading-relaxed text-muted-foreground">
            {page.heroText}
          </p>
          <p className="max-w-4xl leading-relaxed text-muted-foreground">
            {page.intro}
          </p>
        </section>

        <section className="mb-16 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-5 text-2xl font-bold">Who this page is for</h2>
              <ul className="space-y-4">
                {page.audience.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-5 text-2xl font-bold">What you should get from this</h2>
              <ul className="space-y-4">
                {page.outcomes.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Why teams search for this</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {page.highlights.map((item) => (
              <Card key={item.title} className="h-full">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">Recommended Athian Games products</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                These are the best fits on the site for this Unreal Engine search intent.
              </p>
            </div>
            <Link href="/products" className="text-sm text-primary transition-colors hover:underline">
              Browse all products
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map(({ item, product }) => (
              <Card key={product!.slug} className="h-full overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  {(product as any).thumbnail ? (
                    <img
                      src={(product as any).thumbnail}
                      alt={product!.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 text-sm text-muted-foreground">
                      Product Preview
                    </div>
                  )}
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{item.label || product!.name}</h3>
                  <p className="text-sm text-muted-foreground">{product!.summary}</p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.reason}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/products/${product!.slug}`}>
                      <Button size="sm">View Product</Button>
                    </Link>
                    {item.docsHref && (
                      <Link href={item.docsHref}>
                        <Button variant="secondary" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Docs
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Useful next pages</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {page.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Card hover className="h-full group cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                      {link.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {link.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Frequently asked questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <Card key={faq.q}>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 to-accent/5 p-8">
          <div className="mb-8">
            <h2 className="mb-3 text-2xl font-bold">Explore more Unreal Engine landing pages</h2>
            <p className="max-w-2xl text-muted-foreground">
              Move into another high-intent product area, or go back to the full
              product catalog.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPages.map((entry) => (
              <Link key={entry.slug} href={`/unreal-engine/${entry.slug}`}>
                <Card hover className="h-full group cursor-pointer">
                  <CardContent className="p-5">
                    <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                      {entry.shortTitle}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {entry.description}
                    </p>
                    <div className="inline-flex items-center text-sm text-primary">
                      Open page
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
