import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { BarChart3, Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Real Metrics – Zoyla",
  description:
    "RPS, latency percentiles, throughput charts, error rates. The metrics you need to understand your API's performance.",
  alternates: {
    canonical: `${SITE_URL}/features/load-testing-metrics`,
  },
  openGraph: {
    title: "Real Metrics – Zoyla",
    description:
      "RPS, latency percentiles, throughput charts, error rates. Real metrics, clearly presented.",
    url: `${SITE_URL}/features/load-testing-metrics`,
    siteName: "Zoyla",
    type: "website",
  },
};

const metrics = [
  {
    icon: TrendingUp,
    title: "Requests per second",
    description:
      "Your throughput number. How much work your system handles. The capacity metric for planning.",
  },
  {
    icon: Clock,
    title: "Latency percentiles",
    description:
      "P50, P95, P99 — see what your users actually experience, not just averages that hide problems.",
  },
  {
    icon: AlertTriangle,
    title: "Error rates",
    description:
      "Track failures as load increases. See status code breakdown to understand how things fail.",
  },
  {
    icon: BarChart3,
    title: "Visual charts",
    description:
      "Response time distribution, throughput over time. Patterns jump out instead of hiding in numbers.",
  },
];

const percentiles = [
  { name: "Min", description: "Fastest response" },
  { name: "P50", description: "Median — half are faster" },
  { name: "P95", description: "95% are faster than this" },
  { name: "P99", description: "The unlucky 1%" },
  { name: "Max", description: "Slowest response" },
];

export default function RealMetricsPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-20 pb-16 text-center sm:px-8">
        <div
          className="mb-6 inline-block rounded-full border border-[#252525] bg-[#141414] px-4 py-1.5 text-xs tracking-wider text-[#b8ff57] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Insights
        </div>
        <h1
          className="mb-6 text-4xl font-semibold tracking-tight text-[#e8e8e8] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Numbers that matter
        </h1>
        <p
          className="mx-auto mb-10 max-w-2xl text-lg text-(--foreground-muted) sm:text-xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Not every metric matters. Zoyla focuses on the ones that answer real
          questions: How fast? How many? What breaks?
        </p>
        <DownloadButton variant="primary" />
      </section>

      {/* Screenshot */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-xl border border-[#252525] bg-[#0d0d0d] shadow-2xl">
          <Image
            src="/ss-3.png"
            alt="Zoyla metrics dashboard showing response times and throughput"
            width={1200}
            height={675}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* Metrics grid */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d]/50 p-6"
            >
              <metric.icon className="mb-4 h-8 w-8 text-[#b8ff57]" />
              <h3
                className="mb-2 text-lg font-medium text-[#e8e8e8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {metric.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-(--foreground-muted)"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Percentiles explanation */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <h2
          className="mb-8 text-center text-2xl font-semibold text-[#e8e8e8] sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The full picture
        </h2>
        <p
          className="mb-8 text-center text-(--foreground-muted)"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Averages lie. Percentiles tell the truth about what users experience.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {percentiles.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-[#252525] bg-[#141414] px-4 py-3 text-center"
            >
              <div
                className="mb-1 text-lg font-semibold text-[#b8ff57]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {p.name}
              </div>
              <div
                className="text-xs text-(--foreground-muted)"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {p.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Second screenshot */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 sm:px-8">
        <div className="overflow-hidden rounded-xl border border-[#252525] bg-[#0d0d0d] shadow-2xl">
          <Image
            src="/ss-6.png"
            alt="Zoyla showing detailed metrics breakdown"
            width={1200}
            height={675}
            className="h-auto w-full"
          />
        </div>
        <p
          className="mt-4 text-center text-sm text-(--foreground-muted)"
          style={{ fontFamily: "var(--font-body)" }}
        >
          See exactly how your API performs under load
        </p>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 text-center sm:px-8">
        <div className="rounded-2xl border border-[#252525] bg-[#141414] p-8 sm:p-12">
          <h2
            className="mb-4 text-2xl font-semibold text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See your numbers
          </h2>
          <p
            className="mb-6 text-(--foreground-muted)"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Download Zoyla and get real metrics in seconds.
          </p>
          <DownloadButton variant="primary" />
        </div>
      </section>

      {/* Related links */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <h3
          className="text-muted mb-4 text-sm font-medium tracking-wider uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Related resources
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/latency-percentiles-guide"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            P95, P99 explained
          </Link>
          <Link
            href="/resources/interpreting-load-test-results"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Reading results
          </Link>
          <Link
            href="/resources/understanding-latency-and-throughput"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Latency & throughput
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
