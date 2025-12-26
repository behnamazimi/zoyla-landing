"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`group flex cursor-pointer items-center gap-3 rounded-md border border-[#252525] bg-[#141414] px-4 py-2.5 transition-colors hover:border-[#353535] ${className}`}
    >
      <code className="text-sm text-[#a0a0a0] transition-colors group-hover:text-[#e8e8e8]">
        {text}
      </code>
      <span className="flex h-5 w-5 items-center justify-center text-[#6b6b6b] transition-colors group-hover:text-[#b8ff57]">
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </span>
    </button>
  );
}
