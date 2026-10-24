'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Layers,
  ExternalLink,
  Mail,
  MapPin,
  Star,
  DownloadCloud,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="relative pt-12 md:pt-16 pb-0 border-b border-subtle-border/60 overflow-hidden">
        {/* Background Subtle Tech Grid */}
        <div className="absolute inset-0 tech-grid-pattern opacity-25 pointer-events-none" />

        {/* Ambient Radial Gradient Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 md:pb-16">
            {/* Left Column: Headline, Bio & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              {/* Availability Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-subtle-border text-xs">
                <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                <span className="font-mono text-[11px] text-primary-text uppercase tracking-wider font-medium">
                  {personal.statusText}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-primary-text leading-[1.12]">
                {personal.headline}{' '}
                <span className="text-accent-lime underline decoration-subtle-border underline-offset-8">
                  {personal.headlineHighlight}
                </span>
                .
              </h1>

              {/* Bio */}
              <p className="text-sm sm:text-base md:text-lg text-secondary-text max-w-2xl leading-relaxed">
                {personal.bio}
              </p>

              {/* Core Specialties Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-container border border-subtle-border text-secondary">
                  ANDROID
                </span>
                <span className="text-subtle-border">•</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-container border border-subtle-border text-secondary">
                  KOTLIN MULTIPLATFORM
                </span>
                <span className="text-subtle-border">•</span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-container border border-subtle-border text-secondary">
                  REACT NATIVE
                </span>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                {/* Primary CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent-lime text-surface-canvas font-mono text-xs font-semibold px-5 py-3.5 rounded hover:brightness-110 active:scale-95 transition-all shadow-sm"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowRight className="w-4 h-4" />
                </a>


                {/* Explore Work */}
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-primary-text border border-subtle-border hover:bg-surface-container hover:border-secondary-text/40 font-mono text-xs px-4 py-3.5 rounded transition-all"
                >
                  <Layers className="w-4 h-4 text-secondary-text" />
                  <span>Explore Work</span>
                </a>
              </div>

              {/* Quick Freelance & Booking Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-[11px] font-mono text-secondary-text/80 uppercase tracking-wider">
                  Hire On:
                </span>
                {personal.upworkUrl && (
                  <a
                    href={personal.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container border border-subtle-border hover:border-accent-lime/60 text-secondary-text hover:text-accent-lime transition-all text-xs font-mono group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                    <span>Upwork</span>
                    <span className="text-[10px] text-accent-lime font-medium opacity-80">(Top Rated)</span>
                  </a>
                )}
                {personal.fiverrUrl && (
                  <a
                    href={personal.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container border border-subtle-border hover:border-[#1dbf73]/60 text-secondary-text hover:text-[#1dbf73] transition-all text-xs font-mono group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Fiverr</span>
                    <span className="text-[10px] text-emerald-400 font-medium opacity-80">(5.0 ★)</span>
                  </a>
                )}
                {personal.topmateUrl && (
                  <a
                    href={personal.topmateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container border border-subtle-border hover:border-cyan-400/60 text-secondary-text hover:text-cyan-400 transition-all text-xs font-mono group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Topmate</span>
                    <span className="text-[10px] text-cyan-400/80">(1:1 Call)</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Circular Portrait + Nameplate + Floating Engineering Badges */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-center relative py-4">
              <div className="relative">
                {/* Ambient Soft Glow Behind Avatar */}
                <div className="absolute inset-0 bg-accent-lime/10 rounded-full blur-2xl scale-110 pointer-events-none" />

                {/* Circular Avatar Container */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-2 bg-gradient-to-b from-accent-lime/40 via-subtle-border to-surface-container border border-subtle-border shadow-2xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-surface-container-lowest">
                    {personal.photoUrl ? (
                      <Image
                        src={personal.photoUrl}
                        alt={personal.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 256px, 300px"
                        priority
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-mono text-3xl font-bold text-accent-lime">
                        KV
                      </div>
                    )}
                  </div>
                </div>

                {/* Top Floating Badge: 100K+ Installs */}
                <div className="absolute -top-3 -left-4 sm:-left-8 bg-card-surface/95 backdrop-blur-md border border-subtle-border rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 animate-in fade-in slide-in-from-left duration-500">
                  <div className="w-7 h-7 rounded-lg bg-accent-lime/10 border border-accent-lime/25 flex items-center justify-center text-accent-lime">
                    <DownloadCloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-primary-text">100K+</div>
                    <div className="font-mono text-[10px] text-secondary-text uppercase">Play Installs</div>
                  </div>
                </div>

                {/* Bottom Floating Badge: 5.0 Rating */}
                <div className="absolute -bottom-3 -right-4 sm:-right-6 bg-card-surface/95 backdrop-blur-md border border-subtle-border rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 animate-in fade-in slide-in-from-right duration-500">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-accent-lime">
                    <Star className="w-4 h-4 fill-accent-lime" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-accent-lime flex items-center gap-1">
                      <span>5.0 ★</span>
                      <CheckCircle2 className="w-3 h-3 text-accent-lime inline" />
                    </div>
                    <div className="font-mono text-[10px] text-secondary-text uppercase">Top Rated Pro</div>
                  </div>
                </div>
              </div>

              {/* Name & Title directly below photo */}
              <div className="mt-7 text-center z-10 flex flex-col items-center">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-primary-text">
                  {personal.name}
                </h2>
                <div className="font-mono text-xs text-accent-lime uppercase tracking-wider mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                  <span>{personal.title}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Hero Quick-Contact Strip (Direct Weblium UX Feature) */}
          <div className="border-t border-subtle-border/60 py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-xs font-mono">
            {/* Email & Location */}
            <div className="md:col-span-5 flex flex-wrap items-center gap-4 text-secondary-text">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-accent-lime transition-colors group cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-accent-lime" />
                <span className="text-primary-text group-hover:text-accent-lime">{personal.email}</span>
                {copied ? (
                  <Check className="w-3 h-3 text-accent-lime" />
                ) : (
                  <Copy className="w-3 h-3 text-secondary-text/60 group-hover:text-accent-lime" />
                )}
              </button>

              <div className="flex items-center gap-1.5 text-secondary-text/80">
                <MapPin className="w-3.5 h-3.5 text-accent-lime/70" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Social & Ecosystem Channels */}
            <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-3 text-secondary-text">
              <a
                href="https://www.linkedin.com/in/kaushalvasava/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-lime transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <span className="text-[10px] text-accent-lime bg-accent-lime/10 px-1.5 py-0.2 rounded border border-accent-lime/20">
                  5K+
                </span>
              </a>

              <span className="text-subtle-border">•</span>

              <a
                href="https://medium.com/@kaushalvasava"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-lime transition-colors flex items-center gap-1"
              >
                <span>Medium</span>
                <span className="text-[10px] text-accent-lime bg-accent-lime/10 px-1.5 py-0.2 rounded border border-accent-lime/20">
                  3.6K+ · 50K Reads
                </span>
              </a>

              <span className="text-subtle-border">•</span>

              <a
                href="https://github.com/KaushalVasava"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-lime transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <span className="text-[10px] text-secondary-text/80">
                  15+ Repos
                </span>
              </a>

              <span className="text-subtle-border">•</span>

              {personal.playStoreDevUrl && (
                <a
                  href={personal.playStoreDevUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-lime transition-colors flex items-center gap-1"
                >
                  <span>Google Play</span>
                  <ExternalLink className="w-3 h-3 text-secondary-text/60" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
