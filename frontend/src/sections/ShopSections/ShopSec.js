import React, { useEffect, useState } from 'react'
import Product from '../../components/Product';

function ShopSec() {

    const[data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Something is not ok... Try again later.')
                }
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }, [])

    return ( 
      <section className='bg-stone-800 w-full h-fit'>
        <div className='grid justify-items-center pb-10'>
            <span className='grid justify-items-center text-white font-primary pt-32 pb-24'>
                <p className='opacity-60 text-xl'>
                    店 
                </p>
                <h1 className='font-black text-4xl'>
                    SHOP
                </h1>
            </span>
            <div className='bg-tertiary w-10/12 h-fit rounded-2xl grid grid-cols-3 gap-10 py-10 justify-items-center'>
                {data?.map((products) => {
                    return <Product product={products} key={products.productId}/>
                })}
            </div>
          </div>
      </section>
    )
  }

export default ShopSec