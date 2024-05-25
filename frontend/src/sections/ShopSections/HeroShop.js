import React from 'react'

function HeroAbout() {
  return (
    <section 
        id='about'
        className="w-full flex flex-col h-screen justify-center ">
            <div className=' w-full h-full backdrop-blur-xs backdrop-brightness-50 text-white justify-center flex flex-col font-primary font-black pb-24 '>
                <div className='grid justify-items-start drop-shadow-lg'>
                  <h1 className='text-8xl pl-28 font-black'>
                      <span>VISIT OUR </span>
                      <br />
                      <span>SHOP!</span>
                  </h1>
                  </div>
                  <p className='flex justify-start pl-28 opacity-60'>
                    当店にお越しください！! 
                  </p>
                
            </div>
    </section>
  )
}

export default HeroAbout