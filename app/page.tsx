import { Header, Footer } from "@/components/layout";
import { Hero, Features } from "@/components/sections";
import { HeroAnimation } from "@/components/effects";

export default function Home() {
  return (
    <>
      <HeroAnimation />
      <div className="hero-glow" />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
