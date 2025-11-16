"use client";

import Image from "next/image";
import { FaGlobe } from "react-icons/fa";

export default function WelcomeImages({ theme = "light" }: { theme?: "light" | "dark" }) {
  const isDark = theme === "dark";

  // Colors that switch in dark mode
  const ribbonTextColor = isDark ? "text-white" : "text-black";
  const ribbonIconColor = isDark ? "text-white" : "text-black";
  const ribbonGradientFrom = isDark ? "#06492a" : "#0D6832"; // slightly darker for contrast if needed
  const ribbonGradientTo = isDark ? "#b8860b" : "#FFD700"; // keep gold but less bright on dark

  return (
    <div className="relative flex justify-center items-center">
      {/* Main image container */}
      <div className="relative w-[150%] md:w-[150%] lg:w-[150%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[540px] overflow-hidden rounded-lg shadow-md translate-x-0 sm:translate-x-0 md:translate-x-30">
        <Image
          src="/assets/images/resource/welcome-1.jpg"
          alt="Welcome main"
          fill
          className="rounded-lg object-cover"
        />

        {/* Ameen decorative icon overlay */}
        <div className="absolute top-2 sm:top-5 left-95 w-[120px] sm:w-[150px] md:w-[250px] h-[120px] sm:h-[150px] md:h-[250px] z-10 animate-float">
          <Image
            src="/assets/images/icons/ameen-1.png"
            alt="ameen icon"
            width={250}
            height={250}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Decorative vertical box line just touching the left edge of the image */}
      <div
        className="absolute z-30 top-8 sm:top-11.5 h-[80%] w-2 sm:w-3 md:w-4 translate-x-[252px]"
        style={{ left: "calc(50% - 75%)" }}
      >
        {/* Small yellow tip at top */}
        <div className="h-[5%] w-full bg-yellow-400 box-t-md"></div>
        {/* Remaining green segment */}
        <div className="h-[95%] w-full bg-[#1A8754] box-b-md"></div>
      </div>

      {/* Since 1995 ribbon overlay */}
      <div className="absolute bottom-0 left-4 sm:left-8 z-18">
        <div
          className="relative flex items-center gap-2 sm:gap-3 font-semibold text-sm sm:text-lg md:text-2xl shadow-md px-4 sm:px-6 py-2 sm:py-4"
          style={{ color: isDark ? "#fff" : undefined }}
        >
          {/* Ribbon background with inward tip */}
          <div
            className="absolute inset-0 clip-ribbon rounded-md z-0"
            style={{
              background: `linear-gradient(90deg, ${ribbonGradientFrom}, ${ribbonGradientTo})`,
            }}
          ></div>

          {/* Icon and text */}
          <FaGlobe
            className={`relative z-10 text-sm sm:text-xl md:text-2xl ${ribbonIconColor}`}
          />
          <span className={`relative z-10 text-xs sm:text-lg md:text-2xl ${ribbonTextColor}`}>
            Since 1995 Operating in the world
          </span>
        </div>
      </div>

      <style jsx>{`
        .clip-ribbon {
          clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 1s ease-in-out infinite;
        }

        /* keep the same box tip styles if you have them globally; otherwise default */
        .box-t-md {
          /* small rounded top tip style left as-is */
        }
        .box-b-md {
          /* small rounded bottom style left as-is */
        }
      `}</style>
    </div>
  );
}
