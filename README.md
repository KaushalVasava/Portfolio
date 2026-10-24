# Kaushal Vasava — Personal Portfolio Website

Production-ready personal portfolio website for **Kaushal Vasava**, Mobile Software Engineer specializing in Native Android (Kotlin, Jetpack Compose), Kotlin Multiplatform (KMP), and React Native.

Built strictly according to the approved **Stitch** design specification, featuring an architectural dark theme, monospaced diagnostic labels, electric lime accents, interactive smartphone and hardware mockups, and centralized configuration.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Geist, Inter, JetBrains Mono
- **API**: Next.js Server Route Handler (`/api/contact`)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts  # Server-side contact form handler
│   ├── globals.css           # Design tokens, scrollbar, theme variables
│   ├── layout.tsx            # Root layout, Google Fonts, SEO & OpenGraph
│   └── page.tsx              # Main page assembling all 10 portfolio sections
├── components/
│   ├── About.tsx             # "Engineer by craft" & 3 focus pillars
│   ├── CaseStudies.tsx       # 3 quantitative engineering case studies
│   ├── Contact.tsx           # Validated contact form & direct reach-out info
│   ├── Footer.tsx            # Wordmark, links, and dynamic copyright year
│   ├── Hero.tsx              # Headline, CTA buttons, and phone mockups
│   ├── Metrics.tsx           # Compact 5-column credibility statistics strip
│   ├── Navbar.tsx            # Sticky header with status badge & mobile menu
│   ├── ProjectCard.tsx       # Reusable project card with custom mockups
│   ├── Projects.tsx          # Featured projects bento grid
│   ├── Services.tsx          # 3 freelance engineering services cards
│   ├── Skills.tsx            # 4-group Technical Expertise Matrix
│   └── Writing.tsx           # Medium articles & featured GitHub repository
├── data/
│   └── portfolio.ts          # Central source of truth for all content
└── types/
    └── portfolio.ts          # TypeScript interfaces for portfolio entities
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.17.0+ or v19+)
- npm, yarn, or pnpm

### 1. Installation

```bash
npm install
```

### 2. Environment Setup (Optional)

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

You can optionally configure `CONTACT_WEBHOOK_URL` to forward submissions to Slack, Discord, Zapier, or an email service.

### 3. Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build

To test and build the production bundle:

```bash
npm run build
npm run start
```

---

## ⚙️ Updating Content

All statistics, projects, case studies, skills, articles, and personal details are centralized in **[`src/data/portfolio.ts`](file:///c:/Kaushal/Website/Profile/src/data/portfolio.ts)**:

- **Metrics**: Update download counts, Play Store apps, rating, or follower numbers.
- **Projects**: Add, remove, or edit project links, tags, and descriptions.
- **Case Studies**: Modify quantitative performance benchmarks or architectural stories.
- **Skills**: Update your engineering stack across Android, Networking, Cross-Platform, and Quality.

---

## 🚢 Deployment

This project is fully ready for deployment on **Vercel**, **Netlify**, or **AWS Amplify**:

### Deploy on Vercel:
1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Set any optional environment variables from `.env.example`.
4. Deploy with one click.
