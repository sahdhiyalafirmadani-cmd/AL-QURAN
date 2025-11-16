"use client";

import WelcomeContent from "../molecules/WelcomeContent";
import WelcomeImages from "../molecules/WelcomeImages";

export default function WelcomeOne({ theme = "light" }: { theme?: "light" | "dark" }) {
  // Your requested dark BG
  const bgColor = theme === "dark" ? "bg-[#0f0e0b]" : "bg-white";

  return (
    <section
      className={`relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${bgColor}`}
    >
      {/* Animations */}
      <style jsx>{`
        @keyframes rotate-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes move-left-right {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-30px);
          }
        }

        .animate-rotate-slow {
          animation: rotate-slow 40s linear infinite;
        }

        .animate-move-left-right {
          animation: move-left-right 6s ease-in-out infinite;
        }
      `}</style>

      {/* -------------------- LEFT PATTERN (Pattern 5) -------------------- */}
      <div
        className="absolute top-0 left-0 
        w-28 h-28 sm:w-40 sm:h-40 md:w-80 md:h-96 
        opacity-60 animate-move-left-right"
        style={{
          backgroundImage:
            theme === "dark"
              ? "url('/assets/images/background/pattern-5.png')" // dark pattern
              : "url('/assets/images/background/pattern-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          filter: theme === "dark" ? "brightness(1.2)" : "brightness(0.4)",
        }}
      ></div>

      {/* -------------------- RIGHT PATTERN (Pattern 6) -------------------- */}
      <div
        className="absolute top-0 right-2 sm:right-4 md:right-10
        w-20 h-20 sm:w-32 sm:h-32 md:w-72 md:h-72 
        opacity-60 animate-rotate-slow"
        style={{
          backgroundImage:
            theme === "dark"
              ? "url('/assets/images/background/pattern-6.png')" // dark pattern
              : "url('/assets/images/background/pattern-2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          filter: theme === "dark" ? "brightness(1.2)" : "brightness(0.4)",
        }}
      ></div>

      {/* -------------------- MAIN CONTENT -------------------- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <WelcomeContent theme={theme} />
        <WelcomeImages theme={theme} />
      </div>
    </section>
  );
}
