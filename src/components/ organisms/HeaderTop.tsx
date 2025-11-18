"use client";

import Image from "next/image";
import { FaEnvelope, FaLocationDot, FaPhone, FaSun, FaMoon } from "react-icons/fa6";

interface HeaderTopProps {
  variant?: "default" | "style2"; // default = Home01, style2 = Home02
}

const HeaderTop = ({ variant = "default" }: HeaderTopProps) => {
  // Background for Home02
  const bgStyle =
    variant === "style2"
      ? {
          backgroundColor: "rgba(128, 128, 128, 0.5)", // gray transparent
        }
      : undefined;

  // Location text + icon color for Home02
  const locationTextColor = variant === "style2" ? "text-white" : "text-black";
  const locationIconColor = variant === "style2" ? "text-white" : "text-[#1A8754]";

  return (
    <div className="relative w-full text-white overflow-hidden hidden lg:block" style={bgStyle}>
      {/* === Home01 background layers (only for default) === */}
      {variant === "default" && (
        <>
          <div className="absolute left-0 top-0 h-full w-[20%] bg-[#1A8754]" />
          <div className="absolute left-[13.7%] top-0 h-full w-[28%] bg-gradient-to-l from-[#F9C33C] via-[#F9C33C]/85 to-[#1A8754]" />
          <div
            className="absolute left-[38.9%] top-0 h-full w-[38px] bg-[#1A8754]"
            style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
          />
          <div className="absolute left-[41.6%] top-0 h-full w-[65%] bg-[#1A8754]" />
        </>
      )}

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center px-6 py-1.5 flex-wrap text-sm">
        {/* LEFT SECTION */}
        <div className="flex items-center flex-wrap gap-10">
          <ul className="flex items-center gap-8">
            {/* Email */}
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>Support24@gmail.com</span>
            </li>

            {/* Location */}
            <li className={`flex items-center gap-2 font-medium ${locationTextColor}`}>
              <FaLocationDot className={locationIconColor} />
              <span>Suite 80 Golden Street Germeney</span>
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6 flex-wrap">
          {/* Bismillah logo stays same as Home01 */}
          <div className="ml-2">
            <Image
              src="/assets/images/icons/bismillah.png"
              alt="Bismillah"
              width={130}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Other info */}
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <FaSun />
              <span>Sunrise At: 5:15 AM</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMoon />
              <span>Sunset At: 4:50 PM</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone />
              <span>Let’s Talk +88 01 27 14 101</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
