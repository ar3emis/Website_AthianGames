import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductFeatures } from "@/components/products/ProductFeatures";
import { ProductSpecs } from "@/components/products/ProductSpecs";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Mock function - will be replaced with CMS query
async function getProduct(slug: string) {
  // This would fetch from your CMS
  const mockProduct = {
    id: "1",
    slug: "volumetric-nebula",
    name: "Volumetric Nebula System",
    description:
      "Professional-grade volumetric nebula generation system for Unreal Engine. Built for production pipelines with full Blueprint and C++ support. Create stunning space environments with real-time procedural generation.",
    shortDescription:
      "Procedural volumetric nebula generation with real-time customization",
    price: 49.99,
    images: [
      { url: "/images/products/nebula-1.jpg", alt: "Nebula preview 1" },
      { url: "/images/products/nebula-2.jpg", alt: "Nebula preview 2" },
      { url: "/images/products/nebula-3.jpg", alt: "Nebula preview 3" },
    ],
    features: [
      "Real-time procedural generation",
      "Full Blueprint and C++ API",
      "Customizable color gradients",
      "Performance-optimized LOD system",
      "Multiple noise algorithms",
      "VR-ready rendering",
      "Includes 20+ presets",
      "Complete documentation",
    ],
    engineCompatibility: ["UE 5.1", "UE 5.2", "UE 5.3"],
    license: "Multi-project commercial license",
    category: "VFX",
    tags: ["procedural", "vfx", "space", "volumetric"],
  };

  if (slug !== mockProduct.slug) {
    return null;
  }

  return mockProduct;
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

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Back button */}
        <Link
          href="/store"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Store
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={product.images} />
          </div>

          {/* Right: Product info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Features section */}
        <div className="mt-16">
          <ProductFeatures features={product.features} />
        </div>

        {/* Specs section */}
        <div className="mt-16">
          <ProductSpecs
            engineCompatibility={product.engineCompatibility}
            license={product.license}
            category={product.category}
          />
        </div>
      </div>
    </div>
  );
}
