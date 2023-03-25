import type { NextApiRequest, NextApiResponse } from "next";

export default function teetimes(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json({ data: ["6:00 AM", "8:00 AM"] });
    } else {
        res.status(405).json("Method not allow on resource.");
    }
}
