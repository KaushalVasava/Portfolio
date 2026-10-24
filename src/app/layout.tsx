import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kaushal Vasava | Android, Kotlin Multiplatform & React Native Engineer',
  description:
    'Explore the mobile engineering portfolio of Kaushal Vasava, specializing in Android, Kotlin, Jetpack Compose, Kotlin Multiplatform, and React Native.',
  keywords: [
    'Kaushal Vasava',
    'Android Engineer',
    'Kotlin Multiplatform',
    'Jetpack Compose',
    'React Native',
    'Mobile Software Engineer',
    'Surat',
    'App Developer',
  ],
  authors: [{ name: 'Kaushal Vasava', url: 'https://github.com/KaushalVasava' }],
  creator: 'Kaushal Vasava',
  openGraph: {
    title: 'Kaushal Vasava — Mobile Software Engineer',
    description:
      'Building mobile products that people love to use. Android, Kotlin Multiplatform, and React Native engineer with 100K+ downloads.',
    url: 'https://kaushalvasava.dev',
    siteName: 'Kaushal Vasava Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaushal Vasava — Mobile Software Engineer',
    description:
      'Building mobile products that people love to use. Android, Kotlin Multiplatform, and React Native engineer with 100K+ downloads.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-body bg-background text-on-background antialiased selection:bg-accent-lime selection:text-surface-canvas min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
