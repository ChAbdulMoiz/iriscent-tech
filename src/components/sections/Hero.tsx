import React from 'react';
import { motion } from 'framer-motion';
import { CloudShape } from '@/components/ui/CloudShape';

export function Hero() {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Background gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-50 bg-gradient-to-tr from-primary/40 via-accent/40 to-secondary/40 pointer-events-none" />

        {/* Wordmark */}
        <div className="relative z-0 text-center px-4">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-foreground"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Iriscent <span className="text-gradient">Tech</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl md:text-3xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A precise, capable engineering studio.
          </motion.p>
        </div>

        {/* Foreground Clouds (Static & Layered for Gradient Border Effect) */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          
          {/* --- LEFT TOP CLOUD --- */}
          <div className="absolute left-[-20%] md:left-[0%] top-[-10%] w-[120vw] md:w-[60vw] h-[70vh]">
            {/* Gradient Glow Outline */}
            <div className="absolute inset-0 scale-[1.82] translate-x-12 blur-[4px] opacity-80 mix-blend-screen">
              <CloudShape fill="url(#iriscent-gradient)" className="w-full h-full" />
            </div>
            {/* Main Cloud Body */}
            <CloudShape fill="hsl(var(--background))" opacity={1} className="w-full h-full scale-[1.8] drop-shadow-2xl translate-x-12" />
          </div>

          {/* --- LEFT BOTTOM CLOUD --- */}
          <div className="absolute left-[-30%] md:left-[-10%] bottom-[-10%] w-[130vw] md:w-[60vw] h-[70vh]">
            {/* Gradient Glow Outline */}
            <div className="absolute inset-0 scale-[2.02] translate-x-24 blur-[4px] opacity-80 mix-blend-screen">
              <CloudShape fill="url(#iriscent-gradient)" className="w-full h-full" />
            </div>
            {/* Main Cloud Body */}
            <CloudShape fill="hsl(var(--background))" opacity={1} className="w-full h-full scale-[2] drop-shadow-2xl translate-x-24" />
          </div>

          {/* --- RIGHT TOP CLOUD --- */}
          <div className="absolute right-[-20%] md:right-[0%] top-[0%] w-[120vw] md:w-[60vw] h-[70vh]">
            {/* Gradient Glow Outline */}
            <div className="absolute inset-0 scale-[1.82] -translate-x-12 rotate-[10deg] blur-[4px] opacity-80 mix-blend-screen">
              <CloudShape fill="url(#iriscent-gradient)" className="w-full h-full" />
            </div>
            {/* Main Cloud Body */}
            <CloudShape fill="hsl(var(--background))" opacity={1} className="w-full h-full scale-[1.8] drop-shadow-2xl -translate-x-12 rotate-[10deg]" />
          </div>

          {/* --- RIGHT BOTTOM CLOUD --- */}
          <div className="absolute right-[-30%] md:right-[-10%] bottom-[-5%] w-[130vw] md:w-[60vw] h-[70vh]">
            {/* Gradient Glow Outline */}
            <div className="absolute inset-0 scale-[2.02] -translate-x-24 -rotate-[5deg] blur-[4px] opacity-80 mix-blend-screen">
              <CloudShape fill="url(#iriscent-gradient)" className="w-full h-full" />
            </div>
            {/* Main Cloud Body */}
            <CloudShape fill="hsl(var(--background))" opacity={1} className="w-full h-full scale-[2] drop-shadow-2xl -translate-x-24 -rotate-[5deg]" />
          </div>

        </div>
      </div>

      {/* Hidden SVG Definition to define the Tech-styled multi-color gradient */}
      <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="iriscent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />   {/* Purple */}
            <stop offset="50%" stopColor="#ec4899" />  {/* Pink */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan/Teal */}
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}