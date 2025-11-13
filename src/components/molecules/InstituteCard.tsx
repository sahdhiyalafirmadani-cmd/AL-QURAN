"use client";

import React, { useState } from "react";
import InstituteIcon from "../ atoms/InstituteIcon";
import Image from "next/image";

interface InstituteCardProps {
  icon: React.ReactNode;
  title: string | React.ReactNode;
  text: string;
  bgColor: string;
  bgPattern?: string;
}

const InstituteCard: React.FC<InstituteCardProps> = ({
  icon,
  title,
  text,
  bgColor,
  bgPattern,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-[40px] p-10 shadow-md overflow-hidden cursor-pointer h-[380px] w-[270px] border border-black ${bgColor}`}
    >
      {/* Full gradient div that scales horizontally like a gate */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0D6832] to-[#F9C33C] origin-center transition-transform duration-500 z-0`}
        style={{
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      ></div>

      {/* Background pattern */}
      {bgPattern && (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 pointer-events-none transition-opacity duration-500 z-0 ${
            hovered ? "opacity-70" : "opacity-0"
          }`}
        >
          <Image
            src={bgPattern}
            alt="background pattern"
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon with flip */}
        <InstituteIcon icon={icon} isHovered={hovered} />

        {/* Title */}
        <h4
          className={`text-2xl font-bold mt-4 mb-5 transition-colors duration-500 text-center ${
            hovered ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h4>

        {/* Text */}
        <p
          className={`text-base text-center transition-colors duration-500 ${
            hovered ? "text-white/90" : "text-gray-600"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default InstituteCard;
