"use client";

import { Download } from "lucide-react";
import { detectPlatform } from "@/lib/platform";

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

  if (variant === "header") {
    return (
      <a
        href={downloadUrl}
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
      className={`animate-fade-in-up inline-flex items-center gap-2 rounded-md bg-[#b8ff57] px-6 py-3.5 text-sm font-medium text-[#0a0a0a] transition-all delay-500 hover:bg-[#c8ff77] ${className}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <Download size={16} />
      Download for {platformInfo.label}
    </a>
  );
}
