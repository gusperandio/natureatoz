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
    res.setHeader('Access-Control-Allow-Credentials', "true");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    const countRequest = new CountRequest();
    const num = await countRequest.findRequests();

    //cached.save(url, { requests: num }, 1, "Hour");
    res.status(200).json({ requests: num });
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report");
  }
}
