import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { ArrowLeft, ExternalLink, FileText, Play } from "lucide-react";
import { getProductBySlug } from "@/lib/products/productData";
import { getDocumentation } from "@/lib/docs/docsData";

import { BetaSignupForm } from "@/components/products/BetaSignupForm";
import { ProductGallery } from "@/components/products/ProductGallery";
import { generateProductStructuredData } from "@/lib/utils/structuredData";
import { FabricAIHero } from "@/components/products/FabricAIHero";
import { FabricAITabs } from "@/components/products/FabricAITabs";

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
    <div className="min-h-screen">
      {/* JSON-LD Structured Data for SEO and AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />

      {/* Cover Image with Title Overlay - Special WebGL hero for FabricAI */}
      {slug === "fabric-ai" ? (
        <div className="relative">
          <FabricAIHero />
          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-end pointer-events-none">
            <div className="container-custom pb-12 w-full pointer-events-auto select-none">
              <Link
                href="/products"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors select-none"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-sm select-none">
                  Work In Progress
                </Badge>
                <Badge variant="outline" className="text-xs bg-black/30 border-white/20 text-white select-none">
                  UE 5.7+
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg select-none">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-md select-none">
                {product.summary}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          {(product as any).bannerImage || (product as any).thumbnail ? (
            <>
              <img
                src={(product as any).bannerImage || (product as any).thumbnail}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30" />
          )}
          
          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="container-custom pb-12 w-full select-none">
              <Link
                href="/products"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors select-none"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant={product.category === "wip" ? "secondary" : "primary"} className="text-sm select-none">
                  {product.category === "wip" ? "Work In Progress" : product.category}
                </Badge>
                {product.category === "wip" && product.engineVersions.map((version: string) => (
                  <Badge key={version} variant="outline" className="text-xs bg-black/30 border-white/20 text-white select-none">
                    {version}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg select-none">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-md select-none">
                {product.summary}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container-custom py-16">

        {/* Video Section - Skip for FabricAI as it's in tabs */}
        {(product as any).videoId && slug !== "fabric-ai" && (
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
          {product.category !== "wip" && (
            <>
              {/* Marketplace Link */}
              {product.externalUrl && (
                <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Get It on Marketplace
                  </Button>
                </Link>
              )}
            </>
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
          {(product as any).videoTutorialUrl && (
            <Link href={(product as any).videoTutorialUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Video Tutorial
              </Button>
            </Link>
          )}
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

        {/* FabricAI: Special tabbed interface */}
        {slug === "fabric-ai" ? (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {product.features.map((feature: any, index: number) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 text-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      {feature.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Tabbed Interface */}
            <FabricAITabs product={product as any} />
          </div>
        ) : (product as any).isMegapack && (product as any).subProducts ? (
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
            
            {/* Check if this product has features with images */}
            {product.features.some((f: any) => f.image) ? (
              // Layout for products WITH images (alternating image layout)
              <div className="space-y-12">
                {product.features.map((feature: any, index: number) => (
                  <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Feature Image */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Feature Content */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      {feature.description && (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {feature.description}
                        </p>
                      )}
                      {feature.learnMoreUrl && (
                        <a
                          href={feature.learnMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:underline"
                        >
                          Learn More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Layout for products without images
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.features.map((feature: any, index: number) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-6 h-6 text-primary" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                        {feature.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Demonstration Section - Show demo videos if available */}
        {(product as any).demoVideos && (product as any).demoVideos.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Demonstrations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {(product as any).demoVideos.map((videoId: string, index: number) => (
                <div key={index} className="aspect-video bg-muted rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${product.name} Demo ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

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
                      href={`mailto:sameek.kundu@athiangames.com?subject=Support Request: ${product.name}`}
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

                    {/* Video Tutorial link - only show if URL exists */}
                    {(product as any).videoTutorialUrl && (
                      <Link
                        href={(product as any).videoTutorialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
                      >
                        <Play className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-semibold text-sm group-hover:text-primary">Video Tutorial</div>
                          <div className="text-xs text-muted-foreground">Watch step-by-step guide</div>
                        </div>
                      </Link>
                    )}

                    <Link 
                      href="/contact"
                      className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <div className="font-semibold text-sm group-hover:text-primary">Report Issue</div>
                        <div className="text-xs text-muted-foreground">Bug reports & tickets</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Beta Signup - at the end for WIP products */}
        {product.category === "wip" && (
          <div className="mb-16">
            <BetaSignupForm 
              productSlug={product.slug} 
              productName={product.name} 
            />
          </div>
        )}

        {/* Bottom CTA - only for non-WIP products */}
        {product.category !== "wip" && product.externalUrl && (
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
        )}
      </div>
    </div>
  );
}
