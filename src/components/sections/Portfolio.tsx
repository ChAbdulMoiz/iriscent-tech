import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CloudShape } from '@/components/ui/CloudShape';

const projects = [
  {
    title: "NovaPay",
    category: "Fintech Architecture",
    description: "A borderless payment gateway handling $5M+ daily volume with sub-second latency.",
    stack: ["Node.js", "React", "PostgreSQL", "AWS"],
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Aura Health",
    category: "Healthcare ERP",
    description: "HIPAA-compliant hospital management system with predictive patient flow analytics.",
    stack: ["Python", "Vue", "Docker", "GCP"],
    color: "from-secondary/20 to-transparent",
  },
  {
    title: "Nexus Bot",
    category: "AI Product",
    description: "Generative AI customer support agent resolving 70% of L1 tickets autonomously.",
    stack: ["OpenAI", "Next.js", "Redis", "Vercel"],
    color: "from-accent/20 to-transparent",
  },
  {
    title: "Lumina Marketplace",
    category: "Web3 dApp",
    description: "Decentralized creative asset exchange powered by smart contracts on Ethereum.",
    stack: ["Solidity", "React", "IPFS", "Hardhat"],
    color: "from-primary/20 to-transparent",
  },
  {
    title: "Wanderlust",
    category: "Mobile App",
    description: "Social travel companion app with offline-first maps and AR landmark recognition.",
    stack: ["Flutter", "Firebase", "TensorFlow Lite"],
    color: "from-secondary/20 to-transparent",
  },
  {
    title: "Metric Flow",
    category: "SaaS Dashboard",
    description: "Real-time B2B analytics platform with customizable data visualization widgets.",
    stack: ["React", "D3.js", "Go", "ClickHouse"],
    color: "from-accent/20 to-transparent",
  }
];

export function Portfolio() {
  const floatAnimation = (duration: number, yDelta: number, delay: number) => ({
    animate: { y: [0, yDelta, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay }
  });

  return (
    <section id="portfolio" className="py-32 px-6 relative z-10 bg-white overflow-hidden">
      
      {/* Background Scattered Small Clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        <motion.div className="absolute top-[15%] left-[5%] w-32 h-20" {...floatAnimation(5, -10, 0)}>
          <CloudShape fill="url(#iriscent-rainbow)" className="w-full h-full blur-[1px]" />
        </motion.div>
        <motion.div className="absolute top-[45%] right-[-5%] w-48 h-28" {...floatAnimation(7, 12, 1)}>
          <CloudShape fill="url(#iriscent-rainbow)" className="w-full h-full blur-[2px]" />
        </motion.div>
        <motion.div className="absolute bottom-[10%] left-[-2%] w-40 h-24" {...floatAnimation(6, -15, 0.5)}>
          <CloudShape fill="url(#iriscent-rainbow)" className="w-full h-full blur-[1px]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            >
              Selected Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-xl"
            >
              We don't build standard templates. Every project is a bespoke solution engineered for scale.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative p-8 rounded-3xl border border-border/50 bg-gradient-to-b ${project.color} bg-white/80 backdrop-blur-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col h-full`}
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>

              <div className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                {project.category}
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-lg mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}