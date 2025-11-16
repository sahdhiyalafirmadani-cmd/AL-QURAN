"use client";

import FeatureCard from "../molecules/FeatureCard";
import { FaBook, FaCertificate, FaUserGraduate } from "react-icons/fa";

export default function FeaturedOne({ theme = "light" }: { theme?: "light" | "dark" }) {
  
  // background for light/dark
  const bgColor = theme === "dark" ? "bg-[#0f0e0b]" : "bg-[#E9F6F7]";
  const borderStyle = theme === "dark" ? "border border-white" : "";

  return (
    <section
      className="relative z-20"
      style={{ marginTop: "-10vh" }}
    >
      <div className="flex justify-center">
        <div
          className={`relative max-w-7xl w-full rounded-xl py-12 px-6 md:px-10 shadow-md transition-colors ${bgColor} ${borderStyle}`}
          style={{
            backgroundImage: "url('/assets/images/icons/featured.png')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "14.2%",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ml-[40px]">

            <FeatureCard
              icon={<FaBook className="w-10 h-10 text-black" />}
              lines={["Learn quick", "Quran Classes"]}
              theme={theme}
            />

            <FeatureCard
              icon={<FaCertificate className="w-10 h-10 text-black" />}
              lines={["ISO certified", "Islamic institution"]}
              theme={theme}
            />

            <FeatureCard
              icon={<FaUserGraduate className="w-10 h-10 text-black" />}
              lines={["Online Arabic", "Classes For Kids"]}
              theme={theme}
            />

          </div>
        </div>
      </div>
    </section>
  );
}
