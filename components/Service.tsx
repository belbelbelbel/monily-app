import React from 'react'
import { Instrument_Sans } from 'next/font/google'
import { Button } from './ui/button'


const sans = Instrument_Sans({
  weight: '700',
  subsets: ['latin']
})
const Service = () => {
  return (
    <div className='w-full md:h-[105rem] h-[45rem] flex flex-col   text-white bg-bg-img-5 bg-no-repeat bg-right-top  bg-black'>
      <div className='flex w-[100%] md:flex-row flex-col justify-center items-center  h-full  bg-top bg-no-repeat bg-cover h-full'>
        <div className='bg-bg-img-4 md:flex hidden  bg-left  h-[100%] w-full   bg-contain bg-no-repeat'>
          {/* <Image src={serviceimg}  className='bg-black w-[20rem] h-[0rem]'  alt='serviceimage' /> */}
        </div>
        <div className='md:w-[100%] w-[80%] text-center md:text-left  gap-4 flex justify-center flex-col    h-full bg-cover mx-auto'>
          <div className={`${sans.className} text-[50px] w-[100%]  md:w-[100%] xl:w-[80%]`}>
            <div className=' leading-[2.5rem]  lt:leading-[3.7rem]  md:leading-[3.85rem] xl:leading-[3.75rem]   xl:text-[3.2rem] text-[1.9rem] lt:text-[3rem]  md:text-[3rem] text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine'>24/7 access to full service customer support</div>
          </div>
          <div className='xl:text-[0.92rem] lt:text-[1.2rem]  text-white text-opacity-70 w-[100%] md:w-[80%]   xl:w-[75%]'>
            <div>We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</div>
          </div>
          <div>
            <Button className={`font-bold xl:text-[1rem] lg:text-[1.5rem] rounded-[8px] text-[1.03rem] lt:text-[1.75rem] md:text-[1.85rem] bg-gradient-to-r from-[#006270] via-black to-[#006270] p-6 lt:p-10  lg:p-8 xl:py-6 xl:px-6  ${sans.className}`}>Get Started</Button>
          </div>
        </div>
      </div>
     <div className='bg-white bg-opacity-20 flex lt:hidden w-full h-[1px]'></div>
      <div className='h-[50%] md:py-0 py-10 text-center gap-4   flex-col justify-center items-center flex w-full '>
        <div className={`${sans.className} xl:w-[50%] md:w-[80%] lt:w-[80%] lt:text-[2.3rem] w-[90%] text-[2rem] xl:text-[3.1rem]  md:text-[3.5rem] text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine `}>Buy and sell with the lowest fees in the industry</div>
        <div className='xl:text-[0.92rem] lt:text-[1.2rem]  text-white text-opacity-70 w-[90%] md:w-[80%]   xl:w-[55%]'>Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</div>
        <div className='h-full w-full flex items-center justify-center'>
          {/* <CryptoDashboard /> */}
        </div>
      </div>

    </div>
  )
}

export default Service