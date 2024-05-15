"use server";

import prisma from "@/lib/db";
import { getSettings } from "./setting-actions";
import { Slot } from "@prisma/client";





export async function createDailySlots(day: Date): Promise<Slot[] | undefined> {

    try {

        const settings = await getSettings()


        if (!settings) throw new Error();


        let existingSlots = await prisma.slot.findMany({
            where: {
                date: {
                    gte: day,
                    lte: new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1),
                }
            }
        })



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
                const begTime = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes, 0);
                const endTime = new Date(begTime)
                endTime.setMinutes(begTime.getMinutes() + settings.slotTime);
                await createSlot(day, begTime, endTime);

            }
            existingSlots = await prisma.slot.findMany({
                where: {
                    date: {
                        gte: day,
                        lte: new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1),
                    }
                }
            })
            console.log("SLOTS", existingSlots);

        }
        return existingSlots;



    } catch (error) {
        console.log(error);
    }



}


export async function createSlot(
    date: Date,
    begTime: Date,
    endTime: Date,
    isOff?: boolean) {
    try {
        const result = await prisma.slot.create({
            data: { date, begTime, endTime, isOff: isOff ?? false },
        });

        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

export async function updateSlot(date: Date, begTime: Date, endTime: Date, isOff: boolean): Promise<Slot | undefined> {
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
            id: existingSlot?.id
        },
        data: {
            isOff
        }
    })

    return response;
}