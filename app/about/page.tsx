import NavBar from '@/components/Navbar/NavBar'
import React from 'react'
import { Righteous } from 'next/font/google'


const sans = Righteous({
  subsets: ['latin'],
  weight: '400'
})

export default function AboutPage() {
  return (
    <div className='w-screen bg-bg-img2 bg-no-repeat relative bg-right flex   flex-col text-white  justify-center bg-black h-screen'>
      <div className='absolute w-full h-full bg-black  bg-opacity-30'></div>
      <div className='h-[12%] w-full'>
        <NavBar />
      </div>
      <div className='w-[82%] flex-col flex z-40 mx-auto h-[88%] '>
        <div className='  tracking-[1px] text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine'>
          <div className={`${sans.className} text-[2.5rem] tracking-[1px]`}>About Us</div>
        </div>
        <div className=''>Empowering Seamless Crypto-to-Fiat Transactions
          At Monily, we’re transforming the way you bridge the gap between digital and traditional currencies. Founded on the principles of innovation, security, and accessibility, our mission is to simplify the complex world of cryptocurrency by offering a seamless, secure, and fast solution to convert your crypto assets into fiat currencies.</div>
      </div>
    </div>
  )
}