import React from "react";
import SubtitleLine from "../ atoms/SubtitleLine";

export default function WelcomeTwoLowerBlock() {
  return (
    <div className="relative flex items-start gap-6 mt-[40px]">

      {/* Thumbnail */}
      <div className="absolute left-0 top-0 w-[160px] rounded-[5px] overflow-hidden">
        <img src="/assets/images/resource/welcome-3.jpg" alt="" className="rounded-[5px]" />
      </div>

      <div className="pl-[200px]">
        <SubtitleLine title="Peaceful" />

        <p className="text-gray-500 mt-3 leading-[28px] text-[16px] opacity-80">
          Working for peace & serving humanity. Lorem free market to available,
          but the majority have alteration in some form.
        </p>
      </div>

    </div>
  );
}
