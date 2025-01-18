import React from 'react'
import { Instrument_Sans } from 'next/font/google'
import { Button } from '../ui/button';
const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: "700",
});
const HerowriteUp = () => {
  return (
    <div className='flex items-center gap-4  z-40 relative flex-col'>
      <div className={`${sans.className} text-center md:leading-[5rem]  lt:leading-[5.7rem] md:tracking-[3px] lg:leading-[4rem]  xl:leading-[6.3rem] leading-[3rem]   font-bold text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine lg:text-[3.75rem] 2xl:text-[5.6rem] lt:text-[4.6rem] md:text-[4rem] text-[2.5rem] xl:text-[5rem] xl:w-[60%] w-[90%] lt:w-[78%] md:w-[75%] lg:w-[65%]`}>
        We make crypto clear and simple
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <div className='text-opacity-60 text-center w-[22rem] lt:text-[1.3rem] xl:text-[1rem] lt:w-[30rem]   xl:w-[30rem] md:w-[37rem] text-white'>Buy, sell, and grow your crypto with Monily, the platform dedicated to every trader at every level.</div>
        <div>
        <Button className={`font-bold xl:text-[1.35rem] lg:text-[1.5rem] rounded-[8px] text-[1.03rem] lt:text-[1.75rem] md:text-[1.85rem] bg-gradient-to-r from-[#006270] via-black to-[#006270] p-6 lt:p-10  lg:p-8 xl:py-6 xl:px-6  ${sans.className}`}>Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default HerowriteUp