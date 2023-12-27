import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <div className='hero bg-base-100 my-5'>
            <Head>
                <title>Noitra</title>
            </Head>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <Image
                    src='https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg'
                    className='max-w-sm rounded-lg shadow-2xl'
                    alt='Hero'
                    width={"300"}
                    height={"500"}
                />
                <div className="mx-8">
                    <h1 className='text-5xl font-bold'>Noitra! ✨</h1>
                    <p className='py-6'>
                        Scan QR Code Faktur Pajak dengan mudah dan cepat
                        menggunakan Noitra!
                    </p>
                    <Link href='/efaktur'>
                        <button className='btn btn-warning'>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
