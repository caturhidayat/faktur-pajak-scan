import resultFaktur from "@/helpers/resultFaktur";
import { NextApiRequest, NextApiResponse } from "next";
import xml2js from "xml2js";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { url, typeFaktur } = req.body;

    const parser = new xml2js.Parser({
        explicitArray: false,
    });

    if (req.method === "POST") {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/xml",
                },
            });
            const data = await response.text();
            parser.parseString(data, (err, result) => {
                new Promise((resolve, reject) => {
                    if (err) reject(err);
                    resolve(result);
                });
                const results = resultFaktur(result, typeFaktur);

                res.status(200).json(results);
            });
        } catch (error) {
            // console.log(error);
            res.status(400).json({ message: "Error Bruh" });
        }
    }
}
