import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../models/item";
import { filterItems } from "@/lib/filterItems";
import { analytics, log } from "@/lib/firebase";


const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {
  try {
    log(analytics, 'dictionary', { page_path: '/api/v1/dictionary' });
    const { letter } = req.query;

    const items = await Item.find({ letter: letter }).lean();

    if (items.length == 0) {
      res.status(400).json({ error: "Any item founded" });
    }

    const itemsWithoutData = filterItems(items);

    cached.save(url, itemsWithoutData, 30, "Day")

    res.status(200).json(itemsWithoutData);
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report");
  }
};

export default middleware(handler);
