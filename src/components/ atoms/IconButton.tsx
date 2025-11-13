"use client";
import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton = ({ icon, onClick, className }: IconButtonProps) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full hover:bg-[#1A8754] transition-colors ${className}`}
  >
    {icon}
  </button>
);

export default IconButton;
