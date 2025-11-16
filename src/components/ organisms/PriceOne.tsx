"use client";

import { motion } from "framer-motion";
import React from "react";
import PriceCard from "../molecules/PriceCard";

interface PriceOneProps {
  theme?: "light" | "dark";
}

const PriceOne: React.FC<PriceOneProps> = ({ theme = "light" }) => {
  const prices = [
    {
      price: 32,
      plan: "2 Classes Per Week",
      students: "2,000+ Students Enrolled",
      details: [
        "8 Classes per Month",
        "6 Months = US$ 178",
        "Save 7%",
        "12 Months = US$ 345",
        "Save 10%",
      ],
    },
    {
      price: 48,
      plan: "3 Classes Per Week",
      students: "3,000+ Students Enrolled",
      details: [
        "12 Classes per Month",
        "6 Months = US$ 248",
        "Save 7%",
        "12 Months = US$ 469",
        "Save 10%",
      ],
    },
    {
      price: 60,
      plan: "4 Classes Per Week",
      students: "5,000+ Students Enrolled",
      details: [
        "16 Classes per Month",
        "6 Months = US$ 298",
        "Save 7%",
        "12 Months = US$ 529",
        "Save 10%",
      ],
    },
    {
      price: 80,
      plan: "5 Classes Per Week",
      students: "6,000+ Students Enrolled",
      details: [
        "20 Classes per Month",
        "6 Months = US$ 348",
        "Save 7%",
        "12 Months = US$ 589",
        "Save 10%",
      ],
    },
  ];

  const bgColor = theme === "dark" ? "bg-[#131B16]" : "bg-white";
  const titleColor = theme === "dark" ? "text-white" : "text-gray-900";
  const subTitleColor = theme === "dark" ? "text-[#0D6832]" : "text-[#0D6832]";

  return (
    <section
      className={`relative ${bgColor} py-20`}
      style={{
        backgroundImage:
          theme === "dark"
            ? "url('/assets/images/background/pattern-bg-dark.png')"
            : "url('/assets/images/background/pattern-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <p className={`${subTitleColor} font-semibold text-lg`}>
            Why to Choose Us
          </p>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-2 leading-snug ${titleColor}`}
          >
            Why Choose Our Islamic <br /> Institute
          </h2>
        </motion.div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {prices.map((item, index) => (
            <PriceCard key={index} {...item} delay={index * 0.2} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceOne;
