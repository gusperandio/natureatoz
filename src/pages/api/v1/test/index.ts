
import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse, cached: Cache, url: string) => {

  const data = req.body;
  const newGuid = req.headers.authorization ? req.headers.authorization : "";
  const t = cached.find(newGuid);

  // if(!t){
  //   cached.save(url, { key: newGuid }, 120, "Day");
  // }
  
  res.status(200).json(t);
};

export default middleware(handler);
