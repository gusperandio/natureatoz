import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  data: { item: string }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const responseData: ResponseData = {
    message: 'Exemplo de mensagem',
    data: [
      { item: "Arara" },
      { item: "Sabugo" },
      { item: "Jujuba" },
      { item: "Árvore" },
    ],
  };

  res.status(200).json(responseData);
}
