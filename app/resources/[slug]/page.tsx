import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, getReadingTime } from "@/content";
import { ArticleLayout, Header, Footer } from "@/components/layout";
import { mdxComponents } from "@/components/mdx";
import { SITE_URL } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Not Found – Zoyla",
    };
  }

  return {
    title: `${post.title} – Zoyla`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/resources/${slug}`,
      siteName: "Zoyla",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.content);

  return (
    <>
      <Header />

      {/* Article */}
      <ArticleLayout meta={post} readingTime={readingTime}>
        <MDXRemote source={post.content} components={mdxComponents} />
      </ArticleLayout>

      <Footer />
    </>
  );
}
