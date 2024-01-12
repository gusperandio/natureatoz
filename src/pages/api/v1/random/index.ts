import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../models/item";

type ResponseData = {
  name: string;
  desc: string;
  img: string;
};

function randomN(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  cacheado: Cache,
  url: string
) => {


  const items = await Item.find({ id: randomN(1, 2500) }).lean();

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
