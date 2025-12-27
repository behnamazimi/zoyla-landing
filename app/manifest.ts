import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zoyla – HTTP Load Testing Simple and Fast",
    short_name: "Zoyla",
    description:
      "Fast, lightweight HTTP load testing desktop app built with Rust for quick, reliable performance insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#c8ff00",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
