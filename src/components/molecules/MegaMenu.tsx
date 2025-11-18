"use client";
import React from "react";
import Image from "next/image";

const megaItems = [
  { title: "Home 01", img: "/assets/images/pages/mega-menu-1.jpg", href: "/" },
  { title: "Home 02", img: "/assets/images/pages/mega-menu-2.jpg", href: "/home02" },
  { title: "Home 03", img: "/assets/images/pages/mega-menu-3.jpg", href: "/home03" },
  { title: "Home 04", img: "/assets/images/pages/mega-menu-4.jpg", href: "/home04" },
  { title: "Home 05", img: "/assets/images/pages/mega-menu-5.jpg", href: "/home05" },
  { title: "Home 06", img: "/assets/images/pages/mega-menu-6.jpg", href: "/home06" },
  { title: "Home 01 Dark", img: "/assets/images/pages/dark-1.jpg", href: "/home01dark" },
  { title: "Home 07 Dark", img: "/assets/images/pages/dark-2.jpg", href: "/home07dark" },
];

const MegaMenu = () => {
  const normalHomes = megaItems.slice(0, 6);
  const darkHomes = megaItems.slice(6);

  return (
  <div className=" absolute top-[calc(100%+32px)] -right-260 w-[1320px] bg-white rounded-lg shadow-2xl p-8 ml-20% h-[550px]">
      {/* First row - Home 01 to Home 06 aligned to right */}
      <div className="grid grid-cols-6 gap-4 justify-end">
        {normalHomes.map((it) => (
          <a
            key={it.title}
            href={it.href}
            className="block bg-[#F5F5F5] rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-[200px]">
              <Image src={it.img} alt={it.title} fill className="object-cover" />
            </div>
            <div className="flex justify-center mt-2">
  <div className="bg-[#E8E8E8] py-1 px-3 rounded-md hover:bg-[#53c653] transition-colors">
    <span className="text-[#0b1220] font-semibold text-sm">{it.title}</span>
  </div>
</div>

          </a>
        ))}
      </div>

      {/* Second row - Dark versions under first two items */}
      <div className="grid grid-cols-6 gap-4 mt-4">
        <div className="col-span-1">
          <a
            href={darkHomes[0].href}
            className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-[200px]">
              <Image src={darkHomes[0].img} alt={darkHomes[0].title} fill className="object-cover" />
            </div>
            <div className="flex justify-center mt-2">
  <div className="bg-[#E8E8E8] py-1 px-3 rounded-md hover:bg-[#53c653] transition-colors">
    <span className="text-[#0b1220] font-semibold text-sm">{darkHomes[0].title}</span>
  </div>
</div>

          </a>
        </div>

        <div className="col-span-1">
          <a
            href={darkHomes[1].href}
            className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-[200px]">
              <Image src={darkHomes[1].img} alt={darkHomes[1].title} fill className="object-cover" />
            </div>
            
           <div className="flex justify-center mt-2">
  <div className="bg-[#E8E8E8] py-1 px-3 rounded-md hover:bg-[#53c653] transition-colors">
    <span className="text-[#0b1220] font-semibold text-sm">{darkHomes[1].title}</span>
  </div>
</div>


          </a>
        </div>

        {/* Empty columns under Home 03 to 06 */}
        <div className="col-span-4"></div>
      </div>
    </div>
  );
};

export default MegaMenu;
