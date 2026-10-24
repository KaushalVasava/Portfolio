import { Smartphone, Network, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const { skillCategories } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-accent-lime" />;
      case 'Network':
        return <Network className="w-5 h-5 text-accent-lime" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-accent-lime" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-accent-lime" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-accent-lime" />;
    }
  };

  return (
    <section className="py-16 md:py-24 border-b border-subtle-border/60" id="expertise">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="mb-12">
          <span className="font-mono text-xs text-accent-lime uppercase tracking-wider block mb-2 font-medium">
            WHAT I WORK WITH
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-text tracking-tight">
            Technical Expertise Matrix
          </h2>
          <p className="text-sm md:text-base text-secondary-text max-w-lg mt-2 leading-relaxed">
            Specialized mobile toolchain focused on native performance, clean contracts, and deterministic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card-surface rounded-xl border border-subtle-border p-5 hover:border-secondary-text/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  {getIcon(category.icon)}
                  <h3 className="text-base font-semibold text-primary-text">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2.5 text-sm text-secondary-text">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-lime shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-subtle-border/40">
                <span className="font-mono text-[10px] text-secondary tracking-wide">
                  {category.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
