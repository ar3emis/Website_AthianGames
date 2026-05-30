import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { getDocumentation } from "@/lib/docs";
import { getAllProducts } from "@/lib/products/productData";

export const metadata: Metadata = {
  title: "Plugins",
  description: "Blueprint-friendly and code plugin products from Athian Games.",
};

export default function PluginsPage() {
  const plugins = (getAllProducts() as any[]).filter(
    (product) => product.category === "plugins"
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="mb-4">Plugins</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Current Athian Games plugin products with local product pages, documentation, and marketplace links.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {plugins.map((product) => {
            const docs = getDocumentation(product.slug);

            return (
              <Card key={product.slug} hover className="overflow-hidden">
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="aspect-video relative bg-muted overflow-hidden">
                    {product.thumbnail && (
                      <Image
                        src={product.thumbnail}
                        alt={`${product.name} thumbnail`}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    )}
                  </div>
                </Link>

                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-5">
                    {product.summary || product.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link href={`/products/${product.slug}`}>
                      <Button size="sm">
                        View Product
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    {docs && (
                      <Link href={`/docs/${product.slug}`}>
                        <Button variant="secondary" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          Docs
                        </Button>
                      </Link>
                    )}
                    {product.externalUrl && (
                      <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm" aria-label={`Open ${product.name} marketplace page`}>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Need a custom plugin?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Athian Games also builds custom Unreal Engine tools, workflow automation, and runtime systems for production teams.
          </p>
          <Link href="/contact?type=custom-work">
            <Button>
              Request Custom Development
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
