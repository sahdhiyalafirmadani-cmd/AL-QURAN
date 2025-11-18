"use client";

import { motion } from "framer-motion";
import React from "react";

interface GalleryCardProps {
  img: string;
  link: string;
  delay?: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ img, link, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="relative rounded-lg overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <motion.img
        src={img}
        alt=""
        className="w-full h-90 object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Overlay + Circle + Arrow */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {/* Yellow Overlay */}
        <div className="absolute inset-2 border-2 border-white rounded-lg"></div>

        {/* Circle with Arrow at bottom center */}
        <a
          href={link}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full flex items-center justify-center shadow-lg bg-yellow-400 transition-colors duration-300 hover:bg-yellow-400 pointer-events-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-black transition-colors duration-300 hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 19L19 5M5 5h14v14"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
