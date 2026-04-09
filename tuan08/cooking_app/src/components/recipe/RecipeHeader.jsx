"use client";

import { Search, Bookmark } from "lucide-react";

export default function RecipeHeader({ searchValue, onSearchChange }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-pink-500">Chefify</span>
        </a>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search recipes..."
            className="bg-transparent text-sm text-gray-600 outline-none w-full"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">What to cook</a>
          <a href="/recipes" className="text-sm text-pink-500 font-medium">Recipes</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Ingredients</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Occasions</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About Us</a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 text-pink-500 hover:text-pink-600">
            <Bookmark className="w-4 h-4" />
            <span className="text-sm font-medium">Your Recipe Box</span>
          </a>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-200">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
