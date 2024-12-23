import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: 'DentCare',
  description: 'Professional Dental Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
