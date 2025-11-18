import React from "react";

interface TextProps {
  text: string;
  type: "title" | "heading" | "paragraph";
}

const Text: React.FC<TextProps> = ({ text, type }) => {
  let classes = "text-white";

  if (type === "title") classes += " text-sm uppercase font-semibold mb-2";
  if (type === "heading")
    classes +=
      " text-[60px] sm:text-[80px] md:text-[140px] lg:text-[70px] font-bold mb-8 leading-[1.1] w-full"; // big, responsive heading
  if (type === "paragraph") classes += " text-lg mb-6 max-w-xl";

  return <div className={classes}>{text}</div>;
};

export default Text;
