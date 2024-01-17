import { analytics, log } from "@/lib/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  title: string;
  description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    
    if (req.method === "OPTIONS") {
      res.status(202).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).send("Error in system, report please in https://natureatoz.com.br/report");
  }
}
