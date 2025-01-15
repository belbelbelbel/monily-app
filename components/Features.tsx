'use client'
import {useEffect} from 'react'
import { HiOutlineArrowsRightLeft } from "react-icons/hi2"
import { FaeturesArray } from '@/constant'
import Image from 'next/image'
import starimg from "../public/starimg.png"
import starimg2 from "../public/starimg2.png"
import Aos from 'aos'
type Props = {}

const Features = (props: Props) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease',
            once: false,
        });
    }, []);

    return (
        <div className='w-full bg-black md:h-[60%] h-[100%] items-center flex justify-center'>
            <div className='flex  md:flex-row flex-col items-center gap-4 bg-black h-[100%] justify-center w-[90%] mx-auto'>
                {
                    FaeturesArray.map((feature, index) => (
                        <div key={index} className={`flex md:h-[53%] h-[40%]  text-center text-transparent bg-gradient-to-l from-[#1A1B23] via-black to-[#006270] shadow  justify-center px-10 rounded-[20px] shadow border-2xl  m-4 flex-col items-center gap-2 md:gap-4 w-[80%] xl:w-[25%]`}>
                            <div className="md:w-16 md:h-16 w-12 h-12 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800 flex flex-col items-center justify-center rounded-full bg-black ">
                                <feature.icon className='md:text-3xl text-2xl text-white bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine ' />
                            </div>
                            <div  data-aos="zoom-out" className='text-white md:text-2xl text-xl font-bold '>{feature.title}</div>
                            <div className='text-white text-[0.8rem] '>{feature.description}</div>
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