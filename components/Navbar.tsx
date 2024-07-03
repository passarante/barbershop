"use client";

import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

function Navbar() {
  const pathname = usePathname();
  const auth = useAuth();
  console.log(auth);
  return (
    <div className="bg-[url('/images/bg.png')] h-[120px] w-full py-8 px-24 flex items-center justify-between">
      <Logo />
      <div className="flex flex-row items-center ">
        <ul className="flex flex-row gap-12 text-white">
          <li
            className={cn(
              " hover:text-[#FBB034] transition-colors duration-300",
              pathname === "/" && "text-[#FBB034]"
            )}
          >
            <Link href="/" className="text-xl">
              Anasayfa
            </Link>
          </li>
          <li
            className={cn(
              " hover:text-[#FBB034] transition-colors duration-300",
              pathname === "/about" && "text-[#FBB034]"
            )}
          >
            <Link href="/about" className="text-xl">
              Hakkımızda
            </Link>
          </li>
          <li
            className={cn(
              " hover:text-[#FBB034] transition-colors duration-300",
              pathname === "/services" && "text-[#FBB034]"
            )}
          >
            <Link href="/services" className="text-xl">
              Hizmetler
            </Link>
          </li>
          <li
            className={cn(
              " hover:text-[#FBB034] transition-colors duration-300",
              pathname === "/contact" && "text-[#FBB034]"
            )}
          >
            <Link href="/contact" className="text-xl mr-12">
              İletişim
            </Link>
          </li>
        </ul>
        {/* {auth.isSignedIn ? (
          <UserButton />
        ) : (
          <div className="flex gap-12">
            <Link href="sign-in" className="text-white text-xl">
              Giriş
            </Link>
            <Link href="sign-up" className="text-white text-xl">
              Kayıt Ol
            </Link>
          </div>
        )} */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-white text-xl mr-12 hover:text-[#FBB034] transition-colors duration-300">
              Giriş
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="text-white text-xl hover:text-[#FBB034] transition-colors duration-300">
              Kaydol
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link href={"/book"}>
            <Button
              variant="custom"
              size="lg"
              className="ml-24 text-xl text-white"
            >
              Randevu Al
            </Button>
          </Link>
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
