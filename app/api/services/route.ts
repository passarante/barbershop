
import { createService, getServices } from "@/actions/services-action";
import { Service } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(
    req: NextRequest,
) {

    const data: Service = await req.json();

    try {

        if (data) {

            const response = await createService(data)

            return Response.json(response)
        }




    } catch (error) {
        return Response.json({ message: "Error when creating service", error })
    }

}

export async function GET(
) {

    try {
        const response = await getServices();
        return Response.json({ response })
    } catch (error) {
        throw new Error("Failed to get services")
    }



}