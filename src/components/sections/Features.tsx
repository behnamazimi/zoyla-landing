import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface FeatureCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  delay?: number;
  className?: string;
  size?: "small" | "large";
}

function FeatureCard({
  category,
  title,
  description,
  href,
  delay = 0,
  className = "",
  size = "small",
}: FeatureCardProps) {
  const gradients: Record<string, string> = {
    Privacy: "from-[#141414] to-[#0f0f0f]",
    Performance: "from-[#1a1a1a] to-[#101010]",
    Insights: "from-[#151515] to-[#0d0d0d]",
    Workflow: "from-[#121212] to-[#0a0a0a]",
  };

  const gradient = gradients[category] || gradients.Privacy;

  return (
    <AnimatedSection delay={delay} className={className}>
      <Link
        href={href}
        className={`block h-full rounded-2xl bg-linear-to-br p-8 ${gradient} border border-[#252525] transition-colors hover:border-[#454545]`}
      >
        <div
          className="mb-4 text-xs tracking-wider text-[#b8ff57] uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {category}
        </div>
        <h3
          className="mb-3 text-2xl font-semibold text-[#e8e8e8]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p
          className={`leading-relaxed text-(--foreground-muted) ${size === "small" ? "text-sm" : ""}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {description}
        </p>
      </Link>
    </AnimatedSection>
  );
}

const features = [
  {
    category: "Performance",
    title: "Rust-powered",
    description:
      "Fast, efficient backend with minimal overhead. Built with Tauri.",
    href: "/features/rust-powered-performance",
    delay: 0,
    className: "lg:col-span-2",
    size: "small" as const,
  },
  {
    category: "Privacy",
    title: "Local-first",
    description:
      "No cloud, no account, no telemetry. Runs entirely on your machine. Your test data stays with you.",
    href: "/features/local-first-load-testing",
    delay: 100,
    size: "large" as const,
  },
  {
    category: "Insights",
    title: "Real metrics",
    description:
      "RPS, latency percentiles, throughput charts with live updates.",
    href: "/features/load-testing-metrics",
    delay: 150,
    size: "small" as const,
  },
  {
    category: "Workflow",
    title: "History & Export",
    description:
      "Full history of all your tests—never lose previous results. Export to JSON and CSV for further analysis.",
    href: "/features/test-history-export",
    delay: 200,
    className: "lg:col-span-2",
    size: "large" as const,
  },
];

export function Features() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-8 py-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
