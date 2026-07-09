import React, { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Capabilities', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Stack', href: '#stack' },
  { label: 'Start a Project', href: '#start-project' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight text-foreground">
          Iriscent <span className="text-gradient">Tech</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#start-project"
          className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
