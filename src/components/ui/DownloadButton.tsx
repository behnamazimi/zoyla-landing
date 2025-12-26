"use client";

import { Download, ExternalLink } from "lucide-react";
import { detectPlatform } from "@/lib/platform";
import { GITHUB_RELEASES_URL } from "@/lib/constants";
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
  const isMobile = platformInfo.isMobile;
  const downloadUrl = isMobile
    ? `${GITHUB_RELEASES_URL}/latest`
    : `/api/download?platform=${platformInfo.platform}&arch=${platformInfo.arch}`;

  const handleDownloadClick = () => {
    posthog.capture(isMobile ? "releases_page_clicked" : "download_clicked", {
      platform: platformInfo.platform,
      arch: platformInfo.arch,
      platform_label: platformInfo.label,
      variant: variant,
      is_mobile: isMobile,
    });
  };

  if (variant === "header") {
    return (
      <a
        href={downloadUrl}
        onClick={handleDownloadClick}
        target={isMobile ? "_blank" : undefined}
        rel={isMobile ? "noopener noreferrer" : undefined}
        className={`flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#e8e8e8] ${className}`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {isMobile ? <ExternalLink size={16} /> : <Download size={16} />}
        {isMobile ? "Releases" : "Download"}
      </a>
    );
  }

  return (
    <a
      href={downloadUrl}
      onClick={handleDownloadClick}
      target={isMobile ? "_blank" : undefined}
      rel={isMobile ? "noopener noreferrer" : undefined}
      className={`animate-fade-in-up inline-flex items-center gap-2 rounded-md bg-[#b8ff57] px-6 py-3.5 text-sm font-medium text-[#0a0a0a] transition-all delay-500 hover:bg-[#c8ff77] ${className}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {isMobile ? <ExternalLink size={16} /> : <Download size={16} />}
      {isMobile ? "View Latest Release" : `Download for ${platformInfo.label}`}
    </a>
  );
}
