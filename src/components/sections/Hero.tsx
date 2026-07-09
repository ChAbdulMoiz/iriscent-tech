import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CloudShape } from '@/components/ui/CloudShape';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Clouds part very quickly (by 15% scroll) and travel far enough to fully
  // clear the name (not just slide partway off), then the revealed name gets
  // a short, comfortable dwell before releasing straight into Services.
  const leftX = useTransform(scrollYProgress, [0, 0.15], ["0%", "-220%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.15], ["0%", "220%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[160vh] w-full overflow-hidden bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-50 bg-gradient-to-tr from-primary/40 via-accent/40 to-secondary/40 pointer-events-none" />

        {/* Wordmark (Behind clouds) */}
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

        {/* Foreground Clouds */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
          style={{ opacity }}
        >
          {/* Left Side Clouds - positioned to cover the left half of text initially */}
          <motion.div 
            className="absolute left-[-20%] md:left-[0%] top-[-10%] w-[120vw] md:w-[60vw] h-[70vh]"
            style={{ x: leftX }}
          >
            <CloudShape fill="hsl(var(--background))" opacity={1} className="w-full h-full scale-[1.8] drop-shadow-2xl translate-x-12" />
            <CloudShape fill="hsl(var(--accent)/0.3)" opacity={0.6} className="absolute inset-0 w-full h-full scale-150 translate-y-12 translate-x-4 blur-2xl" />
          </motion.div>

          <motion.div 
            className="absolute left-[-30%] md:left-[-10%] bottom-[-10%] w-[130vw] md:w-[60vw] h-[70vh]"
            style={{ x: leftX }}
          >
            <CloudShape fill="hsl(var(--background))" opacity={1} className="w-full h-full scale-[2] drop-shadow-2xl translate-x-24" />
            <CloudShape fill="hsl(var(--primary)/0.3)" opacity={0.6} className="absolute inset-0 w-full h-full scale-150 translate-x-12 -translate-y-8 blur-2xl" />
          </motion.div>

          {/* Right Side Clouds - positioned to cover the right half of text initially */}
          <motion.div 
            className="absolute right-[-20%] md:right-[0%] top-[0%] w-[120vw] md:w-[60vw] h-[70vh]"
            style={{ x: rightX }}
          >
            <CloudShape fill="hsl(var(--background))" opacity={1} className="w-full h-full scale-[1.8] drop-shadow-2xl -translate-x-12 rotate-[10deg]" />
            <CloudShape fill="hsl(var(--secondary)/0.3)" opacity={0.6} className="absolute inset-0 w-full h-full scale-150 translate-y-10 -translate-x-4 blur-2xl" />
          </motion.div>

          <motion.div 
            className="absolute right-[-30%] md:right-[-10%] bottom-[-5%] w-[130vw] md:w-[60vw] h-[70vh]"
            style={{ x: rightX }}
          >
            <CloudShape fill="hsl(var(--background))" opacity={1} className="w-full h-full scale-[2] drop-shadow-2xl -translate-x-24 -rotate-[5deg]" />
            <CloudShape fill="hsl(var(--accent)/0.2)" opacity={0.6} className="absolute inset-0 w-full h-full scale-150 -translate-x-12 translate-y-8 blur-2xl" />
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 text-muted-foreground"
          style={{ opacity }}
        >
          <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
