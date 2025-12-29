"use client";

import { useEffect, useState } from "react";
import { Github, Star } from "lucide-react";
import { GITHUB_REPO, GITHUB_URL } from "@/lib/constants";
import { track } from "@/lib/tracking";

export function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_REPO}`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
        }
      } catch {
        // Silently fail - stars will just not show
      }
    }

    fetchStars();
  }, []);

  const handleGitHubClick = () => {
    track("github_link_clicked", {
      location: "header",
    });
  };

  return (
    <a
      href={GITHUB_URL}
      onClick={handleGitHubClick}
      className="flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#e8e8e8]"
      style={{ fontFamily: "var(--font-mono)" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github size={16} />
      <span>GitHub</span>
      {/* Always render the badge container to prevent layout shift */}
      <span
        className={`ml-1 flex min-w-12 items-center justify-center gap-1 rounded-full bg-[#1a1a1a] px-2 py-0.5 text-xs text-[#b8ff57] transition-opacity duration-300 ${
          stars !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        <Star size={10} className="fill-current" />
        <span>
          {stars !== null
            ? stars >= 1000
              ? `${(stars / 1000).toFixed(1)}k`
              : stars
            : "—"}
        </span>
      </span>
    </a>
  );
}
