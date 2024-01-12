import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../models/item";
import { filterItems } from "@/lib/filterItems";
import { KeyDatabase } from "@/lib/auth_sqlite";
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {

  const key = req.headers.authorization ? req.headers.authorization : "";
  const dbKey = new KeyDatabase();
  const test = dbKey.searchKey(key)
  if (!key && !test) {
    res.status(401).end().json({Error: key, status: test});
    return;
  }

  const { letter } = req.query;

  const items = await Item.find({ letter: letter }).lean();

  if (items.length == 0) {
    res.status(400).json({ error: "Any item founded" });
  }

  const itemsWithoutData = filterItems(items);

  cached.save(`${url}/${letter}`, itemsWithoutData, 30, "Day")

  res.status(200).json(itemsWithoutData);
};

export default middleware(handler);
