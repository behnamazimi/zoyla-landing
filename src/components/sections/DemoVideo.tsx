"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-hide overlay after 1 second when playing
  useEffect(() => {
    if (isPlaying && hasStarted) {
      hideTimeoutRef.current = setTimeout(() => {
        setShowOverlay(false);
      }, 1000);
    } else {
      setShowOverlay(true);
    }

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [isPlaying, hasStarted]);

  const startHideTimer = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    if (isPlaying && hasStarted) {
      hideTimeoutRef.current = setTimeout(() => {
        setShowOverlay(false);
      }, 1000);
    }
  };

  const handleMouseMove = () => {
    if (hasStarted && isPlaying) {
      setShowOverlay(true);
      startHideTimer();
    }
  };

  const handleMouseLeave = () => {
    startHideTimer();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setHasStarted(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowOverlay(true);
  };

  return (
    <section className="relative z-10 mx-auto max-w-5xl px-8 py-10 pb-24">
      <AnimatedSection>
        <div className="mb-10 text-center">
          <span
            className="text-accent mb-4 inline-block text-xs tracking-wider uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            See it in action
          </span>
          <h2
            className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Quick demo
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-(--foreground-muted)"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Watch how easy it is to run your first load test with Zoyla
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="border-border bg-surface relative overflow-hidden rounded-2xl border shadow-2xl">
          {/* Video container */}
          <div
            className="relative aspect-video"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-contain"
              onEnded={handleVideoEnd}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              playsInline
              preload="metadata"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause overlay */}
            <button
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-500 ${
                showOverlay ? "opacity-100" : "opacity-0"
              }`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-(--accent)/30 bg-(--accent)/10 backdrop-blur-sm transition-transform hover:scale-110">
                {isPlaying ? (
                  <Pause className="text-accent h-8 w-8" />
                ) : (
                  <Play className="text-accent ml-1 h-8 w-8" />
                )}
              </div>
            </button>
          </div>

          {/* Video controls bar */}
          <div className="border-border bg-background flex items-center justify-between border-t px-4 py-3">
            <span
              className="text-muted text-xs"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              demo.mp4
            </span>
            <button
              onClick={togglePlay}
              className="text-foreground-muted hover:text-foreground flex items-center gap-2 text-xs transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" />
                  Play
                </>
              )}
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
