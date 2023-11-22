import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string;
  desc: string;
  img: string;
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 

  res.status(202).json({ test: "alphabetical"});
}
