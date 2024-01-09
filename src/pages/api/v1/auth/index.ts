import type { NextApiRequest, NextApiResponse } from "next";
import { generateGuid } from "../../../../../lib/guid";
import { Cache } from "../../../../../lib/caching";
import { KeyDatabase } from "../../../../../lib/auth_sqlite";
import { CountRequest } from "../../../../../lib/count_sqlite";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const cached = new Cache();
    const dbKey = new KeyDatabase();
    const newGuid = generateGuid();
    const countSqlite = new CountRequest();

    const { days: queryDays } = req.query;
    let days = queryDays
      ? (Array.isArray(queryDays)
          ? parseInt(queryDays[0], 10)
          : parseInt(queryDays, 10)) || 30
      : 30;

    days = Math.min(120, days);

    countSqlite.addRequestNum();
    cached.save(newGuid, { key: newGuid }, days, "Day");

    const [key, expireIn] = await dbKey.addNewKey(newGuid, days);
    dbKey.delDisableKey();

    const keyExists = await dbKey.searchKey(newGuid);
    dbKey.close();

    if (keyExists) {
      res.status(200).send({ key, expireIn, days });
    } else {
      res.status(404).send({ key: "KEY ERROR" });
    }
  } catch (error) {
    res.status(500).send({
      key:
        "ERROR IN SERVER, PLEASE ENTER IN CONTACT WITH SUPPORT TEAM \n" + error,
    });
  }
}
