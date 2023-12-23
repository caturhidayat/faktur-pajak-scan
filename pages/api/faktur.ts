import { NextApiRequest, NextApiResponse } from "next";
import xml2js from "xml2js";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { url } = req.body;
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
                    // console.log({1: result});
                    resolve(result);
                });
                const [day, month, year] = result.resValidateFakturPm.tanggalFaktur.split("/");
                const results = {
                    FM: "FM",
                    "KD JENIS TRANSAKSI": result.resValidateFakturPm.kdJenisTransaksi,
                    "FG PENGGANTI": result.resValidateFakturPm.fgPengganti,
                    "NOMOR FAKTUR": result.resValidateFakturPm.nomorFaktur,
                    "MASA PAJAK": month,
                    "TAHUN PAJAK": year,
                    "TANGGAL FAKTUR": new Date(year, month - 1, day).toLocaleDateString(),
                    NPWP: result.resValidateFakturPm.npwpPenjual,
                    NAMA: result.resValidateFakturPm.namaPenjual,
                    "ALAMAT LENGKAP": result.resValidateFakturPm.alamatPenjual,
                    "JUMLAH DPP": result.resValidateFakturPm.jumlahDpp,
                    "JUMLAH PPN": result.resValidateFakturPm.jumlahPpn,
                    "JUMLAH PPNBM": result.resValidateFakturPm.jumlahPpnBm,
                }
                // console.log({2: result.resValidateFakturPm});
                res.status(200).json(results);
            });
        } catch (error) {
            // console.log(error);
            res.status(400).json({ message: "Error" });
        }
    }
}
