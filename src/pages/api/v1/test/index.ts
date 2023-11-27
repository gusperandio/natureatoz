import updateReqCount from "../../../../../lib/count";
import middleware from "../../../../../lib/middleware";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "PUT") {
        res.status(200).json({ message: "Rota executada após o middleware" });
    }
};

export default middleware(handler);
