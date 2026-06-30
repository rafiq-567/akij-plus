import React from 'react'

export default function MainNav() {
    return (
        <div>
            <div>
                <h1>Akij</h1>
            </div>

            <div className="relative flex items-center">
                {/* Search Icon */}
                <svg
                    className="absolute left-3 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
                />
            </div>

            <div>
                <h1>
                    Best Sellers
                </h1>
            </div>
        </div>
    )
}
