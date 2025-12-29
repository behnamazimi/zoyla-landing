"use client";

import { useState, useEffect } from "react";
import { AnimatedLogo } from "./AnimatedLogo";
import { GITHUB_URL } from "@/lib/constants";
import { track } from "@/lib/tracking";

interface GitHubBannerProps {
  /** Delay before showing the banner (ms) */
  showDelay?: number;
  /** Position of the banner */
  position?: "bottom" | "top";
}

export function GitHubBanner({
  showDelay = 3000,
  position = "bottom",
}: GitHubBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    const dismissed = sessionStorage.getItem("github-banner-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showDelay);

    return () => clearTimeout(timer);
  }, [showDelay]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("github-banner-dismissed", "true");
  };

  const handleStarClick = () => {
    track("github_link_clicked", {
      location: "github_banner",
    });
  };

  if (isDismissed) return null;

  return (
    <>
      {/* Spacer to prevent content from being hidden behind the fixed banner */}
      {position === "bottom" && (
        <div
          className="transition-all duration-400"
          style={{
            height: isVisible ? "120px" : "0px",
          }}
        />
      )}

      <div
        className={`fixed z-50 ${
          position === "bottom" ? "bottom-4 lg:bottom-6" : "top-20"
        } right-4 left-4 lg:right-auto lg:left-1/2 lg:-translate-x-1/2`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? undefined
            : position === "bottom"
              ? "translateY(20px)"
              : "translateY(-20px)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div
          className="relative mx-auto flex max-w-xl flex-col items-center gap-3 rounded-2xl px-4 py-3 lg:max-w-none lg:flex-row lg:gap-4 lg:px-6 lg:py-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(30, 30, 30, 0.9) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: `
            0 20px 40px -10px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.05)
          `,
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Dismiss button - absolute positioned on mobile/tablet, inline on desktop */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 rounded-full p-1.5 transition-colors duration-200 lg:static lg:order-last"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.background = "transparent";
            }}
            aria-label="Dismiss"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Top row on mobile/tablet: logo + text, inline on desktop */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Animated woodpecker */}
            <div className="relative shrink-0">
              <AnimatedLogo width={42} height={42} animate={isVisible} />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-0.5">
              <span
                className="text-sm font-medium"
                style={{
                  color: "var(--foreground)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Like what you see?
              </span>
              <span
                className="text-xs"
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Help spread the word with a star
              </span>
            </div>
          </div>

          {/* Star button */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleStarClick}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 transition-all duration-200 hover:bg-[var(--accent-hover)] lg:ml-2 lg:w-auto"
            style={{
              color: "#0a0a0a",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 600,
              boxShadow: "0 2px 8px var(--accent-glow)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 12px var(--accent-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px var(--accent-glow)";
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="transition-transform duration-200 group-hover:scale-110"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
            <span>Star on GitHub</span>
          </a>

          {/* Subtle glow effect behind the logo */}
          <div
            className="pointer-events-none absolute top-1/2 left-4 -z-10 hidden h-12 w-12 -translate-y-1/2 lg:block"
            style={{
              background:
                "radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        </div>
      </div>
    </>
  );
}
