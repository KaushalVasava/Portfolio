'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Play, ExternalLink, Sparkles, Smartphone, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface AppReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppReelModal({ isOpen, onClose }: AppReelModalProps) {
  // Select top 4 flagship apps for the reel
  const reelApps = portfolioData.projects.filter((p) =>
    ['studyghar', 'infryve', 'appmanager', 'xphotogram'].includes(p.id)
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeApp = reelApps[activeIndex] || reelApps[0];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-card-surface border border-subtle-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-subtle-border bg-surface-container-lowest/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent-lime/10 border border-accent-lime/30 flex items-center justify-center text-accent-lime">
              <Play className="w-4 h-4 fill-accent-lime" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm md:text-base font-semibold text-primary-text">
                  Production Mobile Apps Showcase
                </h3>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-accent-lime/10 text-accent-lime border border-accent-lime/20 font-semibold">
                  LIVE APPS
                </span>
              </div>
              <p className="text-[11px] text-secondary-text font-mono">
                Interactive preview of native Android, Jetpack Compose, &amp; Kotlin Multiplatform builds
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg border border-subtle-border flex items-center justify-center text-secondary-text hover:text-primary-text hover:bg-surface-container-high transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal App Selector Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-subtle-border/60 bg-surface-container/50 overflow-x-auto scrollbar-none">
          {reelApps.map((app, idx) => (
            <button
              key={app.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs transition-all whitespace-nowrap shrink-0 ${
                activeIndex === idx
                  ? 'bg-accent-lime text-surface-canvas font-semibold shadow-sm'
                  : 'bg-surface-container-high/60 text-secondary-text hover:text-primary-text hover:bg-surface-container-high border border-subtle-border/40'
              }`}
            >
              <span className="text-[10px] opacity-75">0{idx + 1}</span>
              <span>{app.name.split('—')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Modal Main Content: Split Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 overflow-y-auto">
          {/* Left Column: Phone Device Preview */}
          <div className="md:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[280px] aspect-[9/18] bg-black rounded-[36px] p-2.5 shadow-2xl border-4 border-[#2A2E37] ring-1 ring-white/10 flex flex-col items-center justify-between">
              {/* Phone Camera Hole */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-[#141518] rounded-full z-20 border border-white/5" />

              {/* App Screen Container */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-surface-container-lowest">
                {activeApp.previewImageUrl ? (
                  <Image
                    src={activeApp.previewImageUrl}
                    alt={activeApp.name}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-secondary-text">
                    <Smartphone className="w-12 h-12 text-accent-lime/40 mb-3" />
                    <span className="font-mono text-xs">{activeApp.name}</span>
                  </div>
                )}

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* App Badge on Screen Bottom */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                    <span className="font-mono text-[10px] text-primary-text font-medium truncate max-w-[140px]">
                      {activeApp.name}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-accent-lime/20 text-accent-lime font-bold">
                    {activeApp.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Prev / Next Arrows */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : reelApps.length - 1))}
                className="p-2 rounded-lg border border-subtle-border hover:border-accent-lime/50 text-secondary-text hover:text-primary-text transition-colors"
                aria-label="Previous app"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-secondary-text">
                {activeIndex + 1} of {reelApps.length}
              </span>
              <button
                onClick={() => setActiveIndex((prev) => (prev < reelApps.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded-lg border border-subtle-border hover:border-accent-lime/50 text-secondary-text hover:text-primary-text transition-colors"
                aria-label="Next app"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: App Details & Engineering Highlights */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[11px] text-accent-lime uppercase tracking-wider font-semibold">
                  {activeApp.tagline}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-primary-text tracking-tight mb-3">
                {activeApp.name}
              </h4>
              <p className="text-sm text-secondary-text leading-relaxed mb-4">
                {activeApp.description}
              </p>

              {/* Architecture & Engineering Highlights */}
              {activeApp.engineStats && (
                <div className="bg-surface-container/60 border border-subtle-border rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-accent-lime" />
                    <span className="text-xs font-semibold text-primary-text">
                      Engineering Spec
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-secondary-text/70 block uppercase">
                        Engine Stat
                      </span>
                      <span className="font-mono font-semibold text-accent-lime text-xs">
                        {activeApp.engineStats.value}
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-secondary-text/70 block uppercase">
                        Pipeline
                      </span>
                      <span className="font-mono text-secondary-text text-xs truncate block">
                        {activeApp.engineStats.label}
                      </span>
                    </div>
                  </div>
                  {activeApp.engineStats.sublabel && (
                    <p className="text-[11px] text-secondary-text/80 font-mono mt-2 pt-2 border-t border-subtle-border/40">
                      ↳ {activeApp.engineStats.sublabel}
                    </p>
                  )}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div>
                <span className="font-mono text-[10px] text-secondary-text uppercase tracking-wider block mb-2">
                  Built With:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeApp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-surface-container border border-subtle-border text-primary-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-subtle-border/60 flex flex-wrap items-center gap-3">
              {activeApp.actionUrl && (
                <a
                  href={activeApp.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent-lime text-surface-canvas font-mono text-xs font-semibold px-4 py-2.5 rounded hover:brightness-110 active:scale-95 transition-all shadow-sm"
                >
                  <span>{activeApp.actionText || 'Open App'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-1.5 bg-surface-container hover:bg-surface-container-high border border-subtle-border hover:border-accent-lime/40 text-secondary-text hover:text-primary-text font-mono text-xs px-4 py-2.5 rounded transition-colors"
              >
                <span>Discuss Similar App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
