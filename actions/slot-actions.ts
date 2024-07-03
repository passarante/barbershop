"use server";
import prisma from "@/lib/db";
import { getSettings } from "./setting-actions";
import { Slot } from "@prisma/client";

export async function createDailySlots(day: Date): Promise<Slot[] | undefined> {
  const slotDate = day.toLocaleDateString();

  try {
    const settings = await getSettings();

    if (!settings) throw new Error();

    let existingSlots = await prisma.slot.findMany({
      where: {
        date: slotDate,
      },
    });

    if (existingSlots.length === 0) {
      const begArr = settings.begTime.split(":");
      const beg = parseInt(begArr[0]) * 60 + parseInt(begArr[1]);
      const endArr = settings.endTime.split(":");
      const end = parseInt(endArr[0]) * 60 + parseInt(endArr[1]);

      const slotCount = Math.floor((end - beg) / settings.slotTime);

      for (let index = 0; index < slotCount; index++) {
        let temp = beg + index * settings.slotTime;
        let hours = Math.floor(temp / 60);
        let minutes = temp % 60;
        // let hoursStr = hours < 10 ? "0" + hours : hours;
        // let minStr = minutes < 10 ? "0" + minutes : minutes;
        const begTime = new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate(),
          hours,
          minutes,
          0
        );

        const endTime = new Date(begTime);
        endTime.setMinutes(begTime.getMinutes() + settings.slotTime);

        //console.log("DATE", day);
        await createSlot(slotDate, begTime, endTime);
      }
      existingSlots = await prisma.slot.findMany({
        where: {
          date: slotDate,
        },
      });
    }
    return existingSlots;
  } catch (error) {
    console.log(error);
  }
}

export async function createSlot(
  date: string,
  begTime: Date,
  endTime: Date,
  isOff?: boolean
) {
  try {
    const result = await prisma.slot.create({
      data: { date, begTime, endTime, isOff: isOff ?? false },
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export async function updateSlot(
  date: string,
  begTime: Date,
  endTime: Date,
  isOff: boolean
): Promise<Slot | undefined> {
  const existingSlot = await prisma.slot.findFirst({
    where: {
      date: date,
      AND: {
        begTime: begTime,
        endTime: endTime,
      },
    },
  });

  const response = await prisma.slot.update({
    where: {
      id: existingSlot?.id,
    },
    data: {
      isOff,
    },
  });

  return response;
}

export async function getDailySlots(day: Date) {
  console.log("DAY", day);
  const slotDate = day.toLocaleDateString();
  console.log("SLOT DATE", slotDate);

  try {
    const settings = await getSettings();

    if (!settings) throw new Error();

    let existingSlots = await prisma.slot.findMany({
      where: {
        date: slotDate,
        isOff: false,
        appointmentId: null,
      },
    });
    return existingSlots;
  } catch (error) {
    console.log(error);
  }
}
