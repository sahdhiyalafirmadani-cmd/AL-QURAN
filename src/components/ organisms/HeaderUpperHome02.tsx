"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import Image from "next/image";
import NavMenu from "../molecules/NavMenu";
import SearchOverlay from "../ atoms/SearchOverlay";
import MobileMenuHome02 from "../molecules/MobileMenuHome02";

export default function HeaderUpperHome02() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyOffset, setStickyOffset] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setStickyOffset(headerRef.current.offsetTop);
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY >= stickyOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyOffset]);

  return (
    <>
      <SearchOverlay open={searchOpen} setOpen={setSearchOpen} />

      {/* Placeholder to prevent layout jump */}
      <div style={{ height: isSticky ? "120px" : "0px" }}></div>

      <div
        ref={headerRef}
        className={`w-full flex justify-center z-50 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 shadow-md bg-white" : "relative"
        }`}
      >
        <div className="max-w-[1340px] w-full rounded-xl shadow-md flex items-center justify-between bg-white h-[120px]">
          {/* Left Logo Box */}
          <div className="logo-box flex-shrink-0 relative w-[220px] h-full rounded-l-xl flex items-center justify-center overflow-hidden bg-[#002414]">
            <div
              className="absolute w-34 h-34 left-5 bg-[url('/assets/images/icons/logo-flag.png')] bg-no-repeat bg-center bg-contain opacity-70"
            ></div>
            <a href="/" className="relative z-10">
              <Image
                src="/assets/images/logo-2.svg"
                alt="Logo"
                width={160}
                height={60}
                priority
              />
            </a>
          </div>

          {/* Middle Nav */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavMenu />
          </div>

          {/* Right Section */}
          <div className="flex items-center h-full">
            {/* Desktop Right (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-4 bg-[#1A8754] rounded-r-xl px-6 py-6 h-full">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-4 rounded-full bg-[#e5f3ed] text-black hover:bg-[#ffd050] transition"
                aria-label="Search"
              >
                <FaSearch />
              </button>
              <a
                href="/register"
                className="p-4 rounded-full bg-[#e5f3ed] text-black hover:bg-[#ffd050] transition"
              >
                <FaUser />
              </a>
              <a
                href="/contact"
                className="bg-[#ffd050] text-black px-6 py-4 font-semibold rounded-md hover:bg-black hover:text-white transition"
              >
                Quick Join Now
              </a>
            </div>

            {/* Mobile Right (visible on mobile only) */}
            <div className="flex md:hidden items-center gap-4 bg-[#1A8754] rounded-r-xl px-6 py-4 h-full">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-4 rounded-full bg-[#e5f3ed] text-black hover:bg-[#ffd050] transition"
                aria-label="Search"
              >
                <FaSearch />
              </button>
              <a
                href="/register"
                className="p-4 rounded-full bg-[#e5f3ed] text-black hover:bg-[#ffd050] transition"
              >
                <FaUser />
              </a>

              {/* Hamburger menu icon */}
              <MobileMenuHome02 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
