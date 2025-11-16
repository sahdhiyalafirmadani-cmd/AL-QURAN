"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import GalleryCard from "../molecules/GalleryCard";

interface GalleryOneProps {
  theme?: "light" | "dark";
}

const GalleryOne: React.FC<GalleryOneProps> = ({ theme = "light" }) => {
  const [galleryItems, setGalleryItems] = useState([
    { img: "/assets/images/gallery/1.jpg", link: "/service-detail.html" },
    { img: "/assets/images/gallery/2.jpg", link: "/service-detail.html" },
    { img: "/assets/images/gallery/3.jpg", link: "/service-detail.html" },
    { img: "/assets/images/gallery/4.jpg", link: "/service-detail.html" },
  ]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 9000); // slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20"
      style={{
        backgroundColor: theme === "dark" ? "#131B16" : "#ffffff",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div>
            <p className="text-[#0D6832] font-semibold text-lg">STUDENT GALLERY</p>
            <h2
              className={`text-4xl md:text-5xl font-bold mt-2 leading-snug ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
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
          <AnimatePresence initial={false}>
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.img} // use img as key for AnimatePresence
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <GalleryCard img={item.img} link={item.link} delay={index * 0.2} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GalleryOne;
