
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return new NextResponse('Authentication OFF :)', {
    status: 500,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
