"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrailerCarousel } from "./TrailerCarousel";
import { defaultSiteConfig } from "@/lib/config/siteConfig";
import { productDetails } from "@/lib/products/productData";

// Get 4 latest products for the carousel, but replace minimap with FabricAI
const productOrder = [
  "fabric-ai",
  "procedural-vortex-tunnel",
  "art-of-shader-distortion-and-glitches",
  "art-of-shader-advanced-distortion",
];

const latestProductSlides = productOrder
  .map((slug) => productDetails[slug])
  .filter(Boolean)
  .map((product: any) => ({
    type: "product" as const,
    productSlug: product.slug,
    imageUrl: product.thumbnail || product.bannerImage,
    title: product.name,
    description: product.summary,
    videoId: product.videoId,
  }));

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Section - Content */}
          <div className="lg:col-span-5">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-purple-400">
                Independent Unreal Engine Studio
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Professional Unreal Engine
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Tools & Assets
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Production-ready plugins, procedural systems, and VFX tools
              for serious creators. No corporate fluff. Just credible,
              technically sound solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/products">
                <Button size="lg" className="group bg-purple-600 hover:bg-purple-700 text-white">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link
                href={defaultSiteConfig.patreon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="group">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003" />
                  </svg>
                  Patreon
                </Button>
              </Link>
            </div>

          </div>

          {/* Right Section - Carousel */}
          <div className="lg:col-span-7">
            <TrailerCarousel 
              trailerVideoId={defaultSiteConfig.trailer.videoId} 
              slides={latestProductSlides}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
