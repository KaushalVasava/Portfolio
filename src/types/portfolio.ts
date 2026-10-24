export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  badgeType?: 'primary' | 'secondary' | 'accent';
  techStack: string[];
  features?: string[];
  engineStats?: {
    label: string;
    value: string;
    sublabel: string;
  };
  category?: 'all' | 'playstore' | 'commercial' | 'opensource';
  mockupType: 'drawing' | 'audio' | 'scanner' | 'kmp-code' | 'package-grid' | 'task-list' | 'ecommerce' | 'marketplace' | 'gallery' | 'pos';
  actionUrl?: string;
  actionText?: string;
  actionType: 'playstore' | 'github' | 'internal' | 'none';
  featured?: boolean;
  iconUrl?: string;
  previewImageUrl?: string;
  screenshotUrl?: string;
}

export interface Metric {
  value: string;
  label: string;
  highlight?: boolean;
  hasRatingStar?: boolean;
}

export interface CaseStudy {
  id: string;
  category: string;
  subCategory: string;
  title: string;
  summary: string;
  problem: string;
  engineeringApproach: string;
  technologies: string[];
  metrics: {
    label: string;
    before?: string;
    value: string;
    highlight?: boolean;
    note?: string;
  }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  tag: string;
}

export interface Article {
  title: string;
  category: string;
  readTime: string;
  year: string;
  url: string;
  description: string;
  imageUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  actionText: string;
  targetAnchor: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    statusText: string;
    availableForWork: boolean;
    location: string;
    email: string;
    responseTime: string;
    timezone: string;
    headline: string;
    headlineHighlight: string;
    bio: string;
    aboutHeadline: string;
    aboutParagraphs: string[];
    pillars: {
      icon: string;
      title: string;
      description: string;
    }[];
    photoUrl?: string;
    topmateUrl?: string;
    buyMeACoffeeUrl?: string;
    upworkUrl?: string;
    fiverrUrl?: string;
    instagramUrl?: string;
    twitterUrl?: string;
    playStoreDevUrl?: string;
  };
  metrics: Metric[];
  projects: Project[];
  caseStudies: CaseStudy[];
  skillCategories: SkillCategory[];
  articles: Article[];
  featuredRepo: {
    name: string;
    badge: string;
    description: string;
    highlights: string[];
    url: string;
  };
  services: Service[];
  socialLinks: SocialLink[];
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  platform: 'Upwork' | 'Fiverr' | 'Topmate' | 'Google Play';
  rating: number;
  date: string;
  projectTitle: string;
  comment: string;
  verified: boolean;
  tags?: string[];
  appKey?: 'paint' | 'sangeet' | 'tasks' | 'appmanager';
}
