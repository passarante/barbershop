"use client";
import DayShift from "@/components/DayShift";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

function SlotsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showSlots, setShowSlots] = useState(true);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
    setShowSlots(true);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2 flex items-center gap-4">
        <Card className=" bg-gray-900 p-6 h-[400px] shadow-sm">
          <CardContent>
            <input
              className="text-black p-2 rounded-sm"
              type="date"
              onChange={handleDateChange}
              value={date?.toISOString().split("T")[0]}
            />
          </CardContent>
        </Card>

        {showSlots && (
          <Card className=" bg-gray-900 p-6 flex-1 h-[400px] flex flex-col shadow-sm items-center justify-center ">
            <CardTitle className="border-b border-pink-100 mb-4">
              <span className="text-2xl font-bold text-white">Slotlar</span>
            </CardTitle>
            <CardContent className="flex flex-1 justify-center items-center">
              <DayShift day={date} />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default SlotsPage;
