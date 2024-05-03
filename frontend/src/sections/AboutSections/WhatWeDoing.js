import React from 'react'
import JDMEvent from '../../assets/images/jdmevent.svg'
import Photography from '../../assets/images/photography.svg'
import Mechanic from '../../assets/images/mechanic.svg'
import DriftEvent from '../../assets/images/driftevent.svg'

function WhatWeDoing() {
  return (
    <section className='bg-stone-800'>
        <span className='w-full h-fit  text-white grid place-items-center pt-32 font-primary font-black'>
            <h1 className='text-xl opacity-60'>
                私たちは何をしているのでしょうか？
            </h1>
            <h1 className='text-4xl'>
                WHAT ARE WE DOING?
            </h1>
        </span>
        <div className='w-full flex justify-center space-x-20 py-24'>
            <div className='relative'>
                <img
                    src={JDMEvent}
                    alt='JDMEvent'
                    width={300}
                    height={473}
                    className='opacity-70'
                />
                <span className='absolute left-0 right-0 text-white font-semibold text-center top-2/3'>
                    <p>
                        JDM EVENTS
                    </p>
                </span>
            </div>
            <div className='text-white'>
                <img
                    src={Photography}
                    alt='Photography'
                    width={300}
                    height={473}
                    className=''
                />
                <span className=''>
                    
                </span>
            </div>
            <div className='text-white'>
                <img
                    src={Mechanic}
                    alt='Mechanic'
                    width={300}
                    height={473}
                    className=''
                />
                <span className=''>
                    
                </span>
            </div>
            <div className='text-white'>
                <img
                    src={DriftEvent}
                    alt='DriftEvent'
                    width={300}
                    height={473}
                    className=''
                />
                <span className=''>
                    
                </span>
            </div>
        </div>
    </section>
  )
}

export default WhatWeDoing
