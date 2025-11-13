"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterInput: React.FC = () => (
  <form className="flex items-center border-b border-green-500 pb-1">
    <input
      type="email"
      placeholder="email address"
      className="flex-grow bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none"
      required
    />
    <button
      type="submit"
      className="bg-yellow-400 text-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-all duration-300"
    >
      <FaPaperPlane />
    </button>
  </form>
);

export default NewsletterInput;
