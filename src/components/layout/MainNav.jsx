import { BaggageClaim, UserRound, Search, Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function MainNav() {
    return (
        <div className='flex justify-between items-center bg-cyan-950 px-20 py-3'>
            <div className='flex justify-center items-center gap-2'>
                <Menu className='text-white' />
                <h1 className='text-white font-bold text-7xl'>Akij</h1>
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
                    <Search className="w-5 h-5 text-white " />
                </button>
            </div>

            <div className='flex gap-4 items-center text-white'>
                <Link href="/products?sort=best-sellers" className='text-sm cursor-pointer'>Best Sellers</Link>
                <Link href="/products?sort=new-arrivals" className='text-sm cursor-pointer'>New Arrivals</Link>
                <UserRound />
                <BaggageClaim />
            </div>
        </div>
    )
}