import { Cache } from "../../../../../lib/caching";
import middleware from "../../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../models/item";
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cacheado: Cache,
  url: string
) => {
  const { letter } = req.query;

  const items = await Item.find({ letter: letter }).lean();

  if (items.length == 0) {
    res.status(400).json({ error: "Any item founded" });
  }
  const itemsWithoutIdAndV = items.map((item: any) => {
    delete item._id;
    delete item.__v;
    return item;
  });

  res.status(200).json(itemsWithoutIdAndV);
};

export default middleware(handler);
