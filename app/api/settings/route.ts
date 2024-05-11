import { getSettings } from "@/actions/setting-actions";
import { NextApiRequest } from "next";

export async function GET(
    req: NextApiRequest,
) {

    const response = await getSettings()

    return Response.json({ response })
}