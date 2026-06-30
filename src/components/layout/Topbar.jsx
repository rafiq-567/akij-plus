import { CircleQuestionMark, Flame, UserRound, Van, Zap } from 'lucide-react'
import React from 'react'

export default function Topbar() {
    return (
        <div className='flex justify-between'>
            <div>
                <Zap />
                <h1>
                    Exclusive FALL Collection
                </h1>
            </div>

            <div>
                <div>
                    <Van />
                    <h1>Corporate Sales</h1>
                </div>
                <div>
                    <Flame />
                    <h1>
                        Happy Hour
                    </h1>
                </div>
            </div>

            <div>
                <div>
                    <CircleQuestionMark />
                    <h2>About Us</h2>
                </div>

                <div>
                    <UserRound />
                </div>
            </div>
        </div>
    )
}
