"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  poster: string;
  sources: Array<{ src: string; type: string }>;
  className?: string;
  ariaLabel?: string;
  priority?: boolean; // true for above-the-fold hero video
  style?: React.CSSProperties;
}

export default function LazyVideo({
  poster,
  sources,
  className = "absolute inset-0 w-full h-full object-cover",
  ariaLabel,
  priority = false,
  style,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) return;

    // Detect data-saver mode
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    if (nav.connection?.saveData) {
      return; // Keep pristine poster image, skip multi-megabyte download
    }

    const container = containerRef.current;
    if (!container) return;

    // Load video when within 250px of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          // Pause offscreen video to conserve CPU, GPU, and mobile battery
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: "250px 0px", threshold: 0.05 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      {/* High-speed poster image displayed immediately */}
      {poster && (
        <img
          src={poster}
          alt={ariaLabel || "Factory video preview"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          aria-hidden="true"
        />
      )}

      {/* Video stream attached only when near or in viewport */}
      {shouldLoad && (
        <video
          ref={videoRef}
          className={`${className} transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={style}
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          preload={priority ? "auto" : "metadata"}
          aria-label={ariaLabel}
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          }}
        >
          {sources.map((s, idx) => (
            <source key={idx} src={s.src} type={s.type} />
          ))}
        </video>
      )}
    </div>
  );
}
