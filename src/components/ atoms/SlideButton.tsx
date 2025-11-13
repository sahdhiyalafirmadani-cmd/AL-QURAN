"use client";
import React from "react";

interface Props { text: string; href: string; active?: boolean; }

export default function SlideButton({ text, href }: Props) {
  return (
    <a
      href={href}
      className="inline-block bg-[#F9C33C] text-[black] font-semibold px-8 py-3 rounded-md transition-colors duration-200 hover:bg-[#064b33] hover:text-white"
    >
      {text}
    </a>
  );
}
