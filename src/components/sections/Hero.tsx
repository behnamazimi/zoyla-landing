"use client";

import { DownloadButton } from "@/components/ui/DownloadButton";
import { BrewInstall } from "@/components/ui/BrewInstall";
import { AppScreenshot } from "./AppScreenshot";
import { GITHUB_URL } from "@/lib/constants";
import posthog from "posthog-js";

export function Hero() {
  const handleGitHubHeroClick = () => {
    posthog.capture("github_hero_clicked", {
      location: "hero_section",
    });
  };

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-8 pt-20 pb-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1
          className="text-5xl leading-[1.1] font-semibold tracking-tight text-[#e8e8e8] lg:text-7xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="animate-fade-in-up block delay-100">
            HTTP load testing,
          </span>
          <span className="animate-fade-in-up block text-[#b8ff57] delay-300">
            simple and fast
          </span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mt-8 max-w-xl text-xl leading-relaxed text-[#6b6b6b] delay-400"
          style={{ fontFamily: "var(--font-body)" }}
        >
          A lightweight, local-first HTTP load testing app for fast, repeatable
          insights without enterprise complexity
        </p>

        <div className="mt-10 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <DownloadButton />
            <a
              href={GITHUB_URL}
              onClick={handleGitHubHeroClick}
              className="animate-fade-in-up text-sm text-[#6b6b6b] transition-colors delay-600 hover:text-[#e8e8e8]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              View on GitHub →
            </a>
          </div>
          <BrewInstall />
        </div>
      </div>

      <AppScreenshot />
    </section>
  );
}
