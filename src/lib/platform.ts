import type { PlatformInfo } from "@/types";

export function detectPlatform(): PlatformInfo {
  if (typeof window === "undefined") {
    return { platform: "darwin", arch: "arm64", label: "macOS" };
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform?.toLowerCase() || "";

  // Detect OS
  let os = "darwin";
  let label = "macOS";

  if (userAgent.includes("win") || platform.includes("win")) {
    os = "win32";
    label = "Windows";
  } else if (userAgent.includes("linux") || platform.includes("linux")) {
    os = "linux";
    label = "Linux";
  } else if (
    userAgent.includes("mac") ||
    platform.includes("mac") ||
    platform.includes("darwin")
  ) {
    os = "darwin";
    label = "macOS";
  }

  // Detect architecture
  let arch = "x64";

  // Use navigator.userAgentData if available (Chromium-based browsers)
  const uaData = (
    navigator as Navigator & {
      userAgentData?: { platform: string; arch?: string };
    }
  ).userAgentData;

  if (uaData?.arch) {
    // Modern browsers provide architecture directly
    if (uaData.arch === "arm") {
      arch = "arm64";
    }
  } else {
    // Fallback detection
    if (os === "darwin") {
      // For macOS, try to detect Apple Silicon
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl");
        if (gl) {
          const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
          if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            if (
              renderer.includes("Apple M") ||
              renderer.includes("Apple GPU")
            ) {
              arch = "arm64";
            } else if (renderer.includes("Intel")) {
              arch = "x64";
            }
          }
        }
      } catch {
        // Default to arm64 for modern Macs
        arch = "arm64";
      }
    } else if (os === "win32") {
      // Check Windows ARM
      if (userAgent.includes("arm") || userAgent.includes("aarch64")) {
        arch = "arm64";
      }
    } else if (os === "linux") {
      // Check Linux ARM
      if (userAgent.includes("aarch64") || userAgent.includes("arm64")) {
        arch = "arm64";
      }
    }
  }

  return { platform: os, arch, label };
}
