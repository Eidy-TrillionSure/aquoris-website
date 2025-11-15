import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('w-full py-16 md:py-24 lg:py-32', className)}>
      <div className="container px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
        {children}
      </div>
    </section>
  );
}
