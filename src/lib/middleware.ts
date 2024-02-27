import { NextApiRequest, NextApiResponse } from "next";
import { Cache } from "./caching";
import { CountRequest } from "./count_sqlite";
import { verifyToken } from "./JWT";
import { DB } from "./config/dbConnect";
import NextCors from 'nextjs-cors';

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
    try {
      countSqlite.addRequestNum();
      res.setHeader('Access-Control-Allow-Credentials', "true");
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
      res.setHeader('Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      );

      if (req.method === "OPTIONS") {
        res.status(200).json({ status: "ONLINE" });
        return;
      }
      const url = req.url ?? "v1";
      if (req.method === "GET") {
        const getCache = cache.find(url);

        if (getCache) {
          res.status(200).json(getCache);
          return;
        }
      }

      if (!verifyToken(req.headers["authorization"] ?? ""))
        res.status(401).json({
          error: {
            code: "401",
            message:
              "Request had invalid authentication credentials. Expected Bearer Token access. See https://natureatoz.com.br/api/v1/auth",
          },
        });

      await database.connect();

      await handler(req, res, cache, url);
    } finally {
      await database.disconnect();
    }
  };
};

export default middleware;
