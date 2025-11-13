"use client";

import { motion } from "framer-motion";
import React from "react";
import NewsCard from "../molecules/NewsCard";


const NewsOne: React.FC = () => {
  const posts = [
    {
      img: "/assets/images/resource/news-1.jpg",
      comments: "03 Comment",
      date: "October 18 2025",
      title: "Abandoning Prayer – Why to Avoid at all Costs?",
      text: "There are many variations of passages of lorem Ipsum available islam courses",
      authorImg: "/assets/images/resource/author-2.png",
      author: "Amir Khan",
      link: "news-detail.html",
    },
    {
      img: "/assets/images/resource/news-2.jpg",
      comments: "03 Comment",
      date: "October 18 2025",
      title: "What are the Conditions of the Shahadah in Islam",
      text: "There are many variations of passages of lorem Ipsum available islam courses",
      authorImg: "/assets/images/resource/author-3.png",
      author: "Amir Khan",
      link: "news-detail.html",
    },
    {
      img: "/assets/images/resource/news-3.jpg",
      comments: "03 Comment",
      date: "October 18 2025",
      title: "Types of Khawf (Fear) and Tawakkul (Reliance) in Islam",
      text: "There are many variations of passages of lorem Ipsum available islam courses",
      authorImg: "/assets/images/resource/author-4.png",
      author: "Amir Khan",
      link: "news-detail.html",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <div className="mb-14">
          <p className="text-[#0D6832] font-semibold text-lg tracking-wide">
            OUR NEWS UPDATES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-snug">
            Latest News & Articles From <br /> The Blog
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((item, index) => (
            <NewsCard key={index} {...item} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsOne;
