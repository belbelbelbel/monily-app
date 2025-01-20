'use client'
import NavBar from '@/components/Navbar/NavBar';
import { useState } from 'react';
import { accordionData } from '@/constant';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import { Instrument_Sans } from 'next/font/google';

const sans = Instrument_Sans({
    subsets: ['latin'],
    weight: '700',
});

export default function FaqPage() { 
    const [answer, setAnswer] = useState<number | "">("");
    const handleClick = (id: number) => {
        setAnswer(answer === id ? "" : id);
    };
    return (
        <div className='w-screen h-screen bg-black flex flex-col items-center justify-cen'>
            <div className='h-[15%] w-full'>
                <NavBar />
            </div>
            <div className='flex relative top-8 items-center lt:justify-center  text-transparent bg-gradient-to-r from-[#006270] via-gray-300 to-blue-500 bg-clip-text animate-shine lt:w-[80%] w-[90%] mx-auto'>
                <div className={`lt:text-[2rem] text-[1.4rem] ${sans.className}`}>FREQUENTLY ASKED QUESTIONS</div>
            </div>
            <div className='flex items-center h-[33rem] lt:h-[40rem] xl:h-[80%] w-full bg-black bg-cover bg-center bg-bg-img-3 justify-center'>
                <div className='bg-black lt:h-[100%]  md:w-[80%] w-full rounded-[7px] bg-bg-img-3 bg-contain bg-no-repeat shadow text-white text-opacity-80'>
                    <div className='md:w-[80%] w-[90%] flex flex-col md:gap-4 xl:gap-0 justify-center mx-auto h-full'>
                        {accordionData.map((item) => (
                            <div key={item.id} className='flex flex-col justify-between cursor-pointer' onClick={() => handleClick(item.id)}>
                                <div className='flex items-center justify-between'>
                                    <div className='py-4'>
                                        <h2 className={`font-bold lt:text-[1.6rem] text-[0.9rem] md:text-[1.4rem]  ${sans.className}`}>{item.question}</h2>
                                    </div>
                                    <div className='cursor-pointer'>
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
                                            <div className={`absolute xl:text-[1rem] lt:text-[1.1rem] w-[90%] md:w-[80%] text-[0.8rem] text-gray-300 ${sans.className}`}>{item.answer}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
