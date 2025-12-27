import { ImageResponse } from "next/og";
import { OGImageLayout, ogStyles } from "@/components/og";

export const alt = "Zoyla Resource";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;

  // Convert slug to readable title
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return new ImageResponse(
    <OGImageLayout variant="left-aligned">
      {/* Category tag */}
      <div
        style={{
          display: "flex",
          marginBottom: 24,
        }}
      >
        <span style={ogStyles.tag}>Resources</span>
      </div>

      {/* Title */}
      <h1 style={ogStyles.title}>{title}</h1>

      {/* Subtitle */}
      <p style={ogStyles.subtitle}>HTTP Load Testing Guide by Zoyla</p>
    </OGImageLayout>,
    {
      ...size,
    }
  );
}
