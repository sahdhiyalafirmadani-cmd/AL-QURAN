"use client";

import React from "react";
import { FaRegClock } from "react-icons/fa";

interface NewsMetaProps {
  category: string;
  date: string;
}

const NewsMeta: React.FC<NewsMetaProps> = ({ category, date }) => {
  return (
    <ul className="flex flex-wrap justify-between text-sm mb-2">
      <li className="px-3 py-1 rounded bg-yellow-200 text-yellow-800">{category}</li>
      <li className="flex items-center gap-2 text-gray-400">
        <FaRegClock /> {date}
      </li>
    </ul>
  );
};

export default NewsMeta;
