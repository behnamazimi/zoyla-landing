import type { MetadataRoute } from "next";
import { getAllPosts } from "@/content";
import { SITE_URL } from "@/lib/constants";

const featurePages = [
  { slug: "local-first-load-testing", title: "Local-First Load Testing" },
  { slug: "rust-powered-performance", title: "Rust-Powered Performance" },
  { slug: "load-testing-metrics", title: "Load Testing Metrics" },
  { slug: "test-history-export", title: "Test History & Export" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const resourcePages = posts.map((post) => ({
    url: `${SITE_URL}/resources/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const featureSitemapPages = featurePages.map((feature) => ({
    url: `${SITE_URL}/features/${feature.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...featureSitemapPages,
    ...resourcePages,
  ];
}
