import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-gradient-to-br from-[#C8F3FF] via-white to-[#DCD6FF] dark:from-[#0f343e] dark:to-[#221c3e]">
      </div>
      <div className="container relative text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
          AI-Powered Clinical Reasoning
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-6">
          Aquoris Intelligence empowers healthcare professionals by automating clinical documentation and providing real-time reasoning support, reducing burnout and improving patient care.
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
