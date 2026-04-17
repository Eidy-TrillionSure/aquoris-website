import { SectionWrapper } from './section-wrapper';
import { FileText, MessageSquareQuote, Globe2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <FileText className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Automated Documentation',
    description: 'Our AI transforms patient consultations into precise, structured clinical notes, freeing physicians from extensive administrative work.',
  },
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Real-time Reasoning',
    description: 'Vega provides decision support, offering differential diagnoses and clinical guidelines during patient encounters to enhance diagnostic accuracy.',
  },
  {
    icon: <Globe2 className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Multilingual & Multimodal',
    description: 'Built for Asia, our AI understands and processes multiple languages and data types, ensuring seamless care for diverse patient populations.',
  },
];

export function Vega() {
  return (
    <SectionWrapper id="vega" className="bg-secondary/30">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Vega: The Clinical Reasoning Platform
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            A calm, intelligent operating system designed to support clinical excellence and restore focus to the practice of medicine. Experience the future of clinical support with real-time, multilingual reasoning.
          </p>
          <div className="!mt-8">
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <a href="https://vega.aquoris.ai" target="_blank" rel="noopener noreferrer">
                  Try Vega
                  <ExternalLink />
                </a>
            </Button>
          </div>
        </div>
        <div className="space-y-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-6">
              <div className="bg-primary/50 rounded-full p-3 flex items-center justify-center h-14 w-14 flex-shrink-0">
                {feature.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
