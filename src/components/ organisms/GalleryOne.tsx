"use client";

import { motion } from "framer-motion";
import React from "react";
import GalleryCard from "../molecules/GalleryCard";

const GalleryOne: React.FC = () => {
  const galleryItems = [
    { img: "/assets/images/gallery/1.jpg", link: "/service-detail.html" },
    { img: "/assets/images/gallery/2.jpg", link: "/service-detail.html" },
    { img: "/assets/images/gallery/3.jpg", link: "/service-detail.html" },
    { img: "/assets/images/gallery/4.jpg", link: "/service-detail.html" },
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <p className="text-[#0D6832] font-semibold text-lg">STUDENT GALLARY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 leading-snug">
              Our Islamic Institute <br /> Academy Gallery
            </h2>
          </div>
          <motion.a
            href="/contact.html"
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 md:mt-0 px-8 py-4 bg-[#1A8754] text-white rounded-sm font-semibold"
          >
            Quick Start Now
          </motion.a>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} img={item.img} link={item.link} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryOne;
