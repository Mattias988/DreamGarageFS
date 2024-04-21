import React from 'react'
import Logo from '../assets/logo.svg'
import User from '../assets/user.svg'
import { navLinks } from '../constance'

function Nav() {
  return (
    <header className='py-8 absolute z-10 w-full '>
        <nav className='flex justify-between items-center '>
            <a href='/' className='pl-8 flex justify-center'>
                <img
                    src={Logo}
                    alt='Logo'
                    width={40}
                    height={40}
                    className=''
                />
                <div className='self-center pl-9 text-white'>
                    Dream Garage
                </div>
            </a>
            <ul className='flex justify-center items-center gap-16 max-lg:hidden text-white space-x-6'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='leading-normal text-lg text-gray'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <a href='/' className='pr-8'>
                <img 
                    src={User}
                    alt='User'
                    width={40}
                    height={40}
                    className=''
                />
            </a>
        </nav>
    </header>
  )
}

export default Nav