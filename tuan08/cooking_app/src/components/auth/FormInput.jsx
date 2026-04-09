"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function FormInput({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange,
  focused = false 
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(focused);
  
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full">
      <div 
        className={`relative border rounded-lg px-4 py-3 transition-colors ${
          isFocused ? "border-pink-500" : "border-gray-200"
        }`}
      >
        <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">
          {label}
        </label>
        <div className="flex items-center">
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
