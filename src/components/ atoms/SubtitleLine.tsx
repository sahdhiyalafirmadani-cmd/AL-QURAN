import React from "react";

interface Props {
  title: string;
}

export default function SubtitleLine({ title }: Props) {
  return (
    <h5 className="relative font-semibold text-gray-800 font-inter pt-2">
      <span className="absolute left-0 top-0 w-[47px] h-[7px] bg-[#50bc84]"></span>
      <span className="absolute left-0 top-0 w-[27px] h-[7px] bg-[#F3B815]"></span>
      {title}
    </h5>
  );
}
