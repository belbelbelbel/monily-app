
import React from 'react'
import { Instrument_Sans } from 'next/font/google'
import { Button } from '../ui/button';
const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: "700",
});
const HerowriteUp = () => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={` ${sans.className} flex items-center gap-4  z-40 relative flex-col`}>
      <div  className={`${sans.className} text-center md:leading-[5rem]  lt:leading-[5.7rem] md:tracking-[3px] lg:leading-[5rem]  xl:leading-[6.0rem] leading-[3rem]   font-bold text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine lg:text-[4.75rem] 2xl:text-[5rem] lt:text-[4rem] md:text-[4rem] text-[2.5rem] xl:text-[4.5rem] xl:w-[60%] w-[90%] lt:w-[78%] md:w-[85%] lg:w-[75%]`}>
        We make crypto clear and simple
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <div className='text-opacity-60 text-center w-[22rem] lt:text-[1.3rem] xl:text-[1.2rem] 3xl:text-[1.5rem] lt:w-[34rem] 3xl:w-[35rem]  xl:w-[30rem] md:w-[37rem] text-white'>Buy, sell, and grow your crypto with Monily, the platform dedicated to every trader at every level.</div>
        <div>
        <Button className={`font-bold xl:text-[1.2rem] w-full xl:w-[11rem] 3xl:text-[1.5rem] lg:text-[1.3rem] rounded-[8px] text-[1.03rem] lt:text-[1.55rem] md:text-[1.65rem] bg-gradient-to-r from-[#006270] via-black to-[#006270] p-6 lt:p-8  lg:p-8 xl:py-6 xl:px-6 3xl:p-8  ${sans.className}`}>Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default HerowriteUp