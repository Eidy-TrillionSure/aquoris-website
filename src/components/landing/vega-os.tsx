import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { FileText, MessageSquareQuote, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Automated Documentation',
    description: 'Our AI transforms patient consultations into precise, structured clinical notes, freeing physicians from extensive administrative work.',
  },
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Real-time Reasoning',
    description: 'Vega OS provides decision support, offering differential diagnoses and clinical guidelines during patient encounters to enhance diagnostic accuracy.',
  },
  {
    icon: <Globe2 className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Multilingual & Multimodal',
    description: 'Built for Asia, our AI understands and processes multiple languages and data types, ensuring seamless care for diverse patient populations.',
  },
];

export function VegaOS() {
  return (
    <SectionWrapper id="vega-os" className="bg-secondary/30">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Vega OS: The Clinical Reasoning Platform
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A calm, intelligent operating system designed to support clinical excellence and restore focus to the practice of medicine.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {features.map((feature) => (
          <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/50 rounded-full p-3 flex items-center justify-center">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
