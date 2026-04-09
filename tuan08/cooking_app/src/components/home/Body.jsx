import { Bookmark } from "lucide-react";

const summerRecipes = [
  { id: 1, title: "Italian-style tomato", time: "14 minutes", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop" },
  { id: 2, title: "Spaghetti with vegetables and shrimp", time: "15 minutes", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=300&h=300&fit=crop" },
  { id: 3, title: "Lotus delight salad", time: "20 minutes", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop" },
  { id: 4, title: "Snack cakes", time: "21 minutes", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop" },
];

const videoRecipes = [
  { id: 1, title: "Salad with cabbage and shrimp", time: "32 minutes", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop" },
  { id: 2, title: "Salad of cove beans, shrimp and potatoes", time: "20 minutes", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=300&fit=crop" },
  { id: 3, title: "Sunny-side up fried eggs", time: "15 minutes", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&h=300&fit=crop" },
  { id: 4, title: "Lotus delight salad", time: "20 minutes", image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300&h=300&fit=crop" },
];

const editorPicks = [
  {
    id: 1,
    title: "Stuffed sticky rice ball",
    time: "34 minutes",
    author: "Jennifer King",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    description: "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Strawberry smoothie",
    time: "40 minutes",
    author: "Matthew Martinez",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    description: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Latte Art",
    time: "19 minutes",
    author: "Sarah Hill",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    description: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    title: "Butter fried noodles",
    time: "16 minutes",
    author: "Julia Lopez",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
    description: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=200&fit=crop",
  },
];

function RecipeCard({ title, time, image }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-800 text-sm leading-tight">{title}</h3>
          <button className="text-gray-400 hover:text-pink-500 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
        <p className="text-pink-500 text-xs mt-1">{time}</p>
      </div>
    </div>
  );
}

function EditorPickCard({ title, time, author, authorImage, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex gap-4 p-4">
      <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
          <button className="text-gray-400 hover:text-pink-500 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
        <p className="text-pink-500 text-xs">{time}</p>
        <div className="flex items-center gap-2 mt-2">
          <img src={authorImage} alt={author} className="w-6 h-6 rounded-full object-cover" />
          <span className="text-gray-600 text-xs">{author}</span>
        </div>
        <p className="text-gray-500 text-xs mt-2 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <main className="pt-16 pb-48 overflow-y-auto">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-200 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=600&fit=crop"
          alt="Chef cooking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        
        {/* Recipe Card Overlay */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-72 shadow-lg">
          <span className="inline-block bg-yellow-400 text-gray-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
            Recipe of the day
          </span>
          <h2 className="text-pink-500 font-bold text-xl mb-2">Salad Caprese</h2>
          <p className="text-gray-600 text-sm mb-4">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-500 text-lg">🥗</span>
            </div>
            <span className="text-gray-700 text-sm font-medium">Salad Caprese</span>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors flex items-center gap-2">
            View now
            <span>→</span>
          </button>
        </div>
      </section>

      {/* Summer Recipes Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-pink-500 font-bold text-2xl text-center mb-2">This Summer Recipes</h2>
        <p className="text-gray-500 text-center mb-8">We have all your Independence Day sweets covered.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {summerRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>

      {/* Recipes With Videos Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-pink-500 font-bold text-2xl text-center mb-2">Recipes With Videos</h2>
        <p className="text-gray-500 text-center mb-8">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {videoRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-pink-500 font-bold text-2xl text-center mb-2">Editor&apos;s pick</h2>
        <p className="text-gray-500 text-center mb-8">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {editorPicks.map((recipe) => (
            <EditorPickCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}
