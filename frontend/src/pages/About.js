import React from 'react'
import { HeroAbout, WhatWeDoing } from '../sections/render'

function About() {
  return (
    <main className="">
        <section className="">
          <div className='bg-mountain bg-cover'>
            <HeroAbout />
          </div>
          <WhatWeDoing />
        </section>
  </main>
  )
}

export default About