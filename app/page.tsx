'use client'
import Details from "@/components/Details";
import Hero from "../components/Hero/Hero";
import Features from "@/components/Features";
import Service from "@/components/Service";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="h-screen w-screen bg-black">
      <Hero />
      <Features />
      <Details />
      <Service />
      {/* <Secure/> */}
      {/* <Steps/> */}
    </div>
  );
}
