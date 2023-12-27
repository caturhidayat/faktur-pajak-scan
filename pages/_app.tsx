import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className='h-screen'>
            <div className="sticky top-0">
                <Navbar />
            </div>
            <div className='container px-4 py-8'>
                <Component {...pageProps} />
            </div>
            {/* <div className='fixed left-0 bottom-0 w-full'>
                <Footer />
            </div> */}
            <Analytics />
            <SpeedInsights />
        </main>
    );
}
