"use server"
import { NextRequest, NextResponse, userAgent } from 'next/server'

// export default function middleware(req: NextRequest) {
//    if(req.nextUrl.pathname =="/api/hello"){
//       if(req.method != 'POST'){
//        return new NextResponse("Cannot access this endpoint with " + req.method, { status: 400})
//       }
//    return NextResponse.next();
//    }
// }

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    // const { ip, nextUrl } = request;

    const url = request.nextUrl
    const { device } = userAgent(request)
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
    const detectedIp = request.ip;
    // console.log(request.query);
    // url.searchParams.set('viewport', viewport)
    // console.log(request.nextUrl)
    fetch("http://localhost:3000/api/log/client", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ip: detectedIp,
            refUrl: request.headers.get("referer"),
            href: request.nextUrl.href,
            browser: request.headers.get("user-agent"),
            host: request.headers.get("host"),
        })
    }).then(function (res) {
        // console.log(res.json());
    }).catch(function (err) {
        console.log("Unable to fetch -", err);
    })

    return NextResponse.rewrite(url)
}

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/about/:path*',
// }

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/*|data/*|favicon.ico).*)',
        '/((?!/*|public/*|/*|Hovercards/*).png)',
        '/((?!/*|public/*|/*|Hovercards/*).webp)',
    ],
}