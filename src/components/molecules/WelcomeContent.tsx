"use client";

import Image from "next/image";
import FlipIconCircle from "../ atoms/FlipIconCircle";

export default function WelcomeContent({ theme = "light" }: { theme?: "light" | "dark" }) {
  const textColor = theme === "dark" ? "text-white" : "text-gray-700";
  const paragraphColor = theme === "dark" ? "text-white" : "text-gray-600";
  const headingColor = theme === "dark" ? "text-white" : "text-[#0b1220]";
  const smallHeadingColor = theme === "dark" ? "text-[#0D6832]" : "text-[#0D6832]";

  const bismillahImg =
    theme === "dark"
      ? "/assets/images/icons/bismillah-3.png"
      : "/assets/images/icons/bismillah-2.png";

  return (
    <div className={`space-y-5 ${textColor}`}>
      {/* Section Title */}
      <div className="mb-6">
        <div
          className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-xl font-semibold ${smallHeadingColor}`}
        >
          Islamic Online Madrasah
          <Image
            src={bismillahImg}
            alt="bismillah"
            width={140}
            height={70}
            className="-translate-y-1 sm:-translate-y-1 md:-translate-y-2"
          />
        </div>

        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 ${headingColor}`}>
          Welcome To Imman Quran Institute
        </h2>

        <p className={`mt-2 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed ${paragraphColor}`}>
          We welcome our users to Online Quran teaching services where we are offering multiple
          Islamic as well as character building and life reformation courses as per the teachings of
          Sharia.
        </p>
      </div>

      {/* Inline image + text */}
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

        {/* Text & Icon */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <p className={`text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed max-w-full sm:max-w-[360px] ${paragraphColor}`}>
            There are many variations of passages of lorem ipsum available, but the majority have
            suffered business consulting
          </p>

          <div className="flex items-center gap-3 sm:gap-4 mt-0">
            <FlipIconCircle
              IconSVG={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3z" />
                </svg>
              }
            />

            <p className={`font-semibold text-xs sm:text-sm md:text-base leading-snug ${theme === "dark" ? "text-white" : "text-[#1A8754]"}`}>
              Learn Online at Your <br /> Own Pace
            </p>
          </div>
        </div>
      </div>

      {/* Bottom paragraph */}
      <p className={`text-xs sm:text-sm md:text-base mt-2 leading-relaxed ${paragraphColor}`}>
        <span>We offer our students high-quality Arabic and Quran at affordable</span>
        <br />
        prices that meet their budget.
      </p>
    </div>
  );
}
