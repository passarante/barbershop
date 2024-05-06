import { SlotCardProps } from "@/types";
import React, { useState } from "react";
import { Button } from "./ui/button";
import prisma from "@/lib/db";
import { getSlotTime } from "@/lib/helpers";

export default function SlotCard({ slot, day }: SlotCardProps) {
  const [selected, setSelected] = useState(false);

  const handleClick = async () => {
    setSelected(!selected);

    const { begTime, endTime } = getSlotTime(slot, day!);
    console.log(begTime, endTime);

    if (!selected) {
      const result = await prisma.slot.create({
        data: { date: day!, begTime, endTime, isOff: true },
      });
    } else {
      await prisma.slot.findFirst({
        where: {
          date: day!,
          AND: {
            begTime: begTime,
            endTime: endTime,
          },
        },
      });
    }
  };

  return (
    <div className="">
      <Button
        className={`${selected ? "bg-black" : "bg-orange-500"}`}
        onClick={() => handleClick()}
      >
        {slot}
      </Button>
    </div>
  );
}
