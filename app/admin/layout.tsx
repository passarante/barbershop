import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import React, { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black min-h-screen w-full">
      <Navbar />
      <div className="h-[calc(100vh-80px)]  bg-black mt-[80px] flex flex-row">
        <aside className=" w-[250px] min-height-[calc(100vh-80px)] ">
          <Sidebar />
        </aside>
        <main className="mt-[80px] container min-height-[calc(100vh-80px)] ">
          {children}
        </main>
      </div>
    </div>
  );
}
