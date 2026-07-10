import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  // Floating animation configuration matching the theme pacing
  const floatAnimation = (duration: number, yDelta: number, delay: number) => ({
    animate: { y: [0, yDelta, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay }
  });

  // Reusable raw SVG cloud outline path
  const CloudOutline = () => (
    <svg viewBox="0 0 100 60" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M 20,45 A 15,15 0 0,1 25,16 A 22,22 0 0,1 65,15 A 18,18 0 0,1 83,30 A 15,15 0 0,1 80,45 Z" 
        fill="none" 
        stroke="url(#footer-rainbow-gradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <footer 
      className="relative pt-32 pb-12 overflow-hidden border-t border-border/40 text-slate-900"
      style={{
        background: 'linear-gradient(135deg, #f9f1f6 0%, #f0ebf4 50%, #eae7f0 100%)'
      }}
    >
      
      {/* Decorative tiny clouds - Repositioned and scaled down to prevent cropping */}
      <div className="absolute top-0 left-0 w-full h-40 pointer-events-none overflow-hidden flex justify-between opacity-70 z-0">
        
        {/* Left Side Transparent Rainbow Cloud */}
        <motion.div 
          className="w-[200px] h-[130px] translate-x-4 top-4 relative blur-[0.5px]"
          {...floatAnimation(6, -6, 0)}
        >
          <CloudOutline />
        </motion.div>
        
        {/* Right Side Transparent Rainbow Cloud */}
        <motion.div 
          className="w-[250px] h-[160px] -translate-x-4 top-2 relative blur-[0.5px]"
          {...floatAnimation(7, 8, 1)}
        >
          <CloudOutline />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Iriscent <span className="text-gradient">Tech</span>
            </h2>
            <p className="text-slate-600 max-w-sm">
              A precise, capable engineering studio building the foundational systems that power modern businesses.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-end">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Founders</h3>
            <ul className="flex flex-col gap-2 md:text-right">
              <li className="font-medium text-slate-800">Chaudhary Abdul Moiz</li>
              <li className="font-medium text-slate-800">Raiha Tufail Chaudhary</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-300/60 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Iriscent Technologies. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">GitHub</a>
          </div>
        </div>
      </div>

      {/* Embedded SVG Rainbow Gradient Definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footer-rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />   {/* Purple */}
            <stop offset="50%" stopColor="#ec4899" />  {/* Pink */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan/Teal */}
          </linearGradient>
        </defs>
      </svg>
    </footer>
  );
}