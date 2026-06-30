import { CircleQuestionMark, Flame, UserRound, Van, Zap } from 'lucide-react'
import React from 'react'

export default function Topbar() {
    return (
        <div className='flex justify-between items-center px-8 py-2 bg-[#131921]'>
            <button className='flex items-center justify-center gap-2 px-3 py-1 border-black border-2 bg-red-950 font-bold text-white'>
                <Zap className='w-4 h-4 text-yellow-400 animate-pulse'/>
                <h1>
                    Exclusive FALL Collection
                </h1>
            </button>

            <div className='flex items-center justify-center gap-4'>
                <button className='flex items-center justify-center gap-1 py-1 px-3 border-black border-2 bg-red-950 text-white rounded-sm'>
                    <Van />
                    <h1>Corporate Sales</h1>
                </button>
                <button className='flex items-center justify-center gap-1  font-bold text-white px-3 py-1 border-black border-2 bg-red-950 rounded-sm'>
                    <Flame className='w-4 h-4 text-orange-500 animate-bounce'/>
                    <h1>
                        Happy Hour
                    </h1>
                </button>
            </div>

            <div className='flex items-center justify-center gap-8 text-white' >
                <button className='flex items-center justify-center gap-1'>
                    <CircleQuestionMark size={12}/>
                    <h2 className='text-xs'>About Us</h2>
                </button>

                <button >
                    <UserRound size={20}/>
                </button>
            </div>
        </div>
    )
}