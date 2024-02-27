import { CountRequest } from "@/lib/count_sqlite";
import { analytics, log } from "@/lib/firebase";
import type { NextApiRequest, NextApiResponse } from "next";
import unorm from "unorm";

interface InsertDatas {
  title: string;
  description: string;
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

  function sub(match: string, letra: string): string {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const countRequest = new CountRequest();
    const num = await countRequest.findRequests();

    res
      .status(200)
      .json({ success: true, num: num });
  } catch (error) {
    res
      .status(500)
      .send(
        "Error in system, report please in https://natureatoz.com.br/report"
      );
  }
}
