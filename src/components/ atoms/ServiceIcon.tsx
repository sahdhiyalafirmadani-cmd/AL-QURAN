"use client";

interface ServiceIconProps {
  iconClass: string;
}

export default function ServiceIcon({ iconClass }: ServiceIconProps) {
  return (
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F9C33C] text-[#0b1220] mb-6 shadow-lg ml-auto">
      <i className={`${iconClass} text-3xl`} />
    </div>
  );
}
