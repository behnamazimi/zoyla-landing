import { ImageResponse } from "next/og";
import { OGImageLayout, WoodpeckerLogo, ogStyles } from "@/components/og";

export const alt = "Zoyla - Local-First HTTP Load Testing";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <OGImageLayout variant="centered">
      {/* Logo + Name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <WoodpeckerLogo size={200} />
      </div>

      {/* Tagline */}
      <h1
        style={{
          fontSize: 48,
          fontWeight: 500,
          color: "#e8e8e8",
          lineHeight: 1.3,
          textAlign: "center",
          maxWidth: "80%",
          marginBottom: 24,
        }}
      >
        Zoyla
      </h1>

      {/* Description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <span
          style={{
            fontSize: 24,
            color: "#868484",
            textAlign: "center",
          }}
        >
          ⚡️ Fast, lightweight HTTP load testing app built with Rust
        </span>
        <span
          style={{
            fontSize: 24,
            color: "#868484",
            textAlign: "center",
          }}
        >
          for quick, reliable performance insights
        </span>
      </div>

      {/* Feature pills */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 40,
        }}
      >
        <span style={ogStyles.featurePill}>⭐ 10+ Stars on GitHub</span>
        <span style={ogStyles.featurePill}>🦀 Rust-Powered</span>
        <span style={ogStyles.featurePill}>💚 Free</span>
      </div>
    </OGImageLayout>,
    {
      ...size,
    }
  );
}
