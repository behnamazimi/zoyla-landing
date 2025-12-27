import { ImageResponse } from "next/og";
import { OGImageLayout, ogStyles } from "@/components/og";

export const alt = "Rust-Powered Performance - Zoyla";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <OGImageLayout variant="left-aligned">
      {/* Category tag */}
      <div
        style={{
          display: "flex",
          marginBottom: 24,
        }}
      >
        <span style={ogStyles.tag}>Feature</span>
      </div>

      {/* Title */}
      <h1 style={ogStyles.title}>Zoyla is Rust-Powered</h1>

      {/* Subtitle */}
      <p style={ogStyles.subtitle}>
        Built with Rust for maximum speed and efficiency. Generate thousands of
        concurrent requests with minimal resource usage.
      </p>
    </OGImageLayout>,
    {
      ...size,
    }
  );
}
