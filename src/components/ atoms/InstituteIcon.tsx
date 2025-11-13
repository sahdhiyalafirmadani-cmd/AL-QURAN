"use client";

import { motion } from "framer-motion";
import React from "react";

interface InstituteIconProps {
  icon: React.ReactNode;
  isHovered: boolean;
}

const InstituteIcon: React.FC<InstituteIconProps> = ({ icon, isHovered }) => {
  return (
    <motion.div
      animate={{ rotateY: isHovered ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-6 flex items-center justify-center w-25 h-25 rounded-full border-4 bg-[#F9C33C] border-black text-black -mt-[20px]"
    >
      {icon}
    </motion.div>
  );
};

export default InstituteIcon;
