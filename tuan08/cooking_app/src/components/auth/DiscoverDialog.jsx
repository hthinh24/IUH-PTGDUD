"use client";

import { X } from "lucide-react";

function DialogHeader({ onClose }) {
  return (
    <div className="flex justify-end p-4">
      <button 
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
}

function DialogTitle({ title, subtitle }) {
  return (
    <div className="text-center px-8">
      <h1 className="text-3xl font-bold text-pink-500 mb-2">{title}</h1>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  );
}

function DialogImage({ src, alt }) {
  return (
    <div className="px-8 py-6">
      <div className="rounded-xl overflow-hidden">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-64 object-cover"
        />
      </div>
    </div>
  );
}

function PaginationDots({ current = 0, total = 3 }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i}
          className={`w-2 h-2 rounded-full transition-colors ${
            i === current ? "bg-pink-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function DialogActions({ onNext, onSkip }) {
  return (
    <div className="px-8 pb-8 space-y-3">
      <button 
        onClick={onNext}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 rounded-lg transition-colors"
      >
        Next
      </button>
      <button 
        onClick={onSkip}
        className="w-full text-pink-500 hover:text-pink-600 font-medium py-2 transition-colors"
      >
        Skip
      </button>
    </div>
  );
}

export default function DiscoverDialog({ onClose, onNext, onSkip }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
      <DialogHeader onClose={onClose} />
      <DialogTitle 
        title="Discover Chefify" 
        subtitle="Easy and delicious cooking instructions right here. Start exploring now!"
      />
      <DialogImage 
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
        alt="Delicious food dishes"
      />
      <PaginationDots current={0} total={3} />
      <div className="py-4" />
      <DialogActions onNext={onNext} onSkip={onSkip} />
    </div>
  );
}
