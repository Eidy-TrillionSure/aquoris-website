import { Logo } from '../logo';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <a href="#" className="flex items-center space-x-2">
          <Logo className="h-8 w-auto" />
        </a>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
          &copy; {new Date().getFullYear()} Aquoris Intelligence. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
