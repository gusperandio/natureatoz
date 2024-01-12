import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../models/item";
import { filterItems } from "@/lib/filterItems";
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {
  let { title } = req.query;
  if (title && typeof title === "string") {
    title = title.replace(/[_\-#%]/g, " ");
    const items = await Item.find({ title: new RegExp(title, 'i') }).lean();

    if (items.length == 0) {
      res.status(400).json({ error: "Any item founded" });
    }

    const itemsWithoutData = filterItems(items);

    cached.save(url, itemsWithoutData, 30, "Day")

    res.status(200).json(itemsWithoutData);
    return;
  }
  res.status(500);
  return;
};

export default middleware(handler);
