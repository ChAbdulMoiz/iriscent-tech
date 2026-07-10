import React from 'react';
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiFlutter, 
  SiTailwindcss,
  SiPostgresql,
  SiKubernetes,
  SiGooglecloud,
  SiDocker,
  SiFigma,
  SiEthereum
} from 'react-icons/si';

const techs = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiKubernetes, name: "Kubernetes" },
  { icon: SiGooglecloud, name: "GCP" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiEthereum, name: "Web3" },
];

export function TechStack() {
  const list = [...techs, ...techs];

  return (
    <section id="stack" className="py-24 border-y border-border/50 bg-muted/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none w-full" />
      
      <div className="ticker-track">
        <div className="flex gap-16 md:gap-24 px-8 md:px-12 items-center">
          {list.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div 
                key={i} 
                className="flex flex-col items-center gap-3 opacity-75 hover:opacity-100 transition-all duration-300 group hover:scale-105"
              >
                {/* The main outer container determining icon size */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  
                  {/* Default State Wrapper (Handles styling instead of the icon tag) */}
                  <div className="w-full h-full text-foreground/40 group-hover:opacity-0 transition-opacity duration-300">
                    <Icon size="100%" />
                  </div>
                  
                  {/* Rainbow State Wrapper (Handles styling and applies the SVG fill map) */}
                  <div 
                    className="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ fill: 'url(#ticker-rainbow-gradient)' }}
                  >
                    <Icon size="100%" />
                  </div>
                </div>

                <span className="text-sm font-medium tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hidden SVG Gradient Definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ticker-rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}