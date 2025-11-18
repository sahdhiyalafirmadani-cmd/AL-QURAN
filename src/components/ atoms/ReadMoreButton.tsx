"use client";
import React from "react";

interface ReadMoreButtonProps {
  href: string;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 text-sm font-semibold text-white bg-black rounded-r hover:bg-[#1d8e5a] transition-colors"
    >
      Read More
    </a>
  );
};

export default ReadMoreButton;
