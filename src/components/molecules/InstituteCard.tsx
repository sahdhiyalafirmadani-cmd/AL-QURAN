"use client";

import React, { useState } from "react";
import InstituteIcon from "../ atoms/InstituteIcon";
import Image from "next/image";

interface InstituteCardProps {
  icon: React.ReactNode;
  title: string | React.ReactNode;
  text: string;
  bgColor: string; // light bg
  theme?: "light" | "dark"; // optional theme prop
}

const InstituteCard: React.FC<InstituteCardProps> = ({
  icon,
  title,
  text,
  bgColor,
  theme = "light",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-[40px] p-10 shadow-md overflow-hidden cursor-pointer h-[380px] w-[270px] border ${
        theme === "dark" ? "bg-black border-black" : `${bgColor} border-black`
      }`}
    >
      {/* Full gradient div */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0D6832] to-[#F9C33C] origin-center transition-transform duration-500 z-0`}
        style={{
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      ></div>

      {/* Bismillah image */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-7 w-56 h-56 pointer-events-none transition-opacity duration-500 z-0 ${
          hovered ? "opacity-80" : "opacity-0"
        }`}
      >
        <Image
          src="/assets/images/icons/bismillah-5.png"
          alt="background pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <InstituteIcon icon={icon} isHovered={hovered} />

        <h4
          className={`text-2xl font-bold mt-4 mb-5 transition-colors duration-500 text-center ${
            theme === "dark" ? "text-white" : hovered ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h4>

        {/* Paragraph remains gray */}
        <p className="text-base text-center text-gray-600 transition-colors duration-500">
          {text}
        </p>
      </div>
    </div>
  );
};

export default InstituteCard;
