
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new NextResponse(JSON.stringify({ requests: 250000 }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':  "*"
    }
  });
};

