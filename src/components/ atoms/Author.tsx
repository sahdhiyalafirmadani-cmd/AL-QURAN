import React from "react";

interface AuthorProps {
  name: string;
  role: string;
  imgSrc: string;
}

const Author: React.FC<AuthorProps> = ({ name, role, imgSrc }) => {
  return (
    <div className="relative flex items-center mt-10 pl-28 min-h-[100px] text-black font-medium text-lg">
      <div className="absolute left-0 top-0 w-24 h-24 overflow-hidden rounded-full">
        <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        {name} <span className="block font-normal text-gray-400 text-sm">{role}</span>
      </div>
    </div>
  );
};

export default Author;
