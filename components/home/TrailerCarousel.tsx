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
  thumbnail?: string;
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
      description: "Explore our latest tools and assets for Unreal Engine",
      thumbnail: `https://img.youtube.com/vi/${trailerVideoId}/maxresdefault.jpg`
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

  // Get visible thumbnails (5 items, centered around current)
  const getVisibleThumbnails = () => {
    const totalSlides = allSlides.length;
    const thumbsToShow = Math.min(5, totalSlides);
    
    if (totalSlides <= 5) {
      return Array.from({ length: totalSlides }, (_, i) => i);
    }

    // Center the current slide in the thumbnail view
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
      {/* Main Carousel */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden group" style={{ aspectRatio: "16/9" }}>
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
                      className="w-24 h-24 rounded-full bg-white hover:bg-gray-100 text-black hover:scale-110 transition-all shadow-lg"
                    >
                      <Play className="w-12 h-12 ml-1" fill="currentColor" />
                    </Button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentSlideData.title}</h3>
                    {currentSlideData.description && (
                      <p className="text-white/80 text-sm">{currentSlideData.description}</p>
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
                  <p className="text-white/80 text-sm">{currentSlideData.description}</p>
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {allSlides.length > 1 && (
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
          {visibleThumbnailIndices.map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide
                  ? "ring-2 ring-purple-500 h-20 w-24"
                  : "h-16 w-20 hover:ring-2 hover:ring-purple-400 opacity-60 hover:opacity-100"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img
                src={
                  allSlides[index].type === "video"
                    ? `https://img.youtube.com/vi/${allSlides[index].videoId}/mqdefault.jpg`
                    : allSlides[index].imageUrl
                }
                alt={allSlides[index].title}
                className="w-full h-full object-cover"
              />
              {allSlides[index].type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
