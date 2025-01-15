import React from 'react'
import { Instrument_Sans, Open_Sans } from 'next/font/google'
import { Button } from '../ui/button';
type Props = {}

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: "700",
});
const HerowriteUp = (props: Props) => {
  return (
    <div className='flex items-center  z-40 relative flex-col'>
      <div className={`${sans.className} text-center md:leading-[6.6rem] leading-[3rem]  font-bold text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine lg:text-[4rem] 2xl:text-[5.6rem] md:text-[4rem] text-[2rem] xl:text-[5rem] xl:w-[60%] lg:w-[50%]`}>
        We make crypto clear and simple
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <div className='text-opacity-60 text-center  md:w-[30rem] text-white'>Buy, sell, and grow your crypto with Monily, the platform dedicated to every trader at every level.</div>
        <div>
          <Button  className={`font-bold text-[1.2rem] bg-gradient-to-r from-[#006270] via-black to-[#006270] p-6  ${sans.className}`}>Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default HerowriteUp