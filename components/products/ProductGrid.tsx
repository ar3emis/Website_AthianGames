import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShoppingCart, Star } from "lucide-react";

// Mock products data - will come from CMS in production
const products = [
  {
    id: "1",
    slug: "volumetric-nebula",
    name: "Volumetric Nebula System",
    shortDescription: "Procedural volumetric nebula generation with real-time customization",
    price: 49.99,
    rating: 4.8,
    reviews: 24,
    category: "VFX",
    engineVersions: ["UE 5.1", "UE 5.2", "UE 5.3"],
  },
  {
    id: "2",
    slug: "dynamic-menu-controls",
    name: "Dynamic Menu Controls",
    shortDescription: "Adaptive UI system with controller and keyboard support",
    price: 29.99,
    rating: 4.9,
    reviews: 18,
    category: "Plugins",
    engineVersions: ["UE 5.0+"],
  },
  {
    id: "3",
    slug: "procedural-terrain-pro",
    name: "Procedural Terrain Pro",
    shortDescription: "Advanced terrain generation with biome blending",
    price: 79.99,
    rating: 4.7,
    reviews: 31,
    category: "Tools",
    engineVersions: ["UE 5.1+"],
  },
  {
    id: "4",
    slug: "advanced-water-shader",
    name: "Advanced Water Shader Pack",
    shortDescription: "Physically accurate water materials with foam, caustics, and refraction",
    price: 39.99,
    rating: 4.6,
    reviews: 22,
    category: "Materials",
    engineVersions: ["UE 5.0+"],
  },
  {
    id: "5",
    slug: "blueprint-inventory-system",
    name: "Blueprint Inventory System",
    shortDescription: "Complete inventory and item management framework",
    price: 34.99,
    rating: 4.8,
    reviews: 27,
    category: "Blueprints",
    engineVersions: ["UE 4.27", "UE 5.0+"],
  },
  {
    id: "6",
    slug: "particle-vfx-library",
    name: "Particle VFX Library",
    shortDescription: "200+ production-ready particle effects for games",
    price: 59.99,
    rating: 4.9,
    reviews: 42,
    category: "VFX",
    engineVersions: ["UE 5.1+"],
  },
];

export function ProductGrid() {
  return (
    <div>
      {/* Results header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{products.length}</span> products
        </p>
        <select className="px-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
          <option>Most Popular</option>
        </select>
      </div>

      {/* Product grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} hover>
            <div className="aspect-video relative bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Product Preview
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="primary">{product.category}</Badge>
              </div>
            </div>

            <CardHeader>
              <Link href={`/store/${product.slug}`}>
                <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.shortDescription}
              </p>
            </CardHeader>

            <CardContent>
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="ml-1 text-sm font-semibold">
                    {product.rating}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Engine versions */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.engineVersions.map((version) => (
                  <Badge key={version} variant="outline">
                    {version}
                  </Badge>
                ))}
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-primary">
                ${product.price}
              </div>
            </CardContent>

            <CardFooter className="flex gap-2">
              <Link href={`/store/${product.slug}`} className="flex-1">
                <Button className="w-full" size="sm">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
