"use client";

import ServiceCard from "../molecules/ServiceCard";

export default function ServiceOne({
  theme = "light",
  homeVersion = "home01",
}: {
  theme?: "light" | "dark";
  homeVersion?: "home01" | "home02";
}) {
  const sectionBg =
    homeVersion === "home02"
      ? "" // gradient handled in style
      : theme === "dark"
      ? "bg-[#121d18]"
      : "bg-[#051912]";

  return (
    <section
      className={`relative py-32 min-h-[800px] ${sectionBg}`}
      style={
        homeVersion === "home02"
          ? {
              backgroundImage: `linear-gradient(to right, #2F443A 40%, #F2CD64 100%), url('/assets/images/background/service-bg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "overlay", // ensures image is visible under gradient
            }
          : {
              backgroundImage: "url('/assets/images/background/service-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
      }
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <p
          className={`font-medium uppercase tracking-wider ${
            homeVersion === "home02" ? "text-white" : "text-[#0D6832]"
          }`}
        >
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
          theme={theme}
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
          theme={theme}
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
          theme={theme}
        />
      </div>
    </section>
  );
}
