import React from 'react'
import Topbar from './Topbar'
import MainNav from './MainNav'

export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
        <Topbar />
        <MainNav />
    </div>
  )
}
