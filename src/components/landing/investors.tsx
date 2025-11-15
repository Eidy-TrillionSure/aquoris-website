'use client';

import { Button } from '@/components/ui/button';
import { SectionWrapper } from './section-wrapper';

export function Investors() {
  return (
    <SectionWrapper id="investors">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              For Investors & Partners
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are on a mission to revolutionize healthcare by building the cognitive layer for clinical medicine. Aquoris Intelligence is poised to become the essential OS for healthcare institutions worldwide, creating a future where technology empowers doctors to provide the best possible care.
            </p>
          </div>
          <Button size="lg" asChild className="w-fit shadow-lg hover:shadow-xl hover:shadow-accent/30 transition-all duration-300" variant="outline">
            <a href="#contact">Read Our Vision</a>
          </Button>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <p className="relative text-2xl font-semibold text-center font-headline">Join us in shaping the future of global health.</p>
        </div>
      </div>
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </SectionWrapper>
  );
}
