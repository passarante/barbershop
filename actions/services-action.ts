import prisma from "@/lib/db";
import { Service } from "@prisma/client";



export const getServices = async () => {
    try {
        return await prisma.service.findMany();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get services")
    }
}
export const createService = async (service: Service) => {
    try {
        await prisma.service.create({
            data: service
        })
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create service")

    }
}