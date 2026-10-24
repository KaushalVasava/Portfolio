import { ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function CaseStudies() {
  const { caseStudies } = portfolioData;

  return (
    <section
      className="py-16 md:py-24 border-b border-subtle-border/60 bg-surface-container-lowest"
      id="case-studies"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs text-accent-lime uppercase tracking-wider block mb-2 font-medium">
            BEYOND THE UI
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-text tracking-tight">
            Engineering Case Studies
          </h2>
          <p className="text-sm md:text-base text-secondary-text max-w-xl mt-2 leading-relaxed">
            Rigorous problem solving, diagnostic performance profiling, and large-scale architectural refactors.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-card-surface rounded-xl border border-subtle-border p-6 md:p-8 hover:border-secondary-text/40 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left 8 cols: Narrative */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-accent-lime/10 text-accent-lime border border-accent-lime/25 font-medium">
                      {study.category}
                    </span>
                    <span className="text-subtle-border">•</span>
                    <span className="font-mono text-[11px] text-secondary-text uppercase">
                      {study.subCategory}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-primary-text leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-sm md:text-base text-secondary-text mt-3 leading-relaxed">
                    {study.engineeringApproach}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-surface-container-high text-secondary border border-subtle-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right 4 cols: Quantitative Impact Card */}
                <div className="lg:col-span-4 bg-surface-container-lowest rounded-lg border border-subtle-border/60 p-5 flex flex-col justify-center space-y-4">
                  {study.metrics.map((metric, idx) => (
                    <div
                      key={metric.label}
                      className={
                        idx < study.metrics.length - 1
                          ? 'border-b border-subtle-border/40 pb-3'
                          : ''
                      }
                    >
                      <span className="font-mono text-[11px] text-secondary uppercase block font-medium">
                        {metric.label}
                      </span>

                      <div className="flex items-baseline gap-2 mt-1">
                        {metric.before && (
                          <>
                            <span className="text-xl font-bold text-secondary-text line-through">
                              {metric.before}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-accent-lime inline" />
                          </>
                        )}
                        <span
                          className={`text-2xl md:text-3xl font-bold ${
                            metric.highlight ? 'text-accent-lime' : 'text-primary-text'
                          }`}
                        >
                          {metric.value}
                        </span>
                        {metric.note && (
                          <span className="text-[11px] text-secondary-text font-mono">
                            {metric.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
