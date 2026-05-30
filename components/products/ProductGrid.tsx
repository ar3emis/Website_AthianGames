import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getAllProducts } from "@/lib/products/productData";

export function ProductGrid() {
  const products = getAllProducts() as any[];

  return (
    <div>
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{products.length}</span> products
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.slug} hover className="overflow-hidden">
            <Link href={`/products/${product.slug}`} className="block">
              <div className="aspect-video relative bg-muted overflow-hidden">
                {product.thumbnail ? (
                  <Image
                    src={product.thumbnail}
                    alt={`${product.name} thumbnail`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                )}
              </div>
            </Link>

            <CardHeader>
              <Link href={`/products/${product.slug}`}>
                <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.summary || product.description}
              </p>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground">
                {product.price ? `$${product.price}` : "Available on marketplace"}
              </p>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Link href={`/products/${product.slug}`} className="flex-1">
                <Button className="w-full" size="sm">
                  View Product
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              {product.externalUrl && (
                <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm" aria-label={`Open ${product.name} marketplace page`}>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
