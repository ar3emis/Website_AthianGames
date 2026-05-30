import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { getAllProducts } from "@/lib/products/productData";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Official Athian Games marketplace listings and product pages.",
};

function getPlatformName(url: string) {
  const hostname = new URL(url).hostname;

  if (hostname.includes("fab.com")) return "Fab";
  if (hostname.includes("unrealengine.com")) return "Unreal Marketplace";
  if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) return "YouTube";

  return "External";
}

export default function MarketplacePage() {
  const products = (getAllProducts() as any[]).filter((product) => product.externalUrl);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="mb-4">Marketplace</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Official Athian Games listings with matching local product pages for previews, documentation, and support context.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => {
            const platform = getPlatformName(product.externalUrl);

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
                    <div className="absolute top-4 right-4">
                      <Badge variant="primary">{platform}</Badge>
                    </div>
                  </div>
                </Link>

                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-5">
                    {product.summary || product.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link href={`/products/${product.slug}`}>
                      <Button size="sm" variant="secondary">
                        Product Page
                      </Button>
                    </Link>
                    <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open Listing
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
