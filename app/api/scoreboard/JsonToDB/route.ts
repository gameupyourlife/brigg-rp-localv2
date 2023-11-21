"use server";

import { writeJsonDataToDB } from "@/utils/dbConnection";

// export const dynamic = 'force-dynamic' // defaults to force-static
export const revalidate = 60

export async function GET(request: Request) {
    await writeJsonDataToDB();
    
    return new Response(null, {
        status: 200,
    })
}