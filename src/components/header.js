"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../res/logo.png"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-[#c7b9d9] pt-4 pb-4 pr-0 pl-10 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="container mx-auto flex items-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <div className="text-black text-xl font-bold">
                        <Link href="/">CineMagic</Link>
                    </div>
                </div>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-white"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div
                    className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}
                >
                    <Link href="/" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md">
                        Home
                    </Link>
                    <Link href="/about" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md">
                        About
                    </Link>
                    <Link href="/signup" className="bg-[#4880d2] hover:bg-[#69a5ef] text-white font-sans text-[15px] px-5 py-2 rounded-[28px] border border-[#4292f5] shadow-sm hover:shadow-md active:relative active:top-px">
                        Signup
                    </Link>
                </div>
            </div>
        </nav>
    )
}