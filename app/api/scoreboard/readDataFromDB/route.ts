"use server";

import { readDataFromDB } from "@/utils/dbConnection";

// export const dynamic = 'force-dynamic' // defaults to force-static
// export const revalidate = 60

export async function GET(request: Request) {
    const data: any = await readDataFromDB();

    return new Response(JSON.stringify(data), {
        status: 200,
    })
}