"use client";

import { Menu } from "lucide-react";
import FilterSection from "./FilterSection";
import TypeFilter from "./TypeFilter";
import TimeFilter from "./TimeFilter";
import RatingFilter from "./RatingFilter";

export default function FilterPanel({
  selectedTypes,
  onTypeChange,
  minTime,
  maxTime,
  onTimeChange,
  selectedRatings,
  onRatingChange,
  onApply,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 w-full">
      {/* Header */}
      <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
        <Menu className="w-5 h-5 text-gray-600" />
        <span className="font-bold text-gray-800 uppercase tracking-wide">Filters</span>
      </div>

      {/* Type Filter */}
      <FilterSection title="Type">
        <TypeFilter selectedTypes={selectedTypes} onTypeChange={onTypeChange} />
      </FilterSection>

      {/* Time Filter */}
      <FilterSection title="Time">
        <TimeFilter minTime={minTime} maxTime={maxTime} onTimeChange={onTimeChange} />
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection title="Rating">
        <RatingFilter selectedRatings={selectedRatings} onRatingChange={onRatingChange} />
      </FilterSection>

      {/* Apply Button */}
      <button
        onClick={onApply}
        className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2.5 rounded-lg transition-colors"
      >
        Apply
      </button>
    </div>
  );
}
