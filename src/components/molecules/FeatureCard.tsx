"use client";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  lines: string[];
  theme?: "light" | "dark"; // added
}

export default function FeatureCard({ icon, lines, theme = "light" }: FeatureCardProps) {
  const textColor = theme === "dark" ? "text-white" : "text-[#0b1220]";

  return (
    <div className="flex items-center gap-4 bg-transparent justify-start pl-4">
      {/* Circle with icon inside (unchanged) */}
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-20 h-20 rounded-full bg-[#F9C33C] border-2 border-black 
                   flex items-center justify-center shadow-md cursor-pointer"
      >
        <div className="w-10 h-10">{icon}</div>
      </motion.div>

      {/* Text next to circle */}
      <div>
        <p className={`${textColor} font-semibold text-lg leading-tight`}>
          {lines[0]}
        </p>
        <p className={`${textColor} text-base leading-tight`}>
          {lines[1]}
        </p>
      </div>
    </div>
  );
}
