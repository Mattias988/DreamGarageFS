import React from 'react'
import Nav from '../components/Nav';
import { HeroAbout, WhatWeDoing } from '../sections/render'

function About() {
  return (
    <main className="">
        <section className="">
          <div className='bg-mountain bg-cover'>
            <Nav />
            <HeroAbout />
          </div>
          <WhatWeDoing />
        </section>
  </main>
  )
}

export default About