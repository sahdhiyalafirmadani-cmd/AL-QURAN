"use client";
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode; // SVG icon or React node
  lines: string[];
}

export default function FeatureCard({ icon, lines }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-4 bg-transparent justify-start pl-4">
      {/* Circle with icon inside and flips on hover */}
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
        <p className="text-[#0b1220] font-semibold text-lg leading-tight">
          {lines[0]}
        </p>
        <p className="text-[#0b1220] text-base leading-tight">{lines[1]}</p>
      </div>
    </div>
  );
}
