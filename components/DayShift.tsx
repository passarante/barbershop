"use client";
import React from "react";
import SlotCard from "./SlotCard";

export default function DayShift({ day }: { day: Date | undefined }) {
  const slots = [
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
    "24:00",
  ];
  return (
    <div className="grid grid-cols-12 gap-4">
      {slots.map((slot: string) => (
        <SlotCard key={slot} slot={slot} day={day} />
      ))}
    </div>
  );
}