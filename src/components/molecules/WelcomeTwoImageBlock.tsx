import React from "react";
import { FaGlobe } from "react-icons/fa";

export default function WelcomeTwoImageBlock() {
  return (
    <div className="relative pr-[80px]">

      {/* INLINE KEYFRAMES (works inside this file) */}
      <style>
        {`
          @keyframes spinCW {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes spinCCW {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}
      </style>

      {/* TOP DOTTED PATTERN — CLOCKWISE */}
      <div
        className="absolute left-[-130px] top-[-50px] w-[240px] h-[240px]"
        style={{
          backgroundImage: "url(/assets/images/background/pattern-2.png)",
          animation: "spinCW 18s linear infinite",
        }}
      ></div>

      {/* BOTTOM DOTTED PATTERN — ANTI-CLOCKWISE */}
      <div
        className="absolute left-0 bottom-[-50px] w-[240px] h-[240px]"
        style={{
          backgroundImage: "url(/assets/images/background/pattern-2.png)",
          animation: "spinCCW 18s linear infinite",
        }}
      ></div>

      {/* Ameen Icon */}
      <div className="absolute left-[100px] top-[5px] z-[1]">
        <img
          src="/assets/images/icons/ameen-1.png"
          alt="Ameen Icon"
          className="w-[90px]"
        />
      </div>

      {/* MAIN IMAGE */}
      <div className="relative">
        <img
          src="/assets/images/resource/welcome-2.jpg"
          alt=""
          className="rounded-[10px] w-full"
        />

        {/* Dual Color Lines */}
        <span className="absolute right-[-45px] top-[70px] w-[15px] h-[220px] bg-[#50bc84]"></span>
        <span className="absolute right-[-45px] top-0 w-[15px] h-[123px] bg-[#ffd050]"></span>
      </div>

      {/* SECONDARY IMAGE */}
      <div className="absolute right-[25px] bottom-0 rounded-[10px] border-[10px] border-white">
        <img
          src="/assets/images/resource/welcome-4.jpg"
          alt=""
          className="rounded-[10px] w-[300px]"
        />
      </div>

      {/* Ribbon */}
    <div
  className="absolute left-[15px] bottom-[-40px] flex items-center gap-4 text-[24px]
             font-normal text-[#676767] px-[20px] py-[10px] z-[2]"
>
  {/* Globe Icon */}
  <FaGlobe className="relative z-5" />

  {/* Ribbon Text */}
  Since 1995 Operating in the world

  {/* Gradient Ribbon Background */}
  <span
    className="absolute left-0 top-0 right-[-150px] bottom-0 -z-[1] 
               bg-gradient-to-r from-[#50bc84] to-[#ffd050]
               [clip-path:polygon(0_0,100%_0,94%_50%,100%_100%,0_100%,0%_50%)]"
  ></span>
</div>

    </div>
  );
}
