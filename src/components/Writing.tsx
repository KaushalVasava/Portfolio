import Image from 'next/image';
import { ExternalLink, Star, GitFork, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Writing() {
  const { articles, featuredRepo } = portfolioData;

  return (
    <section className="py-16 md:py-24 border-b border-subtle-border/60" id="writing">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs text-accent-lime uppercase tracking-wider block mb-2 font-medium">
              LEARNING IN PUBLIC · 3.6K+ FOLLOWERS · 50K+ VIEWS
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-text tracking-tight">
              Writing &amp; Open Source
            </h2>
          </div>
          <a
            href="https://medium.com/@KaushalVasava"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-accent-lime hover:underline flex items-center gap-1.5 mt-3 md:mt-0 font-medium"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Read All Articles on Medium</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Articles Cluster (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card-surface p-5 rounded-xl border border-subtle-border hover:border-secondary-text/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {article.imageUrl && (
                    <div className="w-full sm:w-28 h-20 relative rounded-lg overflow-hidden shrink-0 border border-subtle-border/40 bg-surface-container-lowest">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs font-mono text-secondary mb-1.5">
                      <span>
                        {article.category} · {article.readTime}
                      </span>
                      <span className="text-secondary-text">{article.year}</span>
                    </div>

                    <h3 className="text-base font-semibold text-primary-text group-hover:text-accent-lime transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-secondary-text mt-1.5 leading-relaxed line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Featured Open Source Highlight Card (Right 4 cols) */}
          <div className="lg:col-span-4 bg-card-surface rounded-xl border border-subtle-border p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-accent-lime/10 text-accent-lime border border-accent-lime/25 font-medium">
                  {featuredRepo.badge}
                </span>
                <Star className="w-4 h-4 text-accent-lime fill-accent-lime" />
              </div>

              <h3 className="text-lg font-semibold text-primary-text">
                {featuredRepo.name}
              </h3>

              <p className="text-xs sm:text-sm text-secondary-text mt-2 leading-relaxed">
                {featuredRepo.description}
              </p>

              <div className="mt-6 p-3 bg-surface-container-lowest rounded-lg border border-subtle-border font-mono text-xs space-y-2">
                {featuredRepo.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-1.5 text-secondary-text">
                    <span className="text-accent-lime">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-subtle-border/40">
              <a
                href={featuredRepo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high border border-subtle-border text-primary-text font-mono text-xs py-2.5 rounded transition-colors"
              >
                <GitFork className="w-3.5 h-3.5 text-accent-lime" />
                <span>Explore on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
