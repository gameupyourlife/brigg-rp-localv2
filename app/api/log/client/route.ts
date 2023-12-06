import { logClientData } from "@/utils/logging";

export async function POST(request: Request, response: Response) {
    // console.log(request.json());
    // logClientData(res);
    response = await request.json()
    logClientData({ data: response });
    return response.json()

    // return Response  
}