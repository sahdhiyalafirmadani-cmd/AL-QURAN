"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

import SlideContent from "../molecules/SlideContent";

interface Slide {
  img: string;
  title: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    img: "/assets/images/main-slider/4.jpg",
    title: "AlQuran Online Academy",
    heading: "Largest Online|Islamic Madrasah",
    paragraph:
      "Islamic online madrasah is an ISO certified educational institution of international standards",
    buttonText: "Find the course",
    buttonLink: "/course-detail",
  },
  {
    img: "/assets/images/main-slider/5.jpg",
    title: "AlQuran Online Academy",
    heading: "Largest Online|Islamic Madrasah",
    paragraph:
      "Islamic online madrasah is an ISO certified educational institution of international standards",
    buttonText: "Find the course",
    buttonLink: "/course-detail",
  },
  {
    img: "/assets/images/main-slider/6.jpg",
    title: "AlQuran Online Academy",
    heading: "Largest Online|Islamic Madrasah",
    paragraph:
      "Islamic online madrasah is an ISO certified educational institution of international standards",
    buttonText: "Find the course",
    buttonLink: "/course-detail",
  },
];

const SliderTwo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[120vh] md:h-[130vh]">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: ".slider_two-next_arrow",
          prevEl: ".slider_two-prev_arrow",
        }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            />
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Slide content */}
            <div className="absolute bottom-20 md:bottom-40 left-0 w-full flex px-6 md:px-20 items-start">
              <SlideContent {...slide} />

              {/* Right side dots */}
              <div className="ml-auto flex flex-col items-center space-y-8 mt-20">
                {slides.map((_, i) => (
                  <div key={i} className="relative flex items-center">
                    <div className="w-5 h-5 rounded-full border border-white"></div>

                    {activeIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute right-2 flex items-center space-x-2"
                      >
                        <div className="text-white font-bold text-3xl">
                          {i + 1}
                        </div>
                        <div className="h-[1px] bg-white w-14"></div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderTwo;
