"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white flex flex-col w-full -mt-25"
      style={{
        backgroundImage: "url('/assets/images/background/footer-bg.jpg')",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28 flex flex-col flex-grow relative z-10">
        {/* Overlay */}
        <div className="absolute inset-0 -z-5" />

        <div className="grid grid-cols-1 translate-y-20 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-14 pb-10 sm:pb-16 lg:pb-20">
          {/* Logo & Contact */}
          <div className="text-center sm:text-left translate-x-10">
            <img
              src="/assets/images/footer-logo.svg"
              alt="Footer Logo"
              className="w-32 sm:w-40 mb-4 mx-auto sm:mx-0"
            />
            <div className="w-20 sm:w-40 h-[1px] bg-[#0D6832] mb-5 mx-auto sm:mx-0"></div>
            <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
              <li>58 Howard Street #2, Cairo, CA 941</li>
              <li>(+88) 311-2121101</li>
            </ul>
            <div className="flex justify-center sm:justify-start space-x-2 mt-5">
              {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-500 text-white hover:bg-yellow-400 hover:text-black transition"
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left translate-x-15">
            <h4 className="text-lg sm:text-xl font-semibold mb-5">Links</h4>
            <ul className="space-y-3 inline-block sm:inline-block">
              {["About us", "Scholars", "Courses", "Latest News", "Contact"].map(
                (link, i) => (
                  <li
                    key={i}
                    className="relative group flex items-center justify-center sm:justify-start cursor-pointer"
                  >
                    <span className="inline-block transition-all duration-300 group-hover:translate-x-6 group-hover:text-[#0D6832]">
                      {link}
                    </span>
                    <span
                      className="absolute left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 flex items-center justify-center w-4 h-4 rounded-full bg-[#0D6832] opacity-0 
                                  group-hover:opacity-100 transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-2.5 h-2.5 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Other Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-5">Other Links</h4>
            <ul className="space-y-3 inline-block sm:inline-block">
              {[
                "Online Courses",
                "Audio Listening",
                "Sehri & Iftar",
                "Our Events",
                "Quran Hifz Classes",
              ].map((link, i) => (
                <li
                  key={i}
                  className="relative group flex items-center justify-center sm:justify-start cursor-pointer"
                >
                  <span className="inline-block transition-all duration-300 group-hover:translate-x-6 group-hover:text-[#0D6832]">
                    {link}
                  </span>
                  <span
                    className="absolute left-1/2 sm:left-0 top-1/2 transform -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-[#0D6832] opacity-0 
                                    group-hover:opacity-100 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 h-2.5 text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-5 capitalize">
              Newsletter
            </h4>
            <p className="text-gray-300 mb-5 text-sm sm:text-base">
              Waiting for your message is not your important time.
            </p>
            <div className="relative bg-[#344E46] p-6 sm:p-8 rounded-md">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-3 bg-transparent text-gray-300 placeholder-gray-400 outline-none border-b border-[#0D6832] text-sm sm:text-base"
              />
              <button
                type="submit"
                className="absolute right-3 sm:right-4 top-3 sm:top-4 transform w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-white transition"
              >
                <FaPaperPlane className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="mt-auto pt-6 sm:pt-10 pb-4 sm:pb-6 text-sm sm:text-base md:text-lg border-t border-white/20 flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left px-4 sm:px-10"
        style={{
          backgroundImage: "url('/assets/images/background/footer-bg_2.jpg')",
          backgroundSize: "cover",
        }}
      >
        <p className="text-gray-300 mb-3 md:mb-0">
          All rights reserved 2025 template_mr
        </p>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-gray-300">
          <li>
            <a href="#" className="hover:text-[#0D6832] transition">
              Terms of use
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#0D6832] transition">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
