'use client'
import React from 'react'
import NavBar from '../Navbar/NavBar'
import HerowriteUp from './HerowriteUp'

const Hero = () => {
  return (
    <div data-aos="fade-up" className='bg-bg-img-1   xl:h-[100vh]  md:h-[90vh] lg:h-[92vh] h-[90vh]   bg-black  bg-cente  md:bg-cover text-white bg-no-repeat'>
      <div className='w-full md:h-[90vh] lg:h-[92vh]   xl:h-[100vh] h-[90vh] z-30 absolute md:bg-opacity-60 bg-opacity-80 bg-black'></div>
      <div className='relative flex   h-full flex-col'>
        <div className='relative'>
          <NavBar />
        </div>
        <div className='h-[100vh]  flex-col flex items-center justify-center'>
          <HerowriteUp />
        </div>
      </div>
    </div>
  )
}

export default Hero