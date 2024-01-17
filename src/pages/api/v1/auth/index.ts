import type { NextApiRequest, NextApiResponse } from "next";
import { generateGuid } from "../../../../lib/guid";
import { KeyDatabase } from "../../../../lib/auth_sqlite";
import { CountRequest } from "../../../../lib/count_sqlite";
import { generateToken } from "@/lib/JWT";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dbKey = new KeyDatabase();
    const newGuid = generateGuid();
    const countSqlite = new CountRequest();
    countSqlite.addRequestNum();

    const { days: queryDays } = req.query;
    let days = queryDays
      ? (Array.isArray(queryDays)
        ? parseInt(queryDays[0], 10)
        : parseInt(queryDays, 10)) || 30
      : 30;

    days = Math.min(120, days);

    const JWT = await generateToken(newGuid, days);
    const [key, expireIn] = await dbKey.addNewKey(newGuid, JWT, days);
    dbKey.delDisableKey();
    dbKey.close();

    res.status(200).json({ JWT, expireIn, days });
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report \n" + error);
  }
}

