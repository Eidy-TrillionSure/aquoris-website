'use client';
import { Button } from '@/components/ui/button';
import { Logo } from '../logo';

export function Header() {
  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Vega OS', href: '#vega-os' },
    { name: 'AI Demo', href: '#demo' },
    { name: 'Investors', href: '#investors' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Logo className="h-10 w-auto" />
        </a>
        <nav className="hidden flex-1 md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild variant="ghost">
            <a href="#contact">Contact</a>
          </Button>
          <Button asChild className="shadow-lg hover:shadow-primary/30 transition-shadow">
             <a href="#demo">Request Demo</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
