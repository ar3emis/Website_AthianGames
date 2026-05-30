"use client";

import { useState } from "react";
import { Play, Youtube } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ProductVideoProps {
  videoId: string;
  title: string;
  fallbackImage?: string;
  className?: string;
}

export function ProductVideo({
  videoId,
  title,
  fallbackImage,
  className,
}: ProductVideoProps) {
  const maxresThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const hqThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(maxresThumbnail);

  const handleThumbnailError = () => {
    if (thumbnail === maxresThumbnail) {
      setThumbnail(hqThumbnail);
      return;
    }

    if (fallbackImage && thumbnail !== fallbackImage) {
      setThumbnail(fallbackImage);
    }
  };

  return (
    <div
      className={cn(
        "aspect-video overflow-hidden rounded-xl bg-muted shadow-lg",
        className
      )}
    >
      {isPlaying ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group relative block h-full w-full overflow-hidden text-left"
          aria-label={`Play ${title}`}
        >
          <img
            src={thumbnail}
            alt={title}
            onError={handleThumbnailError}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl shadow-black/30 transition-transform group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </div>
          <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
            <Youtube className="h-4 w-4" />
            Watch
          </div>
        </button>
      )}
    </div>
  );
}
