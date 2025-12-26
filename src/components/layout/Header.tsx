import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { GitHubStars } from "@/components/ui/GitHubStars";

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image
          src="/logo.svg"
          alt="Zoyla"
          width={28}
          height={28}
          className="h-7 w-7"
        />
        <span
          className="text-lg font-medium text-[#e8e8e8]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          zoyla
        </span>
      </Link>
      <nav className="flex items-center gap-6">
        <GitHubStars />
        <DownloadButton variant="header" />
      </nav>
    </header>
  );
}
