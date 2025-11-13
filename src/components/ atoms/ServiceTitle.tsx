"use client";

interface ServiceTitleProps {
  title: string;
}

export default function ServiceTitle({ title }: ServiceTitleProps) {
  // Split title into words
  const words = title.split(" ");

  if (words.length <= 1) {
    // If only one word, just render it
    return (
      <h4 className="text-lg md:text-xl font-semibold text-black mb-3 hover:text-[#0D6832] transition-colors duration-300">
        {title}
      </h4>
    );
  }

  // Split into first line and second line
  const half = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, half).join(" ");
  const secondLine = words.slice(half).join(" ");

  return (
    <h4 className="text-2xl md:text-2xl font-semibold text-black mb-3 hover:text-[#0D6832] transition-colors duration-300 leading-snug">
      {firstLine}
      <br />
      {secondLine}
    </h4>
  );
}
