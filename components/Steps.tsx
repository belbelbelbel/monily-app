import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, text: "Step 1: Gather requirements", image: "/bg-img.png" },
  { id: 2, text: "Step 2: Design the system", image: "/bg-img2.png" },
  { id: 3, text: "Step 3: Develop the system", image: "/bg-img3.png" },
  { id: 4, text: "Step 4: Test the system", image: "/bg-img4.png" },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const index = stepRefs.current.findIndex(
            (ref) => ref === visibleEntry.target
          );
          if (index !== -1 && index !== activeStep) {
            setActiveStep(index);
          }
        }
      },
      { threshold: 0.6 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeStep]);

  return (
    <div className="flex w-screen h-screen overflow-x-hidden">
      {/* Fixed Image Section */}
      <div className="w-[50%] h-screen sticky top-0 flex justify-center items-center bg-gray-900">
        {steps.map((step, index) => (
          <motion.img
            key={step.id}
            src={step.image}
            alt={`Step ${index + 1}`}
            className="absolute max-w-[80%] max-h-[80%] object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: activeStep === index ? 1 : 0,
              scale: activeStep === index ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Scrollable Text Section */}
      {/* <div className="h-screen w-[50%] bg-white overflow-y-auto py-8 px-6 space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className={`text-lg ${
              activeStep === index ? "font-bold text-gray-900" : "text-gray-500"
            }`}
            initial={{ opacity: 0.5, y: 50 }}
            animate={{
              opacity: activeStep === index ? 1 : 0.5,
              y: activeStep === index ? 0 : 50,
            }}
          >
            {step.text}
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default Steps;
