import { TableFakturProps } from "@/interfaces/faktur";
import TableFaktur from "@/components/TableFaktur";
import { useRef } from "react";
import { useState } from "react";
import Head from "next/head";
import { useFormik } from "formik";
import * as xlsx from "xlsx";
import * as yup from "yup";

export default function Page() {
    // table state type is like a TableFakturProps
    const [table, setTable] = useState<TableFakturProps[]>([]);

    // Validation Schema
    const scanFakturValidation = yup.object().shape({
        urlValidate: yup
            .string()
            .url("URL tidak valid")
            .required("Field harus diisi"),
        typeFakturPajak: yup.string().required("Tipe Faktur Pajak harus diisi"),
    });

    const refTable = useRef(null);
    const refInput = useRef<HTMLInputElement>(null);
    const formik = useFormik({
        initialValues: {
            urlValidate: "",
            typeFakturPajak: "",
        },
        validationSchema: scanFakturValidation,
        onSubmit: async (values) => {
            const res = await fetch("/api/faktur", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: values.urlValidate,
                    typeFaktur: values.typeFakturPajak,
                }),
            });
            // console.log(res);
            const data = await res.json();
            console.log(data);
            setTable((prev) => {
                return [...prev, data];
            });

            // Reset only urlValidate input
            formik.setFieldValue("urlValidate", "");

            // focus to urlValidate input
            setTimeout(() => {
                refInput.current?.focus();
            }, 800);
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
            <Head>
                <title>Scan eFaktur</title>
            </Head>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-wrap md:flex-shrink-0 gap-4 md:justify-center'>
                    <label>
                        <select
                            className='select select-primary border-2 max-w-xs'
                            value={formik.values.typeFakturPajak}
                            onChange={formik.handleChange}
                            name='typeFakturPajak'
                            disabled={formik.isSubmitting}
                        >
                            <option disabled value=''>
                                -- Pilih Faktur Pajak --
                            </option>
                            <option value='PajakMasuk'>
                                Faktur Pajak Masukan
                            </option>
                            <option value='PajakKeluar'>
                                Faktur Pajak Keluaran
                            </option>
                        </select>
                        {formik.errors.typeFakturPajak &&
                            formik.touched.typeFakturPajak ? (
                            <div className='label'>
                                <span className='label label-text-alt text-error'>
                                    {formik.errors.typeFakturPajak}
                                </span>
                            </div>
                        ) : null}
                    </label>
                    <label className='md:w-6/12'>
                        <input
                            className='input input-warning border-2 w-full'
                            type='text'
                            name='urlValidate'
                            id='urlValidate'
                            ref={refInput}
                            onChange={formik.handleChange}
                            value={formik.values.urlValidate}
                            placeholder='Klik disini Sebelum Scan QR Faktur Pajak'
                            disabled={formik.isSubmitting}
                        />
                        {formik.errors.urlValidate &&
                            formik.touched.urlValidate ? (
                            <div className='label'>
                                <span className='label label-text-alt text-error'>
                                    {formik.errors.urlValidate}
                                </span>
                            </div>
                        ) : null}
                    </label>

                    <button type='submit' className='btn btn-warning'>
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
                                d='m4.5 12.75 6 6 9-13.5'
                            />
                        </svg>
                        {formik.isSubmitting ? (
                            <span className='loading loading-spinner loading-md'></span>
                        ) : (
                            "Validate"
                        )}
                    </button>
                </div>
            </form>
            <div className='flex justify-end px-10 py-4'>
                {table.length > 0 && (
                    <button onClick={handleExport} className='btn btn-primary'>
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
                                d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                            />
                        </svg>
                        Export
                    </button>
                )}
            </div>
            <div className='flex justify-end px-10 py-4'>
                <p
                    className={
                        table.length === 0
                            ? "hidden"
                            : "badge badge-warning p-3"
                    }
                >
                    Jumlah Data : {table.length}{" "}
                </p>
            </div>
            <div className='flex justify-center'>
                {table.length > 0 && (
                    <TableFaktur
                        data={table}
                        refTable={refTable}
                        setTable={setTable}
                    />
                )}

                {table.length === 0 && (
                    <div className='alert bg-base-200 justify-center w-5/12 shadow-lg'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='red'
                            className='w-6 h-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z'
                            />
                        </svg>

                        <p className='text-xl'>Silahkan Scan QR Faktur Pajak</p>
                    </div>
                )}
            </div>
        </div>
    );
}
