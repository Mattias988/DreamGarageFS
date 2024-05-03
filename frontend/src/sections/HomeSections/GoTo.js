import {React, useState} from 'react'
import Blog from "../../assets/icons/blog.svg"
import About from "../../assets/images/about.svg"
import Location from "../../assets/icons/location.svg"
import Arrow_Right from "../../assets/icons/arrow_right.svg"

function GoTo() {
  const [isHoveredLocation, setIsHoveredLocation] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredBlog, setIsHoveredBlog] = useState(false);

  return (
    <section>
      <div className='grid font-primary'>
         <div className='w-full h-fit-screen text-xs text-white pr-36 pl-36 flex justify-between '>
            <div className='grid self-center opacity-30 hover:opacity-100 w-1/3'
              onMouseEnter={() => setIsHoveredLocation(true)}
              onMouseLeave={() => setIsHoveredLocation(false)}
            >
              <div className='flex'>
                <img
                    src={Location}
                    alt='Logo'
                    width={39}
                    height={39}
                    className=''
                />
                <p className='self-center pl-6'>
                    YOU CAN VISIT US HERE!
                </p>
              </div>
              <a href='/'className='flex pl-16'>
                LOCATION
                <img
                  src={Arrow_Right}
                  alt='Arrow'
                  width={28.5}
                  height={0}
                  className=' ml-2 pb-9'
                />
              </a>
              <div className={`w-auto h-0.5 ${isHoveredLocation ? 'bg-orange-400' : 'bg-white'}`}/>
            </div>
            <div className='grid self-center opacity-30 hover:opacity-100 w-1/3'
              onMouseEnter={() => setIsHoveredAbout(true)}
              onMouseLeave={() => setIsHoveredAbout(false)}
            >
              <div className='flex'>
                <img
                    src={About}
                    alt='Logo'
                    width={39}
                    height={39}
                    className=''
                />
                <p className='self-center pl-6'>
                    WHO ARE WE AND WHAT ARE WE DOING?
                </p>
              </div>
              <a href='/'className='flex pl-16'>
                ABOUT
                <img
                  src={Arrow_Right} 
                  alt='Arrow'
                  width={28.5}
                  height={0}
                  className='self-center ml-2 pb-9'
                />
              </a>
              <div className={`w-auto h-0.5 ${isHoveredAbout ? 'bg-orange-400' : 'bg-white'}`}/>
            </div>
            <div className='grid self-center opacity-30 hover:opacity-100 w-1/3'
              onMouseEnter={() => setIsHoveredBlog(true)}
              onMouseLeave={() => setIsHoveredBlog(false)}
            >
              <div className='flex'>
                <img
                    src={Blog}
                    alt='Logo'
                    width={39}
                    height={39}
                    className=''
                />
                <p className='self-center pl-6'>
                    CHECK OUT OUR BLOG!
                </p>
              </div>
                <a href='/'className='flex pl-16'>
                  BLOG
                  <img
                    src={Arrow_Right} 
                    alt='Arrow'
                    width={28.5}
                    height={0}
                    className='self-center ml-2 pb-9'
                  />
                </a>
                <div className={`w-auto h-0.5 ${isHoveredBlog ? 'bg-orange-400' : 'bg-white'}`}/>
              </div>
          </div>
        </div>
    </section>
  )
}

export default GoTo