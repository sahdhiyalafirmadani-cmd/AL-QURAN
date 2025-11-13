"use client";

import React from "react";
import { FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  count?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ count = 5 }) => (
  <div className="flex gap-1 bg-white py-2 px-4 rounded-md w-fit shadow-sm mt-[-30px]  relative z-30">
    {Array.from({ length: count }).map((_, i) => (
      <FaRegStar
        key={i}
        className="text-yellow-500"
        style={{ width: "20px", height: "20px" }}
      />
    ))}
  </div>
);

export default StarRating;
