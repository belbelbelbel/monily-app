'use client'
import {useEffect} from 'react'
import { FaeturesArray } from '@/constant'
import Image from 'next/image'
import starimg2 from "../public/starimg2.png"
import Aos from 'aos'
import { Instrument_Sans } from 'next/font/google'

const sans = Instrument_Sans({
  weight: '700',
  subsets: ['latin']
})

const Features = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease',
            once: false,
        });
    }, []);

    return (
        <div className={`w-full bg-black md:h-[80%]   lg:h-[76rem] xl:h-[60%] h-[100%] items-center flex justify-center ${sans.className}`}>
            <div className='flex  xl:flex-row flex-col items-center gap-4 bg-black h-[100%] justify-center w-[90%] mx-auto'>
                {
                    FaeturesArray.map((feature, index) => (
                        <div key={index} className={`flex lg:h-[38rem] md:h-[21.5rem] lt:h-[17.7rem] 3xl:h-[40%] xl:h-[60%] h-[12rem] py-4 text-center text-transparent bg-gradient-to-l from-[#1A1B23] via-black to-[#006270] shadow  justify-center lt:px-10 px-6 rounded-[20px] shadow border-2xl  m-4 flex-col items-center gap-2 lt:gap-5 md:gap-4 w-[80%] lt:w-[70%] md:w-[65%] 3xl:w-[30%] xl:w-[27%]`}>
                            <div className="md:w-16 md:h-16 w-12 h-12 md:bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800 flex flex-col items-center justify-center rounded-full bg-black ">
                                <feature.icon className='md:text-3xl xl:text-3xl lg:text-5xl lt:text-[9rem]  text-2xl  text-white bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine ' />
                            </div>
                            <div  data-aos="zoom-out" className='text-white lg:text-3xl xl:text-[1.5rem] 3xl:text-[1.8rem]  lt:text-[2.3rem]  text-xl font-bold '>{feature.title}</div>
                            <div className='text-white lg:text-[1.5rem] xl:text-[0.9rem] 3xl:text-[1rem] lt:text-[1.35rem] text-[0.8rem] w-full'>{feature.description}</div>
                        </div>
                    ))
                }
            </div>
            <div className=''>
                {/* <Image src={starimg}  alt='start1' className='absolute left-0'/> */}
                <Image src={starimg2} alt='start1' className='absolute left-0 ' />
            </div>
        </div>
    )
}
export default Features