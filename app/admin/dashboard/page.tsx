"use client";

import DayShift from "@/components/DayShift";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="text-white w-full">
      <h1>Admin Dashboard</h1>

      <input
        className="text-black"
        type="date"
        onChange={(e) => setDate(new Date(e.target.value))}
        value={date?.toISOString().split("T")[0]}
      />
      <Button variant="outline">Çizelgeyi Göster</Button>

      <DayShift day={date} />
    </div>
  );
}
