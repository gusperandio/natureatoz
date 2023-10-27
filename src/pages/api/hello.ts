import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  name: string;
  desc: string;
  img: string;
};
function randomN(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const random = randomN(0, 4);

  const arrayBixos = [
    {
      name: "Conchas marinhas",
      desc: "Pequenos tesouros naturais encontrados nas praias e costas, geralmente de diferentes formas, tamanhos e cores.",
      img: "https://img.elo7.com.br/product/zoom/3253195/185-conchas-marinhas-naturais-rosa-artesanato-aplique-praia.jpg",
    },
    {
      name: "Folhas de árvores",
      desc: "Variando de verde a diversas tonalidades no outono, as folhas são parte fundamental da vegetação em florestas, parques e jardins.",
      img: "https://1.bp.blogspot.com/-2l6sw5UDgVk/Xwslk7OmeAI/AAAAAAAAEUA/6xzNI7F3TKo5S8BwjFM-vRHpYJZD_HDqQCPcBGAYYCw/s1600/por%2Bque%2Bas%2Bfolhas%2Bs%25C3%25A3o%2Bverdes_central%2Bflorestal.png",
    },
    {
      name: "Pedras de rio",
      desc: "Pedras lisas e arredondadas que são encontradas em leitos de rios, muitas vezes desgastadas pela ação da água.",
      img: "https://cdn.awsli.com.br/600x450/1634/1634422/produto/77066003/bba1f7895f.jpg",
    },
    {
      name: "Nuvens cumulus",
      desc: "Nuvens fofas e brancas que preenchem o céu, muitas vezes associadas a um dia ensolarado e agradável.",
      img: "https://www.infoescola.com/wp-content/uploads/2008/04/cumulus.jpg",
    },
    {
      name: "Esporos de cogumelos",
      desc: " Minúsculos grãos liberados por cogumelos que podem ser encontrados no solo de florestas e áreas arborizadas. Eles são essenciais para a reprodução dos cogumelos e desempenham um papel importante no ecossistema.",
      img: "https://i.pinimg.com/736x/44/88/06/4488069630ca1542b26fbb25641b24fc.jpg",
    },
  ];

  const responseData: ResponseData = arrayBixos[random];

  res.status(200).json(responseData);
}
