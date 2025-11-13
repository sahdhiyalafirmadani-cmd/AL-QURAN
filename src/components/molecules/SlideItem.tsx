"use client";

import { motion } from "framer-motion";
import SlideTitle from "../ atoms/SlideTitle";
import SlideText from "../ atoms/SlideText";
import SlideButton from "../ atoms/SlideButton";

interface SlideItemProps {
  img: string;
  title: string;
  heading: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  active: boolean;
}

export default function SlideItem({
  img,
  title,
  heading,
  text,
  buttonText,
  buttonLink,
  active,
}: SlideItemProps) {
  return (
    <div className="relative w-full h-[120vh] sm:h-[120vh] md:h-[100vh] lg:h-[100vh] overflow-hidden">
      {/* Image fills the entire slide */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Centered content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="text-center px-4 max-w-2xl">
          <SlideTitle title={title} active={active} />

          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line mb-4 text-white"
          >
            {heading}
          </motion.h1>

          <SlideText text={text} active={active} />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-6"
          >
            <SlideButton text={buttonText} href={buttonLink} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
