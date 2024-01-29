import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../lib/models/item";
import { filterItems } from "@/lib/filterItems";
import { analytics, log } from "@/lib/firebase";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cached: Cache,
  url: string
) => {
  try {
    let { title } = req.query;
    if (title && typeof title === "string") {
      title = title.replace(/[_\-#%]/g, " ");
      const items = await Item.find({ title: new RegExp(title, 'i') }).lean();
      
      log(analytics, 'search', { page_path: '/api/v1/search' });

      if (items.length == 0) {
        res.status(400).json({ error: "Any item founded" });
      }

      const itemsWithoutData = filterItems(items);

      cached.save(url, itemsWithoutData, 30, "Day")

      res.status(200).json(itemsWithoutData);
    } else {
      res.status(400).send("Incorrect query")
    }
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report \n" + error);
  }
};

export default middleware(handler);
