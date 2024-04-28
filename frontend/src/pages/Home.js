import React from 'react'
import {Hero} from '../sections/render'
import GoTo from '../sections/HomeSections/GoTo'
import Cars from '../sections/HomeSections/Cars'

function Home() {
  return (
    <main className="">
        <section className="">
          <div className='bg-garage bg-cover'>
            <Hero/>
            <GoTo />
          </div> 
          <Cars/>
        </section>
  </main>
  )
}

export default Home