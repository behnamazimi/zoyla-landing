import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Zap, Cpu, Gauge, Timer } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rust-Powered – Zoyla",
  description:
    "Built with Rust and Tauri for maximum performance. Fast, efficient load testing with minimal overhead.",
  openGraph: {
    title: "Rust-Powered – Zoyla",
    description:
      "Built with Rust and Tauri for maximum performance. Fast, efficient load testing.",
    url: `${SITE_URL}/features/rust-powered-performance`,
    siteName: "Zoyla",
    type: "website",
  },
};

const benefits = [
  {
    icon: Zap,
    title: "Native speed",
    description:
      "Compiled to native code. No interpreter, no runtime overhead. Just raw performance.",
  },
  {
    icon: Cpu,
    title: "Low resource usage",
    description:
      "More of your machine's power goes to generating load, not running the tool.",
  },
  {
    icon: Gauge,
    title: "Accurate measurements",
    description:
      "Precise timing without garbage collection pauses or runtime jitter affecting results.",
  },
  {
    icon: Timer,
    title: "Instant startup",
    description:
      "Click and it opens. No waiting for runtimes to initialize. Fast feedback loops.",
  },
];

const techStack = [
  {
    name: "Rust",
    description: "Backend for HTTP requests, timing, and metrics calculation",
  },
  {
    name: "Tauri",
    description: "Native desktop framework — smaller and faster than Electron",
  },
  {
    name: "Async I/O",
    description: "Efficient concurrent connections without thread overhead",
  },
];

export default function RustPoweredPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-20 pb-16 text-center sm:px-8">
        <div
          className="mb-6 inline-block rounded-full border border-[#252525] bg-[#141414] px-4 py-1.5 text-xs tracking-wider text-[#b8ff57] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Performance
        </div>
        <h1
          className="mb-6 text-4xl font-semibold tracking-tight text-[#e8e8e8] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Built for speed
        </h1>
        <p
          className="mx-auto mb-10 max-w-2xl text-lg text-(--foreground-muted) sm:text-xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Rust backend. Tauri framework. Native performance. Your load testing
          tool shouldn&apos;t be the bottleneck — and with Zoyla, it isn&apos;t.
        </p>
        <DownloadButton variant="primary" />
      </section>

      {/* Screenshot */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-xl border border-[#252525] bg-[#0d0d0d] shadow-2xl">
          <Image
            src="/ss-2.png"
            alt="Zoyla's fast, responsive interface"
            width={1200}
            height={675}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* Benefits grid */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d]/50 p-6"
            >
              <benefit.icon className="mb-4 h-8 w-8 text-[#b8ff57]" />
              <h3
                className="mb-2 text-lg font-medium text-[#e8e8e8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-(--foreground-muted)"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <h2
          className="mb-8 text-center text-2xl font-semibold text-[#e8e8e8] sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The stack
        </h2>
        <div className="space-y-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-start gap-4 rounded-lg border border-[#1a1a1a] bg-[#0d0d0d]/50 p-4"
            >
              <div
                className="shrink-0 rounded bg-[#b8ff57]/10 px-3 py-1 text-sm font-medium text-[#b8ff57]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {tech.name}
              </div>
              <p
                className="text-sm text-(--foreground-muted)"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <div className="rounded-2xl border border-[#252525] bg-[#141414] p-8">
          <h2
            className="mb-4 text-xl font-semibold text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why performance matters for load testing
          </h2>
          <p
            className="mb-4 text-(--foreground-muted)"
            style={{ fontFamily: "var(--font-body)" }}
          >
            If your testing tool is slow, it becomes the bottleneck. You end up
            measuring the tool&apos;s limitations instead of your API&apos;s
            performance.
          </p>
          <p
            className="text-(--foreground-muted)"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Zoyla&apos;s Rust backend stays out of the way. Accurate timing,
            efficient resource usage, and a responsive UI — even under heavy
            load.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 text-center sm:px-8">
        <h2
          className="mb-4 text-2xl font-semibold text-[#e8e8e8]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Experience the speed
        </h2>
        <p
          className="mb-6 text-(--foreground-muted)"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Download Zoyla and see how fast load testing can be.
        </p>
        <DownloadButton variant="primary" />
      </section>

      {/* Related links */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <h3
          className="mb-4 text-sm font-medium tracking-wider text-(--muted) uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Related resources
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/throughput-vs-latency"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Throughput vs latency
          </Link>
          <Link
            href="/resources/requests-per-second-explained"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            RPS explained
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
