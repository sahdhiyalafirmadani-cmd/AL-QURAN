import React from "react";
import SectionTitle from "../ atoms/SectionTitle";
import WelcomeTwoImageBlock from "../molecules/WelcomeTwoImageBlock";
import WelcomeTwoIconList from "../molecules/WelcomeTwoIconList";
import WelcomeTwoLowerBlock from "../molecules/WelcomeTwoLowerBlock";

export default function WelcomeTwo() {
  return (
    <section className="relative py-[100px] pb-[110px] overflow-hidden welcome-two">

      {/* BG PATTERNS */}
     <div
  className="absolute left-[-170px] bottom-0 w-[538px] h-[538px] bg-no-repeat"
  style={{
    backgroundImage: "url(/assets/images/background/welcome-two_pattern.png)",
    animation: "upDown 10s linear infinite",
    backgroundSize: "contain",
  }}
></div>

<div
  className="absolute right-0 bottom-[-100px] w-[422px] h-[469px] bg-no-repeat"
  style={{
    backgroundImage: "url(/assets/images/background/welcome-two_pattern-two.png)",
    animation: "leftRight 12s linear infinite",
    backgroundSize: "contain",
  }}
></div>

<style>
  {`
    @keyframes upDown {
      0% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0); }
    }

    @keyframes leftRight {
      0% { transform: translateX(0); }
      50% { transform: translateX(20px); }
      100% { transform: translateX(0); }
    }
  `}
</style>


      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT IMAGE BLOCK */}
          <WelcomeTwoImageBlock />

          {/* RIGHT CONTENT */}
          <div className="relative mt-[-20px] pl-5">

            <SectionTitle
              subtitle="Islamic Online Madrasah"
              subtitleIcon="/assets/images/icons/bismillah-2.png"
              heading="Online Islamic School At Home"
              text="We welcome our users to Online Quran teaching services where we are offering multiple Islamic as well as character building and life reformation courses as per the teachings of Sharia."
            />

            <WelcomeTwoIconList />

            <WelcomeTwoLowerBlock />

          </div>

        </div>
      </div>
    </section>
  );
}
