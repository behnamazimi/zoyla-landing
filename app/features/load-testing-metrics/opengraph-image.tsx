import { ImageResponse } from "next/og";
import { OGImageLayout, ogStyles } from "@/components/og";

export const alt = "Load Testing Metrics - Zoyla";
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

      <h1 style={ogStyles.title}>Zoyla Shows Real-Time Metrics</h1>

      <p style={ogStyles.subtitle}>
        Monitor response times, throughput, and error rates in real-time.
      </p>
    </OGImageLayout>,
    {
      ...size,
    }
  );
}
