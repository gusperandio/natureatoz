// lib/middleware.ts
import { NextApiRequest, NextApiResponse } from "next";
import { DB } from "../config/dbConnect";
import updateReqCount from "./count";

const database = new DB();

const middleware = (
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    if (req.method === "OPTIONS") {
      res.status(200).json({status: "ONLINE"});
      return;
    }

    await database.connect();

    try {
      await handler(req, res);
      await updateReqCount();
    } finally {
      await database.disconnect();
    }
  };
};

export default middleware;
