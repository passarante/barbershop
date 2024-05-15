"use client";
import React, { useEffect, useState } from "react";
import SlotCard from "./SlotCard";
import { getSettings } from "@/actions/setting-actions";
import { Settings, Slot } from "@prisma/client";
import { createDailySlots } from "@/actions/slot-actions";

export default function DayShift({ day }: { day: Date | undefined }) {
  const [begTime, setBegTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [slotTime, setSlotTime] = useState(0);
  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    createDailySlots(day!)
      .then((res: Slot[] | undefined) => {
        if (res) {
          setSlots(res);
        }
      })
      .catch((err) => console.log(err));
    // getSettings().then((res: Settings | undefined | null) => {
    //   if (res) {
    //     setBegTime(res.begTime);
    //     setEndTime(res.endTime);
    //     setSlotTime(res.slotTime);

    //     // const dateEndTime = day + " " + res.endTime + ":000";
    //     // const dateBegTime = day + " " + res.begTime + ":000";

    //     // console.log(dateEndTime - dateBegTime);

    //     // const begArr = res.begTime.split(":");
    //     // const beg = parseInt(begArr[0]) * 60 + parseInt(begArr[1]);
    //     // const endArr = res.endTime.split(":");
    //     // const end = parseInt(endArr[0]) * 60 + parseInt(endArr[1]);

    //     // const slotCount = Math.floor((end - beg) / res.slotTime);
    //     // let tempArr = [];
    //     // for (let index = 0; index < slotCount; index++) {
    //     //   let temp = beg + index * res.slotTime;
    //     //   let hours = Math.floor(temp / 60);
    //     //   let minutes = temp % 60;
    //     //   let hoursStr = hours < 10 ? "0" + hours : hours;
    //     //   let minStr = minutes < 10 ? "0" + minutes : minutes;

    //     //   tempArr.push(hoursStr + ":" + minStr);
    //     //   setSlots((prev) => [...prev, hoursStr + ":" + minStr]);
    //     // }

    //     //console.log(tempArr);
    //     //setSlots(tempArr);

    //     // for (let index = 0; index < array.length; index++) {
    //     //   const element = array[index];

    //     // }
    //   }
    // });
  }, []);

  return (
    <div className="grid grid-cols-8 gap-4">
      {slots.length > 0 &&
        slots.map((slot: Slot) => <SlotCard key={slot.id} slot={slot} />)}
    </div>
  );
}
