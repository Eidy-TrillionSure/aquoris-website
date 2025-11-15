import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { VegaOS } from '@/components/landing/vega-os';
import { MultilingualReasoning } from '@/components/landing/multilingual-reasoning';
import { Traction } from '@/components/landing/traction';
import { Investors } from '@/components/landing/investors';
import { ContactForm } from '@/components/landing/contact-form';
import { GlowSeparator } from '@/components/landing/glow-separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <VegaOS />
        <GlowSeparator />
        <MultilingualReasoning />
        <Traction />
        <Investors />
        <GlowSeparator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
