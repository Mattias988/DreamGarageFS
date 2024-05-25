import React from 'react'
import JDMEvent from '../../assets/images/jdmevent.svg'
import Photography from '../../assets/images/photography.svg'
import Mechanic from '../../assets/images/mechanic.svg'
import DriftEvent from '../../assets/images/driftevent.svg'

function WhatWeDoing() {
  return (
    <section className='bg-stone-800'>
        <span className='w-full h-fit  text-white grid place-items-center pt-32 font-primary font-black'>
            <h1 className='text-xl opacity-60 '>
                私たちは何をしているのでしょうか？
            </h1>
            <h1 className='text-4xl'>
                WHAT ARE WE DOING?
            </h1>
        </span>
        <div className='w-full flex justify-center space-x-20 py-24 font-primary'>
            <div className='relative'>
                <img
                    src={JDMEvent}
                    alt='JDMEvent'
                    width={300}
                    height={473}
                    className='opacity-70 lg:w-96 lg:h-'
                />
                <div className='absolute left-0 right-0 text-white font-semibold text-center top-1/2'>
                    <p>
                        JDM EVENTS
                    </p>
                    <p className='text-xs font-light lg:pb-8'>
                        WE ORGANIZE JDM EVENTS WORLDWIDE!
                    </p>
                    <button class="bg-primary sm:scale-50 lg:scale-75 md:scale-75 mt-2 hover:border-white hover:font-semibold text-white font-medium py-2 px-4 rounded-full">
                        JDM EVENTS HERE!
                    </button>
                </div>
            </div>
            <div className='relative'>
                <img
                    src={Photography}
                    alt='Photography'
                    width={300}
                    height={473}
                    className='opacity-70 lg:w-96'
                />
                <div className='absolute left-0 right-0 text-white font-semibold text-center top-1/2'>
                    <p>
                        PHOTOGRAPHY
                    </p>
                    <p className='text-xs font-light lg:pb-8'>
                        WE ARE PHOTOGRAPHING
                        <br/> 
                        CARS!
                    </p>
                    <button class="bg-primary sm:scale-50 lg:scale-75 md:scale-75 mt-2 hover:border-white hover:font-semibold text-white font-medium py-2 px-4 rounded-full">
                        PARTNERSHIP HERE!
                    </button>
                </div>
            </div>
            <div className='relative'>
                <img
                    src={Mechanic}
                    alt='Mechanic'
                    width={300}
                    height={473}
                    className='opacity-70 lg:w-96'
                />
                <div className='absolute left-0 right-0 text-white font-semibold text-center top-1/2'>
                    <p>
                        MECHANIC
                    </p>
                    <p className='text-xs font-light lg:pb-8'>
                        WE HAVE OUR OWN MECHANIC!
                    </p>
                    <button class="bg-primary sm:scale-50 lg:scale-75 md:scale-75 mt-2 hover:border-white hover:font-semibold text-white font-medium py-2 px-4 rounded-full">
                        MECHANIC HERE!
                    </button>
                </div>
            </div>
            <div className='relative'>
                <img
                    src={DriftEvent}
                    alt='DriftEvent'
                    width={300}
                    height={473}
                    className='opacity-70 lg:w-96'
                />
                <div className='absolute left-0 right-0 text-white font-semibold text-center top-1/2'>
                    <p>
                        DRIFT EVENTS
                    </p>
                    <p className='text-xs font-light lg:pb-8'>
                        WE ORGANIZE DRIFT EVENTS!
                    </p>
                    <button class="bg-primary sm:scale-50 lg:scale-75 md:scale-75 mt-2  hover:border-white hover:font-semibold text-white font-medium py-2 px-4 rounded-full">
                        DRIFT EVENTS HERE!
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhatWeDoing
