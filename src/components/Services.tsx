import { Smartphone, Repeat, Gauge, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Services() {
  const { services } = portfolioData;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-accent-lime" />;
      case 'Repeat':
        return <Repeat className="w-5 h-5 text-accent-lime" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-accent-lime" />;
      default:
        return <Smartphone className="w-5 h-5 text-accent-lime" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-b border-subtle-border/60 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-accent-lime uppercase tracking-wider block mb-2 font-medium">
            SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-text tracking-tight">
            Need a Mobile App Built or Improved?
          </h2>
          <p className="text-sm md:text-base text-secondary-text mt-2 leading-relaxed">
            From greenfield mobile development to emergency performance triage and legacy modernization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card-surface rounded-xl border border-subtle-border p-6 flex flex-col justify-between hover:border-secondary-text/40 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded bg-surface-container-lowest border border-subtle-border flex items-center justify-center mb-5">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-lg font-semibold text-primary-text">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-secondary-text mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-subtle-border/40">
                <a
                  href={service.targetAnchor}
                  className="font-mono text-xs text-accent-lime hover:underline inline-flex items-center gap-1 group font-medium"
                >
                  <span>{service.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
