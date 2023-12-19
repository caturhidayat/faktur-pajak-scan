import { NextApiRequest, NextApiResponse } from "next";
import xml2js from "xml2js";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { url } = req.body;
    // console.log(url);
    const parser = new xml2js.Parser();
    // console.log({ url: urlValidate });

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
                    // console.log({ result });
                    resolve(result);
                });
                // console.log({ res: result });
                res.status(200).json(result);
            });
        } catch (error) {
            console.log(error);
        }
    }
}
