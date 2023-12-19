import { TableFakturProps } from "@/interfaces/faktur";
import { useState } from "react";
import { useFormik } from "formik";
import { useRef } from "react";
import TableFaktur from "@/components/TableFaktur";
import { url } from "inspector";

export default function Home() {
    const [table, setTable] = useState([] as TableFakturProps[]);
    const refTable = useRef(null);
    const formik = useFormik({
        initialValues: {
            urlValidate: "",
        },
        onSubmit: async (values) => {
            // console.log(values.urlValidate);
            // const url = values.urlValidate;
            const res = await fetch("/api/faktur", {
                method: "POST",
                headers: {
                    "Content-Type": "application/xml",
                },
                body: JSON.stringify({url: values.urlValidate}),
            });
            console.log(res);
            const data = await res.json();
            console.log(data);
        },
    });
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
                        placeholder='Scan QR Faktur Pajak'
                    />
                    <button type='submit' className='btn btn-accent'>
                        Validate
                    </button>
                </div>
            </form>
            <div className='flex justify-end px-10 py-4'>
                <button className='btn btn-outline btn-accent'>Export</button>
            </div>
            <div className='flex justify-end px-10 py-4'>
                <p>Jumlah Data : </p>
            </div>
            <div className='flex justify-center'>
                <TableFaktur data={table} refTable={refTable} />
            </div>
        </div>
    );
}
