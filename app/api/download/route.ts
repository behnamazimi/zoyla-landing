import { NextRequest, NextResponse } from "next/server";
import { GITHUB_REPO, GITHUB_RELEASES_URL } from "@/lib/constants";

const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
}

// Asset patterns for different platforms
const ASSET_PATTERNS: Record<string, Record<string, RegExp[]>> = {
  darwin: {
    arm64: [/\.dmg$/i, /aarch64.*\.dmg$/i, /arm64.*\.dmg$/i],
    x64: [/x64.*\.dmg$/i, /x86_64.*\.dmg$/i, /intel.*\.dmg$/i],
    universal: [/universal.*\.dmg$/i, /\.dmg$/i],
  },
  win32: {
    x64: [/\.msi$/i, /x64.*\.msi$/i, /\.exe$/i],
    arm64: [/arm64.*\.msi$/i, /arm64.*\.exe$/i],
  },
  linux: {
    x64: [/\.AppImage$/i, /x86_64.*\.AppImage$/i, /amd64.*\.deb$/i, /\.deb$/i],
    arm64: [/aarch64.*\.AppImage$/i, /arm64.*\.deb$/i],
  },
};

function findAsset(
  assets: GitHubAsset[],
  platform: string,
  arch: string
): GitHubAsset | null {
  const patterns = ASSET_PATTERNS[platform];
  if (!patterns) return null;

  // Try specific architecture first
  const archPatterns = patterns[arch] || [];
  for (const pattern of archPatterns) {
    const asset = assets.find((a) => pattern.test(a.name));
    if (asset) return asset;
  }

  // For macOS, try universal if specific arch not found
  if (platform === "darwin" && patterns.universal) {
    for (const pattern of patterns.universal) {
      const asset = assets.find((a) => pattern.test(a.name));
      if (asset) return asset;
    }
  }

  // Fallback: try x64 patterns for any platform
  if (arch !== "x64" && patterns.x64) {
    for (const pattern of patterns.x64) {
      const asset = assets.find((a) => pattern.test(a.name));
      if (asset) return asset;
    }
  }

  return null;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const platform = searchParams.get("platform") || "darwin";
  const arch = searchParams.get("arch") || "arm64";

  try {
    const response = await fetch(GITHUB_API, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Zoyla-Website",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      return NextResponse.redirect(`${GITHUB_RELEASES_URL}/latest`);
    }

    const release: GitHubRelease = await response.json();
    const asset = findAsset(release.assets, platform, arch);

    if (asset) {
      return NextResponse.redirect(asset.browser_download_url);
    }

    return NextResponse.redirect(`${GITHUB_RELEASES_URL}/latest`);
  } catch {
    return NextResponse.redirect(`${GITHUB_RELEASES_URL}/latest`);
  }
}
