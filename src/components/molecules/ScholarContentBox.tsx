"use client";

import ScholarSocials from "./ScholarSocials";

interface ScholarContentBoxProps {
  name: string;
  designation: string;
}

const ScholarContentBox = ({ name, designation }: ScholarContentBoxProps) => {
  return (
    <div
      className="
        scholar-block_one-content
        relative
        text-center
        h-[187px]
        w-[284px]
        mx-auto
        -mt-[120px]
        pt-[35px]
        bg-[url('/assets/images/background/scholar-one_bg.png')]
        bg-cover
        bg-no-repeat
      "
    >
      <h4 className="scholar-block_one-heading text-xl font-bold text-black hover:text-[#1A8754] transition-colors duration-300">
        {name}
      </h4>
      <div
        className="
          scholar-block_one-designation
          text-[#1A8754]
          opacity-70
          mt-1
          text-sm
        "
      >
        {designation}
      </div>
      <div className="mt-5">
        <ScholarSocials />
      </div>
    </div>
  );
};

export default ScholarContentBox;
