"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import ServiceIcon from "../ atoms/ServiceIcon";
import ServiceTitle from "../ atoms/ServiceTitle";
import ReadMoreLink from "../ atoms/ReadMoreLink";

interface ServiceCardProps {
  iconClass: string;
  bgImage: string;
  title: string;
  text: React.ReactNode;
}

export default function ServiceCard({
  iconClass,
  bgImage,
  title,
  text,
}: ServiceCardProps) {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      y: [0, -10, 0], // single up and down
      transition: { duration: 0.6, ease: "easeInOut" }, // adjust speed here
    });
  };

  return (
    <motion.div
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 h-76"
      onHoverStart={handleHoverStart}
    >
      {/* Background image */}
      <motion.div
        animate={controls}
        className="absolute top-15 left-6 opacity-90 pointer-events-none"
      >
        <Image
          src="/assets/images/icons/service-1.png"
          alt="service background"
          width={160}
          height={160}
          className="object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between h-full">
        {/* Title on left, icon on right */}
        <div className="flex items-center justify-between mb-4">
          <ServiceTitle title={title} />
          <motion.div animate={controls}>
            <ServiceIcon iconClass={iconClass} />
          </motion.div>
        </div>

        {/* Paragraph text */}
        <p className="text-base md:text-lg text-gray-600 leading-snug -translate-y-[60px]">
          {text}
        </p>
      </div>

      {/* Bottom Read More bar */}
      <ReadMoreLink />
    </motion.div>
  );
}
