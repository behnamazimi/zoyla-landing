import { Header, Footer } from "@/components/layout";
import { Hero, Features } from "@/components/sections";
import { HeroAnimation } from "@/components/effects";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#080808]">
      <HeroAnimation />
      <div className="hero-glow" />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
