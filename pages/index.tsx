import Image from "next/image";
import Head from "next/head";

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
                    alt="Hero"
                    width={'300'}
                    height={'500'}
                />
                <div>
                    <h1 className='text-5xl font-bold'>Box Office News!</h1>
                    <p className='py-6'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            h</div>
        </div>
    );
}
