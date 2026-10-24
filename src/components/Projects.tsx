'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

type CategoryFilter = 'all' | 'playstore' | 'commercial' | 'opensource';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'playstore') return p.category === 'playstore' || p.actionType === 'playstore';
    return p.category === activeFilter;
  });

  const counts = {
    all: projects.length,
    playstore: projects.filter((p) => p.category === 'playstore' || p.actionType === 'playstore').length,
    commercial: projects.filter((p) => p.category === 'commercial').length,
    opensource: projects.filter((p) => p.category === 'opensource').length,
  };

  const tabs: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: counts.all },
    { id: 'playstore', label: 'Google Play Apps', count: counts.playstore },
    { id: 'commercial', label: 'Commercial & B2B', count: counts.commercial },
    { id: 'opensource', label: 'Open Source & KMP', count: counts.opensource },
  ];

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 400;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), filteredProjects.length - 1));
  }, [filteredProjects.length]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || viewMode !== 'carousel') return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState, activeFilter, viewMode]);

  const handleTabChange = (id: CategoryFilter) => {
    setActiveFilter(id);
    setActiveIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollByDirection = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 400;
    const distance = direction === 'left' ? -cardWidth : cardWidth;
    el.scrollBy({ left: distance, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 400;
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  };

  // Mouse Drag Support for Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = carouselRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragScrollLeft.current = el.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    carouselRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  return (
    <section className="py-16 md:py-24 border-b border-subtle-border/60 relative overflow-hidden" id="work">
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/3 right-0 w-80 h-80 bg-accent-lime/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-lime" />
              <span className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                SELECTED WORK · APPS &amp; SYSTEMS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-text tracking-tight">
              Real Products. Real Engineering.
            </h2>
            <p className="text-sm md:text-base text-secondary-text max-w-xl mt-2 leading-relaxed">
              17+ mobile solutions engineered for speed, offline reliability, and fluid touch responsiveness.
            </p>
          </div>

          {/* Carousel Controls & View Mode Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* View Toggle (Swipe vs Grid) */}
            <div className="inline-flex items-center p-1 rounded-xl bg-surface-container border border-subtle-border">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-accent-lime text-surface-canvas shadow-sm'
                    : 'text-secondary-text hover:text-primary-text'
                }`}
                title="Swipe Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Swipe</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-accent-lime text-surface-canvas shadow-sm'
                    : 'text-secondary-text hover:text-primary-text'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {/* Navigation Arrows for Carousel */}
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollByDirection('left')}
                  disabled={!canScrollLeft}
                  aria-label="Previous Project"
                  className="w-9 h-9 rounded-xl bg-surface-container border border-subtle-border flex items-center justify-center text-primary-text hover:border-accent-lime hover:text-accent-lime disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByDirection('right')}
                  disabled={!canScrollRight}
                  aria-label="Next Project"
                  className="w-9 h-9 rounded-xl bg-surface-container border border-subtle-border flex items-center justify-center text-primary-text hover:border-accent-lime hover:text-accent-lime disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-subtle-border/60">
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 flex items-center gap-2 ${
                  activeFilter === tab.id
                    ? 'bg-accent-lime text-surface-canvas font-semibold shadow-sm'
                    : 'bg-surface-container-high/60 text-secondary-text hover:text-primary-text hover:bg-surface-container-high'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    activeFilter === tab.id
                      ? 'bg-surface-canvas/20 text-surface-canvas font-bold'
                      : 'bg-subtle-border/60 text-secondary-text'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Swipe Hint Helper */}
          {viewMode === 'carousel' && (
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-secondary-text/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
              <span>Swipe or drag horizontally</span>
              <span className="text-accent-lime font-bold">
                ({activeIndex + 1} / {filteredProjects.length})
              </span>
            </div>
          )}
        </div>

        {/* Projects View */}
        {viewMode === 'carousel' ? (
          <div>
            {/* Horizontal Swipe Carousel */}
            <div
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-1 cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="min-w-[85vw] sm:min-w-[340px] md:min-w-[380px] lg:min-w-[400px] max-w-[420px] snap-start shrink-0 flex flex-col"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {/* Carousel Bottom Pagination Dots & Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-subtle-border/40">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                {filteredProjects.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      activeIndex === i
                        ? 'w-7 bg-accent-lime'
                        : 'w-2 bg-subtle-border hover:bg-secondary-text/50'
                    }`}
                  />
                ))}
              </div>

              {/* Quick Counter & Reel CTA */}
              <div className="flex items-center gap-4 text-xs font-mono text-secondary-text">
                <span>
                  Showing <strong className="text-primary-text">{activeIndex + 1}</strong> of{' '}
                  <strong className="text-accent-lime">{filteredProjects.length}</strong> apps
                </span>

                <span className="text-subtle-border">•</span>

                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className="text-accent-lime hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Expand All in Grid</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-subtle-border/40 flex justify-end">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className="font-mono text-xs text-accent-lime hover:underline flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Switch back to compact Swipe view</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
