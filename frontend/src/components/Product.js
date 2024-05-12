import React from 'react'
import EyeCart from "../assets/icons/eye-details.svg"
import PlusCart from "../assets/icons/plus-cart.svg"
import { Link } from 'react-router-dom'

function Product({product}) {


  return (
        <div key={product.productId} className='w-[356px] h-[389px] rounded-2xl bg-white group relative'>
            <div className='w-full h-full grid items-end pb-8'>
                <div className='h-full grid gap-4 content-end'>
                    <div className='flex justify-center'>
                        {product.image}
                    </div>
                    <div className='uppercase font-primary font-semibold flex justify-center'>
                        <Link to={'/shop/${productId}'} className=''>{product.title}</Link>
                    </div>
                    <div className='font-primary text-gray-600 font-semibold flex justify-center'>
                        {product.price}
                    </div>
                </div>
            </div>
            <div className='absolute right-10 top-3 group-hover:right-5 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <div className='w-full h-[32px] flex justify-end'>
                    <button>
                        <div className='h-[32px] w-[32px] flex justify-center bg-red-400 rounded-lg shadow'>
                            <img src={PlusCart} alt='' className=''/>
                        </div>
                    </button>
                </div>
                <div className='w-full h-[32px] pt-2 flex justify-end'>
                    <Link
                        to={'/shop/${productId}'}
                        className=""
                    >
                        <div className='h-[32px] w-[32px] flex justify-center shadow rounded-lg'>
                            <img src={EyeCart} alt='' className='w-[32px] h-[32px]'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Product