import { logClientData } from "@/utils/logging";

export async function POST(request: Request, response: Response) {
    // console.log(request.json());
    // logClientData(res);
    const res = await request.json()
    logClientData({ data: res });
    return Response.json({ res })
    // return Response  
}