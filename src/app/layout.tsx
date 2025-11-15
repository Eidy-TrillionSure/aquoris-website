import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ChatLauncher } from '@/components/chat/chat-launcher';

export const metadata: Metadata = {
  title: 'Aquoris Intelligence',
  description: 'AI-Powered Clinical Reasoning for a Healthier World.',
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
        <ChatLauncher />
      </body>
    </html>
  );
}
