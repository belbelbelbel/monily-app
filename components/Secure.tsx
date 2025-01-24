import React from 'react'
import { Instrument_Sans } from 'next/font/google'
import { Button } from './ui/button'

const sans = Instrument_Sans({
    weight: '700',
    subsets: ['latin']
})
export default function Secure() {

    return (
        <div className='w-screen md:h-[50vh] h-screen bg-no-repeat text-white bg-contain bg-black bg-right bg-bg-img-7'>
            <div className='flex h-full w-[84%] mx-auto justify-start items-center '>
                <div data-aos='zoom-in-left' data-aos-anchor-placement="top-bottom"  className='flex flex-col gap-3 '>
                    <div className={`${sans.className} text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine font-bold tracking-[1px] text-[2.8rem] w-[45%]`}>Take your first step into safe, secure crypto investing</div>
                    <div className={`${sans.className}  w-[50%] text-[0.8rem] text-white text-opacity-[0.7]`}>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast.</div>
                </div>
                <div>
                <Button className={`font-bold xl:text-[1.3rem] 3xl:text-[1.7rem] lg:text-[1.5rem] rounded-[8px] text-[1.03rem] lt:text-[1.75rem] md:text-[1.85rem] bg-gradient-to-r from-[#006270] via-black to-[#006270] p-6 lt:p-10  lg:p-8 xl:py-6 xl:px-6 3xl:p-8  ${sans.className}`}>Get Started</Button>
                </div>
            </div>
        </div>
    )
}