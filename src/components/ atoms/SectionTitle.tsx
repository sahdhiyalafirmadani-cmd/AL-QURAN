import React from "react";

interface Props {
  subtitle: string;
  subtitleIcon: string;
  heading: string;
  text: string;
}

export default function SectionTitle({ subtitle, subtitleIcon, heading, text }: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-4 text-green-600 font-semibold text-lg">
        {subtitle}
        <span className="relative -top-2">
          <img src={subtitleIcon} alt="" className="w-40 h-20" />
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
        {heading}
      </h2>

      <p className="text-gray-500 mt-4 leading-[28px] text-[16px] opacity-80">
        {text}
      </p>
    </div>
  );
}
