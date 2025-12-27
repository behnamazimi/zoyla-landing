import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { PostMeta } from "@/content";

interface ArticleLayoutProps {
  meta: PostMeta;
  readingTime: number;
  children: React.ReactNode;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleLayout({
  meta,
  readingTime,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="relative z-10 mx-auto max-w-3xl px-6 py-12 sm:px-8">
      {/* Back navigation */}
      <Link
        href="/resources"
        className="group mb-10 inline-flex items-center gap-2 text-sm text-[#6b6b6b] transition-colors hover:text-[#e8e8e8]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Resources
      </Link>

      {/* Article header */}
      <header className="mb-10 border-b border-[#252525] pb-10">
        {/* Tags */}
        {meta.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#1a1a1a] px-3 py-1 text-xs text-[var(--accent)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1
          className="mb-6 text-3xl leading-tight font-semibold tracking-tight text-[#e8e8e8] sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {meta.title}
        </h1>

        {/* Description */}
        <p
          className="mb-6 text-lg leading-relaxed text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {meta.description}
        </p>

        {/* Meta info */}
        <div
          className="flex flex-wrap items-center gap-4 text-sm text-[#6b6b6b]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {meta.author}
          </span>
          <span className="text-[#252525]">·</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatDate(meta.date)}
          </span>
          <span className="text-[#252525]">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {readingTime} min read
          </span>
        </div>
      </header>

      {/* Article content */}
      <div className="prose-custom">{children}</div>

      {/* Article footer */}
      <footer className="mt-16 border-t border-[#252525] pt-8">
        <Link
          href="/resources"
          className="group inline-flex items-center gap-2 text-sm text-[#6b6b6b] transition-colors hover:text-[#e8e8e8]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to all resources
        </Link>
      </footer>
    </article>
  );
}
