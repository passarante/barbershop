import { SlotCardProps } from "@/types";
import React, { useState } from "react";
import { Button } from "./ui/button";
import prisma from "@/lib/db";
import { getSlotTime } from "@/lib/helpers";
import { createSlot, updateSlot } from "@/actions/slot-actions";

export default function SlotCard({ slot }: SlotCardProps) {
  const [selected, setSelected] = useState(
    slot.isOff || slot.appointmentId !== null
  );

  const handleClick = async () => {
    setSelected(!selected);

    updateSlot(slot.date, slot.begTime, slot.endTime, !selected)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <Button
        className={`${selected ? "bg-black" : "bg-orange-500"}`}
        onClick={() => handleClick()}
      >
        {slot.begTime.getHours() +
          ":" +
          slot.begTime.getMinutes().toString().padStart(2, "0")}
      </Button>
    </div>
  );
}
