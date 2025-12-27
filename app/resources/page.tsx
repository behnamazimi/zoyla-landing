import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/content";
import { SITE_URL } from "@/lib/constants";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Resources – Zoyla",
  description:
    "Learn about HTTP load testing, performance optimization, and API benchmarking. Guides, tutorials, and best practices.",
  openGraph: {
    title: "Resources – Zoyla",
    description:
      "Learn about HTTP load testing, performance optimization, and API benchmarking.",
    url: `${SITE_URL}/resources`,
    siteName: "Zoyla",
    type: "website",
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ResourcesPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 sm:px-8">
        {/* Page header */}
        <div className="mb-16 text-center">
          <h1
            className="mb-4 text-4xl font-semibold tracking-tight text-[#e8e8e8] sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Resources
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg text-[#6b6b6b]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Guides, tutorials, and best practices for HTTP load testing and
            performance optimization.
          </p>
        </div>

        {/* Posts grid */}
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group block rounded-lg border border-[#1a1a1a] bg-[#0d0d0d]/50 p-6 transition-all hover:border-[#252525] hover:bg-[#141414]/50"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#1a1a1a] px-2.5 py-0.5 text-xs text-[var(--accent)]"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2
                      className="mb-2 text-xl font-medium text-[#e8e8e8] transition-colors group-hover:text-[var(--accent)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="mb-4 line-clamp-2 text-[#6b6b6b]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div
                      className="flex items-center gap-3 text-xs text-[#6b6b6b]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="text-[#252525]">·</span>
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:block">
                    <ArrowRight className="h-5 w-5 text-[#6b6b6b] transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p
              className="text-[#6b6b6b]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              No resources available yet. Check back soon!
            </p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
