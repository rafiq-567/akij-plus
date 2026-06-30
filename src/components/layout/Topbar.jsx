import { CircleQuestionMark, Flame, UserRound, Van, Zap } from 'lucide-react'
import React from 'react'

export default function Topbar() {
    return (
        <div className='flex justify-between'>
            <button>
                <Zap className='w-4 h-4 text-yellow-400 animate-pulse'/>
                <h1>
                    Exclusive FALL Collection
                </h1>
            </button>

            <div>
                <button>
                    <Van />
                    <h1>Corporate Sales</h1>
                </button>
                <button>
                    <Flame className='w-4 h-4 text-orange-500 animate-bounce'/>
                    <h1>
                        Happy Hour
                    </h1>
                </button>
            </div>

            <div>
                <button>
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
