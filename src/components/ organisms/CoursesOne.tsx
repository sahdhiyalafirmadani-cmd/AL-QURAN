"use client";

import CourseCard from "../molecules/CourseCard";

const courses = [
  {
    img: "/assets/images/resource/course-1.jpg",
    logo: "/assets/images/icons/service-1.svg",
    icon: "/assets/images/icons/service-1.svg",
    title: "Quran Intermediate Course brother",
    lessons: 20,
    weeks: 10,
    enroll: 50,
    text: "There are many variations of lorem class passages of lorem ipsum available online",
    price: "$45.00",
    priceOld: "$32.00",
  },
  {
    img: "/assets/images/resource/course-2.jpg",
    logo: "/assets/images/icons/service-2.svg",
    icon: "/assets/images/icons/service-2.svg",
    title: "Online Quran Classes For Ladies",
    lessons: 20,
    weeks: 10,
    enroll: 50,
    text: "There are many variations of lorem class passages of lorem ipsum available online",
    price: "$45.00",
    priceOld: "$32.00",
  },
  {
    img: "/assets/images/resource/course-3.jpg",
    logo: "/assets/images/icons/service-3.svg",
    icon: "/assets/images/icons/service-3.svg",
    title: "Online Quran Classes for Kids",
    lessons: 20,
    weeks: 10,
    enroll: 50,
    text: "There are many variations of lorem class passages of lorem ipsum available online",
    price: "$45.00",
    priceOld: "$32.00",
  },
  {
    img: "/assets/images/resource/course-4.jpg",
    logo: "/assets/images/icons/service-4.svg",
    icon: "/assets/images/icons/service-4.svg",
    title: "Hifz Quran (Quran Memorization Course)",
    lessons: 20,
    weeks: 10,
    enroll: 50,
    text: "There are many variations of lorem class passages of lorem ipsum available online",
    price: "$45.00",
    priceOld: "$32.00",
  },
];

export default function CoursesOne() {
  return (
    <section
      className="py-40 bg-[#FAF9F6] mt-[100px] relative overflow-hidden"
      aria-label="courses-one"
      style={{
        backgroundImage: "url('/assets/images/background/courses-one_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 -mt-[35px]">
          <div className="text-[#0D6832] font-bold text-lg tracking-wide">
           Popular Courses
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1220] leading-snug mt-2">
            Our Arabic & Islamic Courses
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-25">
          {courses.map((c, i) => (
            <CourseCard key={i} course={c} index={i} />
          ))}
        </div>
      </div>

      {/* Optional soft overlay for extra brightness */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />
    </section>
  );
}
