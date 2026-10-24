'use client';

import { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Writing', href: '#writing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`docked full-width top-0 sticky z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-subtle-border shadow-lg shadow-black/20'
          : 'bg-background/90 backdrop-blur-sm border-subtle-border/60'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-[1280px] mx-auto h-16">
        {/* Brand & Active Status Badge */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-base md:text-lg font-semibold tracking-tight text-on-background hover:text-accent-lime transition-colors flex items-center gap-2 group"
          >
            <span>{portfolioData.personal.name}</span>
          </a>

          {portfolioData.personal.availableForWork && (
            <div className="hidden lg:flex items-center gap-2 pl-3 ml-2 border-l border-subtle-border">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
              </span>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-wider">
                {portfolioData.personal.statusText}
              </span>
            </div>
          )}
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-secondary-text hover:text-accent-lime transition-colors duration-150 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-accent-lime text-surface-canvas text-xs font-semibold px-4 py-2 rounded font-mono uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all duration-100 ease-out shadow-sm"
          >
            Let&apos;s Talk
          </a>

          <a
            href="https://github.com/KaushalVasava"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 flex items-center justify-center rounded border border-subtle-border text-secondary-text hover:text-accent-lime hover:border-accent-lime/50 transition-all bg-card-surface/40"
          >
            <Terminal className="w-4 h-4" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded border border-subtle-border text-secondary-text hover:text-accent-lime transition-colors focus:ring-1 focus:ring-accent-lime"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card-surface/98 backdrop-blur-xl border-b border-subtle-border px-4 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-secondary-text hover:text-accent-lime transition-colors py-1 flex items-center justify-between border-b border-subtle-border/40 pb-2"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-subtle-border" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center bg-accent-lime text-surface-canvas font-semibold text-xs py-3 rounded font-mono uppercase tracking-wider"
              >
                Let&apos;s Talk
              </a>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-secondary-text">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
                </span>
                <span>{portfolioData.personal.statusText}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
