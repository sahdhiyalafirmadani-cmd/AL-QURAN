"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import CourseIcon from "../ atoms/CourseIcon";
import StudyButton from "../ atoms/StudyButton";

type Course = {
  img: string; // image path (public/assets/...)
  logo: string; // small logo overlay path
  icon: string; // icon inside content (svg/png)
  title: string;
  lessons: number;
  weeks: number;
  enroll: number;
  text: string;
  price: string;
  priceOld?: string;
};

const cardVariant: Variants = {
  hidden: { opacity: 0, x: 120 },
  show: (i = 0) => ({ opacity: 1, x: 0, transition: { delay: i * 0.18, duration: 0.75, ease: "easeOut" } }),
};

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  // We'll toggle hover state locally to tell CourseIcon to bounce.
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="group bg-white rounded-xl shadow-md overflow-hidden w-[310px] -translate-x-[35px] "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative overflow-visible">
        <motion.div
  animate={hovered ? { scale: 1.02 } : { scale: 1 }} // scale up on hover
  transition={{ duration: 0.35 }}
  className="w-full h-48 relative"
>
  <Image src={course.img} alt={course.title} fill className="object-cover" />
</motion.div>


        {/* small logo bottom-left */}
        <div className="absolute left-6 -bottom-5 z-15">
          <CourseIcon src={course.logo} alt="logo" hover={hovered} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        {/* floating icon near heading */}
        <div className="flex items-start gap-3">
          
          {/* heading: color changes to green on hover */}
          <h4 className="course-heading text-lg md:text-xl font-semibold text-[#0b1220] hover:text-[#0D6832] transition-colors duration-200">
            <a href="/course-detail">{course.title}</a>
          </h4>
        </div>

       {/* thin lines above & below list */}
<div className="border-t border-b border-gray-200 py-3">
  <ul className="flex items-center justify-between text-sm text-[#0b1220]">
    <li className="flex flex-col items-center">
      <span className="font-bold text-[#0D6832] text-lg">{course.lessons}</span>
      <span className="font-bold text-[#0b1220] text-base">lessons</span>
    </li>
    <li className="flex flex-col items-center">
      <span className="font-bold text-[#0D6832] text-lg">{course.weeks}</span>
      <span className="font-bold text-[#0b1220] text-base">weeks</span>
    </li>
    <li className="flex flex-col items-center">
      <span className="font-bold text-[#0D6832] text-lg">{course.enroll}</span>
      <span className="font-bold text-[#0b1220] text-base">enroll</span>
    </li>
  </ul>
</div>


        <p className="text-sm text-gray-600">{course.text}</p>

       {/* bottom: Study and price */}
<div className="flex items-center justify-between gap-4 mt-2">
  <StudyButton href="#" />
  
  {/* Price box */}
  <div className="bg-[#0D683214] px-4 py-2 rounded-md text-center flex items-center justify-center gap-2 min-w-max">
  <span className="text-black text-sm font-bold">{course.price}</span>
  {course.priceOld && (
    <span className="text-black text-lg font-bold">{course.priceOld}</span>
  )}
</div>

</div>
</div>
    </motion.div>
  );
}
