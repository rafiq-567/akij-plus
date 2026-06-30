import React from 'react'

export default function HomeButton() {
    return (
        <div className="w-full mx-auto flex items-center justify-between gap-4 px-16 py-6 z-50 bg-blue-950 text-white">
               <button className="relative px-10 py-4 font-semibold text-sm transition-colors duration-200 hover:bg-gray-200 [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
                Shop Now
            </button>
            <button className="relative px-10 py-4 font-semibold text-sm transition-colors duration-200 hover:bg-gray-200 [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
                Men
            </button>
            <button className="relative px-10 py-4 font-semibold text-sm transition-colors duration-200 hover:bg-gray-200 [clip-path:polygon(8%_0,100%_0,92%_100%,0_100%)]">
                GET 5% OFF
            </button>
        </div>
    )
}