'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Clock, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Terminal, BookOpen, Share2, ExternalLink, Users, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'android',
    budget: '5k-10k',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your project.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage(
          'Thank you for reaching out! Your inquiry has been recorded and Kaushal will reply to your email within 24 hours.'
        );
        setFormData({
          name: '',
          email: '',
          projectType: 'android',
          budget: '5k-10k',
          message: '',
        });
        setErrors({});
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network connection error. Please check your connection or email directly.');
    }
  };

  const projectOptions = [
    { value: 'android', label: 'Native Android (Compose)' },
    { value: 'kmp', label: 'Kotlin Multiplatform' },
    { value: 'rn', label: 'React Native' },
    { value: 'audit', label: 'App Audit / Optimization' },
  ];

  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Context & Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-accent-lime uppercase tracking-wider block mb-2 font-medium">
                INITIATE CONTACT
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-primary-text tracking-tight">
                Have an idea? Let&apos;s make it real.
              </h2>
              <p className="text-sm md:text-base text-secondary-text mt-4 leading-relaxed">
                I am currently reviewing select engineering engagements, high-impact contract roles, and new product builds. Whether you need a ground-up mobile build or performance remediation, send over the details.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container border border-subtle-border flex items-center justify-center text-accent-lime">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-secondary uppercase block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-primary-text hover:text-accent-lime transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container border border-subtle-border flex items-center justify-center text-accent-lime">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-secondary uppercase block">
                      Response Window
                    </span>
                    <span className="text-sm font-semibold text-primary-text">
                      {personal.responseTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-surface-container border border-subtle-border flex items-center justify-center text-accent-lime">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-secondary uppercase block">
                      Timezone &amp; Location
                    </span>
                    <span className="text-sm font-semibold text-primary-text">
                      {personal.timezone}
                    </span>
                  </div>
                </div>

                {personal.topmateUrl && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-surface-container border border-subtle-border flex items-center justify-center text-accent-lime">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-secondary uppercase block">
                        Mentorship &amp; Consultation
                      </span>
                      <a
                        href={personal.topmateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-primary-text hover:text-accent-lime transition-colors inline-flex items-center gap-1"
                      >
                        <span>Book a 1:1 Call on Topmate</span>
                        <ExternalLink className="w-3 h-3 text-secondary-text" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Freelance & Direct Hire Platforms */}
            <div className="pt-6 mt-6 border-t border-subtle-border/60 space-y-3">
              <span className="font-mono text-[10px] text-accent-lime uppercase tracking-wider block font-semibold">
                Client Platforms &amp; Direct Hire
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personal.upworkUrl && (
                  <a
                    href={personal.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-surface-container/70 hover:bg-surface-container border border-subtle-border hover:border-accent-lime/60 rounded-xl p-3 flex items-center justify-between transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-surface-container-high border border-subtle-border shrink-0 relative">
                        <Image
                          src="/images/platforms/upwork.png"
                          alt="Upwork"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-primary-text group-hover:text-accent-lime transition-colors">
                            Upwork
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-accent-lime/10 text-accent-lime border border-accent-lime/25">
                            TOP RATED
                          </span>
                        </div>
                        <span className="text-[10px] text-secondary-text block truncate">
                          Contract &amp; Hourly
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-secondary-text group-hover:text-accent-lime group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </a>
                )}

                {personal.fiverrUrl && (
                  <a
                    href={personal.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-surface-container/70 hover:bg-surface-container border border-subtle-border hover:border-[#1dbf73]/60 rounded-xl p-3 flex items-center justify-between transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-surface-container-high border border-subtle-border shrink-0 relative">
                        <Image
                          src="/images/platforms/fiverr.png"
                          alt="Fiverr"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-primary-text group-hover:text-[#1dbf73] transition-colors">
                            Fiverr
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                            5.0 ★
                          </span>
                        </div>
                        <span className="text-[10px] text-secondary-text block truncate">
                          Custom Mobile Apps
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-secondary-text group-hover:text-[#1dbf73] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </a>
                )}

                {personal.topmateUrl && (
                  <a
                    href={personal.topmateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-surface-container/70 hover:bg-surface-container border border-subtle-border hover:border-accent-lime/60 rounded-xl p-3 flex items-center justify-between transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-surface-container-high border border-subtle-border shrink-0 relative">
                        <Image
                          src="/images/platforms/topmate.png"
                          alt="Topmate"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-primary-text group-hover:text-accent-lime transition-colors">
                            Topmate
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-accent-lime/10 text-accent-lime border border-accent-lime/25">
                            1:1 CALL
                          </span>
                        </div>
                        <span className="text-[10px] text-secondary-text block truncate">
                          Architecture Advisory
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-secondary-text group-hover:text-accent-lime group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </a>
                )}

                {personal.buyMeACoffeeUrl && (
                  <a
                    href={personal.buyMeACoffeeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-surface-container/70 hover:bg-surface-container border border-subtle-border hover:border-yellow-400/60 rounded-xl p-3 flex items-center justify-between transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg overflow-hidden bg-surface-container-high border border-subtle-border shrink-0 relative">
                        <Image
                          src="/images/platforms/buymeacoffee.png"
                          alt="Buy Me a Coffee"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-primary-text group-hover:text-yellow-400 transition-colors">
                            Coffee
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/25">
                            SUPPORT
                          </span>
                        </div>
                        <span className="text-[10px] text-secondary-text block truncate">
                          Indie Mobile Tools
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-secondary-text group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </a>
                )}
              </div>
            </div>

            {/* Developer Profiles & Ecosystem Badges */}
            <div className="pt-5 mt-5 border-t border-subtle-border/60">
              <span className="font-mono text-[10px] text-secondary-text uppercase tracking-wider block mb-2 font-medium">
                Developer Profiles &amp; Networks
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://github.com/KaushalVasava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-surface-container border border-subtle-border hover:border-accent-lime/60 text-secondary-text hover:text-accent-lime transition-all flex items-center gap-1.5 font-mono text-xs"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <span className="text-[10px] text-secondary/60">(37+)</span>
                </a>
                <a
                  href="https://medium.com/@KaushalVasava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-surface-container border border-subtle-border hover:border-accent-lime/60 text-secondary-text hover:text-accent-lime transition-all flex items-center gap-1.5 font-mono text-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Medium</span>
                  <span className="text-[10px] text-secondary/60">(3.6K+ · 50K Views)</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kaushal-vasava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-surface-container border border-subtle-border hover:border-accent-lime/60 text-secondary-text hover:text-accent-lime transition-all flex items-center gap-1.5 font-mono text-xs"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <span className="text-[10px] text-secondary/60">(5K+)</span>
                </a>
                {personal.instagramUrl && (
                  <a
                    href={personal.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-surface-container border border-subtle-border hover:border-pink-500/60 text-secondary-text hover:text-pink-400 transition-all flex items-center gap-1.5 font-mono text-xs"
                  >
                    <span>Instagram</span>
                    <span className="text-[10px] text-secondary/60">(@devhub)</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Functional Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-card-surface rounded-2xl border border-subtle-border p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs text-secondary-text uppercase mb-2"
                  >
                    Your Name <span className="text-accent-lime">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={`w-full bg-surface-container-lowest border rounded px-4 py-3 text-sm text-primary-text placeholder:text-secondary-text/40 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-400 focus:border-red-400' : 'border-subtle-border focus:border-accent-lime'
                    }`}
                    placeholder="e.g. Alex Henderson"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs text-secondary-text uppercase mb-2"
                  >
                    Your Email <span className="text-accent-lime">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`w-full bg-surface-container-lowest border rounded px-4 py-3 text-sm text-primary-text placeholder:text-secondary-text/40 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-400 focus:border-red-400' : 'border-subtle-border focus:border-accent-lime'
                    }`}
                    placeholder="alex@company.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Project Type Pills */}
              <div>
                <label className="block font-mono text-xs text-secondary-text uppercase mb-2">
                  Project Scope / Technology
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectOptions.map((opt) => (
                    <label key={opt.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="project_type"
                        value={opt.value}
                        checked={formData.projectType === opt.value}
                        onChange={() =>
                          setFormData({ ...formData, projectType: opt.value })
                        }
                        className="sr-only peer"
                      />
                      <span className="font-mono text-xs px-3 py-1.5 rounded border border-subtle-border bg-surface-container-lowest text-secondary-text peer-checked:bg-accent-lime peer-checked:text-surface-canvas peer-checked:border-accent-lime peer-checked:font-medium transition-all inline-block">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Expectation */}
              <div>
                <label
                  htmlFor="contact-budget"
                  className="block font-mono text-xs text-secondary-text uppercase mb-2"
                >
                  Target Budget Range (Optional)
                </label>
                <select
                  id="contact-budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full bg-surface-container-lowest border border-subtle-border rounded px-4 py-3 text-sm text-primary-text focus:outline-none focus:border-accent-lime transition-colors"
                >
                  <option value="3k-5k">$3,000 – $5,000</option>
                  <option value="5k-10k">$5,000 – $10,000</option>
                  <option value="10k-20k">$10,000 – $20,000</option>
                  <option value="enterprise">&gt; $20,000 / Retainer</option>
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label
                  htmlFor="contact-brief"
                  className="block font-mono text-xs text-secondary-text uppercase mb-2"
                >
                  Project Brief <span className="text-accent-lime">*</span>
                </label>
                <textarea
                  id="contact-brief"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full bg-surface-container-lowest border rounded px-4 py-3 text-sm text-primary-text placeholder:text-secondary-text/40 focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-400 focus:border-red-400' : 'border-subtle-border focus:border-accent-lime'
                  }`}
                  placeholder="Describe your current app goals, timeline, and architectural requirements..."
                  required
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-accent-lime text-surface-canvas font-mono text-xs font-semibold py-3.5 rounded hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Form Status Banner */}
              {status === 'success' && (
                <div
                  role="status"
                  className="p-3.5 rounded bg-surface-container-lowest border border-accent-lime/40 text-xs font-mono text-accent-lime flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="p-3.5 rounded bg-surface-container-lowest border border-red-500/40 text-xs font-mono text-red-400 flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
