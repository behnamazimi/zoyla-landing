"use client";

import { Download } from "lucide-react";
import { detectPlatform } from "@/lib/platform";
import posthog from "posthog-js";

interface DownloadButtonProps {
  className?: string;
  variant?: "primary" | "header";
}

export function DownloadButton({
  className = "",
  variant = "primary",
}: DownloadButtonProps) {
  const platformInfo = detectPlatform();
  const downloadUrl = `/api/download?platform=${platformInfo.platform}&arch=${platformInfo.arch}`;

  const handleDownloadClick = () => {
    posthog.capture("download_clicked", {
      platform: platformInfo.platform,
      arch: platformInfo.arch,
      platform_label: platformInfo.label,
      variant: variant,
    });
  };

  if (variant === "header") {
    return (
      <a
        href={downloadUrl}
        onClick={handleDownloadClick}
        className={`flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#e8e8e8] ${className}`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <Download size={16} />
        Download
      </a>
    );
  }

  return (
    <a
      href={downloadUrl}
      onClick={handleDownloadClick}
      className={`animate-fade-in-up inline-flex items-center gap-2 rounded-md bg-[#b8ff57] px-6 py-3.5 text-sm font-medium text-[#0a0a0a] transition-all delay-500 hover:bg-[#c8ff77] ${className}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <Download size={16} />
      Download for {platformInfo.label}
    </a>
  );
}
