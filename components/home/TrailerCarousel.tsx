"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface Slide {
  type: "video" | "image" | "product";
  videoId?: string;
  imageUrl?: string;
  title: string;
  description?: string;
  thumbnail?: string;
  productSlug?: string;
}

interface TrailerCarouselProps {
  trailerVideoId: string;
  slides?: Slide[];
}

export function TrailerCarousel({ trailerVideoId, slides = [] }: TrailerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  // Default slides with trailer as first
  const allSlides: Slide[] = [
    {
      type: "video",
      videoId: trailerVideoId,
      title: "Athian Games Showreel",
      description: "Story-driven games and the Unreal Engine tools built alongside them",
      thumbnail: `https://img.youtube.com/vi/${trailerVideoId}/maxresdefault.jpg`
    },
    ...slides
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-rotate carousel for product slides only
  useEffect(() => {
    if (allSlides[currentSlide].type === "video") return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const currentSlideData = allSlides[currentSlide];

  // Get visible thumbnails (5 items, centered around current)
  const getVisibleThumbnails = () => {
    const totalSlides = allSlides.length;
    const thumbsToShow = Math.min(5, totalSlides);
    
    if (totalSlides <= 5) {
      return Array.from({ length: totalSlides }, (_, i) => i);
    }

    const start = Math.max(0, currentSlide - Math.floor(thumbsToShow / 2));
    const end = Math.min(totalSlides, start + thumbsToShow);
    
    if (end - start < thumbsToShow) {
      return Array.from({ length: thumbsToShow }, (_, i) => Math.max(0, totalSlides - thumbsToShow + i));
    }
    
    return Array.from({ length: thumbsToShow }, (_, i) => start + i);
  };

  const visibleThumbnailIndices = getVisibleThumbnails();

  return (
    <div className="w-full">
      {/* Video Popup Modal */}
      {showVideoPopup && currentSlideData.type === "video" && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideoPopup(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoPopup(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-lg font-medium"
            >
              Close ✕
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${currentSlideData.videoId}?autoplay=1&rel=0`}
              title={currentSlideData.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Main Carousel */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden group" style={{ aspectRatio: "16/9" }}>
        {/* Slide content */}
        <div className="relative w-full h-full">
          {currentSlideData.type === "video" ? (
            // Showreel slide with autoplay background video
            <div className="relative w-full h-full bg-black">
              {/* Background autoplay video (muted) */}
              <iframe
                src={`https://www.youtube.com/embed/${currentSlideData.videoId}?autoplay=1&mute=1&loop=1&playlist=${currentSlideData.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                title={currentSlideData.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 w-full h-full pointer-events-none scale-125"
                style={{ border: 'none' }}
              />
              
              {/* Overlay with content */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
                <div className="p-8 max-w-md">
                  <h3 className="text-3xl font-bold text-white mb-3">{currentSlideData.title}</h3>
                  {currentSlideData.description && (
                    <p className="text-white/80 text-base mb-6">{currentSlideData.description}</p>
                  )}
                  
                  {/* Watch Showreel button - text only, no icon (updated) */}
                  <Button
                    size="lg"
                    onClick={() => setShowVideoPopup(true)}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 font-semibold"
                  >
                    Watch Showreel
                  </Button>
                </div>
              </div>
            </div>
          ) : currentSlideData.type === "product" ? (
            // Product slide with image background
            <Link href={`/products/${currentSlideData.productSlug}`} className="block w-full h-full">
              <div className="relative w-full h-full bg-black cursor-pointer">
                {/* Background image */}
                <img
                  src={currentSlideData.imageUrl || `https://img.youtube.com/vi/${currentSlideData.videoId}/maxresdefault.jpg`}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with product info */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                  <div className="p-8 max-w-md">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentSlideData.title}</h3>
                    {currentSlideData.description && (
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">{currentSlideData.description}</p>
                    )}
                    
                    <span className="inline-flex items-center gap-2 text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                      View Product
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            // Image slide fallback
            <div className="relative w-full h-full">
              <img
                src={currentSlideData.imageUrl}
                alt={currentSlideData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                <div className="p-8 max-w-md">
                  <h3 className="text-2xl font-bold text-white mb-2">{currentSlideData.title}</h3>
                  {currentSlideData.description && (
                    <p className="text-white/80 text-sm">{currentSlideData.description}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        {allSlides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {allSlides.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {visibleThumbnailIndices.map((index) => {
            const slide = allSlides[index];
            const thumbnailSrc = slide.type === "video" 
              ? `https://img.youtube.com/vi/${slide.videoId}/mqdefault.jpg`
              : slide.imageUrl || `https://img.youtube.com/vi/${slide.videoId}/mqdefault.jpg`;
            
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentSlide
                    ? "ring-2 ring-purple-500 h-16 w-24"
                    : "h-14 w-20 hover:ring-2 hover:ring-purple-400 opacity-60 hover:opacity-100"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <img
                  src={thumbnailSrc}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {slide.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Youtube className="w-4 h-4 text-red-500" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
