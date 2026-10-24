import { Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Metrics() {
  const { metrics } = portfolioData;

  return (
    <section className="py-8 bg-surface-container-lowest border-b border-subtle-border/60">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-subtle-border/40">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col ${
                index > 0 ? 'pt-4 md:pt-0 md:px-4' : 'pt-0 md:pr-4'
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span
                  className={`text-3xl md:text-4xl font-semibold tracking-tight ${
                    metric.highlight ? 'text-accent-lime' : 'text-primary-text'
                  }`}
                >
                  {metric.value}
                </span>
                {metric.hasRatingStar && (
                  <Star className="w-5 h-5 text-accent-lime fill-accent-lime inline-block" />
                )}
              </div>
              <span className="font-mono text-[11px] text-secondary-text uppercase tracking-wider mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
