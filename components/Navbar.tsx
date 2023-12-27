import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className='navbar bg-base-200 shadow-md'>
            <div className='navbar-start'>
                <Link href={"/"} className='btn btn-ghost text-xl mx-20'>
                    <span className='bg-warning rounded-full p-4'></span>
                    Noitra
                </Link>
                <div className='dropdown'>
                    <Link href={"/"} className='btn btn-ghost'>
                        Home
                    </Link>
                </div>
                <Link href={"/efaktur"} className='btn btn-ghost'>
                    Scan faktur
                </Link>
            </div>
        </div>
    );
}
