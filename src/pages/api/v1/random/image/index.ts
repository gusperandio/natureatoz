import { Cache } from "../../../../../lib/caching";
import middleware from "../../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../lib/models/item";
import { analytics, log } from "@/lib/firebase";
import { filterItems } from "@/lib/filterItems";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {
  try {
    const { size: size } = req.query;
    
    const items = await Item.aggregate([
      { $match: { image: { $exists: true, $ne: null } } }, 
      { $sample: { size: size ? Number(size) : 1 } }
    ]);
    
    const filtered = filterItems(items);

    if (filtered.length == 0) {
      res.status(400).json({ error: "Any item founded" });
    }

    cached.save(url, filtered, 30, "Day")

    log(analytics, '/random/image', { page_path: '/api/v1/random/image' });

    res.status(200).json(filtered);
  } catch (error) {
    res.status(500).send(error);
    console.log(error)
  }
};

export default middleware(handler);