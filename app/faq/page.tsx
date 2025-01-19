'use client'
import NavBar from '@/components/Navbar/NavBar'
import { useState } from 'react';
import { accordionData } from '@/constant';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { Instrument_Sans } from 'next/font/google';

const sans = Instrument_Sans({
    subsets: ['latin'],
    weight: '700',
})
export default function faqPage() {
    const [answer, setAnswer] = useState<number | "">("");
    const handleClick = (id: number) => {
        // setAnswer((prevAnswer) => (prevAnswer === id ? "" : id));
        setAnswer(answer === id ? "" : id);
    };
    return (
        <div className='w-screen  h-screen bg-black flex flex-col items-center  justify-center '>
            <div className='h-[15%] w-full'>
                <NavBar />
            </div>
            <div className=' flex relative top-8  items-center justify-center text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine  w-[80%] mx-auto'>
                <div className={`text-[2rem]  ${sans.className}`}>FREQUENTLY ASKED QUESTIONS</div>
            </div>
            <div className='flex items-center h-[80%] w-full  bg-black bg-cover bg-center bg-bg-img-3  justify-center'>
                <div className='bg-black h-[100%] w-[80%] rounded-[7px]  bg-bg-img-3 bg-contain bg-no-repeat shadow text-white text-opacity-80'>
                    <div className='w-[80%] flex flex-col justify-center mx-auto h-full' >
                        {accordionData.map((item) => (
                            <div key={item.id} className='flex flex-col justify-between cursor-pointer' onClick={() => handleClick(item.id)}>
                                <div className='flex items-center justify-between'>
                                    <div className='py-4'>
                                        <h2 className={`font-bold text-[1.4rem]  ${sans.className}`}>{item.question}</h2>
                                    </div>
                                    <div className='cursor-pointer' >
                                        {answer === item.id ? <FaCircleMinus className='text-[#006270]' /> : <FaCirclePlus />}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {answer === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: '4rem' }}
                                            transition={{ duration: 0.5 }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className='relative block'>
                                            <div className={`absolute text-[1rem] w-[80%]  ${sans.className}`}>{item.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}