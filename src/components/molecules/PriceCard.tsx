"use client";

import { motion } from "framer-motion";
import React from "react";

interface PriceCardProps {
  theme?: "light" | "dark";
  price: number;
  plan: string;
  students: string;
  details: string[];
  delay?: number;
}

const PriceCard: React.FC<PriceCardProps> = ({
  theme = "light",
  price,
  plan,
  students,
  details,
  delay = 0,
}) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#0F0E0B] border-[#333]"
      : "bg-[#FFF4F0] border-black";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const dotColor = theme === "dark" ? "bg-gray-400" : "bg-black";
  

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`group ${cardBg} border rounded-[40px] shadow-sm p-8 flex flex-col justify-between text-center hover:shadow-lg transition-all duration-500`}
    >
      {/* Yellow Circle */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mx-auto mb-6 w-24 h-24 bg-yellow-400 border border-black rounded-full flex flex-col items-center justify-center text-black font-bold transition-transform duration-300"
      >
        <span className="text-3xl">${price}</span>
        <span className="text-sm font-medium">/Mo</span>
      </motion.div>

      {/* Plan Name */}
      <h4 className={`text-2xl font-bold leading-snug mb-4 ${textColor}`}>
        {plan}
      </h4>

      {/* Students Box */}
      <div
        className={`text-sm font-semibold py-2 px-4 rounded-md inline-flex items-center justify-center gap-2 mx-auto mb-5 bg-[#FAEFBF] text-gray-900`}
      >
        <span className="w-2 h-2 bg-black rounded-full"></span>
        {students}
      </div>

      {/* Details List */}
      <ul className={`text-base space-y-2 mb-6 text-left pl-10 text-gray-500`}>
        {details.map((d, i) => (
          <li key={i} className="flex items-center">
            <span className={`w-1.5 h-1.5 ${dotColor} rounded-full mr-3`}></span>
            {d}
          </li>
        ))}
      </ul>

      {/* Button */}
      <motion.a
        href="/price"
        whileHover={{
          backgroundColor: "#facc15",
          color: "#000000",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mx-auto bg-[#0D6832] text-white py-3 px-5 rounded-md font-semibold text-sm uppercase tracking-wide"
      >
        Free Trial
      </motion.a>
    </motion.div>
  );
};

export default PriceCard;
