"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import CourseIcon from "../ atoms/CourseIcon";
import StudyButton from "../ atoms/StudyButton";

type Course = {
  img: string;
  logo: string;
  icon: string;
  title: string;
  lessons: number;
  weeks: number;
  enroll: number;
  text: string;
  price: string;
  priceOld?: string;
};

interface CardProps {
  course: Course;
  index: number;
  theme?: "light" | "dark";
}

const cardVariant: Variants = {
  hidden: { opacity: 0, x: 120 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.18, duration: 0.75, ease: "easeOut" }
  }),
};

export default function CourseCard({ course, index, theme = "light" }: CardProps) {
  const isDark = theme === "dark";
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="group rounded-xl shadow-md overflow-hidden w-[310px] -translate-x-[35px]"
      style={{
        backgroundColor: isDark ? "#12211A" : "#FFFFFF", // ✔ CARD BG
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative overflow-visible">
        <motion.div
          animate={hovered ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.35 }}
          className="w-full h-48 relative"
        >
          <Image src={course.img} alt={course.title} fill className="object-cover" />
        </motion.div>

        {/* Logo */}
        <div className="absolute left-6 -bottom-5 z-15">
          <CourseIcon src={course.logo} alt="logo" hover={hovered} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">

        {/* Title */}
        <h4
          className="course-heading text-lg md:text-xl font-semibold hover:text-[#0D6832] transition-colors duration-200"
          style={{
            color: isDark ? "#FFFFFF" : "#0b1220", // ✔ TITLE WHITE IN DARK
          }}
        >
          <a href="/course-detail">{course.title}</a>
        </h4>

        {/* Lessons / Weeks / Enroll */}
        <div className="border-t border-b border-gray-200 py-3">
          <ul
            className="flex items-center justify-between text-sm"
            style={{ color: isDark ? "#FFFFFF" : "#0b1220" }} // ✔ LABELS
          >
            <li className="flex flex-col items-center">
              <span className="font-bold text-[#0D6832] text-lg">{course.lessons}</span>
              <span className="font-bold text-base" style={{ color: isDark ? "#FFFFFF" : "#0b1220" }}>
                lessons
              </span>
            </li>

            <li className="flex flex-col items-center">
              <span className="font-bold text-[#0D6832] text-lg">{course.weeks}</span>
              <span className="font-bold text-base" style={{ color: isDark ? "#FFFFFF" : "#0b1220" }}>
                weeks
              </span>
            </li>

            <li className="flex flex-col items-center">
              <span className="font-bold text-[#0D6832] text-lg">{course.enroll}</span>
              <span className="font-bold text-base" style={{ color: isDark ? "#FFFFFF" : "#0b1220" }}>
                enroll
              </span>
            </li>
          </ul>
        </div>

        {/* Description */}
        <p
          className="text-sm"
          style={{ color: isDark ? "#FFFFFF" : "#4B5563" }} // ✔ TEXT WHITE IN DARK
        >
          {course.text}
        </p>

        {/* Bottom section */}
        <div className="flex items-center justify-between gap-4 mt-2">
          <StudyButton href="#" />

          {/* Price */}
          <div
            className="px-4 py-2 rounded-md text-center flex items-center justify-center gap-2 min-w-max"
            style={{
              backgroundColor: "#0D683214",
            }}
          >
            <span className="text-sm font-bold" style={{ color: isDark ? "#FFFFFF" : "#000000" }}>
              {course.price}
            </span>

            {course.priceOld && (
              <span className="text-lg font-bold" style={{ color: isDark ? "#FFFFFF" : "#000000" }}>
                {course.priceOld}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
