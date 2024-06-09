import React, { useContext, useEffect, useState } from 'react'
import Product from '../../components/Product';

function ShopSec() {

    const[data, setData] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        const tokenData = JSON.parse(localStorage.getItem('user'));
        if (!tokenData || !tokenData.token) {
            throw new Error('No token found');
        }

        const token = tokenData.token;
        
        const response = await fetch('http://localhost:8080/products', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Something is not ok... Try again later.');
        }
        
        const data = await response.json();
        setData(data);
    };

    fetchData().catch(error => {
        console.error('Error fetching data:', error);
    });
}, []);


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