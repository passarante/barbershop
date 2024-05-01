"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-[url('/images/bg.png')] h-[120px] py-8 px-24 flex items-center justify-between">
      <Logo />
      <div className="flex flex-row items-center ">
        <ul className="flex flex-row gap-12 text-white">
          <li
            className={cn(
              " hover:text-[#FBB034] transition-colors duration-300",
              pathname === "/" && "text-[#FBB034]"
            )}
          >
            <Link href="/">Anasayfa</Link>
          </li>
          <li
            className={cn(
              " hover:text-[#FBB034] transition-colors duration-300",
              pathname === "/about" && "text-[#FBB034]"
            )}
          >
            <Link href="/about">Hakkımızda</Link>
          </li>
          <li
            className={cn(
              " hover:text-[#FBB034] transition-colors duration-300",
              pathname === "/services" && "text-[#FBB034]"
            )}
          >
            <Link href="/services">Hizmetler</Link>
          </li>
          <li
            className={cn(
              " hover:text-[#FBB034] transition-colors duration-300",
              pathname === "/contact" && "text-[#FBB034]"
            )}
          >
            <Link href="/contact">İletişim</Link>
          </li>
        </ul>
        <Button variant="primary" className="ml-24">
          Randevu Al
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
