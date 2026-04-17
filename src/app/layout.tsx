import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const siteConfig = {
  name: 'Vega AI by Aquoris Intelligence',
  url: 'https://www.aquoris.ai',
  description: 'Vega AI is a clinical reasoning platform that supports doctors with real-time multilingual insight and automated documentation, reducing physician burnout and enhancing patient care.',
  author: 'Aquoris Intelligence',
  keywords: 'Vega, Vega AI, Aquoris Intelligence, AI clinical reasoning, physician burnout, medical documentation automation, multilingual healthcare AI, clinical decision support',
};

const ogTitle = 'Vega AI: The Clinical Reasoning Platform for Doctors';
const ogDescription = 'Discover how Vega AI supports doctors with real-time multilingual insight and automated documentation, helping reduce physician burnout and enhance patient care.';

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
    title: ogTitle,
    description: ogDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1674027444474-e63f9d516f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhaSUyMG5ldHdvcmt8ZW58MHx8fHwxNzYzMTczODExfDA&ixlib=rb-4.1.0&q=80&w=1080',
        width: 1200,
        height: 630,
        alt: 'A visual representation of the Vega AI reasoning network, showcasing the intelligent core of the Aquoris clinical solution.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description: ogDescription,
    images: ['https://images.unsplash.com/photo-1674027444474-e63f9d516f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhaSUyMG5ldHdvcmt8ZW58MHx8fHwxNzYzMTczODExfDA&ixlib=rb-4.1.0&q=80&w=1080'],
    // creator: '@YourTwitterHandle', // Add your twitter handle
  },
  icons: {
    icon: '/favicon.ico',
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
