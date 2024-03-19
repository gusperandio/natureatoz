import { Cache } from "@/lib/caching";
import { DB } from "@/lib/config/dbConnect";
import { Counter } from "@/lib/count";
import { CountRequest } from "@/lib/database/requests";
import { analytics, log } from "@/lib/firebase";
import { NextResponse } from "next/server";

const cached = new Cache();
const database = new DB();
const countMongoDB = new Counter();
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const getCache = cached.find(url.pathname);
    if (getCache) {
      return new NextResponse(JSON.stringify(getCache), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    
    await database.connect();
    await countMongoDB.updateReqCount();

    const num = await countMongoDB.getReqCount();

    cached.save(url.pathname, { requests: num }, 1, "Min");

    return new NextResponse(JSON.stringify({ requests: num }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    return new NextResponse(
      "Error in system, report please in https://natureatoz.com.br/report" +
        error,
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
  }
}
