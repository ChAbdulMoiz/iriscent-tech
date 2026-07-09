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
  // Duplicate list to create a seamless infinite loop
  const list = [...techs, ...techs];

  return (
    <section id="stack" className="py-24 border-y border-border/50 bg-muted/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none w-full" />
      
      <div className="ticker-track">
        <div className="flex gap-16 md:gap-24 px-8 md:px-12 items-center">
          {list.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Icon className="w-12 h-12 md:w-16 md:h-16 text-foreground" />
                <span className="text-sm font-medium tracking-wide">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
