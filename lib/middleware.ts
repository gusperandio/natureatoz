import { NextApiRequest, NextApiResponse } from "next";
import { DB } from "../config/dbConnect";
import { Cache } from "./caching";
import { CountRequest } from "./count_sqlite";

const database = new DB();
const cache = new Cache();
const countSqlite = new CountRequest();

const middleware = (
  handler: (
    req: NextApiRequest,
    res: NextApiResponse,
    cached: Cache,
    url: string
  ) => Promise<void>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    countSqlite.addRequestNum();

    if(req.method === "OPTIONS"){
      res.status(200).json({ status: "ONLINE" });
      return;
    }

    const url = req.url ? req.url.split("/")[3] : "v1";
    

    if(req.method === "GET"){
      const getCache = cache.find(url);
      
      if (getCache) {
        res.status(200).json(getCache);
        return;
      }
    }
      
    try {
      await database.connect();
      await handler(req, res, cache, url);
    } finally {
      await database.disconnect();
    }
  };
};

export default middleware;
