import React from "react";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="
        inline-flex shrink-0 items-center justify-center
        bg-[#f3b815] text-black font-bold
        text-2xl
        w-[240px] h-[60px]
        rounded-sm mt-6
        transition-all duration-300
        hover:bg-green-600 hover:text-white
      "
    >
      {text}
    </a>
  );
};

export default Button;
