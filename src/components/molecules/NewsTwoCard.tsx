"use client";

import React from "react";
import { motion } from "framer-motion";
import NewsMeta from "../ atoms/NewsMeta";
import NewsAuthor from "../ atoms/NewsAuthor";
import ReadMoreButton from "../ atoms/ReadMoreButton";

interface NewsCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  author: string;
  authorImage: string;
  href: string;
  delay?: number;
}

const NewsTwoCard: React.FC<NewsCardProps> = ({
  image,
  category,
  date,
  title,
  author,
  authorImage,
  href,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-gray-50 rounded-lg overflow-hidden shadow transition-shadow group hover:shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 1.5 }}
    >
      <div className="overflow-hidden relative">
        <a href={href}>
          <img
            src={image}
            alt={title}
            className="w-full transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:opacity-80"
          />
        </a>
      </div>
      <div className="p-5" style={{ backgroundColor: "#f9f7f2" }}>
        <NewsMeta category={category} date={date} />
        <h5 className="text-2xl font-semibold text-black mb-3">
          <a href={href} className="hover:text-[#1d8e5a]">
            {title}
          </a>
        </h5>
        <div className="flex justify-between items-center flex-wrap mt-5 bg-white p-2 rounded">
          <NewsAuthor name={author} image={authorImage} />
          <ReadMoreButton href={href} />
        </div>
      </div>
    </motion.div>
  );
};

export default NewsTwoCard;
