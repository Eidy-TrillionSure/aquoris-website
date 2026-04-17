import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { Vega } from '@/components/landing/vega';
import { Investors } from '@/components/landing/investors';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Vega />
        <Investors />
      </main>
      <Footer />
    </div>
  );
}
