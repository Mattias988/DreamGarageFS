import React from 'react'
import Nav from '../components/Nav';
import {Hero, GoTo, Cars} from '../sections/render'

function Home() {
  return (
    <main className="">
        <section className="">
          <div className='bg-garage bg-cover'>
            <Nav />
            <Hero/>
            <GoTo />
          </div> 
          <Cars/>
        </section>
  </main>
  )
}

export default Home