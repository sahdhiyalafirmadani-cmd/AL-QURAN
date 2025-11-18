"use client";

import React from "react";
import { motion } from "framer-motion";

const CtaOne: React.FC = () => {
  return (
    <section
      className="relative z-20 -mt-20"
      aria-label="cta-one"
    >
      <div className="max-w-8xl mx-auto px-4">
        {/* Animated container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl shadow-xl px-8 py-8 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(to right, #50bc84 0%, #F3B815 100%)",
          }}
        >
          {/* Background image overlay */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: "url('/assets/images/background/cta-one_bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Heading */}
          <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-snug relative z-10 ml-[80px]">
            Do not let Shaitan delay you from starting <br />
            to learn your deen.
          </h3>

          {/* Button */}
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 text-base font-semibold rounded-md text-white 
                       bg-[#0D6832] hover:bg-black transition-colors duration-500 relative z-10 mr-[50px]"
          >
            Quick Start Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaOne;
