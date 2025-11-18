import React from "react";
import GradientCircleIcon from "../ atoms/GradientCircleIcon";

export default function WelcomeTwoIconList() {
  return (
    <div className="relative mt-10">

      {/* rotating icon */}
     <div className="absolute right-0 top-[30px]">
  <img
    src="/assets/images/icons/welcome_two.png"
    className="w-[140px]"
    style={{
      animation: "spinCW 10s linear infinite",
    }}
  />
  <style>
    {`
      @keyframes spinCW {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}
  </style>
</div>

      <GradientCircleIcon
        iconClass="flaticon-mosque"
        text={"Learn Online at Your <br> Own Pace"}
      />

      <GradientCircleIcon
        iconClass="flaticon-quran-3"
        text={"Islamic Philosophy <br> and Quranic Studies"}
      />

    </div>
  );
}
