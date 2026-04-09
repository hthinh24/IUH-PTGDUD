"use client";

import { useState } from "react";
import { X } from "lucide-react";
import SocialButtons from "./SocialButtons";
import Divider from "./Divider";

function LoginImage() {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=500&h=600&fit=crop"
        alt="Delicious meal"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-teal-500/60" />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <p className="text-white text-2xl font-medium text-center italic leading-relaxed">
          &quot;Embrace the art of cooking, where flavors come alive!&quot;
        </p>
      </div>
    </div>
  );
}

function LoginForm({ email, setEmail, onSubmit }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
        <p className="text-gray-500 text-sm">Enter your email to log in.</p>
      </div>
      
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-pink-500 transition-colors"
        />
      </div>
      
      <button 
        onClick={onSubmit}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Continue
      </button>
    </div>
  );
}

function TermsText() {
  return (
    <p className="text-center text-xs text-gray-500">
      By continuing, you agree to the updated{" "}
      <a href="#" className="text-pink-500 hover:underline">Terms of Sale</a>,{" "}
      <a href="#" className="text-pink-500 hover:underline">Terms of Service</a>, and{" "}
      <a href="#" className="text-pink-500 hover:underline">Privacy Policy</a>.
    </p>
  );
}

export default function LoginDialog({ onClose }) {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Login with email:", email);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden">
      <div className="flex">
        {/* Left - Image */}
        <div className="hidden md:block w-1/2 p-4">
          <LoginImage />
        </div>
        
        {/* Right - Form */}
        <div className="flex-1 p-8 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="space-y-6">
            <LoginForm email={email} setEmail={setEmail} onSubmit={handleSubmit} />
            <Divider />
            <TermsText />
            <SocialButtons variant="full" />
          </div>
        </div>
      </div>
    </div>
  );
}
