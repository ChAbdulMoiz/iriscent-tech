import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { CloudShape } from '@/components/ui/CloudShape';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  // Founders: Change this placeholder password
  const ADMIN_PASSWORD = "iris"; 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden px-4">
      {/* Background Clouds */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <CloudShape fill="hsl(var(--primary))" className="absolute top-[-10%] left-[-10%] w-[50vw] blur-3xl opacity-50" />
        <CloudShape fill="hsl(var(--accent))" className="absolute bottom-[-10%] right-[-10%] w-[60vw] blur-3xl opacity-50" />
      </div>

      <div className="absolute top-8 left-8 z-20">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Site</span>
        </Link>
      </div>

      <AnimatePresence mode="wait">
        {!isAuthenticated ? (
          <motion.div 
            key="login"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            className="w-full max-w-md"
          >
            <div className="glass-panel p-10 rounded-[2rem] text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Lock className="w-8 h-8 text-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Admin Portal</h1>
              <p className="text-muted-foreground mb-8">Enter the master key to access.</p>

              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className={`w-full bg-white/80 border ${error ? 'border-destructive ring-2 ring-destructive/20' : 'border-border'} rounded-xl px-4 py-3 text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  />
                  <AnimatePresence>
                    {error && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-destructive text-sm mt-2 font-medium"
                      >
                        Incorrect password.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-primary transition-colors duration-300"
                >
                  Unlock
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl"
          >
            <div className="glass-panel p-12 rounded-[2.5rem] text-center relative z-10 border-primary/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] -z-10" />
              
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                <Mail className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Check your inbox.</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
                Iriscent Tech is a fully static architecture. Since there is no database, all new project inquiries are routed directly and securely to your configured email address via FormSubmit.
              </p>
              
              <div className="inline-flex flex-col bg-white/60 rounded-2xl p-6 border border-border/50 text-left w-full max-w-md">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">How to update email routing</h4>
                <ol className="text-sm text-foreground flex flex-col gap-3 list-decimal list-inside">
                  <li>Open <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">src/components/sections/StartProject.tsx</code></li>
                  <li>Locate the <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">action</code> attribute on the form</li>
                  <li>Replace <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">moiz04697@gmail.com</code> with your actual email</li>
                  <li>Approve the first test email sent by FormSubmit</li>
                </ol>
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => setIsAuthenticated(false)}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  Lock & Exit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
