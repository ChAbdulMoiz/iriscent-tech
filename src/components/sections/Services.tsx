import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, TrendingUp } from 'lucide-react';

const pillars = [
  {
    number: "01",
    title: "Custom Software & Engineering",
    icon: <Code2 className="w-6 h-6" />,
    description: "Custom web apps, SaaS platforms, enterprise software, native & cross-platform mobile apps (Flutter, React Native), ERP/CRM implementations, Fintech & e-commerce architectures.",
  },
  {
    number: "02",
    title: "Emerging Technologies",
    icon: <Cpu className="w-6 h-6" />,
    description: "AI/ML (generative AI, predictive analytics, chatbots, fraud detection), Cloud & DevOps (CI/CD, AWS/Azure/GCP migrations), Blockchain & Web3 (smart contracts, dApps), AR/VR & IoT.",
  },
  {
    number: "03",
    title: "Design & Quality",
    icon: <Sparkles className="w-6 h-6" />,
    description: "UI/UX design and research, QA (automated testing, performance diagnostics, cybersecurity audits). Crafting interfaces that feel as good as they function.",
  },
  {
    number: "04",
    title: "Strategy & Growth",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Digital marketing (SEO, PPC, social), IT staff augmentation (dedicated offshore developers), BPO services (technical support, live chat). Scaling your vision beyond code.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 relative z-10 bg-background overflow-hidden">
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
              className="p-10 rounded-[2rem] bg-white/50 border border-border/50 relative overflow-hidden transition-all duration-500 ease-out group hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Rainbow Border Border Overlay Layer */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem] p-[1.5px]"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  MaskComposite: 'exclude',
                }}
              />

              <div className="flex justify-between items-start mb-8">
                {/* Icon Wrapper matching the active theme color map */}
                <div 
                  className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all duration-500"
                  style={{ stroke: 'url(#services-rainbow)' }}
                >
                  <div className="text-muted-foreground group-hover:text-transparent transition-colors duration-300 relative">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {pillar.icon}
                    </div>
                    {pillar.icon}
                  </div>
                </div>

                {/* Micro Number display that turns rainbow on hover */}
                <span 
                  className="text-4xl font-bold font-mono text-muted-foreground/30 transition-all duration-500 group-hover:text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text'
                  }}
                >
                  {pillar.number}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors duration-300">{pillar.title}</h3>
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