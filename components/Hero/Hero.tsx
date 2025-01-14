import React from 'react'
import NavBar from '../Navbar/NavBar'
import HerowriteUp from './HerowriteUp'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='bg-bg-img-1 w-screen h-[100vh] md:bg-cover text-white bg-no-repeat'>
      <div className='w-full h-full absolute bg-opacity-30 bg-black'></div>
      <div className='relative flex  flex-col'>
        <div className='relative'>
          <NavBar />
        </div>
        <div className='relative h-[70%] top-60   flex items-center justify-center'>
          <HerowriteUp />
        </div>
      </div>
    </div>
  )
}

export default Hero