import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Close from '../assets/icons/close.svg'
import Plus from '../assets/icons/plus.svg'
import Minus from '../assets/icons/minus.svg'
import {CartContext} from './CartContext'

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)
    const {productId, title, image, price, amount } = item
    
    return (
        <div className='flex'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4 border-b border-gray-200'>
                <Link to={`/product/${productId}`}>
                    <img className='max-w-[80px] ' src={image} alt='' />
                </Link>
                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        <Link to={`/product/${productId}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
                            {title}
                        </Link>
                        <div>
                            <img src={Close} alt='' className='w-[24px] cursor-pointer' onClick={() => removeFromCart(item.productId)}/>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                            <div className='flex-1 flex justify-center items-center cursor-pointer'>
                                <img src={Plus} alt='' width={24} onClick={() => increaseAmount(item.productId)}/>
                            </div>
                            <div className='h-full flex justify-center items-center px-2'>
                                {amount}
                            </div>
                            <div className='h-full flex-1 flex justify-center items-center cursor-pointer'>
                                <img src={Minus} alt='' width={24} onClick={() => decreaseAmount(item.productId)}/>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='pr-6'>
                                {price} zł
                            </div>
                            <div className='font-semibold'>
                                {`${parseFloat(item.price * amount).toFixed(2)} zł`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem


