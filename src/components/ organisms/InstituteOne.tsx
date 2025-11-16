"use client";

import React from "react";
import { motion } from "framer-motion";
import InstituteCard from "../molecules/InstituteCard";
import { FaQuran, FaPrayingHands, FaUserGraduate, FaClock } from "react-icons/fa";

interface InstituteOneProps {
  theme?: "light" | "dark";
}

const InstituteOne: React.FC<InstituteOneProps> = ({ theme = "light" }) => {
  const cards = [
    {
      icon: <FaQuran className="text-3xl" />,
      title: "Expert Quran Tutor",
      text: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars.",
      bgColor: "bg-[#FFF4F0]",
    },
    {
      icon: <FaPrayingHands className="text-3xl" />,
      title: "We Value Our Students",
      text: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars.",
      bgColor: "bg-[#E7F3ED]",
    },
    {
      icon: <FaUserGraduate className="text-3xl" />,
      title: "Male Female Teachers",
      text: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars.",
      bgColor: "bg-[#FFF4F0]",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Flexible Timings",
      text: "All the classes of online Quran teaching are conducted by well qualified Islamic scholars.",
      bgColor: "bg-[#FFF4F0]",
    },
  ];

  return (
    <section
      className={`relative py-20 ${
        theme === "dark" ? "bg-[#16221A]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className={`text-lg font-semibold mb-2 text-green-700`}>
            Why to Choose Us
          </p>
          <h2
            className={`text-3xl md:text-4xl font-extrabold leading-snug ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Why Choose Our Islamic <br /> Institute
          </h2>
        </motion.div>

        {/* Institute Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <InstituteCard {...card} theme={theme} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstituteOne;
