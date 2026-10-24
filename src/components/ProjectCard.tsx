import Image from 'next/image';
import { ExternalLink, ArrowRight, Code2, Palette, Music2, ScanLine, Share2, Smartphone, CheckSquare, ShoppingBag, Store, Image as ImageIcon, Building2 } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const getHeaderIcon = () => {
    switch (project.mockupType) {
      case 'drawing':
        return <Palette className="w-5 h-5 text-secondary-text" />;
      case 'audio':
        return <Music2 className="w-5 h-5 text-secondary-text" />;
      case 'scanner':
        return <ScanLine className="w-5 h-5 text-secondary-text" />;
      case 'kmp-code':
        return <Share2 className="w-5 h-5 text-secondary-text" />;
      case 'package-grid':
        return <Smartphone className="w-5 h-5 text-secondary-text" />;
      case 'task-list':
        return <CheckSquare className="w-5 h-5 text-secondary-text" />;
      case 'ecommerce':
        return <ShoppingBag className="w-5 h-5 text-secondary-text" />;
      case 'marketplace':
        return <Building2 className="w-5 h-5 text-secondary-text" />;
      case 'gallery':
        return <ImageIcon className="w-5 h-5 text-secondary-text" />;
      case 'pos':
        return <Store className="w-5 h-5 text-secondary-text" />;
      default:
        return <Smartphone className="w-5 h-5 text-secondary-text" />;
    }
  };

  const getImagePosition = () => {
    switch (project.mockupType) {
      case 'scanner':
        return 'object-cover object-top';
      case 'package-grid':
        return 'object-cover object-[center_38%]';
      default:
        return 'object-cover object-center';
    }
  };

  return (
    <div className={`group bg-card-surface rounded-xl border border-subtle-border p-6 flex flex-col justify-between hover:border-secondary-text/40 transition-all duration-200 h-full ${className}`}>
      <div>
        {/* Card Header: Badge & App Icon */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`font-mono text-[11px] px-2.5 py-0.5 rounded uppercase font-medium ${
              project.badgeType === 'accent'
                ? 'bg-accent-lime/10 text-accent-lime border border-accent-lime/25'
                : 'bg-surface-container-high text-secondary border border-subtle-border'
            }`}
          >
            {project.badge}
          </span>
          <div className="flex items-center gap-2">
            {project.iconUrl ? (
              <div className="w-7 h-7 relative rounded-lg overflow-hidden border border-subtle-border/50">
                <Image
                  src={project.iconUrl}
                  alt={`${project.name} icon`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              getHeaderIcon()
            )}
          </div>
        </div>

        {/* Real App Screenshot Container */}
        {project.previewImageUrl ? (
          <div className="h-52 w-full relative rounded-lg border border-subtle-border/40 mb-5 overflow-hidden group-hover:border-accent-lime/50 transition-colors bg-surface-container-lowest shadow-inner">
            <Image
              src={project.previewImageUrl}
              alt={`${project.name} app screenshot`}
              fill
              className={`${getImagePosition()} group-hover:scale-105 transition-transform duration-300`}
            />
            {/* Subtle bottom gradient overlay for technical metadata label */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-center text-[10px] font-mono">
              <span className="bg-background/90 text-secondary px-2 py-0.5 rounded border border-subtle-border/80 backdrop-blur-sm">
                {project.engineStats?.label}
              </span>
              <span className="text-accent-lime font-medium bg-background/90 px-2 py-0.5 rounded border border-subtle-border/80 backdrop-blur-sm">
                {project.engineStats?.value}
              </span>
            </div>
          </div>
        ) : (
          <div className="h-48 w-full bg-surface-container-lowest rounded border border-subtle-border/30 mb-5 p-4 flex flex-col justify-between relative overflow-hidden group-hover:border-accent-lime/40 transition-colors">
            <div className="flex justify-between items-center text-[10px] font-mono text-secondary-text">
              <span>{project.engineStats?.label}</span>
              <span className="text-accent-lime font-medium">{project.engineStats?.value}</span>
            </div>
            <div className="my-auto text-center">
              <span className="text-sm font-semibold text-primary-text block">
                {project.tagline}
              </span>
              <span className="text-[11px] text-secondary-text">
                {project.engineStats?.sublabel}
              </span>
            </div>
          </div>
        )}

        {/* Project Name & Description */}
        <h3 className="text-lg font-semibold text-primary-text group-hover:text-accent-lime transition-colors">
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm text-secondary-text mt-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech Stack Tags & Action Link */}
      <div className="pt-6 mt-4 border-t border-subtle-border/50 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-container-high text-secondary-text border border-subtle-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.actionUrl && (
          <a
            href={project.actionUrl}
            target={project.actionType === 'internal' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold text-accent-lime hover:underline gap-1 group/link ml-2 shrink-0"
          >
            <span>{project.actionText || 'View Project'}</span>
            {project.actionType === 'playstore' && <ExternalLink className="w-3.5 h-3.5" />}
            {project.actionType === 'github' && <Code2 className="w-3.5 h-3.5" />}
            {project.actionType === 'internal' && (
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
            )}
          </a>
        )}
      </div>
    </div>
  );
}
