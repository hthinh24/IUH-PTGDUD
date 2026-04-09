"use client";

import { ChevronUp } from "lucide-react";

export default function FilterSection({ title, children, defaultOpen = true }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button className="w-full flex items-center justify-between text-left">
        <span className="font-semibold text-gray-800">{title}</span>
        <ChevronUp className="w-5 h-5 text-pink-500" />
      </button>
      <div className="mt-3">{children}</div>
    </div>
  );
}
