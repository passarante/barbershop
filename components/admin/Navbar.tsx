import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full h-[80px] bg-gray-900 flex items-center justify-between p-6 text-white shadow-lg border-b border-slate-800">
      <span className="text-3xl uppercase bg-clip-text text-transparent bg-gradient-to-r to-slate-500 from-[#FBB034]">
        BarberShop
      </span>
      <div>
        <UserButton
          appearance={{
            elements: { card: { width: "400px" } },
            layout: { animations: true },
          }}
        />
      </div>
    </div>
  );
}
