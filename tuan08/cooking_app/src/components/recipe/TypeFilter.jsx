"use client";

const cookingTypes = [
  { id: "pan-fried", label: "Pan-fried" },
  { id: "stir-fried", label: "Stir-fried" },
  { id: "grilled", label: "Grilled" },
  { id: "roasted", label: "Roasted" },
  { id: "sauteed", label: "Sauteed" },
  { id: "baked", label: "Baked" },
  { id: "steamed", label: "Steamed" },
  { id: "stewed", label: "Stewed" },
];

export default function TypeFilter({ selectedTypes, onTypeChange }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {cookingTypes.map((type) => (
        <label key={type.id} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedTypes.includes(type.id)}
            onChange={() => onTypeChange(type.id)}
            className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
          />
          <span className="text-sm text-gray-700">{type.label}</span>
        </label>
      ))}
    </div>
  );
}
