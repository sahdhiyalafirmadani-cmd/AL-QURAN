"use client";
import React from "react";

interface NewsAuthorProps {
  name: string;
  image: string;
}

const NewsAuthor: React.FC<NewsAuthorProps> = ({ name, image }) => {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      {name}
    </div>
  );
};

export default NewsAuthor;
