'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  LayoutGrid,
  ArrowRight,
  ExternalLink,
  Smartphone
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

type AppFilter = 'all' | 'paint' | 'sangeet' | 'tasks' | 'appmanager';

export default function Testimonials() {
  const { testimonials, personal } = portfolioData;
  const [activeTab, setActiveTab] = useState<AppFilter>('all');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const filteredReviews =
    activeTab === 'all'
      ? testimonials
      : testimonials.filter((t) => t.appKey === activeTab);

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 400;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), Math.max(filteredReviews.length - 1, 0)));
  }, [filteredReviews.length]);

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
  }, [updateScrollState, activeTab, viewMode]);

  const handleTabChange = (tab: AppFilter) => {
    setActiveTab(tab);
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

  // Mouse Drag Support
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

  const getAppBadge = (appKey?: string) => {
    switch (appKey) {
      case 'paint':
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Paint · 100K+ Installs
          </span>
        );
      case 'sangeet':
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Sangeet · 10K+ Installs
          </span>
        );
      case 'tasks':
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Tasks: Reminders
          </span>
        );
      case 'appmanager':
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-accent-lime/10 text-accent-lime border border-accent-lime/30 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
            App Manager
          </span>
        );
      default:
        return (
          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-accent-lime/10 text-accent-lime border border-accent-lime/30 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
            Google Play Verified
          </span>
        );
    }
  };

  const paintCount = testimonials.filter((t) => t.appKey === 'paint').length;
  const sangeetCount = testimonials.filter((t) => t.appKey === 'sangeet').length;
  const tasksCount = testimonials.filter((t) => t.appKey === 'tasks').length;
  const appManagerCount = testimonials.filter((t) => t.appKey === 'appmanager').length;

  return (
    <section className="py-16 md:py-24 border-b border-subtle-border/60 relative overflow-hidden" id="testimonials">
      {/* Ambient Radial Gradient Glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              <span className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                VERIFIED GOOGLE PLAY REVIEWS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-text tracking-tight">
              What Real Users Say on Google Play.
            </h2>
            <p className="text-sm md:text-base text-secondary-text mt-2 max-w-2xl leading-relaxed">
              Authentic reviews and ratings fetched directly from Google Play Store across my published Android apps — Paint, Sangeet, Tasks, and App Manager.
            </p>
          </div>

          {/* Right Header Strip: Trust Summary + Swipe Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            {/* Trust Summary Strip */}
            <div className="flex items-center gap-3 bg-surface-container/70 border border-subtle-border rounded-xl px-3.5 py-2 shrink-0">
              <div className="text-center">
                <div className="text-base font-bold text-accent-lime font-mono">110K+</div>
                <div className="text-[9px] font-mono text-secondary-text uppercase">Downloads</div>
              </div>
              <div className="w-px h-6 bg-subtle-border" />
              <div className="text-center">
                <div className="text-base font-bold text-primary-text font-mono">4.8 ★</div>
                <div className="text-[9px] font-mono text-secondary-text uppercase">Avg Rating</div>
              </div>
              <div className="w-px h-6 bg-subtle-border" />
              <div className="text-center">
                <div className="text-base font-bold text-primary-text font-mono">100%</div>
                <div className="text-[9px] font-mono text-secondary-text uppercase">Real Feedback</div>
              </div>
            </div>

            {/* View Mode Toggle */}
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
            {viewMode === 'carousel' && filteredReviews.length > 0 && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollByDirection('left')}
                  disabled={!canScrollLeft}
                  aria-label="Previous Review"
                  className="w-9 h-9 rounded-xl bg-surface-container border border-subtle-border flex items-center justify-center text-primary-text hover:border-accent-lime hover:text-accent-lime disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByDirection('right')}
                  disabled={!canScrollRight}
                  aria-label="Next Review"
                  className="w-9 h-9 rounded-xl bg-surface-container border border-subtle-border flex items-center justify-center text-primary-text hover:border-accent-lime hover:text-accent-lime disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 border-b border-subtle-border/60 pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleTabChange('all')}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                activeTab === 'all'
                  ? 'bg-accent-lime text-surface-canvas border-accent-lime font-semibold shadow-sm'
                  : 'bg-surface-container text-secondary-text border-subtle-border hover:border-accent-lime/40 hover:text-primary-text'
              }`}
            >
              All Reviews ({testimonials.length})
            </button>
            <button
              onClick={() => handleTabChange('paint')}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                activeTab === 'paint'
                  ? 'bg-purple-400 text-surface-canvas border-purple-400 font-semibold shadow-sm'
                  : 'bg-surface-container text-secondary-text border-subtle-border hover:border-purple-400/50 hover:text-primary-text'
              }`}
            >
              Paint ({paintCount})
            </button>
            <button
              onClick={() => handleTabChange('sangeet')}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                activeTab === 'sangeet'
                  ? 'bg-emerald-400 text-surface-canvas border-emerald-400 font-semibold shadow-sm'
                  : 'bg-surface-container text-secondary-text border-subtle-border hover:border-emerald-400/50 hover:text-primary-text'
              }`}
            >
              Sangeet ({sangeetCount})
            </button>
            <button
              onClick={() => handleTabChange('tasks')}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                activeTab === 'tasks'
                  ? 'bg-cyan-400 text-surface-canvas border-cyan-400 font-semibold shadow-sm'
                  : 'bg-surface-container text-secondary-text border-subtle-border hover:border-cyan-400/50 hover:text-primary-text'
              }`}
            >
              Tasks ({tasksCount})
            </button>
            <button
              onClick={() => handleTabChange('appmanager')}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                activeTab === 'appmanager'
                  ? 'bg-accent-lime text-surface-canvas border-accent-lime font-semibold shadow-sm'
                  : 'bg-surface-container text-secondary-text border-subtle-border hover:border-accent-lime/40 hover:text-primary-text'
              }`}
            >
              App Manager ({appManagerCount})
            </button>
          </div>

          {/* Swipe indicator */}
          {viewMode === 'carousel' && filteredReviews.length > 0 && (
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-secondary-text/80">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
              <span>Swipe cards</span>
              <span className="text-accent-lime font-bold">
                ({activeIndex + 1} / {filteredReviews.length})
              </span>
            </div>
          )}
        </div>

        {/* Empty State for Apps with No Reviews Yet */}
        {filteredReviews.length === 0 ? (
          <div className="py-16 px-6 rounded-2xl bg-card-surface border border-subtle-border text-center max-w-xl mx-auto shadow-lg">
            <div className="w-12 h-12 rounded-full bg-accent-lime/10 text-accent-lime flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-primary-text mb-2">
              No Public Reviews Yet on Play Store
            </h4>
            <p className="text-xs text-secondary-text mb-6 max-w-md mx-auto leading-relaxed">
              Quick Launcher &amp; App Manager is newly published. Be among the first power users to install and leave feedback on Google Play!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.lahsuak.apps.appmanager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-lime text-surface-canvas font-mono text-xs font-semibold px-4 py-2.5 rounded hover:brightness-110 transition-all shadow-sm"
              >
                <span>View on Google Play</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleTabChange('all')}
                className="font-mono text-xs text-secondary-text hover:text-primary-text px-3 py-2"
              >
                View Other App Reviews
              </button>
            </div>
          </div>
        ) : viewMode === 'carousel' ? (
          /* Horizontal Swipe Carousel */
          <div>
            <div
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-1 cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filteredReviews.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[85vw] sm:min-w-[360px] md:min-w-[400px] lg:min-w-[420px] max-w-[440px] snap-start shrink-0 flex flex-col justify-between bg-card-surface rounded-2xl border border-subtle-border p-6 hover:border-accent-lime/50 transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-lime opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header: App Badge & Stars */}
                    <div className="flex items-center justify-between mb-4">
                      {getAppBadge(item.appKey)}
                      <div className="flex items-center gap-0.5" title={`${item.rating} out of 5 stars`}>
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-accent-lime fill-accent-lime" />
                        ))}
                      </div>
                    </div>

                    {/* App Project Title */}
                    <div className="font-mono text-xs text-accent-lime font-medium mb-3 flex items-center gap-1.5">
                      <span className="w-1 h-3 rounded-full bg-accent-lime" />
                      <span>{item.projectTitle}</span>
                    </div>

                    {/* Real User Quote */}
                    <blockquote className="text-sm text-secondary-text leading-relaxed italic relative mb-6">
                      &ldquo;{item.comment}&rdquo;
                    </blockquote>
                  </div>

                  <div>
                    {/* Tech & Play Store Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-subtle-border/40">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container border border-subtle-border text-secondary-text/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* User Attribution */}
                    <div className="flex items-center justify-between pt-3 border-t border-subtle-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-surface-container-high border border-subtle-border flex items-center justify-center font-mono text-xs font-semibold text-accent-lime">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-primary-text flex items-center gap-1">
                            <span>{item.name}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime" />
                          </div>
                          <div className="text-[10px] font-mono text-secondary-text">
                            {item.role} · {item.company}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-secondary-text/60">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Pagination & Progress */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-subtle-border/40">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                {filteredReviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      activeIndex === i
                        ? 'w-7 bg-accent-lime'
                        : 'w-2 bg-subtle-border hover:bg-secondary-text/50'
                    }`}
                  />
                ))}
              </div>

              {/* Status Counter */}
              <div className="flex items-center gap-4 text-xs font-mono text-secondary-text">
                <span>
                  Review <strong className="text-primary-text">{activeIndex + 1}</strong> of{' '}
                  <strong className="text-accent-lime">{filteredReviews.length}</strong>
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
              {filteredReviews.map((item) => (
                <div
                  key={item.id}
                  className="bg-card-surface rounded-2xl border border-subtle-border p-6 flex flex-col justify-between hover:border-accent-lime/50 transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-lime opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {getAppBadge(item.appKey)}
                      <div className="flex items-center gap-0.5" title={`${item.rating} out of 5 stars`}>
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-accent-lime fill-accent-lime" />
                        ))}
                      </div>
                    </div>

                    <div className="font-mono text-xs text-accent-lime font-medium mb-3 flex items-center gap-1.5">
                      <span className="w-1 h-3 rounded-full bg-accent-lime" />
                      <span>{item.projectTitle}</span>
                    </div>

                    <blockquote className="text-sm text-secondary-text leading-relaxed italic relative mb-6">
                      &ldquo;{item.comment}&rdquo;
                    </blockquote>
                  </div>

                  <div>
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-subtle-border/40">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container border border-subtle-border text-secondary-text/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-subtle-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-surface-container-high border border-subtle-border flex items-center justify-center font-mono text-xs font-semibold text-accent-lime">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-primary-text flex items-center gap-1">
                            <span>{item.name}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime" />
                          </div>
                          <div className="text-[10px] font-mono text-secondary-text">
                            {item.role} · {item.company}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-secondary-text/60">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
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

        {/* Callout Action Banner */}
        <div className="mt-12 bg-surface-container-lowest border border-subtle-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-primary-text tracking-tight">
              Ready to build high-performance mobile apps with real user impact?
            </h3>
            <p className="text-xs md:text-sm text-secondary-text mt-1.5">
              Available for native Android builds, Jetpack Compose UI, and Kotlin Multiplatform architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {personal.playStoreDevUrl && (
              <a
                href={personal.playStoreDevUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-lime text-surface-canvas font-mono text-xs font-semibold px-5 py-3 rounded hover:brightness-110 active:scale-95 transition-all shadow-sm"
              >
                <span>Google Play Developer Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high border border-subtle-border hover:border-accent-lime/50 text-secondary-text hover:text-accent-lime font-mono text-xs px-4 py-3 rounded transition-colors"
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
