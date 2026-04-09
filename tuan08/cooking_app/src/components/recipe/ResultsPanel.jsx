"use client";

import { ChevronDown } from "lucide-react";
import RecipeCard from "./RecipeCard";
import Pagination from "./Pagination";

export default function ResultsPanel({
  searchTerm,
  totalResults,
  recipes,
  sortBy,
  onSortChange,
  currentPage,
  totalPages,
  onPageChange,
  bookmarkedIds,
  onBookmark,
}) {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {searchTerm} <span className="font-normal text-gray-500">({totalResults})</span>
        </h1>
        
        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="time-asc">Time: Low to High</option>
            <option value="time-desc">Time: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            time={recipe.time}
            image={recipe.image}
            isBookmarked={bookmarkedIds.includes(recipe.id)}
            onBookmark={() => onBookmark(recipe.id)}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
