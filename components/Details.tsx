import React from 'react'
import { Instrument_Sans } from 'next/font/google'
import starimg2 from "../public/starimg2.png"
import Image from 'next/image'
import { Button } from './ui/button'
const sans = Instrument_Sans({
  weight: '700',
  subsets: ['latin']
})
const Details = () => {


  return (
    <div className={`${sans.className} w-full bg-black bg-bg-img-3  bg-no-repeat bg-cover bg-left   flex-col flex gap-4  items-center justify-center text-white h-[35rem] md:h-[40rem] 3xl:h-[40rem] xl:h-[37rem] lg:h-[47rem]`} >
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"  className='flex flex-col items-center justify-center gap-4 w-full'>
        <div className={`text-center md:tracking-[1px] 2xl:w-[60%] xl:w-[53%] leading-[2.5rem]  lt:leading-[3.7rem] md:leading-[3.92rem] 3xl:leading-[3.9rem] xl:leading-[3.75rem] 2xl:text-[3.6rem] xl:text-[3.2rem] text-[1.7rem] lt:text-[3rem]  md:text-[3.7rem] text-transparent bg-gradient-to-b from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine  ${sans.className}`}>A crypto investment platform that invests in you </div>
        <div className="xl:text-[1rem] 3xl:text-[1.3rem] lt:text-[1.2rem] md:text-[1.4rem] text-center  text-white text-opacity-70 w-[90%] md:w-[80%] 3xl:w-[47%]   xl:w-[43%]">We invest more resources than any other platrom in making sure great support from real people is a click away, whenever you need it.</div>
      </div>
      <div className='absolute right-0'>
        <Image src={starimg2} alt='starimg2' />
      </div>
      <div>
      <Button className={`font-bold xl:text-[1.2rem] w-full xl:w-[11rem] 3xl:text-[1.5rem] lg:text-[1.3rem] rounded-[8px] text-[1.03rem] lt:text-[1.55rem] md:text-[1.65rem] bg-gradient-to-r from-[#006270] via-black to-[#006270] p-6 lt:p-8  lg:p-8 xl:py-6 xl:px-6 3xl:p-8  ${sans.className}`}>Get Started</Button>
      </div>
    </div>
  )
}

export default Details