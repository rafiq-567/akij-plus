"use client";
import { BaggageClaim, UserRound, Search, Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import CategoryDrawer from './CategoryDrawer'
import { usePathname } from 'next/navigation'

export default function MainNav() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={`sticky top-0 left-0 w-full z-50 flex justify-between items-center px-20 py-3 transition-colors duration-300 ${
                    !isHome || scrolled ? "bg-cyan-950" : "bg-transparent"
                }`}
            >
                <div className='flex justify-center items-center gap-2'>
                    <button onClick={() => setDrawerOpen(true)}>
                        <Menu className='text-white' />
                    </button>
                    <h1 className='text-white font-bold text-xl'>Akij</h1>
                </div>

                <div className="relative flex items-center w-full max-w-xl mx-8 bg-white rounded-md overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-10 pl-4 pr-12 bg-white text-gray-900 placeholder-gray-400 focus:outline-none text-sm"
                    />
                    <button
                        type="button"
                        className="absolute right-0 top-0 h-10 w-16 rounded-md flex items-center justify-center bg-black border-2 border-white hover:bg-gray-800"
                    >
                        <Search className="w-5 h-5 text-white" />
                    </button>
                </div>

                <div className='flex gap-4 items-center text-white'>
                    <Link href="/best-sellers" className='text-xs cursor-pointer'>Best Sellers</Link>
                    <Link href="/products?sort=new-arrivals" className='text-xs cursor-pointer'>New Arrivals</Link>
                    <UserRound />
                    <BaggageClaim />
                </div>
            </div>

            <CategoryDrawer
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </>
    )
}