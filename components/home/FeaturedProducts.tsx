import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { productDetails } from "@/lib/products/productData";

// Get featured products from the actual product data
const featuredProducts = Object.values(productDetails)
  .filter((product: any) => product.isFeatured || product.thumbnail)
  .slice(0, 6)
  .map((product: any) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    shortDescription: product.summary,
    image: product.thumbnail || product.bannerImage,
    category: product.category,
    engineVersions: product.engineVersions || [],
    isExternal: product.isExternal || false,
    externalUrl: product.externalUrl,
  }));

export function FeaturedProducts() {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground">
            Production-tested tools and assets. No bloat, no compromise.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} hover>
              <div className="aspect-video relative bg-muted overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      Product Image
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge variant="primary">{product.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.shortDescription}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.engineVersions.slice(0, 3).map((version: string) => (
                    <Badge key={version} variant="outline">
                      {version}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                {product.isExternal && product.externalUrl ? (
                  <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on Marketplace
                    </Button>
                  </a>
                ) : (
                  <Link href={`/products/${product.slug}`} className="flex-1">
                    <Button className="w-full" size="sm">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center">
          <Link href="/products">
            <Button variant="secondary" size="lg">
              Browse All Products
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
