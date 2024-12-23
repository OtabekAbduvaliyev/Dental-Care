import type { Metadata } from 'next';
import "./globals.css";
import JsonLd from './components/JsonLd';

export const metadata: Metadata = {
  title: 'DentCare - Professional Dental Clinic',
  description: 'Expert dental care services including general dentistry, cosmetic dentistry, orthodontics, and emergency dental care. Schedule your appointment today.',
  keywords: 'dentist, dental clinic, dental care, teeth cleaning, orthodontics, cosmetic dentistry, emergency dentist',
  authors: [{ name: 'DentCare' }],
  openGraph: {
    title: 'DentCare - Professional Dental Clinic',
    description: 'Expert dental care services including general dentistry, cosmetic dentistry, orthodontics, and emergency dental care.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DentCare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DentCare - Professional Dental Clinic',
    description: 'Expert dental care services including general dentistry, cosmetic dentistry, orthodontics, and emergency dental care.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      <JsonLd />
      {children}
    </>
  );
}
