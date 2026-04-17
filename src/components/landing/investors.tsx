'use client';

import { SectionWrapper } from './section-wrapper';

export function Investors() {
  return (
    <SectionWrapper id="investors">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              For Investors & Partners
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are on a mission to revolutionize healthcare by building the cognitive layer for clinical medicine. Aquoris Intelligence is poised to become the essential OS for healthcare institutions worldwide, creating a future where technology empowers doctors to provide the best possible care.
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[350px] lg:min-h-0">
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-primary/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-5 sm:right-20 w-56 h-56 sm:w-72 sm:h-72 bg-secondary/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-8 left-5 sm:left-20 w-56 h-56 sm:w-72 sm:h-72 bg-accent/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
