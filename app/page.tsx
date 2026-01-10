import { Header, Footer } from "@/components/layout";
import { Hero, Features, DemoVideo } from "@/components/sections";
import { HeroAnimation } from "@/components/effects";
import { SITE_URL } from "@/lib/constants";

export default function Home() {
  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Zoyla Demo - HTTP Load Testing Made Simple",
    description:
      "Watch how easy it is to run your first load test with Zoyla. A quick demo showing the fast, lightweight HTTP load testing desktop app built with Rust.",
    thumbnailUrl: `${SITE_URL}/screenshot.png`,
    uploadDate: "2025-01-01",
    contentUrl: `${SITE_URL}/demo.mp4`,
    embedUrl: SITE_URL,
    duration: "PT1M30S",
    publisher: {
      "@type": "Organization",
      name: "Zoyla",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoStructuredData),
        }}
      />
      <HeroAnimation />
      <div className="hero-glow" />
      <Header />
      <Hero />
      <Features />
      <DemoVideo />
      <Footer />
    </>
  );
}
