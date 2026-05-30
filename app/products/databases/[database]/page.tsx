import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Database, FileText, Mail, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
  databaseCommonFeatures,
  databaseProducts,
  getDatabaseProduct,
} from "@/lib/products/databaseProducts";
import { getSiteUrl } from "@/lib/site";
import {
  generateBreadcrumbStructuredData,
  generateProductStructuredData,
} from "@/lib/utils/structuredData";

interface DatabasePageProps {
  params: Promise<{
    database: string;
  }>;
}

export function generateStaticParams() {
  return databaseProducts.map((product) => ({
    database: product.key,
  }));
}

export async function generateMetadata({ params }: DatabasePageProps): Promise<Metadata> {
  const { database } = await params;
  const product = getDatabaseProduct(database);

  if (!product) {
    return {
      title: "Database Not Found",
    };
  }

  return {
    title: `${product.name} Database Integration | Athian Games`,
    description: product.summary,
    alternates: {
      canonical: `/products/databases/${product.key}`,
    },
    openGraph: {
      title: `${product.name} Database Integration`,
      description: product.summary,
      url: `/products/databases/${product.key}`,
      images: [product.thumbnail],
    },
  };
}

export default async function DatabaseProductPage({ params }: DatabasePageProps) {
  const { database } = await params;
  const product = getDatabaseProduct(database);

  if (!product) {
    notFound();
  }

  const baseUrl = getSiteUrl();
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: "Home", url: baseUrl },
    { name: "Products", url: `${baseUrl}/products` },
    { name: "DataBases", url: `${baseUrl}/products/databases` },
    { name: product.name },
  ]);
  const productStructuredData = generateProductStructuredData({
    name: `${product.name} Database Integration`,
    description: product.description,
    summary: product.summary,
    url: `${baseUrl}/products/databases/${product.key}`,
    category: "Code Plugins",
    thumbnail: product.thumbnail,
    documentationUrl: `${baseUrl}${product.docHref}`,
    supportUrl: "https://discord.gg/athiangames",
    features: [...databaseCommonFeatures, ...product.features],
  });

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <section className="relative min-h-[560px] overflow-hidden">
        <img
          src={product.thumbnail}
          alt={`${product.name} thumbnail`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-background" />

        <div className="container-custom relative z-10 flex min-h-[560px] items-end pb-14 pt-28">
          <div className="max-w-4xl">
            <Link
              href="/products/databases"
              className="mb-6 inline-flex items-center text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to DataBases
            </Link>
            <Badge variant="outline" className="mb-4 border-white/20 bg-black/30 text-white">
              {product.badge}
            </Badge>
            <h1 className="mb-5 text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
              {product.name}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/90 drop-shadow-md md:text-xl">
              {product.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={product.docHref}>
                <Button size="lg">
                  <FileText className="mr-2 h-5 w-5" />
                  Documentation
                </Button>
              </Link>
              <Link href="/products/databases">
                <Button variant="secondary" size="lg">
                  Compare Databases
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container-custom py-16">
        <section className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <CardContent className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                <Database className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-bold">Product Overview</h2>
              <p className="leading-relaxed text-muted-foreground">{product.description}</p>
            </CardContent>
          </Card>

          <Card className={`border bg-gradient-to-br ${product.accent}`}>
            <CardContent className="p-8">
              <h2 className="mb-5 text-2xl font-bold">Core Capabilities</h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {product.coreList.map((item) => (
                  <div key={item} className="flex min-w-0 items-start gap-3 rounded-lg border border-border/60 bg-background/70 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="min-w-0 break-words text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">{product.shortName} Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature) => (
              <Card key={feature.title} className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 grid gap-8 lg:grid-cols-2">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Blueprint Setup Flow</h2>
              <ol className="space-y-4">
                {product.workflow.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Setup Notes</h2>
              <ul className="space-y-4">
                {product.notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Shared Database Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {databaseCommonFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="mb-3 text-2xl font-bold">Need Help?</h2>
                  <p className="max-w-2xl text-muted-foreground">
                    Use the step-by-step docs for setup, or reach out if your project needs connection, query, or deployment support.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href={product.docHref}>
                    <Button>
                      <FileText className="mr-2 h-5 w-5" />
                      Documentation
                    </Button>
                  </Link>
                  <a href={`mailto:sameek.kundu@athiangames.com?subject=Support Request: ${product.name}`}>
                    <Button variant="secondary">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Support
                    </Button>
                  </a>
                  <a href="https://discord.gg/uBmnnxjahv" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Discord
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
