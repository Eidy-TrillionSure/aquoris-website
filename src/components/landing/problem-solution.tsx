import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProblemSolution() {
  const problemImage = PlaceHolderImages.find(p => p.id === 'doctor-burnout');
  const solutionImage = PlaceHolderImages.find(p => p.id === 'solution-ai');

  return (
    <SectionWrapper id="problem">
      <div className="grid gap-12 md:gap-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">The Crisis of Physician Burnout</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Doctors are facing unprecedented levels of burnout, overwhelmed by administrative tasks that detract from patient care. The burden of documentation, especially SOAP notes, consumes valuable time and energy, leading to exhaustion and a decline in job satisfaction.
              </p>
            </div>
            {problemImage && (
                <Image
                    src={problemImage.imageUrl}
                    alt={problemImage.description}
                    data-ai-hint={problemImage.imageHint}
                    width={800}
                    height={600}
                    className="rounded-xl object-cover shadow-lg"
                />
            )}
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            {solutionImage && (
                <Image
                    src={solutionImage.imageUrl}
                    alt={solutionImage.description}
                    data-ai-hint={solutionImage.imageHint}
                    width={800}
                    height={600}
                    className="rounded-xl object-cover shadow-lg md:order-first"
                />
            )}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">The Aquoris Solution</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Aquoris Intelligence introduces Vega OS, a clinical reasoning platform that automates SOAP note generation from doctor-patient conversations. Our AI streamlines workflows, provides instant consult support, and allows doctors to focus on what truly matters: their patients.
              </p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
