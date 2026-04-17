import { SectionWrapper } from './section-wrapper';
import { FileText, MessageSquareQuote, Globe2, BriefcaseMedical, BotMessageSquare, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

const stats = [
  { value: '1,800+', label: 'Doctors Using Vega Across Asia', icon: <BriefcaseMedical className="h-8 w-8 text-primary-foreground/80"/> },
  { value: '50,000+', label: 'Notes Automated', icon: <BotMessageSquare className="h-8 w-8 text-primary-foreground/80"/> },
  { value: 'Real-time', label: 'Clinical Reasoning Support', icon: <Clock className="h-8 w-8 text-primary-foreground/80"/> },
];


export function Vega() {
  return (
    <SectionWrapper id="vega" className="bg-secondary/30">
        <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Vega: The Clinical Reasoning Platform
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl">
            A calm, intelligent operating system designed to support clinical excellence and restore focus to the practice of medicine.
            </p>
        </div>

        <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
            {features.map((feature) => (
            <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background/50 backdrop-blur-sm text-left">
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

        <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-20">
            {stats.map((stat) => (
                <Card key={stat.label} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-2 pt-8">
                        <div className="bg-primary/50 rounded-full p-3 flex items-center justify-center mb-2">
                            {stat.icon}
                        </div>
                        <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary-foreground/90">
                            {stat.value}
                        </h3>
                        <p className="text-muted-foreground text-lg">{stat.label}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="mt-16 text-center">
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <a href="https://vega.aquoris.ai" target="_blank" rel="noopener noreferrer">
                Try Vega
                <ExternalLink />
                </a>
            </Button>
        </div>
    </SectionWrapper>
  );
}
