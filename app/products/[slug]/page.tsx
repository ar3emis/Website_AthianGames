import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { ArrowLeft, ExternalLink, FileText, Play } from "lucide-react";
import { getProductBySlug } from "@/lib/products/productData";
import { getDocumentation } from "@/lib/docs/docsData";
import { BuyButton } from "@/components/products/BuyButton";
import { ProductGallery } from "@/components/products/ProductGallery";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProduct(slug: string) {
  return getProductBySlug(slug);
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  // Check if documentation exists for this product
  const hasDocumentation = getDocumentation(slug) !== null;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Back button */}
        <Link
          href="/products"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-4">
            {product.category}
          </Badge>
          <h1 className="mb-4">{product.name}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {product.summary}
          </p>
        </div>

        {/* Video Section */}
        {(product as any).videoId && (
          <div className="mb-16">
            <div className="aspect-video bg-muted rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${(product as any).videoId}`}
                title={product.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          {/* Buy Button - for products with prices (sold directly on site) */}
          {(product as any).price && (
            <BuyButton
              productSlug={product.slug}
              productName={product.name}
              price={(product as any).price}
            />
          )}
          
          {/* Marketplace Link */}
          {product.externalUrl && (
            <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
              <Button variant={(product as any).price ? "secondary" : "primary"} size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                {(product as any).price ? "View on Marketplace" : "Get It on Marketplace"}
              </Button>
            </Link>
          )}
          
          {hasDocumentation ? (
            <Link href={`/docs/${slug}`}>
              <Button variant="secondary" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                Documentation
              </Button>
            </Link>
          ) : (product as any).documentationUrl && (
            <Link href={(product as any).documentationUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                Documentation
              </Button>
            </Link>
          )}
          <Link href="https://discord.com/invite/BJTZSs3" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              Join Discord
            </Button>
          </Link>
        </div>

        {/* Description */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About This Product</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gallery Section */}
        {(product as any).gallery && (product as any).gallery.length > 0 && (
          <ProductGallery 
            images={(product as any).gallery} 
            productName={product.name} 
          />
        )}

        {/* Features or Sub-Products Grid */}
        {(product as any).isMegapack && (product as any).subProducts ? (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Included Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(product as any).subProducts.map((subProduct: any) => (
                <Link key={subProduct.slug} href={`/products/${subProduct.slug}`}>
                  <Card hover className="h-full group cursor-pointer">
                    <div className="aspect-[4/3] relative bg-muted overflow-hidden">
                      <img
                        src={subProduct.thumbnail}
                        alt={subProduct.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Hover crosshair effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/60 flex items-center justify-center">
                          <div className="absolute w-0.5 h-6 bg-white/60" />
                          <div className="absolute w-6 h-0.5 bg-white/60" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {subProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {subProduct.description}
                      </p>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Features</h2>
            <div className="space-y-12">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                      {feature.image ? (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">
                            Feature Image
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    {feature.description && (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {feature.description}
                      </p>
                    )}
                    {(feature as any).learnMoreUrl && (
                      <Link
                        href={(feature as any).learnMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specs */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Technical Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Engine Compatibility</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.engineVersions.map((version) => (
                      <Badge key={version} variant="outline">
                        {version}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Category</h3>
                  <Badge variant="primary">{product.category}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get this product now from the Unreal Engine Marketplace
          </p>
          <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              View on Marketplace
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
