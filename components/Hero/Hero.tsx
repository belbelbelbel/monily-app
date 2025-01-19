'use client'
import React, { useEffect } from 'react'
import NavBar from '../Navbar/NavBar'
import HerowriteUp from './HerowriteUp'
import AOS from 'aos';
const Hero = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);
  return (
    <div  className='bg-bg-img-1   xl:h-[100vh]  md:h-[90vh] lg:h-[92vh] h-[90vh]   bg-black   md:bg-cover text-white bg-no-repeat'>
      <div className='w-full md:h-[90vh] lg:h-[92vh]   xl:h-[100vh] h-[90vh] z-30 absolute md:bg-opacity-60 bg-opacity-70 bg-black'></div>
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