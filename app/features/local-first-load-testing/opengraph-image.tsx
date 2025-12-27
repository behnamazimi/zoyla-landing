import { ImageResponse } from "next/og";
import { OGImageLayout, ogStyles } from "@/components/og";

export const alt = "Local-First Load Testing - Zoyla";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <OGImageLayout variant="left-aligned">
      <div
        style={{
          display: "flex",
          marginBottom: 24,
        }}
      >
        <span style={ogStyles.tag}>Feature</span>
      </div>

      <h1 style={ogStyles.title}>Zoyla is Local-First</h1>

      <p style={ogStyles.subtitle}>
        Your data stays on your machine. No cloud, no account, no telemetry.
      </p>
    </OGImageLayout>,
    {
      ...size,
    }
  );
}
