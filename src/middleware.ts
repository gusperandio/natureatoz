import { NextRequest, NextResponse } from "next/server";

export function middleware(req: Request) {
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 202,
      statusText: "Online",
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/v1/:path*",
};
