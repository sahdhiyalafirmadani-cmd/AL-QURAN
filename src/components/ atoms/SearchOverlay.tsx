"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchOverlayProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ open, setOpen }) => {
  const [query, setQuery] = useState("");
  const [showError, setShowError] = useState(false);

  // Reset on open/close
  useEffect(() => {
    if (!open) {
      setQuery("");
      setShowError(false);
    }
  }, [open]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setShowError(true);
    } else {
      setShowError(false);
      console.log("Searching for:", query);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-white shadow-md flex flex-col justify-center h-[8rem]">
      {/* Content wrapper */}
      <div className="relative w-full flex justify-between items-start px-4 pt-4">
        {/* Left: Search input + button */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 flex-1"
        >
          <button
            type="submit"
            className="p-2 text-black text-xl"
            aria-label="Search"
          >
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search Here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-black text-lg border-b border-gray-400 focus:outline-none py-2"
          />
        </form>

        {/* Right: Close button */}
        <button
          onClick={() => setOpen(false)}
          className="text-black text-3xl ml-4"
          aria-label="Close Search"
        >
          &times;
        </button>
      </div>

      {/* Error message below input line */}
      {showError && (
        <div className="flex justify-center w-full px-6 mt-1">
          <div className="flex items-center bg-white border border-black px-3 py-1 rounded relative">
            {/* Triangle pointer */}
            <div className="absolute left-4 -top-2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-black-300"></div>
            <div className="absolute left-[15px] -top-[5px] w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-l-transparent border-r-transparent border-b-white"></div>

            {/* Orange exclamation */}
            <div className="w-5 h-5 bg-orange-500 flex items-center justify-center text-white font-bold mr-2">
              !
            </div>

            <span className="text-black">Please fill out this field</span>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default SearchOverlay;
