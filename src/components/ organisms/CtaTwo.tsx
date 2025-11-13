"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMosque } from "react-icons/fa"; // Mosque icon

const CtaTwo: React.FC = () => {
  return (
    <section
      aria-label="cta-two"
      className="relative z-20 "
    >
      <div className="max-w-8xl mx-auto px-4">
        {/* Motion Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl shadow-xl px-8 py-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#0D6832] via-[#7ab945] to-[#F9C33C]"
        >
          {/* Background Overlay */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "url('/assets/images/background/cta-one_bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Left Icon & Heading */}
          <div className="flex items-center gap-6 relative z-10 ml-[50px]">
            {/* Yellow Circle Icon */}
            <div className="w-30 h-30 rounded-full bg-[#F9C33C] border-[3px] border-black flex items-center justify-center shadow-md">
              <FaMosque className="text-black text-5xl" />
            </div>

            {/* Heading */}
            <h3 className="text-2xl md:text-4xl ml-6 font-extrabold text-white leading-snug">
              Proud to be serving thousands of Muslim <br />
              Families around the World
            </h3>
          </div>

          {/* Button */}
          <div className="relative z-10 mr-[80px]">
            <a
              href="/contact"
              className="inline-block px-8 py-3 text-base font-semibold rounded-md 
                         bg-white text-black hover:bg-black hover:text-white 
                         transition-all duration-500"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaTwo;
