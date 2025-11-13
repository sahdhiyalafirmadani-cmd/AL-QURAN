"use client";

import { motion } from "framer-motion";
import React from "react";
import StarRating from "../ atoms/StarRating";
import TestimonialAuthor from "../ atoms/TestimonialAuthor";

interface TestimonialCardProps {
  title: string;
  text: string;
  img: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  title,
  text,
  img,
  name,
  role,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-left px-6 flex flex-col justify-center translate-y-6"
  >
    {/* Star box */}
    <div className=" w-fit px-3 py-1 rounded-md  mb-6">
      <StarRating />
    </div>

    {/* Title */}
    <h4 className="text-3xl font-bold text-gray-900 mb-4">{title}</h4>

    {/* Paragraph */}
    <p className="text-gray-600 text-lg leading-relaxed max-w-[600px] mb-8">
      {text}
    </p>

    {/* Author */}
    <TestimonialAuthor img={img} name={name} role={role} />
  </motion.div>
);

export default TestimonialCard;
