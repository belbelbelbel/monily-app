'use client'
import React, { useEffect, useState } from 'react'
import { Instrument_Sans } from 'next/font/google'
import { NavItems } from '@/constant';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import Hamburger from './Hamburger';
import Link from 'next/link';

const inter = Instrument_Sans({
  subsets: ["latin"],
  weight: "700",
});

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();
  const navigte = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleActiveLocation = (itemHref: string) => {
    return location === itemHref ? 'text-green-400 font-extrabold' : 'text-white font-medium cursor-pointer xl:text-[1.1rem] lg:text-[1.2rem]';
  };

  console.log(location)

  return (
    <div className='w-full  text-white'>
      <div className='w-[85%]  flex  justify-center mx-auto'>
        <div className={`flex fixed w-[90%] md:px-10    mt-4 md:rounded-[0.8rem]  bg-clip-text  items-center h-[5rem] justify-between ${isScrolled
          ? "bg-gray-200/50 shadow-md text-white  z-50 transition-all backdrop-blur-md"
          : "bg-gray-200 md:bg-transparent  z-50"
          }`}>
          <div onClick={() => navigte.push('/')} className={`tracking-[1.8px]  cursor-pointer text-white bg-gradient-to-r from-[#006270] via-yellow-500 to-[#006270] bg-clip-text animate-shine md:text-[1.7rem] lt:text-[2.3rem] text-[1.5rem] xl:text-[1.5rem] px-5 ${inter.className}`}>MONILY</div>
          <div className={`flex items-center  font-bold gap-8 md:flex hidden ${inter.className}`}>
            {NavItems.map((item, index) => (
              <Link href={item.href} key={index}>
                <div
                  key={index}
                  className={` ${handleActiveLocation(item.href)}`}
                >
                  {item.title.toUpperCase()}
                </div>
              </Link>
            ))}
          </div>
          <div className='hidden md:flex'>
            <Button size={'lg'} className={`${inter.className} ${isScrolled && '  bg-gradient-to-r from-[#006270] via-black to-[#006270]  text-white transition-all'} font-bold text-[1.1rem]`}>CONTACT</Button>
          </div>
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar