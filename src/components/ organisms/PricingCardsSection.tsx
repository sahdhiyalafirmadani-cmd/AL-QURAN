"use client";

import { motion } from "framer-motion";
import React from "react";
import PriceCard from "../molecules/PriceCard";

const PricingCardsSection: React.FC = () => {
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

  return (
   <section className="py-20 pb-42 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
      {prices.map((item, index) => (
        <PriceCard key={index} {...item} delay={index * 0.2} theme="light" />
      ))}
    </div>
  </div>
</section>
  );
};

export default PricingCardsSection;
