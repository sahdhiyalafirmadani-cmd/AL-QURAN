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
      whileHover="hover" // single hover trigger
      className="relative overflow-hidden rounded-lg cursor-pointer"
    >
      {/* Image */}
      <motion.img
        src={img}
        alt=""
        className="w-full h-90 object-cover"
        variants={{
          hover: { scale: 1.05, transition: { duration: 0.5 } },
        }}
      />

      {/* Yellow Overlay */}
      <motion.div
        variants={{
          hover: { opacity: 1, transition: { duration: 0.5 } },
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-2 border-2 border-yellow-400 rounded-lg  bg-opacity-30 z-10"
      />

      {/* Circle Arrow */}
     <motion.a
  href={link}
  variants={{
    hover: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }}
  initial={{ opacity: 0, y: 20 }}
  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center z-20 shadow-lg"
>
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    whileHover={{ stroke: "#3b82f6" }}
    transition={{ duration: 0.3 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 19L19 5M5 5h14v14"
    />
  </motion.svg>
</motion.a>

    </motion.div>
  );
};

export default GalleryCard;
