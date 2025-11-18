"use client"; 

import React from "react";
import NewsTwoCard from "../molecules/NewsTwoCard";

const newsData = [
  {
    image: "assets/images/resource/news-4.jpg",
    category: "Islam",
    date: "October 18 2025",
    title: "Abandoning Prayer – Why to Avoid at all Costs?",
    author: "Amir Khan",
    authorImage: "/assets/images/resource/author-2.png",
    href: "/news-detail",
  },
  {
    image: "assets/images/resource/news-5.jpg",
    category: "Islam",
    date: "October 18 2025",
    title: "What does the Holy Quran Say about the Cerebrum?",
    author: "Amir Khan",
    authorImage: "/assets/images/resource/author-3.png",
    href: "/news-detail",
  },
  {
    image: "assets/images/resource/news-6.jpg",
    category: "Islam",
    date: "October 18 2025",
    title: "What are the Conditions of the Shahadah in Islam",
    author: "Amir Khan",
    authorImage: "/assets/images/resource/author-4.png",
    href: "/news-detail",
  },
  {
    image: "assets/images/resource/news-7.jpg",
    category: "Islam",
    date: "October 18 2025",
    title: "The Purpose of Revelation of the Holy Quran",
    author: "Amir Khan",
    authorImage: "/assets/images/resource/author-5.png",
    href: "/news-detail",
  },
];

const NewsTwo: React.FC = () => {
  return (
    <section className="py-45 relative">
      <div className="container mx-auto max-w-[1600px] px-4 -mt-15">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="text-[#1d8e5a] font-semibold mb-2">OUR NEWS UPDATES</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest News & Articles From <br /> The Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {newsData.map((news, index) => (
            <NewsTwoCard key={index} {...news} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsTwo;
