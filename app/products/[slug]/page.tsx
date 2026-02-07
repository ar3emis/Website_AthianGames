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
import { generateProductStructuredData } from "@/lib/utils/structuredData";

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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://athiangames.com';
  const productUrl = `${baseUrl}/products/${product.slug}`;
  const images = (product as any).gallery?.map((img: string) => `${baseUrl}${img}`) || 
                 ((product as any).thumbnail ? [`${baseUrl}${(product as any).thumbnail}`] : []);

  return {
    title: `${product.name} | Athian Games`,
    description: product.description,
    keywords: [
      product.name,
      'Unreal Engine',
      'UE5',
      product.category,
      'game development',
      'Athian Games',
      ...(product.engineVersions || []),
    ],
    authors: [{ name: 'Athian Games' }],
    creator: 'Athian Games',
    publisher: 'Athian Games',
    openGraph: {
      title: product.name,
      description: product.summary,
      url: productUrl,
      siteName: 'Athian Games',
      images: images.map((img: string) => ({
        url: img,
        width: 1200,
        height: 630,
        alt: product.name,
      })),
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.summary,
      images: images,
    },
    alternates: {
      canonical: productUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
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

  // Generate structured data for SEO and AI
  const productStructuredData = generateProductStructuredData({
    name: product.name,
    description: product.description,
    thumbnail: (product as any).thumbnail,
    gallery: (product as any).gallery,
    price: (product as any).price,
    externalUrl: (product as any).externalUrl,
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* JSON-LD Structured Data for SEO and AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />

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
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        Learn more
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {(product as any).gallery && (product as any).gallery.length > 0 && (
          <ProductGallery 
            images={(product as any).gallery} 
            productName={product.name} 
          />
        )}

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">What engine versions are supported?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This product supports {product.engineVersions.join(", ")}. Check the marketplace page for the most up-to-date compatibility information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Can I use this in commercial projects?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! All our products include commercial licensing. You can use them in both personal and commercial projects without additional fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Do you provide technical support?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! We offer dedicated technical support for all our products. You can reach us via email, Discord, or by creating a support ticket below.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Is documentation available?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, comprehensive documentation is available for this product. {hasDocumentation ? "Click the Documentation button above to access it." : (product as any).documentationUrl ? "Access the documentation through the link above." : "Documentation links are provided with your purchase."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
                  <p className="text-muted-foreground mb-6">
                    Our support team is here to help you get the most out of {product.name}. Whether you have technical questions, need integration assistance, or want to report an issue, we're ready to assist.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <a 
                      href={`mailto:business@athiangames.com?subject=Support Request: ${product.name}`}
                      className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-sm group-hover:text-primary">Email Support</div>
                        <div className="text-xs text-muted-foreground">24-48h response</div>
                      </div>
                    </a>

                    <Link 
                      href="https://discord.com/invite/BJTZSs3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      <div>
                        <div className="font-semibold text-sm group-hover:text-primary">Discord Community</div>
                        <div className="text-xs text-muted-foreground">Live chat support</div>
                      </div>
                    </Link>

                    <a 
                      href={`https://github.com/athiangames/support/issues/new?title=${encodeURIComponent(`[${product.name}] Issue Title`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-sm group-hover:text-primary">Report Issue</div>
                        <div className="text-xs text-muted-foreground">Bug reports & tickets</div>
                      </div>
                    </a>
                  </div>
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
