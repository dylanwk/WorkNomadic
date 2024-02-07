import { NextApiRequest, NextApiResponse } from "next";
import { getDestinationImage } from "../components/getImage";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const result = await getDestinationImage(req.body); // Assuming you're sending data in the request body
            res.status(200).json({ result });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}