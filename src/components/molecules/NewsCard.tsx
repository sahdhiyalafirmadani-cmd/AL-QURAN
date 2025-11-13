"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

interface NewsCardProps {
  img: string;
  comments: string;
  date: string;
  title: string;
  text: string;
  authorImg: string;
  author: string;
  link: string;
  delay?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  img,
  comments,
  date,
  title,
  text,
  authorImg,
  author,
  link,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-[#FFFDF6] border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group"
    >
      {/* Image */}
      <div className="overflow-hidden relative">
        <a href={link}>
          <Image
            src={img}
            alt={title}
            width={400}
            height={250}
            className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      </div>

      {/* Content */}
      <div className="p-6 text-left">
        {/* Meta Info */}
        <ul className="flex items-center space-x-6 text-gray-500 text-sm mb-4">
          <li className="flex items-center gap-2">
            <FaRegCommentDots className="text-gray-400" />
            {comments}
          </li>
          <li className="flex items-center gap-2">
            <FaRegClock className="text-gray-400" />
            {date}
          </li>
        </ul>

        {/* Heading */}
        <h5 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-[#0D6832]">
          <a href={link}>{title}</a>
        </h5>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-base leading-relaxed">{text}</p>

        {/* Author & Button */}
        <div className="flex items-center justify-between bg-transparent w-[100%] border border-gray-300 h-16">
          <div className="flex items-center gap-3 translate-x-2">
            <Image
              src={authorImg}
              alt={author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="capitalize text-gray-900 font-semibold text-sm">
              {author}
            </span>
          </div>

          <a
            href={link}
            className="bg-[#0D6832] -translate-x-2 text-white text-xs uppercase font-semibold px-4 py-3 rounded-l-none rounded-r-md transition-all duration-300 hover:bg-yellow-400 hover:text-black "
          >
            Read More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
