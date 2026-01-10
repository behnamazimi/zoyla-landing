import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Shield, Server, Lock, WifiOff } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Local-First – Zoyla",
  description:
    "Your data stays on your machine. No cloud, no account, no telemetry. Complete privacy for your load testing.",
  alternates: {
    canonical: `${SITE_URL}/features/local-first-load-testing`,
  },
  openGraph: {
    title: "Local-First – Zoyla",
    description:
      "Your data stays on your machine. No cloud, no account, no telemetry.",
    url: `${SITE_URL}/features/local-first-load-testing`,
    siteName: "Zoyla",
    type: "website",
  },
};

const benefits = [
  {
    icon: Lock,
    title: "Credentials stay safe",
    description:
      "API keys and tokens never leave your machine. Test with real credentials without security risks.",
  },
  {
    icon: Server,
    title: "Test internal services",
    description:
      "Reach anything your machine can reach. No need to expose internal APIs to the internet.",
  },
  {
    icon: Shield,
    title: "Compliance simplified",
    description:
      "Data doesn't go anywhere. No external servers means simpler compliance for regulated industries.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    description:
      "Test against localhost without internet. Perfect for development on planes or spotty wifi.",
  },
];

export default function LocalFirstPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-20 pb-16 text-center sm:px-8">
        <div
          className="mb-6 inline-block rounded-full border border-[#252525] bg-[#141414] px-4 py-1.5 text-xs tracking-wider text-[#b8ff57] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Privacy
        </div>
        <h1
          className="mb-6 text-4xl font-semibold tracking-tight text-[#e8e8e8] sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your data stays with you
        </h1>
        <p
          className="mx-auto mb-10 max-w-2xl text-lg text-(--foreground-muted) sm:text-xl"
          style={{ fontFamily: "var(--font-body)" }}
        >
          No cloud. No account. No telemetry. Everything runs locally on your
          machine. Your test configurations, credentials, and results never
          leave your computer.
        </p>
        <DownloadButton variant="primary" />
      </section>

      {/* Screenshot */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-xl border border-[#252525] bg-[#0d0d0d] shadow-2xl">
          <Image
            src="/screenshot.png"
            alt="Zoyla running locally — no cloud required"
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

      {/* How it works */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <h2
          className="mb-8 text-center text-2xl font-semibold text-[#e8e8e8] sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          How it works
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
                Requests go directly to your target
              </h3>
              <p
                className="text-sm text-(--foreground-muted)"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Your machine sends HTTP requests straight to your endpoint. No
                proxy servers, no intermediaries.
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
                Results calculated locally
              </h3>
              <p
                className="text-sm text-(--foreground-muted)"
                style={{ fontFamily: "var(--font-body)" }}
              >
                All metrics — latency, throughput, errors — computed on your
                machine in real-time.
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
                Data stored on your disk
              </h3>
              <p
                className="text-sm text-(--foreground-muted)"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Test history saved locally. Export when you want. Delete when
                you want. You&apos;re in control.
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
            Ready for private load testing?
          </h2>
          <p
            className="mb-6 text-(--foreground-muted)"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Download Zoyla and keep your data on your machine.
          </p>
          <DownloadButton variant="primary" />
        </div>
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
            href="/resources/local-first-testing"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Why local-first matters
          </Link>
          <Link
            href="/resources/desktop-vs-cli-load-testing"
            className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-4 py-2 text-sm text-[#a0a0a0] transition-colors hover:border-[#353535] hover:text-[#e8e8e8]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Desktop vs CLI tools
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
