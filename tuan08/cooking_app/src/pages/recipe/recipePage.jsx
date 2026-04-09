import { useState } from "react";
import RecipeHeader from "../../components/recipe/RecipeHeader";
import FilterPanel from "../../components/recipe/FilterPanel";
import ResultsPanel from "../../components/recipe/ResultsPanel";
import Footer from "../../components/home/Footer";

const allRecipes = [
  { id: 1, title: "Cucumber salad, cherry tomatoes", time: "32 minutes", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
  { id: 2, title: "Italian-style tomato salad", time: "32 minutes", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" },
  { id: 3, title: "Potato Salad", time: "32 minutes", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=300&fit=crop" },
  { id: 4, title: "Salad with cabbage and shrimp", time: "32 minutes", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" },
  { id: 5, title: "Five-color salad", time: "32 minutes", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop" },
  { id: 6, title: "Corn Salad", time: "32 minutes", image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop" },
  { id: 7, title: "Salad with cabbage and shrimp", time: "32 minutes", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop" },
  { id: 8, title: "Lotus delight salad", time: "32 minutes", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop" },
  { id: 9, title: "Avocado Salad", time: "32 minutes", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
];

export default function RecipesPage() {
  const [searchValue, setSearchValue] = useState("Salad");
  const [selectedTypes, setSelectedTypes] = useState(["grilled", "roasted"]);
  const [minTime, setMinTime] = useState(30);
  const [maxTime, setMaxTime] = useState(50);
  const [selectedRatings, setSelectedRatings] = useState([3, 2, 1]);
  const [sortBy, setSortBy] = useState("a-z");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  const handleTypeChange = (typeId) => {
    setSelectedTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((t) => t !== typeId)
        : [...prev, typeId]
    );
  };

  const handleTimeChange = (min, max) => {
    if (min < max) {
      setMinTime(min);
      setMaxTime(max);
    }
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const handleBookmark = (recipeId) => {
    setBookmarkedIds((prev) =>
      prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const handleApply = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <RecipeHeader searchValue={searchValue} onSearchChange={setSearchValue} />
      
      <main className="flex-1 pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto flex gap-6">
          {/* Left - Filter Panel */}
          <aside className="w-72 flex-shrink-0">
            <FilterPanel
              selectedTypes={selectedTypes}
              onTypeChange={handleTypeChange}
              minTime={minTime}
              maxTime={maxTime}
              onTimeChange={handleTimeChange}
              selectedRatings={selectedRatings}
              onRatingChange={handleRatingChange}
              onApply={handleApply}
            />
          </aside>

          {/* Right - Results Panel */}
          <ResultsPanel
            searchTerm={searchValue}
            totalResults={32}
            recipes={allRecipes}
            sortBy={sortBy}
            onSortChange={setSortBy}
            currentPage={currentPage}
            totalPages={11}
            onPageChange={setCurrentPage}
            bookmarkedIds={bookmarkedIds}
            onBookmark={handleBookmark}
          />
        </div>
      </main>

      <Footer fixed={false} />
    </div>
  );
}
