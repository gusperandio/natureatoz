import { Counter } from "../../../../lib/count";
import { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../../../lib/middleware";
import { Cache } from "../../../../lib/caching";
import { CountRequest } from "../../../../lib/count_sqlite";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {
  const countRequest = new CountRequest();
  const counter = new Counter();

  const num = await countRequest.findRequests();
  await counter.updateReqCount(num);

  cached.save(url, { requests: num }, 1, "Hour");
  res.status(200).json({ requests: num });
};

export default middleware(handler);
