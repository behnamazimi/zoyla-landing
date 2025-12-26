import { TWITTER_URL, TWITTER_HANDLE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl border-t border-[#1a1a1a] px-8 py-10">
      <div
        className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6b6b6b]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span>© {new Date().getFullYear()} Zoyla</span>
        <span className="text-[#252525]">·</span>
        <span>MIT License</span>
        <span className="text-[#252525]">·</span>
        <a
          href={TWITTER_URL}
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
