import { TableFakturProps } from "@/interfaces/faktur";
import { useState } from "react";
import { useFormik } from "formik";
import { useRef } from "react";
import TableFaktur from "@/components/TableFaktur";
import * as xlsx from "xlsx";

export default function Home() {
    // table state type is like a TableFakturProps
    const [table, setTable] = useState<TableFakturProps[]>([]);

    const refTable = useRef(null);
    const formik = useFormik({
        initialValues: {
            urlValidate: "",
        },
        onSubmit: async (values) => {
            const res = await fetch("/api/faktur", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: values.urlValidate }),
            });
            // console.log(res);
            const data = await res.json();
            console.log(data);
            setTable((prev) => {
                return [...prev, data];
            });
        },
    });

    // Handle Export using xlsx library
    const handleExport = () => {
        const ws = xlsx.utils.json_to_sheet(table);
        const wb = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
        xlsx.writeFile(wb, "faktur.xlsx");
    };

    return (
        <div className='my-5'>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex gap-4 justify-center'>
                    <input
                        className='input input-accent w-6/12'
                        type='text'
                        name='urlValidate'
                        id='urlValidate'
                        ref={refTable}
                        onChange={formik.handleChange}
                        value={formik.values.urlValidate}
                        placeholder='Klik disini Sebelum Scan QR Faktur Pajak'
                    />
                    <button type='submit' className='btn btn-accent'>
                        Validate
                    </button>
                </div>
            </form>
            <div className='flex justify-end px-10 py-4'>
                <button
                    onClick={handleExport}
                    className='btn btn-outline btn-accent'
                >
                    Export
                </button>
            </div>
            <div className='flex justify-end px-10 py-4'>
                <p>Jumlah Data : {table.length} </p>
            </div>
            <div className='flex justify-center'>
                {table.length > 0 && (
                    <TableFaktur data={table} refTable={refTable} />
                )}

                {table.length === 0 && (
                    <div className='alert alert-warning justify-center w-8/12'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                            />
                        </svg>

                        <p className='text-2xl'>
                            Silahkan Scan QR Faktur Pajak
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
