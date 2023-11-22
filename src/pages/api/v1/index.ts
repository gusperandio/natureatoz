import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  title: string;
  description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
      res.status(202);
  } else {
    res.status(405).json({ error: "Req incorrect" });
  }
}
