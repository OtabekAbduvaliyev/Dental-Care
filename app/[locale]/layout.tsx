import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import JsonLd from '../components/JsonLd';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DentCare - Professional Dental Services",
  description: "Experience exceptional dental care with our team of expert professionals. We're committed to giving you the healthy, beautiful smile you deserve.",
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch {
    return {};
  }
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps): Promise<React.ReactElement | null> {
  const { locale } = await params;

  // Validate that the incoming locale is supported
  if (!['uz', 'ru'].includes(locale)) {
    return null;
  }

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
