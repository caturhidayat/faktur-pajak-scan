import { TableFakturProps } from "@/interfaces/faktur";
import { MutableRefObject } from "react";

export default function TableFaktur(props: {
    data: TableFakturProps[];
    refTable: MutableRefObject<null>;
}) {
    const { data } = props;
    return (
        <div className='overflow-x-auto h-96'>
            <table className='table table-xs table-pin-rows table-zebra'>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>FM</th>
                        <th>KD JENIS</th>
                        <th>FG PENGGANTI</th>
                        <th>NOMOR FAKTUR</th>
                        <th>MASA</th>
                        <th>TAHUN</th>
                        <th>TANGGAL</th>
                        <th>NPWP</th>
                        <th>NAMA</th>
                        <th>ALAMAT</th>
                        <th>DPP</th>
                        <th>PPN</th>
                        <th>PPNBM</th>
                        <th>IS CREDITABLE</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: TableFakturProps, index: number) => {
                        return (
                            <tr key={index} className="hover">
                                <td>{index + 1}</td>
                                <td>{item["FM"]}</td>
                                <td>{item["KD JENIS TRANSAKSI"]}</td>
                                <td>{item["FG PENGGANTI"]}</td>
                                {/* <td>{Number(item["NOMOR FAKTUR"])}</td> */}
                                <td>
                                    {item["NOMOR FAKTUR"]
                                        .toString()
                                        .padStart(12, "0")}
                                </td>
                                <td>{item["MASA PAJAK"]}</td>
                                <td>{item["TAHUN PAJAK"]}</td>
                                <td>{item["TANGGAL FAKTUR"].toString()}</td>
                                <td>{Number(item["NPWP"])}</td>
                                <td>{item["NAMA"]}</td>
                                <td>{item["ALAMAT LENGKAP"]}</td>
                                <td>{Number(item["JUMLAH DPP"])}</td>
                                <td>{Number(item["JUMLAH PPN"])}</td>
                                <td>{Number(item["JUMLAH PPNBM"])}</td>
                                <td>{item["IS CREDITABLE"]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

