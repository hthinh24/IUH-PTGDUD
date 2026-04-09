"use client";

export default function TimeFilter({ minTime, maxTime, onTimeChange }) {
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{minTime} minutes</span>
        <span>{maxTime} minutes</span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-pink-500 rounded-full"
          style={{
            left: `${((minTime - 10) / 80) * 100}%`,
            right: `${100 - ((maxTime - 10) / 80) * 100}%`,
          }}
        />
        <input
          type="range"
          min="10"
          max="90"
          value={minTime}
          onChange={(e) => onTimeChange(Number(e.target.value), maxTime)}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-pink-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
        />
        <input
          type="range"
          min="10"
          max="90"
          value={maxTime}
          onChange={(e) => onTimeChange(minTime, Number(e.target.value))}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-pink-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>
    </div>
  );
}
