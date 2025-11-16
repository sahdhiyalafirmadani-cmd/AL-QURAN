"use client";

import React, { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Image from "next/image";
import NavMenu from "../molecules/NavMenu";
import SearchOverlay from "../ atoms/SearchOverlay";
import MobileMenu from "../molecules/MobileMenu";
import { Theme } from "@/types/theme"; // import the shared type
import { themeClasses } from "@/utils/themeUtils"; // import helper styles

interface HeaderUpperProps {
  theme?: Theme; // light | dark
}

const HeaderUpper: React.FC<HeaderUpperProps> = ({ theme = "light" }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const t = themeClasses[theme]; // pick styles based on theme

  return (
    <>
      {/* Search Overlay */}
      <SearchOverlay open={searchOpen} setOpen={setSearchOpen} />

      <header
        className={`w-full ${t.bg} ${t.text} shadow-sm sticky top-0 z-50 transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          
          {/* ✅ Logo */}
          <a href="/" className="block">
            <Image
              src={
                theme === "dark"
                  ? "/assets/images/logo-white.svg" // your white logo for dark mode
                  : "/assets/images/logo.svg"
              }
              alt="Logo"
              width={160}
              height={48}
              priority
              className="block"
            />
          </a>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:block">
            <NavMenu theme ={theme} />
          </div>

          {/* ✅ Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-3 rounded-full border ${t.border} ${t.bg} ${t.text} hover:bg-[#1A8754] hover:text-white transition`}
              aria-label="Search"
            >
              <FaSearch />
            </button>

            {/* User Button */}
            <a
              href="/register"
              className={`p-3 rounded-full border ${t.border} ${t.text} hover:bg-[#1A8754] hover:text-white transition`}
            >
              <FaUser />
            </a>

            {/* Join Button */}
            <a
              href="/contact"
              className="bg-[#1A8754] text-white px-5 py-3 font-semibold rounded-md hover:bg-black transition"
            >
              Quick Join Now
            </a>
          </div>

          {/* ✅ Mobile Section */}
          <div className="flex md:hidden items-center gap-3">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-3 rounded-full border ${t.border} ${t.bg} ${t.text} hover:bg-[#1A8754] hover:text-white transition`}
            >
              <FaSearch />
            </button>

            {/* User Icon */}
            <a
              href="/register"
              className={`p-3 rounded-full border ${t.border} ${t.text} hover:bg-[#1A8754] hover:text-white transition`}
            >
              <FaUser />
            </a>

            {/* Hamburger Menu */}
            <MobileMenu theme={theme} />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderUpper;
