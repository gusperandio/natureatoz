import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/JWT";

export function middleware(request: NextRequest) {
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 202,
      statusText: "Online",
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
