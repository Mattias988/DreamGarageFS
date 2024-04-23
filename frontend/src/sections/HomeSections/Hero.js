import React from 'react'

function Hero() {
  return (
    <section 
        id='home'
        className="w-full flex flex-col h-screen justify-center bg-garage bg-cover">
            <div className=' w-full h-full backdrop-blur-xs text-white relative justify-center flex flex-col font-primary font-black'>
                <h1 className='text-8xl pl-32 font-black '>
                    <span>VISIT OUR</span>
                    <br />
                    <span>GARAGE</span>
                </h1>
                <p className='pl-36 opacity-60'>
                    私たちのガレージへようこそ！ 
                </p>
            </div>
    </section>
  )
}

export default Hero