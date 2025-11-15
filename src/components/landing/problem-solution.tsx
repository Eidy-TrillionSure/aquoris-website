import Image from 'next/image';
import { SectionWrapper } from './section-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProblemSolution() {
  const problemImage = PlaceHolderImages.find(p => p.id === 'abstract-data-flow');
  const solutionImage = PlaceHolderImages.find(p => p.id === 'ai-reasoning-network');

  return (
    <SectionWrapper id="problem">
      <div className="grid gap-12 md:gap-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">The Global Challenge of Physician Burnout</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Across Asia and the world, physicians face immense pressure from administrative duties, which detracts from their core focus: patient care. The cognitive load of documentation and complex decision-making contributes to widespread professional fatigue.
              </p>
            </div>
            {problemImage && (
                <Image
                    src={problemImage.imageUrl}
                    alt={problemImage.description}
                    data-ai-hint={problemImage.imageHint}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover shadow-lg aspect-[3/2]"
                />
            )}
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            {solutionImage && (
                <Image
                    src={solutionImage.imageUrl}
                    alt={solutionImage.description}
                    data-ai-hint={solutionImage.imageHint}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover shadow-lg md:order-first aspect-[3/2]"
                />
            )}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">The Aquoris Solution: Vega OS</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Aquoris Intelligence provides Vega OS, a clinical reasoning platform that integrates seamlessly into doctor workflows. By structuring patient encounters and automating documentation with multimodal AI, Vega OS gives physicians the space to focus on critical thinking and patient care. Its multilingual capabilities are designed for the diverse healthcare ecosystems across Asia.
              </p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
