"use client";

import { motion } from "framer-motion";
import ScholarCard from "../molecules/ScholarCard";

const scholars = [
  {
    image: "/assets/images/resource/scholar-1.jpg",
    name: "Osama Gamal",
    designation: "Quran & Arabic Teacher",
  },
  {
    image: "/assets/images/resource/scholar-2.jpg",
    name: "Ahmed Hany",
    designation: "Quran & Arabic Teacher",
  },
  {
    image: "/assets/images/resource/scholar-3.jpg",
    name: "Yusuf Samir",
    designation: "Quran & Arabic Teacher",
  },
];

const ScholarOne = () => {
  return (
    <section
      className="scholar-one relative py-24 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/background/scholar-bg.png')" }}
    >
      <div className="container mx-auto px-4">
        {/* Section Title + Heading + Button (GalleryTwo style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div className="text-center md:text-left">
            <p className="text-[#1A8754] font-semibold text-lg">OUR SCHOLARS</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-snug">
             All Our Teachers Are Graduates <br /> From College Of Arabic
            </h2>
          </div>

          <motion.a
            href="/contact.html"
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-4 md:mt-0 px-8 py-4 bg-[#1A8754] text-white rounded-sm font-semibold"
          >
            Our Scholars
          </motion.a>
        </motion.div>

        {/* Scholars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {scholars.map((sch, i) => (
            <ScholarCard
              key={i}
              image={sch.image}
              name={sch.name}
              designation={sch.designation}
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarOne;
