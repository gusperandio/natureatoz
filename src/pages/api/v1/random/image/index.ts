import { Cache } from "../../../../../lib/caching";
import middleware from "../../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../../models/item";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {
  const items = await Item.aggregate([
    { $match: { image: { $exists: true } } },
    { $sample: { size: 1 } }
  ]).cursor();

  const randomItem = await items.next();

  if (randomItem.length == 0) {
    res.status(400).json({ error: "Any item founded" });
  }
  delete randomItem._id;
  delete randomItem.__v;
  delete randomItem.letter;
  
  res.status(200).json(randomItem);
};

export default middleware(handler);