import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Trash2 } from 'lucide-react';

const availableServices = [
  "Custom Web Apps",
  "Native Mobile Apps",
  "ERP/CRM Implementation",
  "Generative AI & Chatbots",
  "Cloud Migration (AWS/GCP)",
  "Smart Contracts & Web3",
  "UI/UX Design",
  "QA & Security Audits",
  "Digital Marketing (SEO/PPC)",
  "IT Staff Augmentation"
];

export function StartProject() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const removeService = (service: string) => {
    setSelectedServices(prev => prev.filter(s => s !== service));
  };

  return (
    <section id="start-project" className="py-32 px-6 relative z-10 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Start a Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your service package. Select what you need, tell us about your vision, and we'll engineer the solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Service Selector (Left Column) */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">1</span>
              Select Services
            </h3>
            <div className="flex flex-wrap gap-3">
              {availableServices.map((service) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isSelected 
                        ? 'bg-primary text-white border-primary shadow-md transform -translate-y-1' 
                        : 'bg-white text-foreground border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4" />}
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Checkout/Order Form (Right Column) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden">
              {/* Decorative blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
              
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-secondary/30 text-secondary-foreground flex items-center justify-center text-sm">2</span>
                Order Details
              </h3>

              {/* Founder: REPLACE THIS EMAIL WITH YOUR ACTUAL EMAIL ADDRESS */}
              <form 
                action="https://formsubmit.co/moiz04697@gmail.com" 
                method="POST"
                className="flex flex-col gap-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Project Inquiry - Iriscent Tech" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="Selected_Services" value={selectedServices.join(', ') || 'None selected'} />

                {/* Service Cart Summary */}
                <div className="bg-white/60 rounded-xl p-5 border border-border/50">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Your Service Cart</h4>
                  <AnimatePresence>
                    {selectedServices.length === 0 ? (
                      <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        className="text-sm text-muted-foreground italic"
                      >
                        No services selected yet.
                      </motion.p>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {selectedServices.map(service => (
                          <motion.div 
                            key={service}
                            initial={{ opacity: 0, height: 0, scale: 0.9 }}
                            animate={{ opacity: 1, height: 'auto', scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.9 }}
                            className="flex items-center justify-between bg-white px-4 py-2.5 rounded-lg border border-border/50 text-sm font-medium"
                          >
                            <span>{service}</span>
                            <button 
                              type="button" 
                              onClick={() => removeService(service)}
                              aria-label={`Remove ${service} from cart`}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Client Details */}
                <div className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground">Project Details</label>
                    <textarea 
                      id="message"
                      name="Message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                      placeholder="Tell us about your timeline, budget, and specific requirements..."
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-foreground text-background font-semibold text-lg hover:bg-primary transition-colors duration-300 mt-2 hover-elevate"
                >
                  Submit Order Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
