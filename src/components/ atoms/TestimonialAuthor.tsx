"use client";

import Image from "next/image";
import React from "react";

interface TestimonialAuthorProps {
  img: string;
  name: string;
  role: string;
}

const TestimonialAuthor: React.FC<TestimonialAuthorProps> = ({
  img,
  name,
  role,
}) => (
  <div className="flex items-center gap-3 ">
    <div className="w-25 h-25 rounded-full overflow-hidden ">
      <Image src={img} alt={name} width={80} height={80} />
    </div>
    <div>
      <h5 className="font-semibold text-gray-900 text-xl ">{name}</h5>
      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </div>
);

export default TestimonialAuthor;
