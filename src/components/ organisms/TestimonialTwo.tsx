"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialTwoCard from "../molecules/TestimonialTwoCard";

const testimonials = [
  {
    review:
      "Best platform for learning quran and arabic for kids. the way of teaching is the best and kids feel comfortable with them thank you mishkah for teaching",
    authorName: "Hafiz bin Usif",
    authorRole: "Quran Teacher",
    authorImg: "/assets/images/resource/author-1.png",
    topBgImg: "assets/images/icons/featured.png",
    bottomBgImg: "assets/images/icons/ameen-3.png",
  },
  {
    review:
      "Best platform for learning quran and arabic for kids. the way of teaching is the best and kids feel comfortable with them thank you mishkah for teaching",
    authorName: "Ibrahim Klip",
    authorRole: "Quran Teacher",
    authorImg: "/assets/images/resource/author-6.png",
    topBgImg: "assets/images/icons/featured.png",
    bottomBgImg: "assets/images/icons/ameen-3.png",
  },
  {
    review:
      "Best platform for learning quran and arabic for kids. the way of teaching is the best and kids feel comfortable with them thank you mishkah for teaching",
    authorName: "Hafiz bin Usif",
    authorRole: "Quran Teacher",
    authorImg: "/assets/images/resource/author-1.png",
    topBgImg: "assets/images/icons/featured.png",
    bottomBgImg: "assets/images/icons/ameen-3.png",
  },
];

const TestimonialTwo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative py-28 bg-repeat-x bg-top"
      style={{ backgroundImage: "url(/assets/images/background/testimonial-two_bg.png)" }}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="text-[#1d8e5a] font-semibold text-lg">Testimonials</div>
          <h2 className="text-4xl font-bold text-black">
            Trusted By Thousand Of <br /> Students And Tutors
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".testimonial-pagination" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialTwoCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="testimonial-pagination mt-10 flex justify-center gap-3"></div>
      </div>

      {/* Pagination Dots Styling */}
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
      `}</style>
    </section>
  );
};

export default TestimonialTwo;
