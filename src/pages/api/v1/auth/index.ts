import type { NextApiRequest, NextApiResponse } from "next";
import { generateGuid } from "../../../../lib/guid";
import { KeyDatabase } from "../../../../lib/auth_sqlite";
import { CountRequest } from "../../../../lib/count_sqlite";
import { generateToken } from "@/lib/JWT";
import { analytics, log } from "@/lib/firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.setHeader('Access-Control-Allow-Credentials', "true");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
    const { days: queryDays } = req.query;
    const dbKey = new KeyDatabase();
    const newGuid = generateGuid();
    const countSqlite = new CountRequest();

    countSqlite.addRequestNum();

    log(analytics, 'auth', { page_path: '/api/v1/auth' });

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
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report \n");
  }
}

