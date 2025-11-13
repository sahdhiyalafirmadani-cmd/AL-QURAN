"use client";

export default function RatingCard() {
  return (
    <div className=" p-6">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-18 h-18 rounded-md bg-[#F9C33C] text-black flex flex-col items-center justify-center font-bold text-xl shadow border border-black">
  <div className="flex text-lg -mt-1 space-x-[5px]">
    <span
      className="text-transparent"
      style={{ WebkitTextStroke: "1px black" }}
    >
      ★
    </span>
    <span
      className="text-transparent"
      style={{ WebkitTextStroke: "1px black" }}
    >
      ★
    </span>
    <span
      className="text-transparent"
      style={{ WebkitTextStroke: "1px black" }}
    >
      ★
    </span>
  </div>
  <div>4.5</div>
</div>

        </div>
        <div>
          <h4 className="text-[#0b1220] font-semibold text-lg mb-2">
            Top Ratings On Trustpilot
          </h4>
          <p className="text-gray-600 text-sm">
            Lorem ipsum generators on the internet tend to repeat predefined
            chunks necessary on making this the first velit esse cillum dolore.
          </p>
        </div>
      </div>
    </div>
  );
}
