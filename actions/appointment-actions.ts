"use server";
import prisma from "@/lib/db";
import { Slot } from "@prisma/client";

export async function createAppointment(
  date: string,
  userId: string,
  slotId: number,
  isCancelled: boolean
) {
  try {
    const result = await prisma.appointment.create({
      data: { date, userId, isCancelled },
    });
    console.log(result);
    setDailySlots(slotId, result.id);
  } catch (error) {
    console.log(error);
  }
}

export async function setDailySlots(
  id: number,
  appointmentId: number
): Promise<Slot | undefined> {
  const existingSlot = await prisma.slot.findFirst({
    where: {
      id: id,
    },
  });

  const response = await prisma.slot.update({
    where: {
      id: existingSlot?.id,
    },
    data: {
      appointmentId: appointmentId,
    },
  });

  return response;
}
