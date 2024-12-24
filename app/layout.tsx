import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: 'DentCare - Professional Tish Klinikasi',
  description: 'Umumiy stomatologiya, kosmetik stomatologiya, ortodontiya va shoshilinch tish parvarishi bo\'yicha professional xizmatlar. Bugun tashrif buyuring.',
  keywords: 'tish shifokori, tish klinikasi, tish parvarishi, tishlarni tozalash, ortodontiya, kosmetik stomatologiya, shoshilinch tish shifokori',
  authors: [{ name: 'DentCare' }],
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/images/logo.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ],
    shortcut: [
      {
        url: '/images/logo.ico',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/images/logo.jpg',
        sizes: '180x180',
        type: 'image/jpg',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo.jpg',
        color: '#ffffff'
      }
    ],
  },
  openGraph: {
    title: 'DentCare - Professional Tish Klinikasi',
    description: 'Umumiy stomatologiya, kosmetik stomatologiya, ortodontiya va shoshilinch tish parvarishi bo\'yicha professional xizmatlar.',
    type: 'website',
    locale: 'uz_UZ',
    siteName: 'DentCare',
    images: [
      {
        url: '/images/view.jpg',
        width: 1200,
        height: 630,
        alt: 'DentCare Tish Klinikasi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DentCare - Professional Tish Klinikasi',
    description: 'Umumiy stomatologiya, kosmetik stomatologiya, ortodontiya va shoshilinch tish parvarishi bo\'yicha professional xizmatlar.',
    images: ['/images/view.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  applicationName: 'DentCare',
  appleWebApp: {
    capable: true,
    title: 'DentCare',
    statusBarStyle: 'default',
  },
  verification: {
    google: 'verification_token', // Add your Google verification token
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
