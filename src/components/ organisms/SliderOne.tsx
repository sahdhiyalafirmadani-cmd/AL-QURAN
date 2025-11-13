"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlideItem from "../molecules/SlideItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    img: "/assets/images/main-slider/1.jpg",
    title: "Largest Online Madrasah",
    heading: "Islamic Online \nMadrasah",
    text: "Islamic online madrasah is an ISO certified educational institution of international standards",
    buttonText: "Find the course",
    buttonLink: "/course-detail",
  },
  {
    img: "/assets/images/main-slider/2.jpg",
    title: "Largest Online Madrasah",
    heading: "Islamic Online \nMadrasah",
    text: "Islamic online madrasah is an ISO certified educational institution of international standards",
    buttonText: "Find the course",
    buttonLink: "/course-detail",
  },
  {
    img: "/assets/images/main-slider/3.jpg",
    title: "Largest Online Madrasah",
    heading: "Islamic Online \nMadrasah",
    text: "Islamic online madrasah is an ISO certified educational institution of international standards",
    buttonText: "Find the course",
    buttonLink: "/course-detail",
  },
];

export default function SliderOne() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const onSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className="relative w-full">
      <Swiper
        onSwiper={(sw) => {
          swiperRef.current = sw;
        }}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".main-slider-prev",
          nextEl: ".main-slider-next",
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        speed={900}
        onSlideChange={onSlideChange}
        className="relative w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <SlideItem {...s} active={i === activeIndex} />
          </SwiperSlide>
        ))}

        {/* custom nav (visible on all screen sizes) */}
        <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none z-20">
          <button
            onClick={goPrev}
            className="main-slider-prev pointer-events-auto bg-white/20 hover:bg-[#064b33] text-white p-3 rounded-full"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={goNext}
            className="main-slider-next pointer-events-auto bg-white/20 hover:bg-[#064b33] text-white p-3 rounded-full"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </Swiper>
    </section>
  );
}
