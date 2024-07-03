import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="px-96 py-24 bg-black text-white">
      <div className=" flex gap-20 justify-between">
        <div className="flex flex-col">
          <h2 className="text-xl text-[#FBB034] mb-2">Services</h2>
          <Link href={"/services"} className="mb-1">
            Saç Tıraşı
          </Link>
          <Link href={"/services"} className="mb-1">
            Sakal Tıraşı
          </Link>
          <Link href={"/services"} className="mb-1">
            Saç Şekillendirme
          </Link>
          <Link href={"/services"} className="mb-1">
            Saç ve Sakal
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-[#FBB034] mb-2">About Us</h2>
          <Link href={"/about"} className="mb-1">
            Our Story
          </Link>
          <Link href={"/team"} className="mb-1">
            Team
          </Link>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-[#FBB034] mb-2">Help</h2>
          <Link href={"/faq"} className="mb-1">
            FAQ
          </Link>
          <Link href={"/contact"} className="mb-1">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex gap-20 justify-between mt-10">
        <div>
          <Link href={"/"} className="me-5">
            {" "}
            Terms & Conditions
          </Link>
          <Link href={"/"}>Privacy Policy</Link>
        </div>
        <div className="flex">
          <Link href={"/"}>
            <FaFacebookF className="me-5" size={24} />
          </Link>
          <Link href={"/"}>
            <FaXTwitter className="me-5" size={24} />
          </Link>
          <Link href={"/"}>
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
