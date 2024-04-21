import React from 'react'

function Hero() {
  return (
    <section 
        id='home'
        className="w-full flex flex-col h-screen justify-center">
            <div className='bg-garage w-full h-full bg-cover text-white relative justify-center flex flex-col'>
                <h1 className='text-8xl font-semibold pl-20'>
                    <span>VISIT OUR</span>
                    <br />
                    <span>GARAGE</span>
                </h1>
                <p className='pl-24 opacity-60'>
                    私たちのガレージへようこそ！ 
                </p>
            </div>
    </section>
  )
}

export default Hero