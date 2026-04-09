"use client";

import { Bookmark } from "lucide-react";

export default function RecipeCard({ title, time, image, isBookmarked, onBookmark }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-gray-800 text-sm leading-tight">{title}</h3>
          <button
            onClick={onBookmark}
            className="flex-shrink-0 text-gray-400 hover:text-pink-500 transition-colors"
          >
            <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-pink-500 text-pink-500" : ""}`} />
          </button>
        </div>
        <p className="text-pink-500 text-xs mt-1">{time}</p>
      </div>
    </div>
  );
}
