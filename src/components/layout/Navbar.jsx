import React from 'react'
import Topbar from './Topbar'
import MainNav from './MainNav'

export default function Navbar() {
  return (
    <div className='space-y-4'>
        <Topbar />
        <MainNav />
    </div>
  )
}
