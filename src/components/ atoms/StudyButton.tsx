"use client";
import React from "react";

export default function StudyButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-block px-4 py-2 rounded-md font-semibold bg-[#0D6832] text-white hover:bg-[#F9C33C] hover:text-[#0b1220] transition-colors duration-200"
    >
      Study Now
    </a>
  );
}
