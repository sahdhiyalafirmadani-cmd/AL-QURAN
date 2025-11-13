"use client";

import Image from "next/image";
import FlipIconCircle from "../ atoms/FlipIconCircle";

export default function WelcomeContent() {
  return (
    <div className="space-y-5 text-gray-700">
      {/* Section Title */}
      <div className="mb-6">
        <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-xl text-[#0D6832] font-semibold">
          Islamic Online Madrasah
          <Image
            src="/assets/images/icons/bismillah-2.png"
            alt="bismillah"
            width={140} // scales slightly for mobile
            height={70}
            className="-translate-y-1 sm:-translate-y-1 md:-translate-y-2"
          />
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0b1220] mt-2">
          Welcome To Imman Quran Institute
        </h2>

        <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
          We welcome our users to Online Quran teaching services where we are offering 
          multiple Islamic as well as character building and life reformation courses 
          as per the teachings of Sharia.
        </p>
      </div>

      {/* Inline image and short text */}
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Image */}
        <div className="relative w-full sm:w-40 md:w-48 h-44 sm:h-46 md:h-52 overflow-hidden rounded-md">
          <Image
            src="/assets/images/resource/welcome.jpg"
            alt="welcome"
            fill
            className="rounded-md object-cover"
          />
        </div>

        {/* Text & Icon Section */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Paragraph */}
          <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed max-w-full sm:max-w-[360px]">
            There are many variations of passages of lorem ipsum available, but the majority have 
            suffered business consulting
          </p>

          {/* Mosque Icon & Text */}
          <div className="flex items-center gap-3 sm:gap-4 mt-0">
            <FlipIconCircle
              IconSVG={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3z" />
                </svg>
              }
            />
            <p className="text-[#1A8754] font-semibold text-xs sm:text-sm md:text-base leading-snug">
              Learn Online at Your <br /> Own Pace
            </p>
          </div>
        </div>
      </div>

      {/* Bottom paragraph */}
      <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
        <span>
          We offer our students high-quality Arabic and Quran at affordable
        </span>
        <br />
        prices that meet their budget.
      </p>
    </div>
  );
}
