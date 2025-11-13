"use client";
import { motion } from "framer-motion";

export default function SlideText({ text, active }: { text: string; active: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: 80, y: -80 }} // 🔹 comes diagonally (from top-right)
      animate={
        active
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: 80, y: -80 }
      }
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-white text-base md:text-lg mb-8"
    >
      {text}
    </motion.p>
  );
}
