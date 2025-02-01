"use client";

import { pacifico } from "@/lib/fonts";
import { navLinks } from "@/lib/json-data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="bg-[#38220f] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-lg flex justify-between items-center gap-2 ${pacifico.className}`}
        >
          <Image
            src="/images/coffee-logo.png"
            alt="Logo"
            className="w-auto h-auto"
            width={56}
            height={56}
          />
          Coffee Gallery
        </Link>
        <nav>
          <div className="flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? "active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
