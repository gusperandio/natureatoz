import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { limiterToken as limiter } from "@/lib/config/limiter";
import { CountRequest } from "@/lib/database/requests";
import { Key } from "@/lib/keys";
import { Counter } from "@/lib/count";
import { DB } from "@/lib/config/dbConnect";

const database = new DB();
const countMongoDB = new Counter();
const dbKey = new Key();
export async function GET(request: Request) {
  try {

    await database.connect();

    const remaining = await limiter.removeTokens(1);

    if (remaining < 0) {
      return new NextResponse(null, {
        status: 429,
        statusText: "Too Many Requests",
        headers: {
          "Content-Type": "text/plain",
        },
      });
    } else {
      await countMongoDB.updateReqCount();
    }

    const KEY = process.env.KEY_TO_POST || "";
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("keynature");
    // if (key !== KEY) {
    //   return new NextResponse("GET OUT", {
    //     status: 405,
    //     headers: {
    //       "Content-Type": "text/plain",
    //     },
    //   });
    // }

    const allKeys = await dbKey.getAllKeys();
    return new NextResponse(JSON.stringify(allKeys), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new NextResponse(
      "Error in system, report please in https://natureatoz.com.br/report",
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
  }
}
