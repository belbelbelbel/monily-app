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
  const navigate = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const handleActiveLocation = (itemHref: string) => {
  //   return location === itemHref
  //     ? `text-white font-extrabold relative before:absolute before:content-[''] 
  //         before:w-[11px] before:h-[11px] before:top-[-16px] before:left-[50%] before:translate-x-[-50%] 
  //         before:bg-gradient-to-r from-[] to-blue-400 before:rounded-full 
  //         before:shadow-[0_0_15px_3px_rgba(138,43,226,0.8)] 
  //         before:animate-flame 
  //         after:absolute after:content-[''] 
  //         after:w after:h-[2px] after:top-8 after:bg-gradient-to-r from-[#006270] via-blue-500 to-purple-600 
  //         after:rounded-full after:transition-all`
  //     : 'text-gray-400 font-medium cursor-pointer xl:text-[1.1rem] lg:text-[1.2rem] hover:text-white transition-colors';
  // };

  const handleActiveLocation = (itemHref: string) => {
    return location === itemHref
      ? `text-white font-extrabold  before:absolute before:content-[''] 
          before:w-[20px] before:h-[50px] before:top-[-15px] before:left-[50%] before:translate-x-[-50%]
          before:bg-gradient-to-b from-[#006270] via-gray-300 to-[#006270]
          before:blur-md before:rounded-full  after:h-[1px] after:w-full transition-all after:bg-white after:absolute after:top-10 after:left-0 after:bg-gradient-to-r from-[#006270] via-gray-300 to-[#006270]`
          
      : 'text-gray-200 font-medium cursor-pointer xl:text-[1.1rem] lg:text-[1.2rem] hover:text-white transition-colors';
  };
  
  


  return (
    <div className='w-full h-full text-white'>
      <div className='w-[85%] flex justify-center mx-auto'>
        <div className={`flex fixed md:w-[90%] w-full px-6 md:px-10 transition-all mt-4 bg-clip-text md:rounded-[0.8rem] rounded-[1.05rem] items-center h-[4.6rem] xl:h-[5rem] justify-between ${isScrolled
          ? "bg-gray-900/80 shadow-md text-white z-50 transition-all backdrop-blur-lg"
          : "bg-transparent z-50"
          }`}>
          <div
            onClick={() => navigate.push('/')}
            className={`tracking-[1.8px] cursor-pointer text-white bg-gradient-to-r from-[#006270] via-yellow-500 to-[#006270] bg-clip-text animate-shine md:text-[1.7rem] lt:text-[2.3rem] text-[1.5rem] 3xl:text-[2rem] xl:text-[1.5rem] px-5 ${inter.className}`}
          >
            Monily
          </div>
          <div className={`flex items-center text-[1.1rem] 3xl:text-[3rem] transaition-all font-bold gap-8 md:flex hidden ${inter.className}`}>
            {NavItems.map((item, index) => (
              <Link href={item.href} key={index}>
                <div
                  className={`relative font-bold ${handleActiveLocation(item.href)}`}
                >
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
          <div className='hidden md:flex'>
            <Button
              size={'lg'}
              className={`${inter.className} ${isScrolled && 'bg-gradient-to-r from-[#006270] via-black to-[#006270] text-white transition-all'} font-bold text-[1.1rem]`}
            >
              Contact
            </Button>
          </div>
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
