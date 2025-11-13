"use client";

import FlipIcon from "../ atoms/FlipIcon";
import RatingCard from "../molecules/RatingCard";
import PassOutCard from "../molecules/PassOutCard";

export default function StudentsOne() {
  return (
    <section
      className="relative -mt-[7%] py-9 w-[95%] mx-auto z-[5] rounded-lg overflow-hidden"
      aria-label="students-one"
    >

      <div
        className="absolute inset-0 bg-[#138c57] -z-10"
        style={{
          backgroundImage: "url('/assets/images/background/student-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 pl-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left green panel content (col-span 7 on lg) */}
          <div className="lg:col-span-7 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 ">
  Alhamdulillah We <br /> Have Reached Over
</h2>

            <p className="text-lg text-white/90 mb-8 max-w-xl">
  Duis aute irure dolor in reprehenderit in voluptate <br /> 
  velit esse cillum dolore eu fugiat nulla pariatur.
</p>


            <div className="flex items-center gap-6 group">
              <FlipIcon />
              <div>
                <div className="text-6xl md:text-7xl font-extrabold text-white leading-none">
                  18,000
                </div>
                <div className="text-white/90 mt-1 text-5xl md:text-2xl">Active Students</div>
              </div>
              
            </div>
            <style jsx global>{`
                   .group:hover .flip-inner {
                    transform: rotateY(180deg);
                   }
`          }</style>
          </div>

     {/* Right white rounded container (col-span-5 on lg) */}
<div className="lg:col-span-5 relative -translate-x-40 translate-y-9">
  <div className="relative">

    {/* Yellow curved layer behind the white card */}
    <div
      className="
        absolute
        -top-6
        left-[-4%]
        w-[108%]
        h-[75%]
        bg-[#F9C33C]
        rounded-t-[3rem]
        z-10
        before:content-['']
        before:absolute
        before:inset-0
        before:bg-gradient-to-b
        before:from-[#F9C33C]
        before:to-transparent
        before:rounded-t-[3rem]
        before:w-full
        before:h-full
        before:opacity-100
        before:scale-x-[0.52]        /* thinner sides */
        before:scale-y-[0.58]        /* slightly shorter bottom */
        before:translate-y-[0]       /* align with top */
      "
      aria-hidden="true"
    ></div>

    {/* Main white card */}
    <div
      className="
        relative
        z-20
        bg-white
        rounded-t-[2.5rem]
        shadow-lg
        p-6 md:p-8
      "
      style={{
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      <RatingCard />
      <PassOutCard />
    </div>
    

  </div>
</div>


        </div>
      </div>
    </section>
  );
}
