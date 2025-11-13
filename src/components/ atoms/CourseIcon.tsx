"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CourseIcon({ src, alt, hover }: { src: string; alt?: string; hover?: boolean }) {
  // The icon (on the image) that will bounce while parent is hovered.
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={hover ? { y: [0, -6, 0] } : { y: 0 }}
      transition={hover ? { repeat: Infinity, duration: 1.6 } : { duration: 0 }}
      className="w-15 h-15 rounded-full bg-white flex items-center justify-center shadow-md "
    >
      <img src={src} alt={alt || "icon"} className="w-7 h-7 object-contain" />
    </motion.div>
  );
}
