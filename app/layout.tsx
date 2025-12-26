import type { Metadata } from "next";
import { JetBrains_Mono, DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Zoyla – HTTP Load Testing",
  description:
    "Fast, lightweight HTTP load testing desktop app built with Rust. Get quick, reliable performance insights without the complexity.",
  keywords: [
    "load testing",
    "HTTP",
    "performance testing",
    "Rust",
    "desktop app",
    "API testing",
    "benchmarking",
  ],
  authors: [{ name: "Behnam Azimi" }],
  openGraph: {
    title: "Zoyla – HTTP Load Testing",
    description:
      "Fast, lightweight HTTP load testing desktop app built with Rust for quick, reliable performance insights.",
    url: "https://github.com/behnamazimi/zoyla",
    siteName: "Zoyla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoyla – HTTP Load Testing",
    description:
      "Fast, lightweight HTTP load testing desktop app built with Rust.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} ${dmSans.variable} ${sourceSerif.variable} bg-[#0a0a0a] text-[#e8e8e8] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
