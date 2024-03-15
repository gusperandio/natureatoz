import { NextApiRequest, NextApiResponse } from "next";
import { KeyDatabase } from "@/lib/database/keys.js";
import { NextResponse } from "next/server";
import { limiterToken as limiter } from "@/lib/config/limiter";
import { CountRequest } from "@/lib/database/requests";

const countSqlite = new CountRequest();

export async function GET(request: Request) {
  try {
    const remaining = await limiter.removeTokens(1);
    
    if (remaining < 0) {
      return new NextResponse(null, {
        status: 429,
        statusText: "Too Many Requests",
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    } else {
      countSqlite.addReq()
    }

    const KEY = process.env.KEY_TO_POST || "";
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('keynature');

    if (key !== KEY) {
      return new NextResponse("GET OUT", {
        status: 405,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }

    const dbKey = new KeyDatabase();
    const allKeys = await dbKey.getKeys();
    return new NextResponse(JSON.stringify(allKeys), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new NextResponse("Error in system, report please in https://natureatoz.com.br/report", {
      status: 500,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  }
}
