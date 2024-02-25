import { Counter } from "../../../../lib/count";
import { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../../../lib/middleware";
import { Cache } from "../../../../lib/caching";
import { CountRequest } from "../../../../lib/count_sqlite";
import { analytics, log } from "@/lib/firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const countRequest = new CountRequest();
    const num = await countRequest.findRequests();
 
    //cached.save(url, { requests: num }, 1, "Hour");
    res.status(200).json({ requests: num });
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report");
  }
}
