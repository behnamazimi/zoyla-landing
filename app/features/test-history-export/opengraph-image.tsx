import { ImageResponse } from "next/og";
import { OGImageLayout, ogStyles } from "@/components/og";

export const alt = "Test History & Export - Zoyla";
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
      <h1 style={ogStyles.title}>Zoyla Saves Your Test History</h1>

      {/* Subtitle */}
      <p style={ogStyles.subtitle}>
        Track all your test runs with detailed history. Export results to CSV,
        JSON, or integrate with your CI/CD pipeline.
      </p>
    </OGImageLayout>,
    {
      ...size,
    }
  );
}
