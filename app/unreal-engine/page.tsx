import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { seoLandingPages } from "@/lib/seo/landingPages";
import { getSiteUrl } from "@/lib/site";
import {
  generateBreadcrumbStructuredData,
  generateCollectionPageStructuredData,
} from "@/lib/utils/structuredData";

export const metadata: Metadata = {
  title: "Unreal Engine Plugins, Products, Blueprints, Shaders and VFX",
  description:
    "Athian Games Unreal Engine product hub for plugins, Blueprint systems, shaders, VFX, MetaHuman characters, UMG tools, runtime databases, runtime FBX import, and production-ready marketplace assets.",
  alternates: {
    canonical: "/unreal-engine",
  },
  openGraph: {
    title: "Unreal Engine Plugins and Products | Athian Games",
    description:
      "AI-readable Unreal Engine product hub for Athian Games plugins, Blueprint systems, shaders, VFX, MetaHuman assets, and runtime tools.",
    url: "/unreal-engine",
    images: ["/images/og-image.jpg"],
  },
};

export default function UnrealEngineLandingHubPage() {
  const baseUrl = getSiteUrl();
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: baseUrl },
    { name: "Unreal Engine", url: `${baseUrl}/unreal-engine` },
  ]);
  const collectionStructuredData = generateCollectionPageStructuredData({
    name: "Athian Games Unreal Engine Plugins and Products",
    description:
      "Athian Games hub for Unreal Engine plugins, Blueprint systems, shaders, VFX, MetaHuman characters, UMG tools, and runtime workflow products.",
    url: `${baseUrl}/unreal-engine`,
    items: seoLandingPages.map((page) => ({
      name: page.title,
      url: `${baseUrl}/unreal-engine/${page.slug}`,
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
        <section className="mb-16 max-w-4xl">
          <h1 className="mb-6">Unreal Engine Plugins and Products by Athian Games</h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Athian Games builds Unreal Engine plugins, Blueprint systems,
            shaders, VFX, MetaHuman characters, UMG tools, and runtime
            workflows for teams that want production-ready marketplace products
            instead of one-off prototypes.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            This hub is designed for both people and AI answer engines: each
            solution page connects a common Unreal Engine need to the relevant
            Athian Games product page, documentation, images, support links, and
            marketplace listing.
          </p>
        </section>

        <section className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seoLandingPages.map((page) => (
            <Link key={page.slug} href={`/unreal-engine/${page.slug}`}>
              <Card hover className="h-full group cursor-pointer">
                <CardContent className="p-6">
                  <h2 className="mb-3 text-2xl font-bold transition-colors group-hover:text-primary">
                    {page.shortTitle}
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {page.description}
                  </p>
                  <div className="inline-flex items-center text-sm text-primary">
                    Open landing page
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 to-accent/5 p-8">
          <h2 className="mb-3 text-2xl font-bold">Need the full catalog?</h2>
          <p className="mb-6 max-w-2xl text-muted-foreground">
            Browse all products if you already know the category you want, or
            move into documentation for step-by-step setup guides.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <Button size="lg">Browse Products</Button>
            </Link>
            <Link href="/docs">
              <Button variant="secondary" size="lg">
                Documentation
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
