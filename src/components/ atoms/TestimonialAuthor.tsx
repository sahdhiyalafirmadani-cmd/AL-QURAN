"use client";

import Image from "next/image";
import React from "react";

interface TestimonialAuthorProps {
  img: string;
  name: string;
  role: string;
  theme?: "light" | "dark";
}

const TestimonialAuthor: React.FC<TestimonialAuthorProps> = ({
  img,
  name,
  role,
  theme = "light",
}) => (
  <div className="flex items-center gap-3 ">
    <div className="w-25 h-25 rounded-full overflow-hidden ">
      <Image src={img} alt={name} width={80} height={80} />
    </div>

    <div>
      <h5
        className={`font-semibold text-xl ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {name}
      </h5>

      <p className="text-gray-500 text-sm">{role}</p>
    </div>
  </div>
);

export default TestimonialAuthor;
