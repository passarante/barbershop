"use server";

import prisma from "@/lib/db";


export async function createSlot(
    date: Date,
    begTime: Date,
    endTime: Date,) {
    try {
        const result = await prisma.slot.create({
            data: { date, begTime, endTime, isOff: true },
        });

        console.log(result);

    } catch (error) {
        console.log(error);
    }
}