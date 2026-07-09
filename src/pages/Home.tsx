import React from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { TechStack } from '@/components/sections/TechStack';
import { StartProject } from '@/components/sections/StartProject';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <TechStack />
      <StartProject />
      <Footer />
    </main>
  );
}
