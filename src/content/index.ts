import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}

const RESOURCES_DIR = path.join(process.cwd(), "src/content/resources");

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(RESOURCES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(RESOURCES_DIR);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(RESOURCES_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const slug = file.replace(/\.mdx$/, "");

      return {
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        author: data.author || "",
        tags: data.tags || [],
        slug,
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(RESOURCES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "",
    tags: data.tags || [],
    slug,
    content,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(RESOURCES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(RESOURCES_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export { getReadingTime };
