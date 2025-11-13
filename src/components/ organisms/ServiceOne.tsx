"use client";

import ServiceCard from "../molecules/ServiceCard";

export default function ServiceOne() {
  return (
    <section
      className="relative py-32 bg-[#051912] bg-cover bg-center min-h-[800px]" // increased height
      style={{
        backgroundImage: "url('/assets/images/background/service-bg.png')",
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <p className="text-[#0D6832] font-medium uppercase tracking-wider">
          WHAT WE OFFER
        </p>
        <h2 className="text-[white] text-3xl md:text-4xl font-bold mt-3">
          We offer an effective <br />
          Arabic & Quran Services
        </h2>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          iconClass="flaticon-quran-1"
          bgImage="/assets/images/icons/service-1.png"
          title="Online Quran Classes"
          text={
            <>
              There are many variations of <br />
              passages of lorem ipsum available <br />
              lorem ipsum dolor sit amet
            </>
          }
        />
        <ServiceCard
          iconClass="flaticon-pray"
          bgImage="/assets/images/icons/service-1.png"
          title="Tafseer Course"
          text={
            <>
              There are many variations of <br />
              passages of lorem ipsum available <br />
              lorem ipsum dolor sit amet
            </>
          }
        />
        <ServiceCard
          iconClass="flaticon-quran-2"
          bgImage="/assets/images/icons/service-1.png"
          title="We Value Our Students"
          text={
            <>
              There are many variations of <br />
              passages of lorem ipsum available <br />
              lorem ipsum dolor sit amet
            </>
          }
        />
      </div>
    </section>
  );
}
