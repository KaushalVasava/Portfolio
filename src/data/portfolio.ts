import { PortfolioData } from '@/types/portfolio';
import { getAssetPath } from '@/utils/basePath';

const rawPortfolioData: PortfolioData = {
  personal: {
    name: 'KAUSHAL VASAVA',
    title: 'Mobile Software Engineer',
    statusText: 'Available for New Projects',
    availableForWork: true,
    location: 'Surat, India · Global Remote',
    email: 'kaushalvasava.dev@gmail.com',
    responseTime: 'Usually within 24 hours',
    timezone: 'IST (UTC +5:30) · Global Overlap',
    headline: 'Building Mobile Products That People',
    headlineHighlight: 'Love to Use',
    bio: 'Android-first Mobile Engineer with 4.5+ years of experience building production applications used by thousands of people.',
    aboutHeadline: 'Engineer by craft. Builder by habit.',
    aboutParagraphs: [
      "With over 4.5 years of mobile engineering experience, I specialize in building high-performance Android applications and cross-platform solutions using Kotlin Multiplatform and React Native. My focus is on delivering fluid UI, deterministic offline state, and crash-resilient architectures.",
      "Alongside client systems, I have engineered and published 14+ independent apps on Google Play with over 100K+ installs. I actively contribute to the mobile community through open-source repositories and technical writing on Medium read by thousands of developers."
    ],
    pillars: [
      {
        icon: 'Rocket',
        title: 'Idea to Release',
        description: 'Full lifecycle development from UI architecture and local persistence to Google Play Console release.'
      },
      {
        icon: 'Zap',
        title: 'Extreme Reliability',
        description: 'Targeting >99.5% crash-free sessions and smooth sub-16ms UI render loops.'
      },
      {
        icon: 'BookOpen',
        title: 'Sharing in Public',
        description: 'Writing on Kotlin Coroutines, Jetpack Compose, and KMP read by 50K+ developers.'
      }
    ],
    photoUrl: '/images/profile.png',
    topmateUrl: 'https://topmate.io/kaushal_vasava',
    buyMeACoffeeUrl: 'https://www.buymeacoffee.com/kaushal.developer',
    upworkUrl: 'https://www.upwork.com/freelancers/~0109783b1230bb5bd0?viewMode=1&s=996364627857502209',
    fiverrUrl: 'https://www.fiverr.com/kaushalmvasava',
    instagramUrl: 'https://www.instagram.com/its.devhub/',
    twitterUrl: 'https://twitter.com/KaushalVasavaIn',
    playStoreDevUrl: 'https://play.google.com/store/apps/dev?id=7184172255976639521'
  },
  metrics: [
    {
      value: '100K+',
      label: 'App Installs',
      highlight: false
    },
    {
      value: '32K+',
      label: 'Active Users',
      highlight: true
    },
    {
      value: '14+',
      label: 'Published Apps',
      highlight: false
    },
    {
      value: '4.5',
      label: 'Average Rating',
      highlight: false,
      hasRatingStar: true
    }
  ],
  projects: [
    // 1. Own Apps (6 apps)
    {
      id: 'documind',
      name: 'PDF Scanner & Document Manager',
      tagline: 'Document Scanner & OCR',
      description: 'Scan to PDF, extract text with on-device OCR, and organize documents with folder management. Built with Jetpack Compose, CameraX, and ML Kit.',
      badge: 'OWN APP · PLAY STORE',
      badgeType: 'accent',
      techStack: ['Jetpack Compose', 'ML Kit', 'CameraX', 'Kotlin'],
      engineStats: {
        label: 'Computer Vision',
        value: 'ML Kit',
        sublabel: 'Edge detection & perspective correction'
      },
      category: 'own',
      mockupType: 'scanner',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.kaushalvasava.apps.documind',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/documind_icon.png',
      previewImageUrl: '/images/projects/documind_feature.png',
      screenshotUrl: '/images/projects/documind_shot.png'
    },
    {
      id: 'paint',
      name: 'Paint — Sketchbook & Drawing',
      tagline: 'Vector Drawing & Sketchbook',
      description: 'Intuitive vector drawing, coloring & sketch pad with 100K+ downloads. Built using Custom View, Kotlin, MVVM architecture, and Firebase.',
      badge: '100K+ DOWNLOADS',
      badgeType: 'accent',
      techStack: ['Android', 'Kotlin', 'Custom View', 'MVVM', 'Firebase', 'Multi-language'],
      engineStats: {
        label: 'Performance',
        value: '60 FPS',
        sublabel: 'Low-latency stroke rendering'
      },
      category: 'own',
      mockupType: 'drawing',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.lahsuak.apps.paint',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/paint_preview.png',
      previewImageUrl: '/images/apps/paint.png',
      screenshotUrl: '/images/apps/paint.png'
    },
    {
      id: 'tasks',
      name: 'Tasks: To-do lists & Reminders',
      tagline: 'Task Lists & Reminders',
      description: 'Task, subtask and checklist manager built with Jetpack Compose, Room database for offline persistence, and WorkManager for scheduled notifications.',
      badge: 'PRODUCTIVITY',
      badgeType: 'secondary',
      techStack: ['Android', 'Kotlin', 'Jetpack Compose', 'Room', 'Notification', 'WorkManager', 'Multi-language', 'MVVM'],
      engineStats: {
        label: 'Persistence',
        value: 'Room DB',
        sublabel: 'Offline-first reactive architecture'
      },
      category: 'own',
      mockupType: 'task-list',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.lahsuak.apps.tasks',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/tasks_preview.png',
      previewImageUrl: '/images/apps/tasks.png',
      screenshotUrl: '/images/apps/tasks.png'
    },
    {
      id: 'app-manager',
      name: 'Quick Launcher & App Manager',
      tagline: 'Package Inspector & Launcher',
      description: 'Advanced app manager and quick launcher for inspecting installed packages, manifest permissions, signature details, and sharing APKs.',
      badge: 'SYSTEM UTILITY',
      badgeType: 'secondary',
      techStack: ['Android', 'Jetpack Compose', 'Device Info', 'Kotlin', 'Room', 'MVVM'],
      engineStats: {
        label: 'Diagnostics',
        value: 'Deep Audit',
        sublabel: 'Fast search across installed apps'
      },
      category: 'own',
      mockupType: 'package-grid',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.lahsuak.apps.appmanager',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/apps/appmanager.png',
      previewImageUrl: '/images/projects/appmanager_feature.png',
      screenshotUrl: '/images/projects/appmanager_feature.png'
    },
    {
      id: 'sangeet',
      name: 'Sangeet — Offline Music Player',
      tagline: 'Offline Music Player',
      description: 'Offline audio player with 10K+ downloads. Built with Jetpack Media3 ExoPlayer, custom equalizer profiles, and local audio metadata indexing.',
      badge: '10K+ DOWNLOADS',
      badgeType: 'secondary',
      techStack: ['Android', 'Kotlin', 'Media3', 'ExoPlayer', 'Foreground Service', 'XML Views', 'MVVM'],
      engineStats: {
        label: 'Audio Engine',
        value: 'ExoPlayer',
        sublabel: 'Background playback service'
      },
      category: 'own',
      mockupType: 'audio',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.lasuak.musicplayer',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/sangeet_preview.png',
      previewImageUrl: '/images/apps/sangeet.png',
      screenshotUrl: '/images/apps/sangeet.png'
    },
    {
      id: 'studyghar',
      name: 'StudyGhar Stationery',
      tagline: 'Online Stationery Store',
      description: 'Online stationery e-commerce application delivering books, office supplies, and school materials with localized product catalogs and offline cart caching.',
      badge: 'E-COMMERCE',
      badgeType: 'secondary',
      techStack: ['Android', 'Kotlin', 'Flow', 'Coroutines', 'Firebase', 'E-Commerce', 'MVVM'],
      engineStats: {
        label: 'Catalog',
        value: 'Offline Cache',
        sublabel: 'Localized product store'
      },
      category: 'own',
      mockupType: 'ecommerce',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.kaushalvasava.org.apps.studygharstationery',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/studyghar_icon.png',
      previewImageUrl: '/images/projects/studyghar_shot.png',
      screenshotUrl: '/images/projects/studyghar_shot.png'
    },

    // 2. Companies & Freelance Work Apps (9 apps)
    {
      id: 'onlocation-mobile',
      name: 'OnLocation Mobile (WOL Mobile)',
      tagline: 'Workplace Safety & Lone Worker Protection',
      description: 'Enterprise workplace safety companion app for MRI OnLocation. Features automated background geofenced sign-in/out, desk booking, and emergency SOS alerts with real-time location sharing.',
      badge: 'ENTERPRISE / MRI',
      badgeType: 'accent',
      techStack: ['Android', 'Jetpack Compose', 'Geofencing', 'WorkManager', 'Offline Sync', 'Satellite Connectivity', 'Paging 3', 'Google Maps', 'Location Services', 'Notification', 'Room', 'MVC', 'MVVM'],
      engineStats: {
        label: 'Location',
        value: 'Geofencing',
        sublabel: 'Automated check-in & emergency SOS'
      },
      category: 'commercial',
      mockupType: 'marketplace',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.whosonlocation.wolmobile2',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/onlocation_icon.png',
      previewImageUrl: '/images/projects/onlocation_feature.png',
      screenshotUrl: '/images/projects/onlocation_feature.png'
    },
    {
      id: 'palace-liquid',
      name: 'Palace — Property Inspections',
      tagline: 'Property Condition Audits',
      description: 'Mobile inspection and condition reporting application for property managers in the Palace Liquid ecosystem. Conduct on-site photo/video condition audits, assign work orders, and sync data back to the central database.',
      badge: 'ENTERPRISE / MRI',
      badgeType: 'accent',
      techStack: ['Kotlin', 'Android', 'CameraX', 'Realm', 'REST API', 'WorkManager', 'Google Maps', 'MVP', 'Notification'],
      engineStats: {
        label: 'Sync Pipeline',
        value: 'Offline Sync',
        sublabel: 'On-site condition audits with auto-sync'
      },
      category: 'commercial',
      mockupType: 'marketplace',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.realbaselive.liquidpalace',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/palace_icon.png',
      previewImageUrl: '/images/projects/palace_feature.png',
      screenshotUrl: '/images/projects/palace_feature.png'
    },
    {
      id: 'mri-myplace',
      name: 'MRI MyPlace',
      tagline: 'Tenant & Owner Portal',
      description: 'Flagship tenant and landlord engagement application developed for MRI Software. Enables tenants to log maintenance requests with photos, view lease timelines, and review inspection notices, while property owners track financials in real time.',
      badge: 'GLOBAL ENTERPRISE',
      badgeType: 'accent',
      techStack: ['React Native', 'Android', 'iOS', 'Web', 'Expo', 'Redux Toolkit', 'REST API', 'Clarity', 'GA4', 'Firebase', 'Notification'],
      engineStats: {
        label: 'Architecture',
        value: 'Compose + MVI',
        sublabel: 'Tenant and owner engagement'
      },
      category: 'commercial',
      mockupType: 'marketplace',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.mri.myplace',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/mri_myplace_icon.png',
      previewImageUrl: '/images/projects/mri_myplace_feature.png',
      screenshotUrl: '/images/projects/mri_myplace_feature.png'
    },
    {
      id: 'proptechlabs-pm',
      name: 'Proptech Labs Property Manager',
      tagline: 'Digital Inspection & Maintenance',
      description: 'End-to-end inspection, maintenance triage, and tenant communication suite for real estate agencies. Features compliant report templates, voice-to-text dictation, and trust accounting integrations.',
      badge: 'PROPTECH / B2B',
      badgeType: 'secondary',
      techStack: ['Flutter', 'Dart', 'GetX', '360 Camera', 'Inspection'],
      engineStats: {
        label: 'Workflows',
        value: 'Templates',
        sublabel: 'Routine inspection reporting'
      },
      category: 'commercial',
      mockupType: 'marketplace',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.proptechlabs.pm',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: true,
      iconUrl: '/images/projects/proptechlabs_icon.png',
      previewImageUrl: '/images/projects/proptechlabs_feature.png',
      screenshotUrl: '/images/projects/proptechlabs_feature.png'
    },
    {
      id: 'bricks-tenant',
      name: 'B + A Tenant (Bricks+Agent)',
      tagline: 'Maintenance Reporting & Tracking',
      description: 'Tenant maintenance portal enabling residents to report household maintenance issues in under a minute with photo evidence, chat directly with contractors, and track trade arrival times.',
      badge: 'PROPTECH TENANT',
      badgeType: 'secondary',
      techStack: ['Android', 'XML Views', 'CameraX', 'Kotlin', 'Java', 'REST API', 'MVC', 'Notification'],
      engineStats: {
        label: 'Dispatch',
        value: 'Live Tracking',
        sublabel: 'Fast issue reporting with photo evidence'
      },
      category: 'commercial',
      mockupType: 'marketplace',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.bricksandagent.android.tenant',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: false,
      iconUrl: '/images/projects/bricks_tenant_icon.png',
      previewImageUrl: '/images/projects/bricks_tenant_feature.png',
      screenshotUrl: '/images/projects/bricks_tenant_feature.png'
    },
    {
      id: 'bricks-owner',
      name: 'B + A Owner (Bricks+Agent)',
      tagline: 'Maintenance Oversight & Approvals',
      description: 'Property owner and landlord mobile hub for the Bricks+Agent maintenance ecosystem. Allows property owners to review contractor quotes, approve repair invoices, and track maintenance progress in real time.',
      badge: 'PROPTECH OWNER',
      badgeType: 'secondary',
      techStack: ['Android', 'XML Views', 'CameraX', 'Kotlin', 'Java', 'REST API', 'MVC', 'Notification'],
      engineStats: {
        label: 'Approvals',
        value: 'Instant Sign-Off',
        sublabel: 'Trade quote & invoice review'
      },
      category: 'commercial',
      mockupType: 'marketplace',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.bricksandagent.android.owner',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: false,
      iconUrl: '/images/projects/bricks_owner_icon.png',
      previewImageUrl: '/images/projects/bricks_owner_feature.png',
      screenshotUrl: '/images/projects/bricks_owner_feature.png'
    },
    {
      id: 'infryve',
      name: 'Infryve — One Stop for Infra Needs',
      tagline: 'B2B Infrastructure Marketplace',
      description: 'Comprehensive B2B marketplace platform for civil engineering and construction infrastructure supplies, matching procurement teams with verified wholesale distributors.',
      badge: 'COMMERCIAL B2B',
      badgeType: 'secondary',
      techStack: ['Android', 'Kotlin', 'Coroutines', 'REST API', 'Firebase', 'Cashfree Payment Gateway', 'E-Commerce', 'MVVM', 'Notification'],
      engineStats: {
        label: 'Procurement',
        value: 'Enterprise',
        sublabel: 'Wholesale materials marketplace'
      },
      category: 'commercial',
      mockupType: 'marketplace',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.ace.app.infryve',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: false,
      iconUrl: '/images/projects/infryve_icon.png',
      previewImageUrl: '/images/projects/infryve_shot.png',
      screenshotUrl: '/images/projects/infryve_shot.png'
    },
    {
      id: 'infryve-seller',
      name: 'Infryve Seller',
      tagline: 'Wholesale Vendor Logistics',
      description: 'Companion merchant application giving suppliers the power to manage catalog inventories, fulfill incoming contractor orders, and track fulfillment milestones.',
      badge: 'MERCHANT APP',
      badgeType: 'secondary',
      techStack: ['Android', 'Kotlin', 'Coroutines', 'REST API', 'Firebase', 'MVVM', 'Notification'],
      engineStats: {
        label: 'Orders',
        value: 'Real-time',
        sublabel: 'Merchant catalog & fulfillment'
      },
      category: 'commercial',
      mockupType: 'marketplace',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.ace.app.seller',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: false,
      iconUrl: '/images/projects/infryve_seller_icon.png',
      previewImageUrl: '/images/projects/infryve_seller_shot.png',
      screenshotUrl: '/images/projects/infryve_seller_shot.png'
    },
    {
      id: 'gallery',
      name: 'Gallery — Photo Manager',
      tagline: 'Photo & Video Manager',
      description: 'High-performance offline gallery application for viewing photos, 4K videos, and albums with metadata filtering, quick sharing, and low-memory footprint.',
      badge: 'FREELANCE / UTILITY',
      badgeType: 'secondary',
      techStack: ['MediaStore API', 'Kotlin', 'Glide', 'Exif'],
      engineStats: {
        label: 'Media Index',
        value: 'Fast Query',
        sublabel: 'Low-memory media indexing'
      },
      category: 'commercial',
      mockupType: 'gallery',
      actionUrl: 'https://play.google.com/store/apps/details?id=photo.gallery.photo.album.photosmanager',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: false,
      iconUrl: '/images/projects/gallery_icon.png',
      previewImageUrl: '/images/projects/gallery_feature.png',
      screenshotUrl: '/images/projects/gallery_shot.png'
    },

    // 3. GitHub Projects (2 projects)
    {
      id: 'xphotogram',
      name: 'XPhotogram Multiplatform',
      tagline: 'Compose Multiplatform',
      description: 'Full-featured social photography application supporting Android, iOS, and Desktop. Demonstrates shared business logic, SQLDelight local caching, and Ktor client.',
      badge: 'OPEN SOURCE KMP',
      badgeType: 'secondary',
      techStack: ['KMP', 'Compose Multiplatform', 'Ktor', 'SQLDelight'],
      engineStats: {
        label: 'Multiplatform',
        value: 'iOS + Android',
        sublabel: 'Shared Kotlin logic and UI'
      },
      category: 'opensource',
      mockupType: 'kmp-code',
      actionUrl: 'https://github.com/KaushalVasava/XPhotogram_KMP',
      actionText: 'GitHub Repo',
      actionType: 'github',
      featured: true,
      iconUrl: '/images/projects/xphotogram_preview.png',
      previewImageUrl: '/images/projects/xphotogram_shot.png',
      screenshotUrl: '/images/projects/xphotogram_shot.png'
    },
    {
      id: 'compose-basics',
      name: 'Jetpack Compose Basics',
      tagline: 'Modern Android UI Reference',
      description: 'Open-source reference showcasing declarative UI patterns, state hoisting, custom layouts, and smooth transition animations in Jetpack Compose.',
      badge: 'OPEN SOURCE',
      badgeType: 'secondary',
      techStack: ['Jetpack Compose', 'Material 3', 'Kotlin', 'Coroutines'],
      engineStats: {
        label: 'Patterns',
        value: 'Material 3',
        sublabel: 'State hoisting & animation patterns'
      },
      category: 'opensource',
      mockupType: 'kmp-code',
      actionUrl: 'https://github.com/KaushalVasava/JetPackCompose_Basic',
      actionText: 'GitHub Repo',
      actionType: 'github',
      featured: false,
      iconUrl: '/images/projects/xphotogram_preview.png',
      previewImageUrl: '/images/projects/xphotogram_shot.png',
      screenshotUrl: '/images/projects/xphotogram_shot.png'
    }
  ],
  caseStudies: [
    {
      id: 'reliability',
      category: 'RELIABILITY & STABILITY',
      subCategory: 'ANR & CRASH ANALYSIS',
      title: 'Mobile App Reliability: Raising Crash-Free Users from 89.7% to 99.8%',
      summary: 'Diagnosed concurrent race conditions inside background media ingestion pipelines.',
      problem: 'Background media operations caused thread contention, unhandled coroutine cancellations, and periodic Main-Thread lockups resulting in ANRs and a sub-90% crash-free user rate.',
      engineeringApproach: 'Established structured coroutine lifecycles using SupervisorJob, safe Room database transaction boundaries, and thread-safe queues for media processing.',
      technologies: ['Coroutines', 'Room', 'Systrace & Perfetto', 'LeakCanary'],
      metrics: [
        {
          label: 'Crash-Free Sessions',
          before: '89.7%',
          value: '99.8%',
          highlight: true
        },
        {
          label: 'ANR Rate',
          value: '< 0.05%',
          highlight: true,
          note: '(Google Play Vital Green)'
        }
      ]
    },
    {
      id: 'modernization',
      category: 'ARCHITECTURE MIGRATION',
      subCategory: 'LEGACY TO MODERN',
      title: 'Modernizing Android UI: ViewBinding & XML to Declarative Jetpack Compose',
      summary: 'Authored an incremental migration plan replacing 45+ legacy XML layouts without halting active feature development.',
      problem: 'Fragmented ViewBinding boilerplate and complex XML layout hierarchies slowed development cycles and complicated UI state synchronization.',
      engineeringApproach: 'Designed a unified Compose theme and design tokens, isolated UI state with unidirectional ViewModels, and incrementally replaced legacy XML fragments screen-by-screen while preserving domain and repository layers.',
      technologies: ['Jetpack Compose', 'Material 3', 'MVI Architecture', 'Coroutines'],
      metrics: [
        {
          label: 'UI Boilerplate Reduction',
          value: '-42% LOC',
          highlight: true
        },
        {
          label: 'Feature Velocity',
          value: 'Faster Delivery',
          highlight: false
        }
      ]
    },
    {
      id: 'cross-platform',
      category: 'CROSS-PLATFORM PERFORMANCE',
      subCategory: 'TURBOMODULES & JNI',
      title: 'React Native & Kotlin JNI: High-Throughput Background Sync Engine',
      summary: 'Bridged high-frequency cryptographic hashing and disk synchronization natively via JNI and custom TurboModules.',
      problem: 'Serializing large data payloads across the standard JavaScript bridge caused frame drops and sluggish background synchronization.',
      engineeringApproach: 'Implemented native TurboModules in Kotlin with WorkManager background scheduling, moving data-intensive hashing and file synchronization off the JavaScript thread onto dedicated background workers.',
      technologies: ['React Native TurboModules', 'Kotlin', 'WorkManager', 'TypeScript'],
      metrics: [
        {
          label: 'Sync Latency',
          value: '-68% Overhead',
          highlight: true
        },
        {
          label: 'Bridge Serialization',
          value: 'Zero JS Freezes',
          highlight: false
        }
      ]
    }
  ],
  skillCategories: [
    {
      title: 'Android Ecosystem',
      icon: 'Smartphone',
      skills: [
        'Kotlin',
        'Jetpack Compose & Material 3',
        'Coroutines & Asynchronous Flow',
        'Room Database & SQLite',
        'WorkManager & Services'
      ],
      tag: 'Clean Architecture · MVI / MVVM'
    },
    {
      title: 'Networking & Architecture',
      icon: 'Network',
      skills: [
        'Retrofit & OkHttp',
        'Ktor Client (Multiplatform)',
        'Kotlinx Serialization',
        'Dagger Hilt & Koin DI',
        'SQLDelight Persistent Cache'
      ],
      tag: 'Offline-First & Reactive Data'
    },
    {
      title: 'Cross-Platform',
      icon: 'Layers',
      skills: [
        'Kotlin Multiplatform (KMP)',
        'Compose Multiplatform',
        'React Native & TypeScript',
        'Native Modules & JNI Bridge',
        'Decompose Navigation'
      ],
      tag: 'Shared Logic & Native UI'
    },
    {
      title: 'Quality & Release',
      icon: 'CheckCircle2',
      skills: [
        'CI/CD & GitHub Actions',
        'Google Play Console Deployment',
        'ProGuard & R8 Optimization',
        'Android Studio Profiler (Memory, CPU, ANR)',
        'JUnit & Mockk Unit Testing'
      ],
      tag: 'Performance & Production Quality'
    }
  ],
  articles: [
    {
      title: 'Android Studio Journeys: Test with Plain English',
      category: 'AI & TESTING',
      readTime: '5 MIN READ',
      year: '2024',
      url: 'https://medium.com/@KaushalVasava/android-studio-journeys-test-your-android-app-with-plain-english-no-code-required-1e747b97b7cd',
      description: 'How Google’s AI-powered testing feature allows developers to automate test instructions using natural language without writing repetitive test boilerplate.',
      imageUrl: '/images/articles/android_studio_journeys.webp'
    },
    {
      title: 'Jetpack Compose Internals: A Deep Dive',
      category: 'JETPACK COMPOSE',
      readTime: '7 MIN READ',
      year: '2024',
      url: 'https://medium.com/@KaushalVasava/jetpack-compose-internals-a-deep-dive-6d8b2c547c3a',
      description: 'How compose really works under the hood: recomposition mechanics, remember keys, and state invalidation trees.',
      imageUrl: '/images/articles/compose_internals.webp'
    },
    {
      title: 'Kotlin Multi-Platform Project Setup Guide',
      category: 'KOTLIN MULTIPLATFORM',
      readTime: '8 MIN READ',
      year: '2024',
      url: 'https://medium.com/stackademic/kotlin-multi-platform-project-setup-guide-340aae9b3bea',
      description: 'Practical guide to configuring a KMP project in Android Studio, sharing networking, persistent caching, and common view components.',
      imageUrl: '/images/articles/kmp_setup.png'
    },
    {
      title: 'What is CI-CD? Build CI-CD Pipeline in Android Using GitHub Actions',
      category: 'DEVOPS & RELEASE',
      readTime: '6 MIN READ',
      year: '2024',
      url: 'https://medium.com/@KaushalVasava/what-is-ci-cd-how-to-build-ci-cd-pipeline-in-android-using-github-actions-60f69805657b',
      description: 'Automate build artifacts, automated unit tests, and Play Console release deployments with GitHub Actions pipelines.',
      imageUrl: '/images/articles/cicd.png'
    }
  ],
  featuredRepo: {
    name: 'XPhotogram_KMP',
    badge: 'FEATURED REPOSITORY',
    description: 'Open source Kotlin Multiplatform social platform demonstration featuring clean architecture, Compose Multiplatform, SQLDelight, and MVI state orchestration across Android, iOS, and Desktop.',
    highlights: [
      'Android, iOS & Desktop Shared Targets',
      '100% Kotlin Multiplatform UI',
      'Offline-first sync with SQLDelight & Ktor'
    ],
    url: 'https://github.com/KaushalVasava/XPhotogram_KMP'
  },
  services: [
    {
      id: 'android-dev',
      title: 'Android App Development',
      description: 'Full-cycle native Android development using Kotlin and Jetpack Compose with clean architecture, offline caching, and Google Play Store deployment.',
      icon: 'Smartphone',
      actionText: 'Discuss Android Project',
      targetAnchor: '#contact'
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform Mobile Development',
      description: 'Cross-platform app development using Kotlin Multiplatform and React Native, sharing business logic while retaining native UI responsiveness.',
      icon: 'Repeat',
      actionText: 'Discuss Cross-Platform',
      targetAnchor: '#contact'
    },
    {
      id: 'audit-tuning',
      title: 'App Audit & Performance Optimization',
      description: 'Diagnostic profiling to resolve ANR freezes, memory leaks, and UI frame drops to improve crash-free rates and Google Play vitals.',
      icon: 'Gauge',
      actionText: 'Request App Audit',
      targetAnchor: '#contact'
    }
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/KaushalVasava',
      icon: 'Github',
      label: 'github.com/KaushalVasava'
    },
    {
      name: 'Play Store',
      url: 'https://play.google.com/store/apps/dev?id=7184172255976639521',
      icon: 'Play',
      label: 'Google Play Store'
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~0109783b1230bb5bd0?viewMode=1&s=996364627857502209',
      icon: 'Briefcase',
      label: 'Upwork Top Rated'
    },
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/kaushalmvasava',
      icon: 'CheckCircle2',
      label: 'Fiverr Pro'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kaushal-vasava',
      icon: 'Linkedin',
      label: 'linkedin.com/in/kaushal-vasava'
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@KaushalVasava',
      icon: 'BookOpen',
      label: 'medium.com/@KaushalVasava'
    },
    {
      name: 'Topmate',
      url: 'https://topmate.io/kaushal_vasava',
      icon: 'Users',
      label: 'topmate.io/kaushal_vasava'
    },
    {
      name: 'Twitter / X',
      url: 'https://twitter.com/KaushalVasavaIn',
      icon: 'Twitter',
      label: 'twitter.com/KaushalVasavaIn'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/its.devhub/',
      icon: 'Instagram',
      label: '@its.devhub'
    },
    {
      name: 'Buy Me a Coffee',
      url: 'https://www.buymeacoffee.com/kaushal.developer',
      icon: 'Coffee',
      label: 'buymeacoffee.com/kaushal.developer'
    },
    {
      name: 'Email',
      url: 'mailto:kaushalvasava.dev@gmail.com',
      icon: 'Mail',
      label: 'kaushalvasava.dev@gmail.com'
    }
  ],
  testimonials: [
    {
      id: 'play-paint-1',
      name: 'Eddy Gomez',
      role: 'Verified Google Play User',
      company: 'Paint — Sketchbook & Drawing',
      platform: 'Google Play',
      rating: 5,
      date: 'Dec 2023',
      projectTitle: 'Paint — Sketchbook & Drawing (100K+ Installs)',
      comment: 'This is a very good way to learn how to sketch and draw your ideas and have them saved in any files you want to have them printed out later. It\'s easy to practice and learn how to use certain tools and techniques to help you out and fix your drawing idea. I recommend it.',
      verified: true,
      tags: ['Custom View Canvas', 'File Export', '100K+ Installs'],
      appKey: 'paint'
    },
    {
      id: 'play-paint-2',
      name: 'Kimberly Nichols',
      role: 'Garment Designer',
      company: 'Paint — Sketchbook & Drawing',
      platform: 'Google Play',
      rating: 5,
      date: 'Dec 2023',
      projectTitle: 'Paint — Sketchbook & Drawing (100K+ Installs)',
      comment: 'Simple, user-friendly app that allows me to quickly sketch up ideas for garment designs. I\'m not an artist by any stretch, so I needed something that would easily allow me to get my design ideas out of my head.',
      verified: true,
      tags: ['Design Ideation', 'Zero Lag', 'Touch Responsiveness'],
      appKey: 'paint'
    },
    {
      id: 'play-paint-3',
      name: 'James a LaFlame jr',
      role: 'Power User',
      company: 'Paint — Sketchbook & Drawing',
      platform: 'Google Play',
      rating: 5,
      date: 'May 2024',
      projectTitle: 'Paint — Sketchbook & Drawing (100K+ Installs)',
      comment: 'There isn\'t a phone that I won\'t have this app on it within a few hours! One of my favorites! 5*',
      verified: true,
      tags: ['Daily Driver', 'Top Utility', '5-Star Review'],
      appKey: 'paint'
    },
    {
      id: 'play-paint-4',
      name: 'petualang siber',
      role: 'Mobile Creator',
      company: 'Paint — Sketchbook & Drawing',
      platform: 'Google Play',
      rating: 5,
      date: 'Nov 2023',
      projectTitle: 'Paint — Sketchbook & Drawing (100K+ Installs)',
      comment: 'Thanks a lot for this application! It is so easy, very good and helpful for animation drawing as well as mobile friendly! Highly recommended for digital sketching.',
      verified: true,
      tags: ['Mobile Friendly', 'Animation Sketch', 'Stroke Interpolation'],
      appKey: 'paint'
    },
    {
      id: 'play-paint-5',
      name: 'Barke Juma',
      role: 'Verified Google Play User',
      company: 'Paint — Sketchbook & Drawing',
      platform: 'Google Play',
      rating: 5,
      date: 'Sep 2023',
      projectTitle: 'Paint — Sketchbook & Drawing (100K+ Installs)',
      comment: 'It\'s the best painting app I ever used! Extremely lightweight, responsive brush strokes, and smooth coloring experience.',
      verified: true,
      tags: ['Lightweight Engine', 'Fast Rendering', 'Custom Brushes'],
      appKey: 'paint'
    },
    {
      id: 'play-sangeet-1',
      name: 'Priya',
      role: 'Music Enthusiast',
      company: 'Sangeet — Offline Music Player',
      platform: 'Google Play',
      rating: 5,
      date: 'Jan 2024',
      projectTitle: 'Sangeet — Offline Music Player (10K+ Installs)',
      comment: 'This app is the perfect music app! It has playlists which we can edit, edit the audio, songs and more not like some of the other music apps. And it\'s completely ad-free and free to use. I totally recommend this app!',
      verified: true,
      tags: ['Ad-Free Playback', 'Media3 Engine', 'ID3 Tag Editor'],
      appKey: 'sangeet'
    },
    {
      id: 'play-sangeet-2',
      name: 'Kashish Vasava',
      role: 'Verified Listener',
      company: 'Sangeet — Offline Music Player',
      platform: 'Google Play',
      rating: 5,
      date: 'Dec 2021',
      projectTitle: 'Sangeet — Offline Music Player (10K+ Installs)',
      comment: 'From among a number of such apps I have tried till today, this one appears to be quite smooth and very easy to operate. Even it has no ads or any kind of interference while playing songs.',
      verified: true,
      tags: ['Zero Ads', 'Smooth UI', 'Low Latency Audio'],
      appKey: 'sangeet'
    },
    {
      id: 'play-sangeet-3',
      name: 'Lenovo Tab',
      role: 'Tablet User',
      company: 'Sangeet — Offline Music Player',
      platform: 'Google Play',
      rating: 5,
      date: 'Jan 2022',
      projectTitle: 'Sangeet — Offline Music Player (10K+ Installs)',
      comment: 'It is a very nice music player app that supports playback speed like unique features and also smaller size app without any type of annoying ads.',
      verified: true,
      tags: ['Playback Speed', 'Small Footprint', 'ExoPlayer Session'],
      appKey: 'sangeet'
    },
    {
      id: 'play-sangeet-4',
      name: 'Kishan Mishra',
      role: 'Verified Google Play User',
      company: 'Sangeet — Offline Music Player',
      platform: 'Google Play',
      rating: 5,
      date: 'Jan 2022',
      projectTitle: 'Sangeet — Offline Music Player (10K+ Installs)',
      comment: 'It\'s awesome man... The best music player ever used in my life! Super smooth transitions and clean local library navigation.',
      verified: true,
      tags: ['Jetpack Media3', '10K+ Installs', 'Offline First'],
      appKey: 'sangeet'
    },
    {
      id: 'play-sangeet-5',
      name: 'Patel keps',
      role: 'Verified Android User',
      company: 'Sangeet — Offline Music Player',
      platform: 'Google Play',
      rating: 5,
      date: 'Dec 2021',
      projectTitle: 'Sangeet — Offline Music Player (10K+ Installs)',
      comment: 'After installing this app, I\'m not using any other music app. I loved this app. Fast library scanning and clean equalizer.',
      verified: true,
      tags: ['Daily Music Player', 'Local Storage', 'Equalizer'],
      appKey: 'sangeet'
    },
    {
      id: 'play-tasks-1',
      name: 'AD',
      role: 'Productivity User',
      company: 'Tasks: To-do lists & Reminders',
      platform: 'Google Play',
      rating: 5,
      date: 'Sep 2023',
      projectTitle: 'Tasks: To-do lists & Reminders',
      comment: 'Beautiful app. I loved its UI. Simple To Do app with most basic functions available. Can develop into one of the best To Do apps on Play Store as more features are added.',
      verified: true,
      tags: ['Jetpack Compose UI', 'Minimalist Design', 'Room SQL'],
      appKey: 'tasks'
    },
    {
      id: 'play-tasks-2',
      name: 'Aaron Green',
      role: 'Verified Google Play User',
      company: 'Tasks: To-do lists & Reminders',
      platform: 'Google Play',
      rating: 5,
      date: 'Jun 2023',
      projectTitle: 'Tasks: To-do lists & Reminders',
      comment: 'Simple and straightforward list app. Love the "completion bar" progress indicator idea! Perfect for tracking daily checklists.',
      verified: true,
      tags: ['Completion Metrics', 'WorkManager Alerts', 'Offline First'],
      appKey: 'tasks'
    },
    {
      id: 'play-tasks-3',
      name: 'Alireza Paksaz',
      role: 'Android Engineer & Reviewer',
      company: 'Tasks: To-do lists & Reminders',
      platform: 'Google Play',
      rating: 5,
      date: 'Jul 2025',
      projectTitle: 'Tasks: To-do lists & Reminders',
      comment: 'This app teaches me a lot of things about Android development. Great app with great clean architecture and design.',
      verified: true,
      tags: ['Clean Architecture', 'Modern Android', 'Reactive Flows'],
      appKey: 'tasks'
    },
    {
      id: 'play-tasks-4',
      name: 'Suhas Appajodu',
      role: 'Verified Google Play User',
      company: 'Tasks: To-do lists & Reminders',
      platform: 'Google Play',
      rating: 5,
      date: 'Sep 2023',
      projectTitle: 'Tasks: To-do lists & Reminders',
      comment: 'Best app, simple and distraction-free design. It helps organize my daily schedule with clear tag categorizations and reminder notifications.',
      verified: true,
      tags: ['Tag Categorization', 'Reminders', 'Zero Lag'],
      appKey: 'tasks'
    }
  ]
};

const prefixPortfolioImages = (data: PortfolioData): PortfolioData => {
  return {
    ...data,
    personal: {
      ...data.personal,
      photoUrl: data.personal.photoUrl ? getAssetPath(data.personal.photoUrl) : undefined,
    },
    projects: data.projects.map((p) => ({
      ...p,
      iconUrl: p.iconUrl ? getAssetPath(p.iconUrl) : undefined,
      previewImageUrl: p.previewImageUrl ? getAssetPath(p.previewImageUrl) : undefined,
      screenshotUrl: p.screenshotUrl ? getAssetPath(p.screenshotUrl) : undefined,
    })),
    articles: data.articles.map((a) => ({
      ...a,
      imageUrl: a.imageUrl ? getAssetPath(a.imageUrl) : undefined,
    })),
    testimonials: data.testimonials.map((t) => ({
      ...t,
      avatar: t.avatar ? getAssetPath(t.avatar) : undefined,
    })),
  };
};

export const portfolioData: PortfolioData = prefixPortfolioImages(rawPortfolioData);
