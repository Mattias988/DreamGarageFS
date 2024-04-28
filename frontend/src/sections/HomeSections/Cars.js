import React from 'react'
import Lambo from '../../assets/lambo.svg'
import Supra from '../../assets/supraMK4.svg'
import Audi from '../../assets/audiRS6.svg'

function Cars() {
  return (
    <section>
        <div className='w-full h-fit bg-stone-800 text-white grid place-items-center pt-32 font-primary font-black'>
            <div className='pb-16'>
                <h1 className='opacity-60 text-xl flex justify-center'>
                    私たちのお気に入りの車
                </h1>
                <h1 className='text-4xl '>
                    FAVORITE CARS
                </h1>
            </div>
            <div className='flex justify-center'>
                <img
                    src={Lambo}
                    alt='Lambo'
                    width={428}
                    height={600}
                    className='pr-8'
                />
                <img
                    src={Supra}
                    alt='Supra'
                    width={428}
                    height={600}
                    className='pr-8'
                />
                <img
                    src={Audi}
                    alt='Audi'
                    width={428}
                    height={600}
                    className='pr-8'
                />
            </div>
            <div className='h-36'>

            </div>
        </div>
    </section>
  )
}

export default Cars