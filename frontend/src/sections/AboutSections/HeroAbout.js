import React from 'react'

function HeroAbout() {
  return (
    <section 
        id='about'
        className="w-full flex flex-col h-screen justify-center ">
            <div className=' w-full h-full backdrop-blur-xs backdrop-brightness-50 text-white justify-center flex flex-col font-primary font-black pb-24 '>
                <div className='grid justify-items-end drop-shadow-lg'>
                  <h1 className='text-8xl pr-28 font-black'>
                      <span>WHO ARE</span>
                      <br />
                      <span>WE?</span>
                  </h1>
                  </div>
                  <p className='flex justify-end opacity-60 pr-96 mr-20'>
                    私たちは誰ですか？ 
                  </p>
                
            </div>
    </section>
  )
}

export default HeroAbout