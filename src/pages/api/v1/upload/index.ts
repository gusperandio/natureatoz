import type { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../lib/models/item";
import unorm from 'unorm';
import { Cache } from "../../../../lib/caching";
import middleware from "../../../../lib/middleware";

interface InsertDatas {
  title: string;
  description: string;
  id: number
}

const processLetter = (dados: InsertDatas[]): InsertDatas[] => {
  try {
    const uniqueDatas = Array.from(
      new Set(dados.map((item) => item.title))
    ).map((title) => dados.find((item) => item.title === title)!);

    const processedDatas = uniqueDatas
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((item) => ({
        ...item,
        title: capitalizeFirstLetter(item.title),
        description: capitalizeFirstLetter(correctDot(item.description)),
        letter: removeAccents(item.title.charAt(0).toUpperCase()),
      }));

    return processedDatas;
  } catch (error) {
    console.log(error);
    return [];
  }
};

function correctDot(texto: string): string {

  const regex: RegExp = /[.]\s([a-z])/g;

  function sub(_: string, letra: string): string {
      return ". " + letra.toUpperCase();
  }
  return texto.replace(regex, sub);
}

const capitalizeFirstLetter = (input: string): string => {
  return input.charAt(0).toUpperCase() + input.slice(1);
};

const removeAccents = (input: string): string => {
  const normalized = unorm.nfkd(input);
  return normalized.replace(/[\u0300-\u036F]/g, "");
};


const handler = async (req: NextApiRequest, res: NextApiResponse, cacheado: Cache, url: string) => {

  if (req.method === "POST") {
    try {
      const KEY = process.env.KEY_TO_POST || "";

      if (req.headers['keynature'] !== KEY) {
        return res.status(401).json("GET OUT!");
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