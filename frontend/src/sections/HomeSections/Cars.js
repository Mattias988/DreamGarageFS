import React from 'react'
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Lambo from '../../assets/images/lambo.svg'
import Supra from '../../assets/images/supraMK4.svg'
import Audi from '../../assets/images/audiRS6.svg'

function Cars() {
    const [hovered, setHovered] = useState(false);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] }));
  
    return (
      <section>
        <div
          className='w-full h-fit bg-stone-800 text-white grid place-items-center pt-32 font-primary font-black'
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => {
            set({ xys: [0, 0, 1] });
            setHovered(false);
          }}
          onMouseEnter={() => setHovered(true)}
        >
          <div className='pb-16'>
            <h1 className='opacity-60 text-xl flex justify-center'>私たちのお気に入りの車</h1>
            <h1 className='text-4xl'>FAVORITE CARS</h1>
          </div>
          <div className='flex justify-center'>
            <animated.img
              src={Lambo}
              alt='Lambo'
              width={428}
              height={600}
              className='pr-8'
              style={{ transform: props.xys.interpolate(trans) }}
            />
            <animated.img
              src={Supra}
              alt='Supra'
              width={428}
              height={600}
              className='pr-8'
              style={{ transform: props.xys.interpolate(trans) }}
            />
            <animated.img
              src={Audi}
              alt='Audi'
              width={428}
              height={600}
              className='pr-8'
              style={{ transform: props.xys.interpolate(trans) }}
            />
          </div>
          <div className='h-36'></div>
          {hovered && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
          )}
        </div>
      </section>
    );
  }
  
  // Helper functions for calculating transformations
  // Difference between mouse position 'y' and screen center, divided by 20 to reduce effect
  // scale is set to 1.1 which causes the images to slightly enlarge
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 60, (x - window.innerWidth / 2) / 60, 1.1];

  // Adding perspective (3D), rotation and scale
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  
  export default Cars;