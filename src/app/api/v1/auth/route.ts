import { generateGuid } from "../../../../lib/guid";
import { KeyDatabase } from "@/lib/database/keys.js";
import { CountRequest } from "@/lib/database/requests";
import { generateToken } from "@/lib/JWT";
import { analytics, log } from "@/lib/firebase";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';

const dbKey = new KeyDatabase();
const newGuid = generateGuid();
const countSqlite = new CountRequest();

export async function GET(
  request: Request,
) {
  try {
    const { searchParams } = new URL(request.url)
    const queryDays = searchParams.get('days');
    countSqlite.addReq();
    log(analytics, 'auth', { page_path: '/api/v1/auth' });

    let days = queryDays
      ? (Array.isArray(queryDays)
        ? parseInt(queryDays[0], 10)
        : parseInt(queryDays, 10)) || 30
      : 30;

    days = Math.min(120, days);
    const JWT = await generateToken(newGuid, days);
    const expireIn = await dbKey.addKey(newGuid, JWT, days);

    dbKey.delDisableKey();
    return new NextResponse(JSON.stringify({ JWT, expireIn, days }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      })
  } catch (error) {
    return new NextResponse("Error in system, report please in https://natureatoz.com.br/report \n" + error, {
      status: 500
    })
  }
}