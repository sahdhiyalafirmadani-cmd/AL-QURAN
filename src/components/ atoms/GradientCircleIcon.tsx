import React, { useState } from "react";

interface Props {
  iconClass: string; // flaticon class like "flaticon-mosque"
  text: string;
}

export default function GradientCircleIcon({ iconClass, text }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative font-semibold min-h-[72px] text-[20px] text-green-600
                 pl-[85px] pt-[6px] mb-8 leading-[30px] perspective-1000"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped(!flipped)}
    >
      {/* FLIP CIRCLE */}
      <span
        className="absolute left-0 top-0 w-[72px] h-[72px] rounded-full 
                   flex items-center justify-center text-[34px] transition-transform duration-500 transform-gpu"
        style={{
          background: "linear-gradient(to left, #50bc84, #F3B815)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          fontFamily: "'Flaticon', sans-serif", // Ensure Flaticon font is applied
          color: "#fff",
        }}
      >
        <i className={iconClass}></i>
      </span>

      {/* Text */}
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
