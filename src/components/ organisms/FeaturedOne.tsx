"use client";

import FeatureCard from "../molecules/FeatureCard";
import { FaBook, FaCertificate, FaUserGraduate } from "react-icons/fa";

export default function FeaturedOne() {
  return (
    <section
      className="relative z-20"
      style={{ marginTop: "-10vh" }} // overlap slider slightly
    >
      <div className="flex justify-center">
        <div
          className="relative max-w-7xl w-full bg-[#E9F6F7] rounded-xl py-12 px-6 md:px-10 shadow-md"
          style={{
            backgroundImage: "url('/assets/images/icons/featured.png')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "14.2%", // fits 7 images across
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ml-[40px]">
            <FeatureCard
              icon={<FaBook className="w-10 h-10 text-black" />}
              lines={["Learn quick", "Quran Classes"]}
            />
            <FeatureCard
              icon={<FaCertificate className="w-10 h-10 text-black" />}
              lines={["ISO certified", "Islamic institution"]}
            />
            <FeatureCard
              icon={<FaUserGraduate className="w-10 h-10 text-black" />}
              lines={["Online Arabic", "Classes For Kids"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
