import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Skills from '@/components/Skills';
import Writing from '@/components/Writing';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-accent-lime selection:text-surface-canvas">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <Projects />
        <Testimonials />
        <CaseStudies />
        <Skills />
        <Writing />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
