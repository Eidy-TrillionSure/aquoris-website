import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Vega by Aquoris Intelligence | AI Clinical Reasoning Platform',
  description: 'Vega by Aquoris Intelligence is an AI-powered clinical reasoning platform supporting doctors with real-time multilingual insight and automated documentation. Reduce physician burnout and enhance patient care with Vega.',
  keywords: ['Vega', 'Aquoris Intelligence', 'AI clinical reasoning', 'physician burnout', 'medical documentation automation', 'multilingual healthcare AI', 'clinical decision support'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background font-sans')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
