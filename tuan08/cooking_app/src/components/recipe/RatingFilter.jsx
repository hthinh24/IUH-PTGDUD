"use client";

import { Star } from "lucide-react";

export default function RatingFilter({ selectedRatings, onRatingChange }) {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="space-y-2">
      {ratings.map((rating) => (
        <label key={rating} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedRatings.includes(rating)}
            onChange={() => onRatingChange(rating)}
            className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          />
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
        </label>
      ))}
    </div>
  );
}
