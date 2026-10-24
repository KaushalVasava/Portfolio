import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'KAUSHAL VASAVA',
    title: 'Mobile Software Engineer',
    statusText: 'Available for Q2/Q3 Projects',
    availableForWork: true,
    location: 'Surat, India · Global Remote',
    email: 'kaushalvasava.dev@gmail.com',
    responseTime: 'Usually within 24 hours',
    timezone: 'IST (UTC +5:30) · Global Overlap',
    headline: 'Building Mobile Products That People',
    headlineHighlight: 'Love to Use',
    bio: 'Android-first Mobile Engineer with 4.5+ years building production applications used by 32K+ active users and over 100K+ installs. Specialize in Kotlin, Jetpack Compose, and Kotlin Multiplatform, with hands-on React Native experience.',
    aboutHeadline: 'Engineer by craft. Builder by habit.',
    aboutParagraphs: [
      "My path in mobile engineering began with a passion for high-performance rendering and deterministic software. Over the past 4.5+ years, that focus has centered on designing resilient production architectures that scale smoothly across tens of thousands of active devices with unyielding crash reliability.",
      "I believe the best mobile experiences feel invisible — rendering within 16ms frame budgets, respecting device battery and offline state, and delivering tactile, delightful micro-interactions. Whether engineering custom Canvas drawing engines in native Jetpack Compose or unifying business logic across platforms with Kotlin Multiplatform, I build with long-term maintainability in mind.",
      "Beyond production client engagements, I am an active contributor to the broader mobile ecosystem. Through open-source repositories on GitHub, 1:1 engineering mentorship on Topmate, and technical publications on Medium read by over 50,000 developers, I continuously build, teach, and share in public."
    ],
    pillars: [
      {
        icon: 'Rocket',
        title: 'Idea to Release',
        description: 'Full lifecycle management: UI layout, local caches, CI/CD, and Play Console approval.'
      },
      {
        icon: 'Zap',
        title: 'Extreme Reliability',
        description: 'Targeting >99.5% crash-free sessions and sub-16ms smooth UI render loops.'
      },
      {
        icon: 'BookOpen',
        title: 'Sharing in Public',
        description: 'Demystifying Kotlin Coroutines, Jetpack Compose, and KMP through writing.'
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
    },
    {
      value: '37+',
      label: 'GitHub Repositories',
      highlight: false
    },
    {
      value: '5K+',
      label: 'LinkedIn Network',
      highlight: false
    },
    {
      value: '3.6K+',
      label: 'Medium Followers',
      highlight: false
    },
    {
      value: '50K+',
      label: 'Article Views',
      highlight: true
    }
  ],
  projects: [
    {
      id: 'paint',
      name: 'Paint — Sketchbook & Drawing',
      tagline: 'Custom Canvas API Pipeline',
      description: 'Intuitive vector drawing, coloring & sketch pad with 100K+ downloads. Built using Custom View, Kotlin, MVVM architecture, and Firebase.',
      badge: '100K+ DOWNLOADS',
      badgeType: 'accent',
      techStack: ['Kotlin', 'Custom View', 'MVVM', 'Firebase'],
      engineStats: {
        label: 'SKETCH_ENGINE_V2',
        value: '60 FPS',
        sublabel: 'Zero-latency stroke interpolation & smoothing'
      },
      category: 'playstore',
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
      id: 'sangeet',
      name: 'Sangeet — Offline Music Player',
      tagline: 'Media3 Session Host',
      description: 'Privacy-first local audio orchestrator with 10K+ downloads. Built on Jetpack Media3 ExoPlayer, custom equalizer profiles, and automated ID3 metadata tagging.',
      badge: '10K+ DOWNLOADS',
      badgeType: 'secondary',
      techStack: ['Media3', 'ExoPlayer', 'Room', 'Kotlin'],
      engineStats: {
        label: 'MEDIA3_SESSION_HOST',
        value: 'LOW LATENCY',
        sublabel: 'Zero-buffer background playback service'
      },
      category: 'playstore',
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
      id: 'tasks',
      name: 'Tasks: To-do lists & Reminders',
      tagline: 'Room SQL Engine',
      description: 'Fluid task, subtask and checklist manager emphasizing zero cognitive overhead, tag categorization, scheduled reminder notifications, and dark UI.',
      badge: 'PRODUCTIVITY',
      badgeType: 'secondary',
      techStack: ['Jetpack Compose', 'Room', 'WorkManager'],
      engineStats: {
        label: 'ROOM_SQL_ENGINE',
        value: 'OFFLINE FIRST',
        sublabel: 'Instant reactive flow updates with Room'
      },
      category: 'playstore',
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
      tagline: 'Package Inspector',
      description: 'Easier, advanced App Manager and quick app launcher. Deep diagnostic inspection of installed packages, manifest permission flags, signature hashes, and instant APK sharing.',
      badge: 'SYSTEM UTILITY',
      badgeType: 'secondary',
      techStack: ['PackageManager', 'Kotlin', 'Room'],
      engineStats: {
        label: 'PACKAGE_INSPECTOR',
        value: 'DEEP AUDIT',
        sublabel: 'Instant search across 200+ installed packages'
      },
      category: 'playstore',
      mockupType: 'package-grid',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.lahsuak.apps.appmanager',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: false,
      iconUrl: '/images/apps/appmanager.png',
      previewImageUrl: '/images/projects/appmanager_shot.png',
      screenshotUrl: '/images/projects/appmanager_shot.png'
    },
    {
      id: 'studyghar',
      name: 'StudyGhar Stationery',
      tagline: 'Online Stationery Store',
      description: 'Online stationery e-commerce application delivering books, office supplies, and school materials at reasonable prices with localized product catalogs.',
      badge: 'E-COMMERCE',
      badgeType: 'secondary',
      techStack: ['Kotlin', 'MVVM', 'Room', 'Retrofit'],
      engineStats: {
        label: 'RETAIL_CATALOG',
        value: 'INSTANT SYNC',
        sublabel: 'Cart caching & high-speed checkout pipeline'
      },
      category: 'playstore',
      mockupType: 'ecommerce',
      actionUrl: 'https://play.google.com/store/apps/details?id=com.kaushalvasava.org.apps.studygharstationery',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: false,
      iconUrl: '/images/projects/studyghar_icon.png',
      previewImageUrl: '/images/projects/studyghar_shot.png',
      screenshotUrl: '/images/projects/studyghar_shot.png'
    },
    {
      id: 'infryve',
      name: 'Infryve — One Stop for Infra Needs',
      tagline: 'B2B Infrastructure Marketplace',
      description: 'Comprehensive B2B marketplace platform for civil engineering and construction infrastructure supplies, matching procurement teams with verified wholesale distributors.',
      badge: 'COMMERCIAL B2B',
      badgeType: 'secondary',
      techStack: ['Jetpack Compose', 'Kotlin', 'Coroutines', 'REST'],
      engineStats: {
        label: 'B2B_PROCUREMENT',
        value: 'SCALE READY',
        sublabel: 'Heavy payload bulk inquiry streaming'
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
      techStack: ['Kotlin', 'WorkManager', 'Jetpack', 'Room'],
      engineStats: {
        label: 'LOGISTICS_PIPELINE',
        value: 'REAL TIME',
        sublabel: 'Background order sync and status dispatch'
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
      id: 'palace-liquid',
      name: 'Palace — Property Inspections',
      tagline: 'Enterprise Property Condition Audits',
      description: 'Mobile inspection and condition reporting application for property managers in the Palace Liquid ecosystem. Conduct on-site photo/video condition audits, assign work orders, and seamlessly sync data back to the central desktop database.',
      badge: 'ENTERPRISE / MRI',
      badgeType: 'accent',
      techStack: ['Kotlin', 'CameraX', 'Offline Sync', 'Room DB', 'REST API'],
      engineStats: {
        label: 'INSPECTION_ENGINE',
        value: 'OFFLINE SYNC',
        sublabel: 'Photo & video condition audits with auto-sync'
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
      id: 'proptechlabs-pm',
      name: 'Proptech Labs Property Manager',
      tagline: 'Digital Inspection & Maintenance Suite',
      description: 'End-to-end inspection, maintenance triage, and tenant communication suite for real estate agencies. Features compliant report templates, voice-to-text dictation, and trust accounting integrations.',
      badge: 'PROPTECH / B2B',
      badgeType: 'secondary',
      techStack: ['Android', 'Kotlin', 'MVVM', 'Voice-to-Text', 'PDF Engine'],
      engineStats: {
        label: 'WORKFLOW_SUITE',
        value: 'COLLABORATIVE',
        sublabel: 'Digital routine & outgoing inspection pipelines'
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
      id: 'mri-myplace',
      name: 'MRI MyPlace',
      tagline: 'Tenant & Owner Self-Service Portal',
      description: 'Flagship tenant and landlord engagement application developed for MRI Software. Enables tenants to log maintenance requests with photos, view lease timelines, and review inspection notices, while property owners track financials in real time.',
      badge: 'GLOBAL ENTERPRISE',
      badgeType: 'accent',
      techStack: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Biometrics', 'Push Notifications'],
      engineStats: {
        label: 'PORTAL_ARCHITECTURE',
        value: 'REAL-TIME',
        sublabel: 'Dual tenant & owner self-service pipeline'
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
      id: 'onlocation-mobile',
      name: 'OnLocation Mobile (WOL Mobile)',
      tagline: 'Geofenced Safety & Lone Worker Protection',
      description: 'Enterprise workplace safety and facilities companion app for MRI OnLocation. Features automated background geofence sign-in/out, hybrid desk booking, and emergency SOS alerts with real-time GPS location sharing for at-risk workers.',
      badge: 'WORKPLACE SAFETY',
      badgeType: 'secondary',
      techStack: ['Android', 'Geofencing', 'WorkManager', 'Google Maps API', 'Location Services'],
      engineStats: {
        label: 'SAFETY_PIPELINE',
        value: 'GEOFENCING',
        sublabel: 'Automated attendance & emergency SOS dispatch'
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
      id: 'bricks-owner',
      name: 'B + A Owner (Bricks+Agent)',
      tagline: 'Maintenance Oversight & Quote Approvals',
      description: 'Property owner and landlord mobile hub for the Bricks+Agent maintenance ecosystem. Allows property owners to review contractor quotes, approve repair invoices, and track maintenance progress in real time.',
      badge: 'PROPTECH OWNER',
      badgeType: 'secondary',
      techStack: ['Kotlin', 'Architecture Components', 'Secure Payments', 'Cloud Messaging'],
      engineStats: {
        label: 'APPROVAL_PIPELINE',
        value: 'INSTANT SIGN-OFF',
        sublabel: 'Real-time trade quotes and invoice approvals'
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
      id: 'bricks-tenant',
      name: 'B + A Tenant (Bricks+Agent)',
      tagline: 'Fast Maintenance Reporting & Trade Tracking',
      description: 'Tenant maintenance portal enabling residents to report household maintenance issues in under a minute with photo evidence, chat directly with contractors, and track trade arrival times.',
      badge: 'PROPTECH TENANT',
      badgeType: 'secondary',
      techStack: ['Android', 'Jetpack Compose', 'CameraX', 'WebSocket Chat', 'Real-Time Tracking'],
      engineStats: {
        label: 'TENANT_DISPATCH',
        value: 'LIVE TRACKING',
        sublabel: 'Rapid issue dispatch with trade ETA updates'
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
      id: 'gallery',
      name: 'Gallery — Photo Manager',
      tagline: 'Rapid Media & Album Manager',
      description: 'High-performance offline gallery application for viewing photos, 4K videos, and albums with metadata filtering, quick sharing, and low-memory footprint.',
      badge: 'MEDIA & UTILITY',
      badgeType: 'secondary',
      techStack: ['MediaStore API', 'Kotlin', 'Glide', 'Exif'],
      engineStats: {
        label: 'MEDIA_STORE_QUERY',
        value: 'SUB-10MS',
        sublabel: 'Low memory indexing of 10,000+ local media items'
      },
      category: 'playstore',
      mockupType: 'gallery',
      actionUrl: 'https://play.google.com/store/apps/details?id=photo.gallery.photo.album.photosmanager',
      actionText: 'Google Play',
      actionType: 'playstore',
      featured: false,
      iconUrl: '/images/projects/gallery_shot.png',
      previewImageUrl: '/images/projects/gallery_shot.png',
      screenshotUrl: '/images/projects/gallery_shot.png'
    },
    {
      id: 'xphotogram',
      name: 'XPhotogram Multiplatform',
      tagline: 'Compose Multiplatform',
      description: 'Full-featured social photography application supporting Android, iOS, and Desktop. Demonstrates shared business logic, SQLDelight local caching, and Ktor client.',
      badge: 'OPEN SOURCE KMP',
      badgeType: 'secondary',
      techStack: ['KMP', 'Compose Multiplatform', 'Ktor', 'SQLDelight'],
      engineStats: {
        label: 'COMPOSE_MULTIPLATFORM',
        value: 'IOS + ANDROID',
        sublabel: 'Single Kotlin codebase for both platforms'
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
      description: 'Beginner to advanced open-source reference showcasing declarative UI patterns, state hoisting, custom layouts, and smooth transition animations in Jetpack Compose.',
      badge: 'OPEN SOURCE',
      badgeType: 'secondary',
      techStack: ['Jetpack Compose', 'Material 3', 'Kotlin', 'Coroutines'],
      engineStats: {
        label: 'DECLARATIVE_UI',
        value: 'M3 TOKENS',
        sublabel: 'Idiomatic UI state patterns & clean architecture'
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
    },
    {
      id: 'documind',
      name: 'DocuMind — PDF Scanner',
      tagline: 'ML Kit Vision Mesh',
      description: 'High-speed camera scanner powered by Google ML Kit with automatic quad perspective rectification, edge detection, and client-side OCR extraction.',
      badge: 'IN ACTIVE DEV',
      badgeType: 'secondary',
      techStack: ['Compose', 'ML Kit', 'CameraX', 'Kotlin'],
      engineStats: {
        label: 'MLKIT_VISION_MESH',
        value: 'QUAD_LOCK',
        sublabel: 'Real-time perspective correction'
      },
      category: 'playstore',
      mockupType: 'scanner',
      actionUrl: 'https://github.com/KaushalVasava',
      actionText: 'In Development',
      actionType: 'internal',
      featured: false,
      iconUrl: '/images/projects/documind_preview.png',
      previewImageUrl: '/images/projects/documind_shot.png',
      screenshotUrl: '/images/projects/documind_shot.png'
    }
  ],
  caseStudies: [
    {
      id: 'reliability',
      category: 'RELIABILITY & STABILITY',
      subCategory: 'ANR & CRASH ANALYSIS',
      title: 'Mobile App Reliability: Raising Crash-Free Users from 89.7% to 99.8%',
      summary: 'Diagnosed elusive concurrent race conditions inside background media ingestion pipelines.',
      problem: 'Background media operations caused unexpected thread contention, unhandled coroutine cancellations, and periodic Main-Thread lockups resulting in ANRs and a sub-90% crash-free user rate.',
      engineeringApproach: 'Established strict coroutine lifecycle scoping using SupervisorJob, structured cancellation hierarchies, wrapped Room database transactions with safe error boundaries, and implemented thread-safe ring-buffer queues for high-throughput media ingestion.',
      technologies: ['CoroutineExceptionHandler', 'Systrace & Perfetto', 'LeakCanary', 'Room'],
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
      problem: 'Fragmented ViewBinding boilerplate, fragile two-way binding, and complex XML layout hierarchies slowed development cycles and increased state synchronization bugs.',
      engineeringApproach: 'Designed a unified ComposeTheme design system token library, isolated mutable state inside uni-directional MVI ViewModels, and incrementally swapped out fragments screen-by-screen while keeping business logic and repository layers intact.',
      technologies: ['Jetpack Compose', 'MVI State Machine', 'Compose Recomposition Tracing', 'Material 3'],
      metrics: [
        {
          label: 'UI Boilerplate Reduction',
          value: '-42% LOC',
          highlight: true
        },
        {
          label: 'Feature Velocity',
          value: '2.5x Faster Delivery',
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
      problem: 'Serializing large JSON payloads across the legacy JavaScript bridge caused frame drops, noticeable UI freezing, and sluggish background data synchronization.',
      engineeringApproach: 'Implemented native C++ / Kotlin TurboModules with direct JNI memory pointers and WorkManager synchronization, executing complex cryptographic verification on dedicated worker threads off the JS runtime.',
      technologies: ['TurboModules', 'JNI Native C++ / Kotlin', 'WorkManager', 'TypeScript'],
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
        'Kotlin (Expert)',
        'Jetpack Compose & Material 3',
        'Coroutines & Asynchronous Flow',
        'Room Database & SQLite',
        'WorkManager & Services'
      ],
      tag: 'ARCH: MVI / MVVM / Clean'
    },
    {
      title: 'Networking & Arch',
      icon: 'Network',
      skills: [
        'Ktor Client (Multiplatform)',
        'Retrofit & OkHttp',
        'Kotlinx Serialization',
        'Dagger Hilt & Koin DI',
        'SQLDelight Persistent Cache'
      ],
      tag: 'PATTERNS: Offline-First Caching'
    },
    {
      title: 'Cross-Platform',
      icon: 'Layers',
      skills: [
        'Kotlin Multiplatform (KMP)',
        'Compose Multiplatform (Desktop/iOS)',
        'React Native & TypeScript',
        'Native Modules & JNI Bridge',
        'Decompose Navigation'
      ],
      tag: 'STRATEGY: Maximum Code Share'
    },
    {
      title: 'Quality & Release',
      icon: 'CheckCircle2',
      skills: [
        'GitHub Actions CI/CD Pipeline',
        'Google Play Console Deployment',
        'ProGuard / R8 Optimization',
        'Android Studio Profiler & ANR',
        'JUnit, Mockk & Turbine'
      ],
      tag: 'TARGET: Zero Crashes in Production'
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
      description: 'Full-cycle native application engineering using Kotlin and Jetpack Compose. Clean MVI/MVVM architecture, fluid animations, offline database persistence, and Google Play Store submission ready.',
      icon: 'Smartphone',
      actionText: 'Discuss Android Project',
      targetAnchor: '#contact'
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform Mobile (KMP / RN)',
      description: 'Ship to both Android and iOS simultaneously while preserving native feel and execution performance. Shared business logic, cross-platform networking, and tailored platform native bridges.',
      icon: 'Repeat',
      actionText: 'Discuss Cross-Platform',
      targetAnchor: '#contact'
    },
    {
      id: 'audit-tuning',
      title: 'App Audit & Performance Tuning',
      description: 'Diagnose ANR bottlenecks, memory leaks, and janky scrolling. Comprehensive profiling reports with actionable remediation to elevate Google Play vitals and crash-free session metrics.',
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
