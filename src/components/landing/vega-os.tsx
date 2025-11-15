import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { FileText, MessageSquareQuote, Globe } from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Automated SOAP Notes',
    description: 'Our AI listens to patient consultations and automatically generates accurate, structured SOAP notes in real-time, saving hours of administrative work.',
  },
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Real-time Consult Support',
    description: 'Vega OS acts as an intelligent assistant, providing differential diagnoses, treatment suggestions, and relevant clinical guidelines during patient encounters.',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary-foreground/80" />,
    title: 'Multilingual Reasoning',
    description: 'Break down language barriers with AI that understands and reasons in multiple languages, ensuring seamless communication and care for a diverse patient population.',
  },
];

export function VegaOS() {
  return (
    <SectionWrapper id="vega-os" className="bg-secondary/30">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Introducing Vega OS: The Clinical Reasoning Platform
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A revolutionary operating system designed by doctors, for doctors, to bring joy back to practicing medicine.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {features.map((feature) => (
          <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary rounded-full p-3 flex items-center justify-center">
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
