import { NextApiRequest, NextApiResponse } from "next";
import { KeyDatabase } from "../../../../lib/auth_sqlite";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const KEY = process.env.KEY_TO_POST || "";

  if (req.headers['keynature'] !== KEY) {
    return res.status(405).json("GET OUT!");
  }
  
  const dbKey = new KeyDatabase();
  const allKeys = await dbKey.getAllKeys();

  res.status(200).json(allKeys);
}
