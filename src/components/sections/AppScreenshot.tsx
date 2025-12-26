"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function AppScreenshot() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the element is from entering the viewport
      const distanceFromBottom = rect.top - windowHeight;

      // Start animation when element is 100px from entering viewport
      if (distanceFromBottom < 100) {
        setIsVisible(true);

        // Calculate scroll progress for parallax effect (0 to 1)
        const progress = Math.min(
          1,
          Math.max(0, (100 - distanceFromBottom) / 300)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="relative mt-16 px-0 sm:px-4">
      <div
        className="relative mx-auto max-w-5xl transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? `translateY(0) scale(1)`
            : `translateY(60px) scale(0.95)`,
        }}
      >
        {/* Glow effect behind screenshot */}
        <div
          className="absolute -inset-4 rounded-2xl opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(184, 255, 87, 0.15) 0%, transparent 70%)",
            transform: `scale(${1 + scrollProgress * 0.1})`,
          }}
        />

        {/* Screenshot container */}
        <div className="relative overflow-hidden rounded-none sm:rounded-xl">
          <Image
            src="/screenshot.png"
            alt="Zoyla app interface showing load test results"
            width={1280}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
