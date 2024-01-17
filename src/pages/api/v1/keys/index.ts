import { NextApiRequest, NextApiResponse } from "next";
import { KeyDatabase } from "../../../../lib/auth_sqlite";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const KEY = process.env.KEY_TO_POST || "";

    if (req.headers['keynature'] !== KEY) {
      return res.status(405).json("GET OUT!");
    }

    const dbKey = new KeyDatabase();
    const allKeys = await dbKey.getAllKeys();
    res.status(200).json(allKeys);
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report");
  }
}
