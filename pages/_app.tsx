import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className='h-screen'>
            <div>
                <Navbar />
            </div>
            <div className='container px-4'>
                <Component {...pageProps} />
            </div>
            <div className="fixed left-0 bottom-0 w-full">
                <Footer />
            </div>
        </main>
    );
}
