import type { NextApiRequest, NextApiResponse } from "next";
import { DB } from "../../../../../services/DB";

type ResponseData = {
  title: string;
  description: string;
};
const dbInstance = new DB('../../../../../tsconfig.json')
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    try {
      const data = req.body;

      data.forEach((obj: any) => {
        if (obj.title)
          obj.title = obj.title.charAt(0).toUpperCase() + obj.title.slice(1);
      });

      res.status(200).json({ instance : dbInstance.test('testeeeee')});
    } catch (error) {
      console.error("Erro:", error);
      res.status(500).json({ error: "Erro ao processar a requisição." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}
