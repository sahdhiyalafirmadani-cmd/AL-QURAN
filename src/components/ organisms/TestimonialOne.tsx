"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "../molecules/TestimonialCard";

const TestimonialOne: React.FC = () => {
  const testimonials = [
    {
      title: "Customers Review",
      text: "Honestly i don’t have enough good words to write about resala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say",
      img: "/assets/images/resource/author-1.png",
      name: "Hafiz bin Usif",
      role: "Quran Teacher",
    },
    {
      title: "Customers Review",
      text: "Honestly i don’t have enough good words to write about resala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say",
      img: "/assets/images/resource/author-1.png",
      name: "Aisha Rahman",
      role: "Parent",
    },
    {
      title: "Customers Review",
      text: "Honestly i don’t have enough good words to write about resala academy everyone in resala academy are very nice very calm they are also flexible about your schedules. i just want say",
      img: "/assets/images/resource/author-1.png",
      name: "Mohammad Ali",
      role: "Student",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-r from-[#f6f7f1] to-[#d7ecd6] bg-no-repeat bg-cover bg-center overflow-hidden py-20"
      style={{
        backgroundImage: "url('/assets/images/background/testimonial-one_bg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 px-6 relative">
        {/* Left Side Image */}
        <div className="lg:col-span-5 flex justify-center items-center relative z-10">
          <Image
            src="/assets/images/resource/testimonial.jpg"
            alt="testimonial"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full max-w-[480px] transform translate-y-5 -translate-x-16 "
          />
        </div>

        {/* Right Side Carousel */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20 min-h-[500px] ">
          {/* Background "Ameen" icon */}
          <div className="absolute right-16 top-0 w-[200px] h-[200px] bg-[url('/assets/images/icons/ameen-2.png')] bg-contain bg-no-repeat opacity-80 " />

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="relative w-full"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="testimonial-pagination mt-10 flex justify-end gap-3 "></div>
        </div>
      </div>

      {/* Dots styling */}
      <style jsx global>{`
        .testimonial-pagination .swiper-pagination-bullet {
          background: white;
          border: 2px solid #000;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #16a34a !important;
          transform: scale(1.2);
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialOne;
