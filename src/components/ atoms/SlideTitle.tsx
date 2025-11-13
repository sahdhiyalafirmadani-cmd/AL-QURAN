"use client";
import { motion } from "framer-motion";

export default function SlideTitle({ title, active }: { title: string; active: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: 60, y: -60 }} // 🔹 comes diagonally (from top-right)
      animate={
        active
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: 60, y: -60 }
      }
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-white font-medium text-lg mb-3 tracking-wide"
    >
      {title}
    </motion.p>
  );
}
