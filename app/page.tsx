import Details from "@/components/Details";
import Hero from "../components/Hero/Hero";
import Features from "@/components/Features";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black">
      <Hero/>
      <Features/>
      <Details />
      <Service/>
    </div>
  );
}
