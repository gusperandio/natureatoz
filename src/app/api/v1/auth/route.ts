import { generateGuid } from "../../../../lib/guid";
import { CountRequest } from "@/lib/database/requests";
import { generateToken } from "@/lib/JWT";
import { analytics, log } from "@/lib/firebase";
import { NextResponse } from "next/server";
import { Counter } from "@/lib/count";
import { Key } from "@/lib/keys";
import { DB } from "@/lib/config/dbConnect";
import { cors } from "../../middlewares/cors";
export const dynamic = "force-dynamic";

const dbKey = new Key();
const newGuid = generateGuid();
const countMongoDB = new Counter();
const database = new DB();
export async function GET(request: Request) {
  try {
    await database.connect();

    // Apply cors in route
    cors();

    const { searchParams } = new URL(request.url);
    const queryDays = searchParams.get("days");
    await countMongoDB.updateReqCount();
    log(analytics, "auth", { page_path: "/api/v1/auth" });

    let days = queryDays
      ? (Array.isArray(queryDays)
          ? parseInt(queryDays[0], 10)
          : parseInt(queryDays, 10)) || 30
      : 30;

    days = Math.min(120, days);
    const JWT = await generateToken(newGuid, days);

    const expireIn = await dbKey.addKey(newGuid, JWT, days);

    return new NextResponse(JSON.stringify({ JWT, expireIn, days }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      "Error in system, report please in https://natureatoz.com.br/report \n" +
        error,
      {
        status: 500,
      }
    );
  }
}
