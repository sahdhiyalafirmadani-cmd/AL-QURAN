"use client";
import React, { useState, useEffect } from "react";
import MegaMenu from "./MegaMenu";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
  mega?: boolean;
};

interface NavMenuProps {
  theme?: "light" | "dark";
}

const navItems: NavItem[] = [
  { label: "Home", mega: true },
  {
    label: "About",
    children: [
      { label: "About us", href: "/about" },
      { label: "Price", href: "/price" },
      {
        label: "Events",
        children: [
          { label: "Events", href: "/events" },
          { label: "Event Detail", href: "/event-detail" },
        ],
      },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Faq's", href: "/faq" },
      { label: "Prayer Time", href: "/prayer-time" },
      { label: "Record Class", href: "/record-class" },
      { label: "Register", href: "/register" },
      { label: "Not Found", href: "/not-found" },
      {
        label: "Scholars",
        children: [
          { label: "Scholars", href: "/scholars" },
          { label: "Scholar Detail", href: "/scholar-detail" },
        ],
      },
    ],
  },
  {
    label: "Service",
    children: [
      { label: "Services", href: "/services" },
      { label: "Service Detail", href: "/service-detail" },
    ],
  },
  {
    label: "Courses",
    children: [
      { label: "Courses", href: "/courses" },
      { label: "Course Detail", href: "/course-detail" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "Our Blog", href: "/blog" },
      { label: "Blog Classic", href: "/blog-classic" },
      { label: "Blog Detail", href: "/news-detail" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const NavMenu: React.FC<NavMenuProps> = ({ theme = "light" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (idx: number) => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setOpenIndex(idx);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenIndex(null), 400);
    setCloseTimeout(timeout);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-item")) setOpenIndex(null);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // ✅ top-level text colors
  const topLevelColor =
    theme === "dark" ? "text-white hover:text-white" : "text-[#0b1220] hover:text-black";

  return (
    <ul className="hidden md:flex items-center gap-6">
      {navItems.map((item, idx) => (
        <li
          key={item.label}
          className="relative group nav-item"
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={item.href || "#"}
            className={`px-3 py-2 inline-block font-medium rounded transition ${topLevelColor}`}
          >
            {item.label}
          </a>

          {/* ✅ Mega Menu */}
          {item.mega && openIndex === idx && (
            <div className="absolute left-0 mt-2 z-40">
              <MegaMenu />
            </div>
          )}

          {/* ✅ Regular Dropdown (unchanged) */}
          {item.children && openIndex === idx && !item.mega && (
            <div className="absolute left-0 mt-2 z-40">
              <div className="min-w-[260px] bg-white text-black rounded-md shadow-2xl p-3">
                {item.children.map((child, cidx) =>
                  child.children ? (
                    <div key={cidx} className="relative group/item">
                      <div className="px-3 py-2 flex justify-between items-center hover:bg-gray-100 rounded cursor-pointer">
                        <span>{child.label}</span>
                        <span className="text-sm opacity-70">{">"}</span>
                      </div>
                      <div className="absolute left-full top-0 ml-1 hidden group-hover/item:block">
                        <div className="bg-white text-black rounded-md shadow-2xl p-2 min-w-[200px]">
                          {child.children.map((s, si) => (
                            <a
                              key={si}
                              href={s.href}
                              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 group/nested transition-all duration-200"
                            >
                              <span className="opacity-0 -translate-x-2 text-green-600 transition-all duration-200 group-hover/nested:opacity-100 group-hover/nested:translate-x-0">
                                ↘
                              </span>
                              <span>{s.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={cidx}
                      href={child.href}
                      className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 group/link transition-all duration-200"
                    >
                      <span className="opacity-0 -translate-x-2 text-green-600 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                        ↘
                      </span>
                      <span>{child.label}</span>
                    </a>
                  )
                )}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
