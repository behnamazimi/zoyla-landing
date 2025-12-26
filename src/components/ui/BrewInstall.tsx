"use client";

import { detectPlatform } from "@/lib/platform";
import { BREW_COMMAND } from "@/lib/constants";
import { CopyButton } from "./CopyButton";

export function BrewInstall() {
  const platform = detectPlatform();
  const isMac = platform.platform === "darwin";

  if (!isMac) {
    return null;
  }

  return (
    <div
      className="animate-fade-in-up mt-4 delay-600"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <p className="mb-2 text-xs text-[#6b6b6b]">or install via Homebrew</p>
      <CopyButton text={BREW_COMMAND} />
    </div>
  );
}
