import React from 'react'
import { HiOutlineArrowsRightLeft } from "react-icons/hi2"
import { FaeturesArray } from '@/constant'
type Props = {}

const Features = (props: Props) => {
    return (
        <div className='w-full bg-black h-[60%] items-center flex justify-center'>
            <div className='flex items-center bg-black h-[100%] justify-center w-[90%] mx-auto'>
                {
                    FaeturesArray.map((feature, index) => (
                        <div key={index} className={`flex w-[25%] h-[63%] text-center text-transparent bg-gradient-to-b from-[#1A1B23] via-black to-[#006270] shadow  justify-center px-10 rounded-[20px] shadow border-2xl  m-4 flex-col items-center gap-4 w-[25%]`}>
                            <div className="w-16 h-16 bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800 flex flex-col items-center justify-center rounded-full bg-black ">
                                <feature.icon className='text-3xl text-white bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine ' />
                            </div>
                            <div className='text-white text-2xl font-bold '>{feature.title}</div>
                            <div className='text-white text-[0.9rem] '>{feature.description}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Features