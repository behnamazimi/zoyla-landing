import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type HrProps = ComponentPropsWithoutRef<"hr">;
type TableProps = ComponentPropsWithoutRef<"table">;
type ThProps = ComponentPropsWithoutRef<"th">;
type TdProps = ComponentPropsWithoutRef<"td">;

function H1({ children, ...props }: HeadingProps) {
  return (
    <h1
      className="mt-12 mb-6 text-3xl font-semibold tracking-tight text-[#e8e8e8] first:mt-0"
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    >
      {children}
    </h1>
  );
}

function H2({ children, ...props }: HeadingProps) {
  return (
    <h2
      className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-[#e8e8e8]"
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    >
      {children}
    </h2>
  );
}

function H3({ children, ...props }: HeadingProps) {
  return (
    <h3
      className="mt-8 mb-3 text-xl font-medium text-[#e8e8e8]"
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    >
      {children}
    </h3>
  );
}

function H4({ children, ...props }: HeadingProps) {
  return (
    <h4
      className="mt-6 mb-2 text-lg font-medium text-[#e8e8e8]"
      style={{ fontFamily: "var(--font-display)" }}
      {...props}
    >
      {children}
    </h4>
  );
}

function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <p
      className="mb-5 leading-relaxed text-[#a0a0a0]"
      style={{ fontFamily: "var(--font-body)" }}
      {...props}
    >
      {children}
    </p>
  );
}

function UnorderedList({ children, ...props }: ListProps) {
  return (
    <ul
      className="mb-5 ml-6 list-disc space-y-2 text-[#a0a0a0]"
      style={{ fontFamily: "var(--font-body)" }}
      {...props}
    >
      {children}
    </ul>
  );
}

function OrderedList({ children, ...props }: ListProps) {
  return (
    <ol
      className="mb-5 ml-6 list-decimal space-y-2 text-[#a0a0a0]"
      style={{ fontFamily: "var(--font-body)" }}
      {...props}
    >
      {children}
    </ol>
  );
}

function ListItem({ children, ...props }: ListItemProps) {
  return (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  );
}

function Anchor({ children, href, ...props }: AnchorProps) {
  const isExternal = href?.startsWith("http");
  return (
    <a
      href={href}
      className="text-(--accent) underline decoration-[var(--accent)]/30 underline-offset-2 transition-colors hover:decoration-[var(--accent)]"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

function Blockquote({ children, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className="my-6 border-l-2 border-[var(--accent)] bg-[#141414] py-4 pr-4 pl-6 text-[#a0a0a0] italic"
      style={{ fontFamily: "var(--font-body)" }}
      {...props}
    >
      {children}
    </blockquote>
  );
}

function InlineCode({ children, ...props }: CodeProps) {
  return (
    <code
      className="rounded bg-[#1a1a1a] px-1.5 py-0.5 text-sm text-(--accent)"
      style={{ fontFamily: "var(--font-mono)" }}
      {...props}
    >
      {children}
    </code>
  );
}

function Pre({ children, ...props }: PreProps) {
  return (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-[#252525] bg-[#141414] p-4 text-sm"
      style={{ fontFamily: "var(--font-mono)" }}
      {...props}
    >
      {children}
    </pre>
  );
}

function Hr({ ...props }: HrProps) {
  return <hr className="my-10 border-t border-[#252525]" {...props} />;
}

function Table({ children, ...props }: TableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse text-sm text-[#a0a0a0]"
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

function Th({ children, ...props }: ThProps) {
  return (
    <th
      className="border-b border-[#252525] bg-[#141414] px-4 py-3 text-left font-medium text-[#e8e8e8]"
      style={{ fontFamily: "var(--font-mono)" }}
      {...props}
    >
      {children}
    </th>
  );
}

function Td({ children, ...props }: TdProps) {
  return (
    <td
      className="border-b border-[#1a1a1a] px-4 py-3"
      style={{ fontFamily: "var(--font-body)" }}
      {...props}
    >
      {children}
    </td>
  );
}

function Strong({ children, ...props }: ComponentPropsWithoutRef<"strong">) {
  return (
    <strong className="font-semibold text-[#e8e8e8]" {...props}>
      {children}
    </strong>
  );
}

function Em({ children, ...props }: ComponentPropsWithoutRef<"em">) {
  return (
    <em className="italic" {...props}>
      {children}
    </em>
  );
}

type ImgProps = ComponentPropsWithoutRef<"img">;

function Img({ src, alt }: ImgProps) {
  if (!src || typeof src !== "string") return null;

  return (
    <span className="my-6 block overflow-hidden rounded-lg border border-[#252525]">
      <Image
        src={src}
        alt={alt || ""}
        width={1200}
        height={675}
        className="h-auto w-full"
      />
    </span>
  );
}

export const mdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  a: Anchor,
  blockquote: Blockquote,
  code: InlineCode,
  pre: Pre,
  hr: Hr,
  table: Table,
  th: Th,
  td: Td,
  strong: Strong,
  em: Em,
  img: Img,
};
