import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, TrendingUp } from 'lucide-react';

const pillars = [
  {
    title: "Custom Software & Engineering",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    description: "Custom web apps, SaaS platforms, enterprise software, native & cross-platform mobile apps (Flutter, React Native), ERP/CRM implementations, Fintech & e-commerce architectures.",
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "Emerging Technologies",
    icon: <Cpu className="w-6 h-6 text-secondary" />,
    description: "AI/ML (generative AI, predictive analytics, chatbots, fraud detection), Cloud & DevOps (CI/CD, AWS/Azure/GCP migrations), Blockchain & Web3 (smart contracts, dApps), AR/VR & IoT.",
    color: "bg-secondary/10 border-secondary/20",
  },
  {
    title: "Design & Quality",
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    description: "UI/UX design and research, QA (automated testing, performance diagnostics, cybersecurity audits). Crafting interfaces that feel as good as they function.",
    color: "bg-accent/10 border-accent/20",
  },
  {
    title: "Strategy & Growth",
    icon: <TrendingUp className="w-6 h-6 text-destructive" />,
    description: "Digital marketing (SEO, PPC, social), IT staff augmentation (dedicated offshore developers), BPO services (technical support, live chat). Scaling your vision beyond code.",
    color: "bg-destructive/10 border-destructive/20",
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "300px" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "300px" }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            Four pillars of engineering excellence. We don't just write code; we build the foundational systems that power modern businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "300px" }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[2rem] border ${pillar.color} glass-panel hover:-translate-y-2 transition-transform duration-500 ease-out`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
