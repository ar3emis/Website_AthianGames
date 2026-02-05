"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrailerCarousel } from "./TrailerCarousel";
import { defaultSiteConfig } from "@/lib/config/siteConfig";

export function HeroSection() {
  const [youtubeStats, setYoutubeStats] = useState({
    subscribers: "5.2K+",
    isLive: false
  });
  const [productCount, setProductCount] = useState(10);

  // Fetch YouTube subscribers
  useEffect(() => {
    const fetchYoutubeStats = async () => {
      try {
        const response = await fetch('/api/youtube/subscribers');
        const data = await response.json();
        setYoutubeStats({
          subscribers: data.subscribers,
          isLive: data.isLive
        });
      } catch (error) {
        console.error('Failed to fetch YouTube stats:', error);
      }
    };

    fetchYoutubeStats();
    // Refresh every 5 minutes
    const interval = setInterval(fetchYoutubeStats, 300000);
    return () => clearInterval(interval);
  }, []);

  // Fetch product count
  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await fetch('/api/products/count');
        const data = await response.json();
        setProductCount(data.count);
      } catch (error) {
        console.error('Failed to fetch product count:', error);
      }
    };

    fetchProductCount();
  }, []);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        {/* Trailer Carousel */}
        <div className="mb-16">
          <TrailerCarousel trailerVideoId={defaultSiteConfig.trailer.videoId} />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Independent Unreal Engine Studio
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-gradient">
            Professional Unreal Engine
            <br />
            Tools & Assets
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Production-ready plugins, procedural systems, and VFX tools
            for serious creators. No corporate fluff. Just credible,
            technically sound solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/products">
              <Button size="lg" className="group">
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

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto pt-12 border-t border-border">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Youtube className="w-6 h-6 text-primary" />
                <div className="text-3xl font-bold text-gradient">{youtubeStats.subscribers}</div>
              </div>
              <div className="text-sm text-muted-foreground">
                YouTube Subscribers
                {youtubeStats.isLive && (
                  <span className="ml-2 inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">{productCount}+</div>
              <div className="text-sm text-muted-foreground">Published Tools</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
