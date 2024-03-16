import { Counter } from "@/lib/count";
import { Cache } from "@/lib/caching";
import { CountRequest } from "@/lib/database/requests";
import { analytics, log } from "@/lib/firebase";
import { NextResponse } from "next/server";

const cached = new Cache();
const countSqlite = new CountRequest();

export async function GET(request: Request) {
  try {
    const origin = request.headers.get('origin');
    const url = new URL(request.url);
    const getCache = cached.find(url.pathname);
    if (getCache) {
      return new NextResponse(JSON.stringify(getCache), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
      });
    }
    
    countSqlite.addReq();
    const num = await countSqlite.getReq();
    cached.save(url.pathname, { requests: num }, 30, "Min");
    
    return new NextResponse(JSON.stringify({ requests: num }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
    });
    
  } catch (error) {
    return new NextResponse(JSON.stringify({ requests: 250000 }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
    });
  }
}
