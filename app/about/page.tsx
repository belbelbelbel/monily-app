import NavBar from '@/components/Navbar/NavBar'
import React from 'react'
import {Righteous } from 'next/font/google'


const sans = Righteous({
  subsets: ['latin'],
  weight: '400'
})

export default function AboutPage() {
  return (
    <div className='w-screen bg-bg-img2 bg-no-repeat relative bg-right flex  flex-col text-white  justify-center bg-black h-screen'>
      <div className='absolute w-full h-full bg-black bg-opacity-30'></div>
      <div className='h-[12%] w-full'>
        <NavBar />
      </div>
      <div className='w-[80%] i flex z-50 mx-auto h-[88%] '>
        <div className={`${sans.className} text-[2.5rem] tracking-[1px]`}>About Us</div>
      </div>
    </div>
  )
}