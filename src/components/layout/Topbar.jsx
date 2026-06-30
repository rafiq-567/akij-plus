import { CircleQuestionMark, Flame, UserRound, Van, Zap } from 'lucide-react'
import React from 'react'

export default function Topbar() {
    return (
        <div className='flex justify-between items-center px-6 pt-3 '>
            <button className='flex items-center justify-center gap-2'>
                <Zap className='w-4 h-4 text-yellow-400 animate-pulse'/>
                <h1>
                    Exclusive FALL Collection
                </h1>
            </button>

            <div className='flex items-center justify-center gap-4'>
                <button className='flex items-center justify-center gap-1'>
                    <Van />
                    <h1>Corporate Sales</h1>
                </button>
                <button className='flex items-center justify-center gap-1'>
                    <Flame className='w-4 h-4 text-orange-500 animate-bounce'/>
                    <h1>
                        Happy Hour
                    </h1>
                </button>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <button className='flex items-center justify-center gap-1'>
                    <CircleQuestionMark />
                    <h2>About Us</h2>
                </button>

                <button>
                    <UserRound />
                </button>
            </div>
        </div>
    )
}