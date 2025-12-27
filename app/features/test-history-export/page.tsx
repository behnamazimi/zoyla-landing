import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { History, Download, GitCompare, FolderOpen } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "History & Export – Zoyla",
  description:
    "Never lose a test result. Full history of all your tests, with export to JSON and CSV for analysis and reporting.",
  openGraph: {
    title: "History & Export – Zoyla",
    description:
      "Never lose a test result. Full history with JSON and CSV export.",
    url: `${SITE_URL}/features/test-history-export`,
    siteName: "Zoyla",
    type: "website",
  },
};

const features = [
  {
    icon: History,
    title: "Automatic history",
    description:
      "Every test saved automatically. No manual exports needed. Your testing history builds over time.",
  },
  {
    icon: GitCompare,
    title: "Compare results",
    description:
      "Run a test, make changes, run again. Compare side by side to see if your optimization worked.",
  },
  {
    icon: Download,
    title: "Export anywhere",
    description:
      "JSON for programmatic use. CSV for spreadsheets. Take your data wherever you need it.",
  },
  {
    icon: FolderOpen,
    title: "Local storage",
    description:
      "Data stays on your machine. Delete when you want. Export when you want. You're in control.",
  },
];

const exportFormats = [
  {
    format: "JSON",
    useCase: "Full detail for scripts, dashboards, or archiving",
  },
  {
    format: "CSV",
    useCase: "Spreadsheets, reports, sharing with stakeholders",
  },
];

export default function HistoryExportPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-20 pb-16 text-center sm:px-8">
        <div
          className="mb-6 inline-block rounded-full border border-[#252525] bg-[#141414] px-4 py-1.5 text-xs tracking-wider text-[#b8ff57] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Workflow
        </div>
        <h1
          className="mb-6 text-4xl font-semibold tracking-tight text-[#e8e8e8] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Never lose a result
        </h1>
        <p
          className="mx-auto mb-10 max-w-2xl text-lg text-[#6b6b6b] sm:text-xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Every test you run is saved. Compare results over time. Export to JSON
          or CSV whenever you need to share or analyze further.
        </p>
        <DownloadButton variant="primary" />
      </section>

      {/* Screenshot */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-xl border border-[#252525] bg-[#0d0d0d] shadow-2xl">
          <Image
            src="/ss-4.png"
            alt="Zoyla test history showing multiple test runs"
            width={1200}
            height={675}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* Features grid */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d]/50 p-6"
            >
              <feature.icon className="mb-4 h-8 w-8 text-[#b8ff57]" />
              <h3
                className="mb-2 text-lg font-medium text-[#e8e8e8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-[#6b6b6b]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Export formats */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <h2
          className="mb-8 text-center text-2xl font-semibold text-[#e8e8e8] sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Export formats
        </h2>
        <div className="space-y-4">
          {exportFormats.map((item) => (
            <div
              key={item.format}
              className="flex items-center gap-4 rounded-lg border border-[#1a1a1a] bg-[#0d0d0d]/50 p-4"
            >
              <div
                className="shrink-0 rounded bg-[#b8ff57]/10 px-3 py-1 text-sm font-medium text-[#b8ff57]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.format}
              </div>
              <p
                className="text-sm text-[#6b6b6b]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.useCase}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <h2
          className="mb-8 text-center text-2xl font-semibold text-[#e8e8e8] sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          What you can do
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b8ff57] text-sm font-semibold text-[#0a0a0a]">
              1
            </div>
            <div>
              <h3
                className="mb-1 font-medium text-[#e8e8e8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Track performance over time
              </h3>
              <p
                className="text-sm text-[#6b6b6b]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Run the same test weekly. Watch for trends. Catch regressions
                before users notice.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b8ff57] text-sm font-semibold text-[#0a0a0a]">
              2
            </div>
            <div>
              <h3
                className="mb-1 font-medium text-[#e8e8e8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Validate optimizations
              </h3>
              <p
                className="text-sm text-[#6b6b6b]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Test before. Optimize. Test after. Compare the numbers. Prove it
                worked.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b8ff57] text-sm font-semibold text-[#0a0a0a]">
              3
            </div>
            <div>
              <h3
                className="mb-1 font-medium text-[#e8e8e8]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Share with your team
              </h3>
              <p
                className="text-sm text-[#6b6b6b]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Export to CSV, drop in a report. Everyone can see the numbers
                without installing anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 text-center sm:px-8">
        <div className="rounded-2xl border border-[#252525] bg-[#141414] p-8 sm:p-12">
          <h2
            className="mb-4 text-2xl font-semibold text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start building your history
          </h2>
          <p
            className="mb-6 text-[#6b6b6b]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Download Zoyla and never lose a test result again.
          </p>
          <DownloadButton variant="primary" />
        </div>
      </section>

      {/* Related links */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <h3
          className="mb-4 text-sm font-medium tracking-wider text-[#6b6b6b] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Related resources
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources/performance-baselines"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Setting baselines
          </Link>
          <Link
            href="/resources/continuous-performance-testing"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Continuous testing
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
