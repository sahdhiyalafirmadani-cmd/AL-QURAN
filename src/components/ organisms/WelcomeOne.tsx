"use client";

import WelcomeContent from "../molecules/WelcomeContent";
import WelcomeImages from "../molecules/WelcomeImages";

export default function WelcomeOne() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Custom Animations */}
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

      {/* Left Background Pattern (moves left to right) */}
      <div
        className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-72 md:h-80 opacity-30 animate-move-left-right"
        style={{
          backgroundImage: "url('/assets/images/background/pattern-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      ></div>

      {/* Right Background Pattern (rotates clockwise) */}
      <div
        className="absolute top-0 right-2 sm:right-4 md:right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-64 md:h-64 opacity-30 animate-rotate-slow"
        style={{
          backgroundImage: "url('/assets/images/background/pattern-2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <WelcomeContent />
        <WelcomeImages />
      </div>
    </section>
  );
}
