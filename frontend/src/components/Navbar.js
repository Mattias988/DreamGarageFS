import { Link } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <div className='w-100vh bg-black place-content-center flex justify-center font-semibold'>
        <nav className=''>
            <div className=''>
                <Link to="/" className='text-lg '>
                    FullstackApp
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar