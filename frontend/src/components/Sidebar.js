import React, { Component, useContext } from 'react'
import { SidebarContext } from './SidebarContext'
import LeftArrow from '../assets/icons/left-arrow.svg'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
import Trash from '../assets/icons/trash.svg'

const Sidebar = () => {
    const {isOpen, handleClose } = useContext(SidebarContext)
    const { cart, clearCart, total } = useContext(CartContext)
    return (
        <div className={`${
            isOpen ? 'left-0' : '-left-full'
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>
                    Shopping Bag
                </div>
                <div className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <img onClick={handleClose} src={LeftArrow} className='text-2xl'/>
                </div>
            </div>
            <div className=''>
                {cart.map((item) => {
                    return <CartItem item={item} key={item.productId}/>
                })}
            </div>
            <div className='flex w-full justify-between'>
                <div className='flex justify-center items-center'>
                    <span className='font-semibold'>Total: {parseFloat(total).toFixed(2)} zł</span>
                </div>
                <div className='cursor-pointer py-4 w-12 h-12 flex justify-center items-center text-xl'>
                    <img src={Trash} alt='' width={24} onClick={clearCart} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar