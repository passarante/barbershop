"use server"

import prisma from "@/lib/db";
import { Settings } from "@prisma/client";


export async function setSettings({ begTime, endTime, slotTime, isSundayOff }: Settings) {
    let settings;
    const data = {
        begTime,
        endTime,
        slotTime,
        isSundayOff
    }
    try {


        settings = await prisma.settings.findFirst({})



        if (settings) {
            settings = await prisma.settings.update(
                {
                    where: {
                        id: settings.id,
                    },
                    data
                }

            )
        } else {
            settings = await prisma.settings.create({
                data
            });

        }



        return settings;
    } catch (error) {
        console.log(error)
    }
}

export async function getSettings(): Promise<Settings | null | undefined> {


    try {
        return await prisma.settings.findFirst({})

    } catch (error) {
        console.log(error)
    }

}