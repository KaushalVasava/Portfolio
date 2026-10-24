import { Rocket, Zap, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { personal } = portfolioData;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-accent-lime" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-accent-lime" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-accent-lime" />;
      default:
        return <Zap className="w-5 h-5 text-accent-lime" />;
    }
  };

  return (
    <section
      className="py-16 md:py-20 border-b border-subtle-border/60 bg-surface-container-lowest relative overflow-hidden"
      id="about"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-lime/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1120px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-lime" />
              <span className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-text tracking-tight leading-[1.15]">
              {personal.aboutHeadline}
            </h2>
          </div>

          <p className="text-sm md:text-base text-secondary-text max-w-md leading-relaxed">
            Android-first engineer focusing on fluid 60 FPS rendering, deterministic offline state, and cross-platform shared business logic.
          </p>
        </div>

        {/* 2-Paragraph Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-secondary-text leading-relaxed mb-12 border-y border-subtle-border/60 py-8">
          <div>
            <p>
              My focus in mobile engineering centers on building resilient production applications that feel invisible to the user — rendering within strict 16ms frame budgets, respecting battery life, and functioning seamlessly across intermittent network conditions.
            </p>
          </div>
          <div>
            <p>
              Beyond production client engagements, I actively contribute to the broader mobile ecosystem. Through open-source repositories on GitHub, 1:1 engineering mentorship on Topmate, and technical publications on Medium read by over 50,000 developers, I continuously build and share in public.
            </p>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div>
          <div className="font-mono text-xs text-primary-text uppercase tracking-wider font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-lime" />
            <span>Core Engineering Pillars</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {personal.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-card-surface p-5 sm:p-6 rounded-2xl border border-subtle-border hover:border-accent-lime/40 transition-all duration-300 group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container border border-subtle-border flex items-center justify-center mb-4 group-hover:border-accent-lime/40 transition-colors">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="text-sm font-semibold text-primary-text group-hover:text-accent-lime transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-secondary-text mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Bottom CTA Row */}
        <div className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-subtle-border/40 text-xs font-mono">
          <div className="flex items-center gap-2 text-secondary-text">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
            <span>Available for native Android &amp; Kotlin Multiplatform contracts</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-accent-lime hover:underline font-semibold"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
