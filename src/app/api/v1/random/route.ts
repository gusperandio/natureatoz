import { Cache } from "../../../../lib/caching";
import { limiterToken as limiter } from "@/lib/config/limiter";
import Item from "../../../../lib/models/item";
import { analytics, log } from "@/lib/firebase";
import { DB } from "@/lib/config/dbConnect";
import { NextResponse } from "next/server";
import { filterItems } from "@/lib/filterItems";
import { Counter } from "@/lib/count";

const database = new DB();
const cached = new Cache();
const countMongoDB = new Counter();


function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const getCache = cached.find(url.pathname);
    //const size = Number(url.searchParams.get('size')) ?? 1;
    
    log(analytics, "/random", { page_path: url.pathname });
    
    if (Array.isArray(getCache) && getCache.length > 0) {
      return new NextResponse(JSON.stringify(getCache[random(0, getCache.length - 1)]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
    }
    
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
      await database.connect();
      await countMongoDB.updateReqCount();
    }

    const items = await Item.aggregate([
      { $match: { image: { $exists: false } } },
      { $sample: { size: 300 } }
    ]);

    const filtered = filterItems(items);

    if (filtered.length == 0) {
      return new NextResponse(JSON.stringify({ error: "Any item founded" }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      });
    }

    cached.save(url.pathname, filtered, 1, "Day");

    return new NextResponse(JSON.stringify(filtered[random(0, filtered.length - 1)]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
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
};

