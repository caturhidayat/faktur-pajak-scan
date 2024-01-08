import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className='navbar bg-base-200 shadow-md'>
            <div className='navbar-start'>
                <Link href={"/"} className='btn btn-ghost text-lg md:text-xl md:mx-10 lg:mx-20'>
                    <span className='bg-warning rounded-full p-2 md:p-4 lg:p-4'></span>
                    Noitra
                </Link>
                <div className='dropdown'>
                    <Link href={"/"} className='btn btn-ghost'>
                        Home
                    </Link>
                </div>
                <Link href={"/efaktur"} className='btn btn-ghost'>
                    Scan Faktur
                </Link>
            </div>
        </div>
    );
}
