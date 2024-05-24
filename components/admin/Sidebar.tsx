import React from "react";

import { Button } from "../ui/button";
import {
  CalendarCheck,
  CalendarCheck2,
  CalendarDays,
  Home,
  LogOut,
  PenTool,
  Settings,
  Settings2,
  User2,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-20 p-6 w-[300px] flex flex-col space-between ">
      <div className="bg-white flex flex-col justify-between rounded-sm w-full p-2 h-[calc(100vh-180px)]">
        <ul>
          <li className="flex flex-row gap-2 items-center cursor-pointer hover:bg-slate-300 p-2 hover:rounded-lg mb-2 transition-all duration-500">
            <Home /> Dashboard
          </li>
          <li className="flex flex-row gap-2 items-center cursor-pointer hover:bg-slate-300 p-2 hover:rounded-lg mb-2 transition-all duration-500">
            <CalendarCheck /> Randevular
          </li>
          <Link href="/admin/slots">
            <li className="flex flex-row gap-2 items-center cursor-pointer hover:bg-slate-300 p-2 hover:rounded-lg mb-2 transition-all duration-500">
              <CalendarDays /> Slotlar
            </li>
          </Link>
          <Link href="/admin/services">
            <li className="flex flex-row gap-2 items-center cursor-pointer hover:bg-slate-300 p-2 hover:rounded-lg mb-2 transition-all duration-500">
              <PenTool /> Hizmetler
            </li>
          </Link>
          <li className="flex flex-row gap-2 items-center cursor-pointer hover:bg-slate-300 p-2 hover:rounded-lg mb-2 transition-all duration-500">
            <User2 /> Kullanıcılar
          </li>
          <Link href="/admin/settings">
            <li className="flex flex-row gap-2 items-center cursor-pointer hover:bg-slate-300 p-2 hover:rounded-lg mb-2 transition-all duration-500">
              <Settings /> Ayarlar
            </li>
          </Link>
        </ul>

        <p>
          <Button className="w-full">
            <LogOut />
            Çıkış
          </Button>
        </p>
      </div>
    </div>
  );
}
