import type { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../models/item";

type ResponseData = {
  title: string;
  description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    try {
      const data = req.body;
      let newItem = await Item.create(data)

      res.status(201).json({ success: true, data: newItem })
    } catch (error) {
      console.error("Erro:", error);
      res.status(500).json({ error: "Erro ao processar a requisição." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}
