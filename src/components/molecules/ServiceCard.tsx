"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import ServiceIcon from "../ atoms/ServiceIcon";
import ServiceTitle from "../ atoms/ServiceTitle";
import ReadMoreLink from "../ atoms/ReadMoreLink";

interface ServiceCardProps {
  iconClass: string;
  bgImage: string;
  title: string;
  text: React.ReactNode;
  theme?: "light" | "dark"; // Pass theme
}

export default function ServiceCard({
  iconClass,
  bgImage,
  title,
  text,
  theme = "light",
}: ServiceCardProps) {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      y: [0, -10, 0], // up and down
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  // Only dark mode background for the box
  const boxBg = theme === "dark" ? "#0E110F" : "white";

  return (
    <motion.div
      className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 h-76"
      onHoverStart={handleHoverStart}
      style={{ backgroundColor: boxBg }}
    >
      {/* Background image */}
      <motion.div
        animate={controls}
        className="absolute top-15 left-6 opacity-90 pointer-events-none"
      >
        <Image
          src={bgImage}
          alt="service background"
          width={160}
          height={160}
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        {/* Title and icon */}
        <div className="flex items-center justify-between mb-4">
          <ServiceTitle title={title} isDark={theme === "dark"} />
          <motion.div animate={controls}>
            <ServiceIcon iconClass={iconClass} />
          </motion.div>
        </div>

        {/* Paragraph text stays gray always */}
        <p className="text-gray-600 text-base md:text-lg leading-snug -translate-y-[60px]">
          {text}
        </p>
      </div>

      {/* Bottom Read More bar */}
      <ReadMoreLink />
    </motion.div>
  );
}
