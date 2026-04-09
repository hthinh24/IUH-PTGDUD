"use client";

import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import SocialButtons from "./SocialButtons";
import Divider from "./Divider";

function NameFields({ firstName, setFirstName, lastName, setLastName }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm text-gray-700 mb-1">First name</label>
        <input
          type="text"
          placeholder="Input first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-pink-500 transition-colors placeholder:text-gray-400"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1">Last name</label>
        <input
          type="text"
          placeholder="Input last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-pink-500 transition-colors placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}

function EmailField({ email, setEmail }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">Email</label>
      <input
        type="email"
        placeholder="example.email@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-pink-500 transition-colors placeholder:text-gray-400"
      />
    </div>
  );
}

function PasswordField({ password, setPassword, showPassword, setShowPassword }) {
  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">Password</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter at least 8+ characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-pink-500 transition-colors placeholder:text-gray-400 pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}

function TermsCheckbox({ agreed, setAgreed }) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
        className="mt-1 w-4 h-4 accent-pink-500"
      />
      <span className="text-sm text-gray-600">
        By signing up, I agree with the{" "}
        <a href="#" className="text-pink-500 hover:underline">Terms of Use</a>{" "}
        &{" "}
        <a href="#" className="text-pink-500 hover:underline">Privacy Policy</a>
      </span>
    </label>
  );
}

function LoginLink({ onLoginClick }) {
  return (
    <p className="text-center text-sm text-gray-600">
      Already have an account?{" "}
      <button 
        onClick={onLoginClick}
        className="text-pink-500 hover:underline font-medium"
      >
        Log in
      </button>
    </p>
  );
}

export default function SignupDialog({ onLoginClick }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    console.log("Sign up:", { firstName, lastName, email, password, agreed });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign up</h1>
      
      <div className="space-y-4">
        <NameFields 
          firstName={firstName} 
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
        />
        <EmailField email={email} setEmail={setEmail} />
        <PasswordField 
          password={password} 
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <TermsCheckbox agreed={agreed} setAgreed={setAgreed} />
        
        <button 
          onClick={handleSubmit}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Sign up
        </button>
        
        <LoginLink onLoginClick={onLoginClick} />
        
        <Divider />
        
        <SocialButtons variant="row" />
      </div>
    </div>
  );
}
