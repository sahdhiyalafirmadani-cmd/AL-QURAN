"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons"; // import IconType for typing

interface ScholarSocial {
  href: string;
  icon: IconType; // use IconType instead of JSX.Element
}

const socials: ScholarSocial[] = [
  { href: "https://facebook.com/", icon: FaFacebookF },
  { href: "https://instagram.com/", icon: FaInstagram },
  { href: "https://twitter.com/", icon: FaTwitter },
];

const ScholarSocials = () => {
  return (
    <div className="scholar-block_one-socials mt-5 flex justify-center gap-3">
      {socials.map((s, i) => {
        const Icon = s.icon; // define Icon as component
        return (
          <a
            key={i}
            href={s.href}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#123030] text-white transition-all duration-300 hover:bg-[#1A8754]"
          >
            <Icon size={14} />
          </a>
        );
      })}
    </div>
  );
};

export default ScholarSocials;
