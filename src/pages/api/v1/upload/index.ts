import type { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../../models/item";
import unorm from 'unorm';
import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";

type ResponseData = {
  title: string;
  description: string;
};

interface InsertDatas {
  title: string;
  description: string;
}

interface ProcessDatas extends InsertDatas {
  letter: string;
}

const processLetter = (dados: InsertDatas[]): InsertDatas[] => {
  const uniqueDatas = Array.from(new Set(dados.map(item => item.title))).map(title => dados.find(item => item.title === title)!);

  const processedDatas = uniqueDatas
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(item => ({
      ...item,
      letter: removeAccents(item.title.charAt(0).toUpperCase()),
    }));

  return processedDatas;
};

const removeAccents = (input: string): string => {
  const normalized = unorm.nfkd(input);
  return normalized.replace(/[\u0300-\u036F]/g, '');
};


const handler = async (req: NextApiRequest, res: NextApiResponse, cacheado: Cache, url: string) => {

  if (req.method === "POST") {
    try {
      const KEY = process.env.KEY_TO_POST || "";
      
      if (req.headers['keynature'] !== KEY) {
        return res.status(405).json("GET OUT!");
      }
    
      const requestData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const newItem = await Item.create(processLetter(requestData));
    
      res.status(200).json({ success: true, inserts: newItem });
    } catch (error) {
      console.error("Erro:", error);
      return res.status(500).json({ error: "Erro ao processar a requisição." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
};

export default middleware(handler);