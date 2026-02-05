"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Slide {
  type: "video" | "image";
  videoId?: string;
  imageUrl?: string;
  title: string;
  description?: string;
}

interface TrailerCarouselProps {
  trailerVideoId: string;
  slides?: Slide[];
}

export function TrailerCarousel({ trailerVideoId, slides = [] }: TrailerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Default slides with trailer as first
  const allSlides: Slide[] = [
    {
      type: "video",
      videoId: trailerVideoId,
      title: "Athian Games Showreel",
      description: "Explore our latest tools and assets for Unreal Engine"
    },
    ...slides
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);
    setIsPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  // Auto-play carousel (skip if video is playing)
  useEffect(() => {
    if (isPlaying || allSlides[currentSlide].type === "video") return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, isPlaying]);

  const currentSlideData = allSlides[currentSlide];

  return (
    <div className="relative w-full h-[600px] bg-muted/50 rounded-lg overflow-hidden group">
      {/* Slide content */}
      <div className="relative w-full h-full">
        {currentSlideData.type === "video" ? (
          <div className="relative w-full h-full bg-black">
            {!isPlaying ? (
              // Video thumbnail
              <div className="relative w-full h-full">
                <img
                  src={`https://img.youtube.com/vi/${currentSlideData.videoId}/maxresdefault.jpg`}
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 hover:scale-110 transition-all"
                  >
                    <Play className="w-10 h-10 ml-1" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">{currentSlideData.title}</h3>
                  {currentSlideData.description && (
                    <p className="text-white/80">{currentSlideData.description}</p>
                  )}
                </div>
              </div>
            ) : (
              // Playing video
              <iframe
                src={`https://www.youtube.com/embed/${currentSlideData.videoId}?autoplay=1&rel=0`}
                title={currentSlideData.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        ) : (
          // Image slide
          <div className="relative w-full h-full">
            <img
              src={currentSlideData.imageUrl}
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">{currentSlideData.title}</h3>
              {currentSlideData.description && (
                <p className="text-white/80">{currentSlideData.description}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation arrows */}
      {allSlides.length > 1 && !isPlaying && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {allSlides.length > 1 && !isPlaying && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {allSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
