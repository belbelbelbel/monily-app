import React from 'react'
import { Instrument_Sans } from 'next/font/google'
type Props = {}

const sans = Instrument_Sans({
    subsets: ["latin"],
    weight: "700",
  });
const HerowriteUp = (props: Props) => {
  return (
    <div className={`${sans.className} text-center font-bold text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine text-[5.6rem] w-[50%]`}>
        We make crypto clear and simple
    </div>
  )
}

export default HerowriteUp