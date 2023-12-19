import React from "react";

export default function TableFaktur(props: any) {
    return (
        <div className="overflow-x-auto ">
            <table className='table table-sm'>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>FM</th>
                        <th>KD JENIS</th>
                        <th>FG PENGGANTI</th>
                        <th>NOMOR FAKTUR</th>
                        <th>MASA</th>
                        <th>TAHUN</th>
                        <th>TANGGAL FAKTUR</th>
                        <th>NPWP</th>
                        <th>NAMA</th>
                        <th>ALAMAT LENGKAP</th>
                        <th>JUMLAH DPP</th>
                        <th>JUMLAH PPN</th>
                        <th>JUMLAH PPNBM</th>
                        <th>IS CREDITABLE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>1</td>
                    <td>FM</td>
                    <td>KD JENIS TRANSAKSI</td>
                    <td>FG PENGGANTI</td>
                    <td>NOMOR FAKTUR</td>
                    <td>MASA PAJAK</td>
                    <td>TAHUN PAJAK</td>
                    <td>TANGGAL FAKTUR</td>
                    <td>NPWP</td>
                    <td>NAMA</td>
                    <td>ALAMAT LENGKAP</td>
                    <td>JUMLAH DPP</td>
                    <td>JUMLAH PPN</td>
                    <td>JUMLAH PPNBM</td>
                    <td>IS CREDITABLE</td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// "FM": string
//     "KD JENIS TRANSAKSI": string
//     "FG PENGGANTI": string
//     "NOMOR FAKTUR": string
//     "MASA PAJAK": string
//     "TAHUN PAJAK": string
//     "TANGGAL FAKTUR": Date | string
//     "NPWP": string
//     "NAMA": string
//     "ALAMAT LENGKAP": string
//     "JUMLAH DPP": number
//     "JUMLAH PPN": number
//     "JUMLAH PPNBM": number
//     "IS CREDITABLE": string
