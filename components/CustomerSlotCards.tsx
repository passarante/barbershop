import React, { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { getDailySlots } from "@/actions/slot-actions";
import { Slot } from "@prisma/client";
import { date } from "zod";

type CustomerSlotCardsProps = {
  date: Date;
  handleSelectSlot: (slotId: number) => void;
  slotId: number;
  slotCount: number;
};

function CustomerSlotCards({
  date,
  handleSelectSlot,
  slotId,
  slotCount,
}: CustomerSlotCardsProps) {
  const [slots, setSlots] = useState<Slot[] | null>([]);
  const [filteredSlots, setFilteredSlots] = useState<Slot[] | null>([]);

  function convertTo24HourFormat(timeString: string) {
    const [time, period] = timeString.split(" ");
    const [hour, minute] = time.split(":");
    let formattedHour = parseInt(hour);

    if (period === "PM" && formattedHour < 12) {
      formattedHour += 12;
    }

    return `${formattedHour}:${minute}`;
  }
  useEffect(() => {
    getDailySlots(date).then((result) => {
      setSlots(result as Slot[]);

      if (result && result.length > 0) {
        if (slotCount > 1) {
          const tempArr = result as Slot[];

          const slotedArr: Slot[] = [];

          const fArr = tempArr.map((slot, index) => {
            let status = true;
            for (let index = 1; index < slotCount; index++) {
              if (tempArr.filter((s) => s.id === slot.id + index).length == 0) {
                status = false;
                break;
              }
            }
            if (status) {
              console.log("SL", slot);
              slotedArr.push(slot);
            }
          });
          console.log("FARR", fArr);
          console.log("slots", slots);

          setFilteredSlots(slotedArr);
        } else {
          setFilteredSlots(result);
        }
      }
    });
  }, [date, slotCount]);

  return (
    <div
      className="grid gap-4 my-8"
      style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
    >
      {filteredSlots &&
        filteredSlots.length > 0 &&
        filteredSlots.map((slot, index) => (
          <Badge
            key={index}
            data-slot-id={slot.id}
            variant="default"
            className={
              "py-2 bg-white border-[#222] text-[#222] flex justify-center items-center cursor-pointer hover:bg-slate-100 hover:text-[#222] focus:text-[#222] " +
              (slotId === slot.id ? "bg-[#222] text-[#fff]" : "")
            }
            onClick={() => handleSelectSlot(slot.id)}
          >
            {convertTo24HourFormat(
              slot.begTime.toLocaleTimeString().replace(/(.*)\D\d+/, "$1")
            )}
          </Badge>
        ))}

      {/* {slotCount > 0 &&
        filteredSlots &&
        filteredSlots.map((slot, index) => (
          <Badge
            key={index}
            data-slot-id={slot.id}
            variant="default"
            className={
              "py-2 bg-white border-[#222] text-[#222] flex justify-center items-center cursor-pointer hover:bg-slate-100 hover:text-[#222] focus:text-[#222] " +
              (slotId === slot.id ? "bg-[#222] text-[#fff]" : "")
            }
            onClick={() => handleSelectSlot(slot.id)}
          >
            {convertTo24HourFormat(
              slot.begTime.toLocaleTimeString().replace(/(.*)\D\d+/, "$1")
            )}
          </Badge>
        ))} */}
    </div>
  );
}

export default CustomerSlotCards;
