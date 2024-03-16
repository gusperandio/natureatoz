import { Cache } from "../../../../../lib/caching";
import { limiterToken as limiter } from "@/lib/config/limiter";
import Item from "../../../../../lib/models/item";
import { filterItems } from "@/lib/filterItems";
import { analytics, log } from "@/lib/firebase";
import { NextResponse } from "next/server";
import { DB } from "@/lib/config/dbConnect";
import { CountRequest } from "@/lib/database/requests";

const database = new DB();
const cached = new Cache();
const countSqlite = new CountRequest();

export async function GET(request: Request, { params }: { params: { letter: string } }) {
  try {
    const origin = request.headers.get('origin');
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
    const { letter } = params;
    
    const url = new URL(request.url)
    const getCache = cached.find(url.pathname);

    log(analytics, 'dictionary', { page_path: url.pathname });

    if (getCache) {
      return new NextResponse(JSON.stringify(getCache), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      });
    }
    
    await database.connect();
    const items = await Item.find({ letter: letter }).lean();

    if (items.length == 0) {
      return new NextResponse(JSON.stringify({ error: "Any item founded" }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      });
    }

    const itemsWithoutData = filterItems(items);

    cached.save(url.pathname, itemsWithoutData, 30, "Day")

    return new NextResponse(JSON.stringify(itemsWithoutData), {
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
  } finally {
    await database.disconnect();
  }
};
