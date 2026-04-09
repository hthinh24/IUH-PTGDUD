export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          {/* About Us */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">About Us</h4>
            <p className="text-gray-600 text-xs mb-3">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-1.5 text-xs border border-gray-300 rounded-md outline-none focus:border-pink-500"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-3 py-1.5 rounded-md transition-colors">
                Send
              </button>
            </div>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Learn More</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Our Cooks</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">See Our Features</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">FAQ</a></li>
            </ul>
            <h4 className="font-semibold text-gray-800 mt-3 mb-2">Shop</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Gift Subscription</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Send Us Feedback</a></li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h4 className="font-semibold text-pink-500 mb-2">Recipes</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">What to Cook This Week</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Pasta</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Dinner</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Healthy</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Vegetarian</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Vegan</a></li>
              <li><a href="#" className="text-gray-600 text-xs hover:text-pink-500">Christmas</a></li>
            </ul>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="font-bold text-gray-800">Chefify</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              2023 Chefify Company · Terms of Service · Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
