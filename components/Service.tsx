import React from 'react'
import { Instrument_Sans } from 'next/font/google'
import { Button } from './ui/button'
import Image from 'next/image'
import secureimg from '../public/sercureimg.png'


const sans = Instrument_Sans({
  weight: '700',
  subsets: ['latin']
})
const Service = () => {
  return (
    <div className={`${sans.className} w-full xl:h-[105rem] md:h-[100rem]  lg:h-[105rem]  h-[65rem]  lt:h-[65rem] flex flex-col   text-white bg-bg-img-5 bg-no-repeat bg-right-top  bg-black`} >
      <div className='flex w-[100%] md:flex-row flex-col justify-center items-center  h-full  bg-top bg-no-repeat bg-cover h-full'>
        <div className='bg-bg-img-4 lg:flex hidden  bg-left  h-[100%] w-full   bg-contain bg-no-repeat'>
          {/* <Image src={serviceimg}  className='bg-black w-[20rem] h-[0rem]'  alt='serviceimage' /> */}
        </div>
        <div className='lg:w-[100%] w-[80%] text-center lg:text-left  gap-4 flex justify-center flex-col    h-full bg-cover mx-auto'>
          <div data-aos='zoom-in-left' data-aos-anchor-placement="top-bottom" className={`${sans.className} text-[50px] w-[100%]  lg:w-[100%] xl:w-[80%]`}>
            <div className=' leading-[2.5rem]  lt:leading-[3.7rem]  lg:leading-[3.85rem] xl:leading-[3.75rem]   xl:text-[3.2rem] text-[2rem] lt:text-[3rem]  md:text-[3rem] text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500  tracking-[1px] bg-clip-text animate-shine'>24/7 access to full service customer support</div>
          </div>
          <div className='xl:text-[0.96rem] 3xl:text-[1.3rem] lt:text-[1.2rem]  text-white text-opacity-70 w-[100%] lg:w-[80%]   xl:w-[75%]'>
            <div>We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</div>
          </div>
          <div>
            <Button className={`font-bold xl:w-[12rem] xl:text-[1.3rem] 3xl:text-[1.7rem] lg:text-[1.5rem] rounded-[8px] text-[1.03rem] lt:text-[1.75rem] md:text-[1.85rem] bg-gradient-to-r from-[#006270] via-black to-[#006270] p-6 lt:p-8  lg:p-8 xl:py-6 xl:px-6 3xl:p-8  ${sans.className}`}>Get Started</Button>
          </div>
        </div>
      </div>
      {/* <div className='bg-white bg-opacity-20 flex lt:hidden w-full h-[1px]'></div> */}
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='lt:h-[50%] h-[60vh] lg:py-0 py-60  text-center gap-4   flex-col justify-center items-center flex w-full '>
        <div  className={`${sans.className} xl:w-[50%] lg:w-[80%] lt:w-[90%] lt:text-[2.9rem] w-[90%] text-[2rem] xl:text-[3.1rem]   md:text-[3.5rem] text-transparent bg-gradient-to-r from-[#006270] via-gray-300 tracking-[1px] to-blue-500 bg-clip-text animate-shine `}>Buy and sell with the lowest fees in the industry</div>
        <div className='xl:text-[1rem]   lt:text-[1.2rem]   text-white text-opacity-70 w-[90%] md:w-[75%] lg:w-[80%]    xl:w-[40%]'>Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</div>
        <div className='h-full w-full flex items-center justify-center'>
          {/* <CryptoDashboard /> */}
        </div>
      </div>
      <div className='w-full lg:h-[100%] lt:h-[125rem]  xl:py-0 py-10 h-screen bg-no-repeat text-white bg-black lg:bg-bg-img-7  bg-no-repeat bg- bg-right'>
        <div className='flex h-full  w-[84%] lg:flex-row flex-col  mx-auto justify-between items-center '>
          <div data-aos='zoom-in-left' data-aos-anchor-placement="top-bottom" className='flex w-full items-center  xl:items-start flex-col gap-3 '>
            <div className={`${sans.className}  text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine font-bold xl:tracking-[1px] lg:text-left text-center lt:text-[2rem] text-[1.6rem] xl:text-[2rem] md:text-[3.3rem] xl:text-[2.8rem]  w-full lg:w-[45%]`}>Take your first step into safe, secure crypto investing</div>
            <div className={`${sans.className} xl:w-[50%] w-full text-[0.9rem] lg:text-[1.1rem] text-center xl:text-left  text-white text-opacity-[0.7]`}>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast.</div>
            <Button className={`font-bold xl:text-[1.3rem] 3xl:text-[1.7rem] xl:w-[12rem] lg:text-[1.5rem] rounded-[8px] text-[1.03rem] lt:text-[1.75rem] lg:text-[1.85rem] bg-gradient-to-r from-[#006270] via-black to-[#006270] p-6 lt:p-8  lg:p-8 xl:py-6 xl:px-6 3xl:p-8  ${sans.className}`}>Get Started</Button>
          </div>
          <div className='absolute hidden lg:flex right-0'>
            <Image alt='secureimg' src={secureimg}/>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Service