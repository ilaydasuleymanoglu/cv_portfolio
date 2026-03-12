import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ilayda Süleymanoğlu - Energy Analyst & Meteorology Engineer',
  description:
    'Professional CV portfolio of Ilayda Süleymanoğlu. Energy Analyst, Meteorology Engineer, and AI Enthusiast with focus on sustainability, climate, and renewable energy.',
  keywords: [
    'Energy Analyst',
    'Meteorology',
    'Engineering',
    'AI',
    'Sustainability',
    'Climate',
    'CV',
    'Portfolio',
  ],
  authors: [{ name: 'Ilayda Süleymanoğlu', url: 'https://ilayda-portfolio.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ilayda-portfolio.com',
    title: 'Ilayda Süleymanoğlu - Energy Analyst & Meteorology Engineer',
    description:
      'Professional CV portfolio showcasing experience in energy analysis, meteorology, AI, and sustainable solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
