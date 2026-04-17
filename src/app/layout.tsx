import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const siteConfig = {
  name: 'Vega AI by Aquoris Intelligence',
  url: 'https://www.aquoris.ai',
  description: 'Discover Vega AI by Aquoris Intelligence. An advanced AI clinical reasoning platform that supports doctors with real-time multilingual insight and automated documentation. Learn how Vega AI is reducing physician burnout and enhancing patient care.',
  author: 'Aquoris Intelligence',
  keywords: 'Vega, Vega AI, Aquoris Intelligence, AI clinical reasoning, physician burnout, medical documentation automation, multilingual healthcare AI, clinical decision support',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Vega AI: Clinical Reasoning Intelligence for Doctors',
    template: `%s | Vega AI by Aquoris Intelligence`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  applicationName: siteConfig.name,

  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Vega AI: Clinical Reasoning Intelligence for Doctors',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`, // You should create this image and place it in the /public folder
        width: 1200,
        height: 630,
        alt: 'Vega AI by Aquoris Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vega AI: Clinical Reasoning Intelligence for Doctors',
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: `@${siteConfig.author}`,
  },
  icons: {
    icon: '/favicon.ico', // You should create these icons and place them in the /public folder
    apple: '/apple-touch-icon.png',
  },
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
