import React from 'react'
import Logo from '../assets/icons/logo.svg'
import User from '../assets/icons/user.svg'
import Cart from '../assets/icons/cart.svg'
import { navLinks } from '../constance'

function Nav() {
  return (
    <header className='py-8 absolute z-10 w-full font-primary font-bold'>
        <nav className='flex justify-center'>
            <a href='/' className='pl-32 flex justify-self-auto '>
                <img
                    src={Logo}
                    alt='Logo'
                    width={40}
                    height={40}
                    className=''
                />
                <span className='pl-9 text-white w-[250px] self-center'>
                    DREAM GARAGE
                </span>
            </a>
            <div className='flex w-full justify-end pr-28'>
                <ul className='flex justify-center items-center gap-8 max-lg:hidden text-white space-x-6 pr-14 '>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='leading-normal text-lg text-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex '>
                    <a href='/' className='self-center'>
                        <img 
                            src={User}
                            alt='User'
                            width={40}
                            height={40}
                            className=''
                        />
                    </a>
                    <a href='/' className='self-center pl-6'>
                        <img 
                            src={Cart}
                            alt='Cart'
                            width={40}
                            height={40}
                            className=''
                        />
                    </a>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Nav