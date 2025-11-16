"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SubChild = { label: string; href: string };
type SubItem = { title: string; href?: string; children?: SubChild[] };
type DropdownItem = { title: string; href?: string; subItems?: SubItem[] };

const MENU: DropdownItem[] = [
  {
    title: "Home",
    subItems: [
      { title: "Home 01", href: "/" },
      { title: "Home 02", href: "/index-2" },
      { title: "Home 03", href: "/index-3" },
      { title: "Home 04", href: "/index-4" },
      { title: "Home 05", href: "/index-5" },
      { title: "Home 06", href: "/index-6" },
      { title: "Home 01 dark", href: "/home01-dark" },
      { title: "Home 07 dark", href: "/index-8" },
    ],
  },
  {
    title: "About",
    subItems: [
      { title: "About Us", href: "/about" },
      { title: "Price", href: "/price" },
      {
        title: "Events",
        children: [
          { label: "Events", href: "/events" },
          { label: "Event Detail", href: "/event-detail" },
        ],
      },
    ],
  },
  {
    title: "Pages",
    subItems: [
      { title: "Faq's", href: "/faq" },
      { title: "Prayer Time", href: "/prayer-time" },
      { title: "Record Class", href: "/record-class" },
      { title: "Register", href: "/register" },
      { title: "Not Found", href: "/not-found" },
      {
        title: "Scholars",
        children: [
          { label: "Scholars", href: "/scholars" },
          { label: "Scholar Detail", href: "/scholar-detail" },
        ],
      },
    ],
  },
  {
    title: "Services",
    subItems: [
      { title: "Services", href: "/services" },
      { title: "Service Details", href: "/service-detail" },
    ],
  },
  {
    title: "Courses",
    subItems: [
      { title: "Courses", href: "/courses" },
      { title: "Course Details", href: "/course-detail" },
    ],
  },
  {
    title: "Blog",
    subItems: [
      { title: "Our Blog", href: "/blog" },
      { title: "Blog Detail", href: "/news-detail" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

interface MobileMenuProps {
  theme?: "light" | "dark"; // optional prop
}

const MobileMenu: React.FC<MobileMenuProps> = ({ theme = "light" }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const pathname = usePathname?.() ?? "";

  useEffect(() => {
    setOpen(false);
    setActive(null);
    setActiveSub(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleDropdown = (title: string) => {
    setActive((prev) => (prev === title ? null : title));
    setActiveSub(null);
  };

  const toggleSub = (title: string) => {
    setActiveSub((prev) => (prev === title ? null : title));
  };

  // Dark mode classes
  const bgClass = theme === "dark" ? "bg-[#131B16]" : "bg-white";
  const textClass = theme === "dark" ? "text-white" : "text-black";
  const borderClass = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const buttonColorClass = theme === "dark" ? "text-white" : "text-black"; // Hamburger + close button

  return (
    <>
      {/* Hamburger button */}
      <button
        className={`md:hidden text-3xl ${buttonColorClass}`}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className={`fixed top-0 right-0 z-50 h-full shadow-2xl flex flex-col ${bgClass}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ width: "75%", maxWidth: "640px" }}
            >
              <div className={`flex items-center justify-between px-6 py-4 border-b ${borderClass}`}>
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src={theme === "dark" ? "/assets/images/logo-white.svg" : "/assets/images/logo.svg"}
                    alt="logo"
                    width={120}
                    height={40}
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className={`text-2xl p-2 rounded hover:bg-gray-100 transition ${buttonColorClass}`}
                >
                  <FaTimes />
                </button>
              </div>

              <nav className="px-6 py-4 overflow-auto">
                <ul>
                  {MENU.map((item) => {
                    const hasDropdown = !!item.subItems?.length;
                    const expanded = active === item.title;

                    return (
                      <li key={item.title} className={`border-b ${borderClass}`}>
                        <div className="flex justify-between items-center py-3">
                          {item.href && !hasDropdown ? (
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={`text-base font-semibold flex-1 ${textClass}`}
                            >
                              {item.title}
                            </Link>
                          ) : (
                            <button
                              onClick={() => toggleDropdown(item.title)}
                              className={`text-base font-semibold flex-1 text-left ${textClass}`}
                            >
                              {item.title}
                            </button>
                          )}

                          {hasDropdown && (
                            <div className="flex items-center gap-2">
                              <span className="text-gray-300 select-none">|</span>
                              <button onClick={() => toggleDropdown(item.title)}>
                                <FaChevronDown
                                  className={`transition-transform ${expanded ? "rotate-180" : ""} ${textClass}`}
                                />
                              </button>
                            </div>
                          )}
                        </div>

                        <AnimatePresence initial={false}>
                          {expanded && hasDropdown && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              {item.subItems!.map((sub) => {
                                const hasChildren = !!sub.children?.length;
                                const subExpanded = activeSub === sub.title;

                                return (
                                  <li key={sub.title} className={`border-b ${borderClass}`}>
                                    <div className="flex justify-between items-center py-2">
                                      {sub.href && !hasChildren ? (
                                        <Link
                                          href={sub.href}
                                          onClick={() => setOpen(false)}
                                          className={`text-sm pl-4 flex-1 ${textClass}`}
                                        >
                                          {sub.title}
                                        </Link>
                                      ) : (
                                        <button
                                          onClick={() => toggleSub(sub.title)}
                                          className={`text-sm pl-4 flex-1 text-left ${textClass}`}
                                        >
                                          {sub.title}
                                        </button>
                                      )}

                                      {hasChildren && (
                                        <div className="flex items-center gap-2">
                                          <span className="text-gray-300 select-none">|</span>
                                          <button onClick={() => toggleSub(sub.title)}>
                                            <FaChevronDown
                                              className={`transition-transform ${subExpanded ? "rotate-180" : ""} ${textClass}`}
                                            />
                                          </button>
                                        </div>
                                      )}
                                    </div>

                                    {subExpanded && hasChildren && (
                                      <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                      >
                                        {sub.children!.map((child) => (
                                          <li key={child.label} className={`border-b ${borderClass}`}>
                                            <Link
                                              href={child.href}
                                              onClick={() => setOpen(false)}
                                              className={`block py-2 pl-6 text-sm ${textClass}`}
                                            >
                                              {child.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </motion.ul>
                                    )}
                                  </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
