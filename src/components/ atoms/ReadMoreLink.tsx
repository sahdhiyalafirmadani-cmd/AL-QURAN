"use client";

export default function ReadMoreLink() {
  return (
    <a
      href="service-detail.html"
      className="absolute bottom-0 left-0 w-full h-[20%] flex items-center pl-6 gap-2 
                 bg-gray-200 text-black font-medium transition-colors duration-300 
                 group-hover:bg-[#F9C33C] group-hover:text-[#0b1220]"
    >
      <span>Read More</span>
      <span className="text-xl ">→</span>
    </a>
  );
}
