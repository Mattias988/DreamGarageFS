import React from 'react'
import {Hero, GoTo, Cars} from '../sections/render'

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