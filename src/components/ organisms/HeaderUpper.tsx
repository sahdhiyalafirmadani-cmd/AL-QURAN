"use client";

import React, { useState } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Image from "next/image";
import NavMenu from "../molecules/NavMenu";
import SearchOverlay from "../ atoms/SearchOverlay";
import MobileMenu from "../molecules/MobileMenu";
// ✅ new mobile menu import

const HeaderUpper = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Search Overlay */}
      <SearchOverlay open={searchOpen} setOpen={setSearchOpen} />

     <header className="w-full bg-white shadow-sm  sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          
          {/* ✅ Logo */}
          <a href="/" className="block">
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              width={160}
              height={48}
              priority
              className="block"
            />
          </a>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:block">
            <NavMenu />
          </div>

          {/* ✅ Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-3 rounded-full border border-gray-400 bg-white text-black hover:bg-[#1A8754] hover:text-white transition"
              aria-label="Search"
            >
              <FaSearch />
            </button>

            {/* User Button */}
            <a
              href="/register"
              className="p-3 rounded-full border border-gray-400 text-black hover:bg-[#1A8754] hover:text-white transition"
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

          {/* ✅ Mobile Section (only visible on small screens) */}
          <div className="flex md:hidden items-center gap-3">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-3 rounded-full border border-gray-300 bg-white text-black hover:bg-[#1A8754] hover:text-white transition"
            >
              <FaSearch />
            </button>

            {/* User Icon */}
            <a
              href="/register"
              className="p-3 rounded-full border border-gray-300 text-black hover:bg-[#1A8754] hover:text-white transition"
            >
              <FaUser />
            </a>

            {/* Hamburger menu icon */}
            <MobileMenu /> {/* ✅ integrated new responsive mobile menu */}
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderUpper;
