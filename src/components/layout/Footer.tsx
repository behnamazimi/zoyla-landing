"use client";

import Link from "next/link";
import { TWITTER_URL, TWITTER_HANDLE } from "@/lib/constants";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import posthog from "posthog-js";

export function Footer() {
  const handleTwitterClick = () => {
    posthog.capture("twitter_link_clicked", {
      location: "footer",
      twitter_handle: TWITTER_HANDLE,
    });
  };

  const handleResourcesClick = () => {
    posthog.capture("resources_link_clicked", {
      location: "footer",
    });
  };

  return (
    <footer className="relative z-10 mx-auto max-w-7xl border-t border-[#1a1a1a] px-8 py-10">
      {/* Animated logo with name and tagline side by side */}
      <div className="mb-8 flex items-center justify-center gap-4">
        <AnimatedLogo width={64} height={64} />
        <div className="flex flex-col">
          <span
            className="text-xl font-semibold text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            zoyla
          </span>
          <p
            className="text-sm text-[#6b6b6b]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            it pecks your HTTP endpoints
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6b6b6b]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span>© {new Date().getFullYear()} Zoyla</span>
        <span className="text-[#252525]">·</span>
        <span>MIT License</span>
        <span className="text-[#252525]">·</span>
        <Link
          href="/resources"
          onClick={handleResourcesClick}
          className="transition-colors hover:text-[#e8e8e8]"
        >
          Resources
        </Link>
        <span className="text-[#252525]">·</span>
        <a
          href={TWITTER_URL}
          onClick={handleTwitterClick}
          className="transition-colors hover:text-[#e8e8e8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          by @{TWITTER_HANDLE}
        </a>
      </div>
    </footer>
  );
}
