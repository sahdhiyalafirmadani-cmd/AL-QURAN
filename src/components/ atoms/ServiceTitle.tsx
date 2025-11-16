"use client";

interface ServiceTitleProps {
  title: string;
  isDark?: boolean; // true if dark mode
}

export default function ServiceTitle({ title, isDark = false }: ServiceTitleProps) {
  const words = title.split(" ");
  const textColor = isDark ? "text-white" : "text-black"; // Only heading color changes

  if (words.length <= 1) {
    return (
      <h4 className={`${textColor} text-lg md:text-xl font-semibold mb-3 leading-snug`}>
        {title}
      </h4>
    );
  }

  const half = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, half).join(" ");
  const secondLine = words.slice(half).join(" ");

  return (
    <h4 className={`${textColor} text-2xl md:text-2xl font-semibold mb-3 leading-snug`}>
      {firstLine}
      <br />
      {secondLine}
    </h4>
  );
}
