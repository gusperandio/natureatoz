import { Counter } from "../../../../lib/count";
import { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../../../lib/middleware";
import { Cache } from "../../../../lib/caching";
import { CountRequest } from "../../../../lib/count_sqlite";
import { analytics, log } from "@/lib/firebase";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {
  try {
    const countRequest = new CountRequest();
    const num = await countRequest.findRequests();
 
    cached.save(url, { requests: num }, 1, "Hour");
    res.status(200).json({ requests: num });
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report");
  }
};

export default middleware(handler);
