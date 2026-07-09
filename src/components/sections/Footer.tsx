import React from 'react';
import { motion } from 'framer-motion';
import { CloudShape } from '@/components/ui/CloudShape';

export function Footer() {
  return (
    <footer className="relative bg-background pt-32 pb-12 overflow-hidden border-t border-border/50">
      {/* Decorative tiny clouds */}
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none overflow-hidden flex justify-between opacity-30">
        <CloudShape fill="hsl(var(--primary))" className="w-[300px] -translate-x-1/2 -translate-y-1/2" />
        <CloudShape fill="hsl(var(--accent))" className="w-[400px] translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Iriscent <span className="text-gradient">Tech</span>
            </h2>
            <p className="text-muted-foreground max-w-sm">
              A precise, capable engineering studio building the foundational systems that power modern businesses.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-end">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Founders</h3>
            <ul className="flex flex-col gap-2 md:text-right">
              <li className="font-medium text-foreground">Chaudhary Abdul Moiz</li>
              <li className="font-medium text-foreground">Raiha Tufail Chaudhary</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/60 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Iriscent Technologies. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
