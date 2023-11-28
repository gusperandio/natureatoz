
import { Cache } from "../../../../../lib/caching";
import middleware from "../../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse, cacheado: Cache, url: string) => {

 const data = req.body;

  cacheado.save(url, data, 10, "Day");

  res.status(200).json(data);
};

export default middleware(handler);
