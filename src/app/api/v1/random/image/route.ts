import { Cache } from "../../../../../lib/caching";
import { limiterToken as limiter } from "@/lib/config/limiter";
import Item from "../../../../../lib/models/item";
import { DB } from "@/lib/config/dbConnect";
import { NextResponse } from "next/server";
import { filterItems } from "@/lib/filterItems";
import { Counter } from "@/lib/count";
import { cors } from "@/app/api/middlewares/cors";
import { verifyToken } from "@/lib/JWT";

const database = new DB();
const cached = new Cache();
const countMongoDB = new Counter();

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET(request: Request) {
  try {
    // const auth = request.headers.get("authorization") ?? "";
    // if (!verifyToken(auth))
    //   return new NextResponse(null, {
    //     status: 401,
    //     statusText: "Unauthorized",
    //   });
    const url = new URL(request.url);
    const getCache = cached.find(url.pathname);

    // Apply cors in route
    cors();

    //const size = url.searchParams.get('size') ? Number(url.searchParams.get('size')) : 1;

    if (Array.isArray(getCache) && getCache.length > 0) {
      return new NextResponse(JSON.stringify(getCache[random(0, getCache.length - 1)]), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

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
      await database.connect();
      await countMongoDB.updateReqCount();
    }

    const items = await Item.aggregate([
      { $match: { image: { $exists: true, $ne: null } } },
      { $sample: { size: 200 } },
    ]);
    const filtered = filterItems(items);

    if (filtered.length == 0) {
      return new NextResponse(JSON.stringify({ error: "Any item founded" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    cached.save(url.pathname, filtered, 1, "Day");

    return new NextResponse(JSON.stringify(filtered[random(0, filtered.length - 1)]), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
  } catch (error) {
    return new NextResponse("Error in system, report please in https://natureatoz.com.br/report", {
        status: 400,
      });
  }
}
