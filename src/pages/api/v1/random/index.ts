import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../lib/models/item";
import { analytics, log } from "@/lib/firebase";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {
  try {

    const { size: size } = req.query;

    const items = await Item.aggregate([
      { $match: { image: { $exists: false } } },
      { $sample: { size: size ? Number(size) : 1 } }
    ]).cursor();

    const randomItem = await items.next();

    if (randomItem.length == 0) {
      res.status(400).json({ error: "Any item founded" });
    }

    delete randomItem._id;
    delete randomItem.__v;
    delete randomItem.letter;

    cached.save(url, randomItem, 30, "Day")

    log(analytics, '/random', { page_path: '/api/v1/random' });

    res.status(200).json(randomItem);
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report");
  }
};

export default middleware(handler);