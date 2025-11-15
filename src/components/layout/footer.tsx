import { Stethoscope } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="bg-primary/20 text-primary-foreground rounded-md p-1.5">
            <Stethoscope className="h-5 w-5 fill-primary" />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Aquoris Intelligence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
