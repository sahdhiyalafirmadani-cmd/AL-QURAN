"use client";

export default function FlipIcon() {
  return (
    <div className="w-20 h-20 [perspective:1000px]">
      <div className="flip-inner w-full h-full relative transition-transform duration-700" style={{ transformStyle: "preserve-3d" }}>
        {/* FRONT: Yellow with black icon */}
        <div className="absolute inset-0 bg-[#F9C33C] rounded-full flex items-center justify-center"
             style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 12c0-1.1.9-2 2-2h3v6H6a2 2 0 0 1-2-2v-2z" fill="#0b1220" />
            <path d="M20 7h-4l-2 3v7h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" fill="#0b1220" />
          </svg>
        </div>

        {/* BACK: White with green icon */}
        <div className="absolute inset-0 bg-white  rounded-full flex items-center justify-center"
             style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 12c0-1.1.9-2 2-2h3v6H6a2 2 0 0 1-2-2v-2z" fill="#0D6832" />
            <path d="M20 7h-4l-2 3v7h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" fill="#0D6832" />
          </svg>
        </div>
      </div>
    </div>
  );
}
