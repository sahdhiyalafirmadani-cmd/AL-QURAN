import { motion } from "framer-motion";
import React from "react";

interface GalleryTwoCardProps {
  imgSrc: string;
  link?: string;
}

const GalleryTwoCard: React.FC<GalleryTwoCardProps> = ({ imgSrc, link = "#" }) => {
  return (
    <div className="relative group w-full h-80 overflow-hidden">
      {/* Image */}
      <img src={imgSrc} alt="Gallery" className="w-full h-full object-cover" />

      {/* White transparent border circle overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-66 h-66 border-2 border-white rounded-full flex items-center justify-center bg-white/10">
          {/* Inner circle with arrow */}
      <a
  href={link}
  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg bg-yellow-400 transition-colors duration-300 hover:bg-green-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 stroke-black transition-colors duration-300 hover:stroke-white"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 19L19 5M5 5h14v14"
    />
  </svg>
</a>

        </div>
      </div>
    </div>
  );
};

export default GalleryTwoCard;
