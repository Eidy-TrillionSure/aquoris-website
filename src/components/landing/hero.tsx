import { Button } from '@/components/ui/button';
import { Stethoscope } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-secondary/10 dark:from-background dark:via-primary/5 dark:to-secondary/5">
      </div>
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-10 dark:[&_div]:bg-white"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--primary-foreground)) 1px, transparent 0), radial-gradient(circle at 75% 75%, hsl(var(--secondary-foreground)) 1px, transparent 0)',
          backgroundSize: '3rem 3rem',
        }}
      />
      <div className="container relative text-center animate-fade-in-up">
        <div className="inline-block rounded-full bg-primary/20 p-3 mb-4">
          <Stethoscope className="h-6 w-6 text-primary-foreground fill-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
          Reasoning Intelligence for Doctors
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
          Aquoris Intelligence builds Vega OS — a clinical reasoning platform supporting doctors across Asia with real-time multilingual insight and automated documentation.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
            <a href="#demo">Request a Demo</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <a href="#vega-os">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
