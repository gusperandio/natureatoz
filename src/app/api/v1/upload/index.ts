import type { NextApiRequest, NextApiResponse } from "next";
import Item from "../../../../lib/models/item";
import unorm from "unorm";
import { NextResponse } from "next/server";
import { DB } from "@/lib/config/dbConnect";

interface InsertDatas {
  title: string;
  description: string;
  id: number;
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

const database = new DB();
export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");

    await database.connect();
    const requestData =
      typeof request.body === "string"
        ? JSON.parse(request.body)
        : request.body;

    const newItem = await Item.create(processLetter(requestData));

    return new NextResponse(
      JSON.stringify({ success: true, inserts: newItem }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new NextResponse("Error to process items \n" + error, {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
