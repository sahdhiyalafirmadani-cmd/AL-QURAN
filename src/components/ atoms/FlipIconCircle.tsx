"use client";

import { motion } from "framer-motion";

interface FlipIconCircleProps {
  IconSVG: React.ReactNode; // pass SVG element
}

export default function FlipIconCircle({ IconSVG }: FlipIconCircleProps) {
  return (
    <motion.div
      className="relative w-20 h-20 cursor-pointer group"
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6 }}
    >
      {/* Front: Green background, icon yellow */}
      <div className="absolute inset-0 rounded-full bg-[#1A8754] flex items-center justify-center backface-hidden group-hover:hidden">
        <div className="w-12 h-12 text-[#F9C33C]">{IconSVG}</div>
      </div>

      {/* Back: Yellow background, icon green */}
      <div className="absolute inset-0 rounded-full bg-[#F9C33C] flex items-center justify-center rotateY-180 hidden group-hover:flex">
        <div className="w-12 h-12 text-[#1A8754]">{IconSVG}</div>
      </div>
    </motion.div>
  );
}
