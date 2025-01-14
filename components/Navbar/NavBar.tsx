'use client'
import React, { useEffect, useState } from 'react'
import { Instrument_Sans } from 'next/font/google'
import { NavItems } from '@/constant';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

type Props = {}

const inter = Instrument_Sans({
  subsets: ["latin"],
  weight: "700",
});

const NavBar = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();

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
    return location === itemHref ? 'text-black font-extrabold' : 'text-black font-medium';
};

  return (
    <div className='w-full  text-white'>
      <div className='w-[85%]  flex  justify-center mx-auto'>
        <div className={`flex fixed w-[90%] px-10   mt-4 md:rounded-[0.8rem]  bg-clip-text  items-center h-[5rem] justify-between ${isScrolled
          ? "bg-gray-200/50 shadow-md text-white  z-50 transition-all backdrop-blur-md"
          : "bg-gray-200 md:bg-transparent  z-50"
          }`}>
          <div className={`tracking-[1.8px]  text-white bg-gradient-to-r from-[#006270] via-yellow-500 to-[#006270] bg-clip-text animate-shine md:text-[1.7rem] xl:text-[1.5rem] px-5 ${inter.className}`}>MONILY</div>
          <div className={`flex items-center  font-bold gap-8 md:flex hidden ${inter.className}`}>
            {NavItems.map((item, index) => (
              <div
                key={index}
                className={` font-medium cursor-pointer xl:text-[1.1rem] lg:text-[1.2rem]   text-white ${handleActiveLocation(item)}`}
              >
                {item.toUpperCase()}
              </div>
            ))}
          </div>
          <div>
            <Button size={'lg'} className={`${inter.className} ${isScrolled && 'bg-white  text-black transition-all' } font-bold text-[1.1rem]`}>CONTACT</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar