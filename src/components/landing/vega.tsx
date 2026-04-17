'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { FileText, MessageSquareQuote, Globe2, Lightbulb, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';


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

const languages = [
    { value: 'English', label: 'English' },
    { value: 'Japanese', label: '日本語 (Japanese)' },
    { value: 'Korean', label: '한국어 (Korean)' },
    { value: 'Vietnamese', label: 'Tiếng Việt (Vietnamese)' },
    { value: 'Chinese (Simplified)', label: '简体中文 (Chinese)' },
];

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} className="w-full md:w-auto shadow-lg hover:shadow-primary/30 transition-shadow">
        {pending ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
        Get AI Insight
      </Button>
    );
}

export function Vega() {
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = (formData: FormData) => {
    setPending(true);
    setError(null);
    setResponse(null);

    // Simulate API call for static site
    setTimeout(() => {
      setResponse("This feature is for demonstration purposes. For a full interactive experience, please visit our live demo using the button below.");
      setPending(false);
    }, 1000);
  };
    
  return (
    <SectionWrapper id="vega" className="bg-secondary/30">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Vega: The Clinical Reasoning Platform
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
      
      {/* Merged Demo Section */}
      <div className="mt-24" id="demo">
        <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                Asia-First Multilingual Clinical Reasoning
            </h3>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Enter a clinical scenario in any supported language to see a static demonstration. For a full interactive experience, visit our live demo.
            </p>
        </div>

        <Card className="mt-12 max-w-4xl mx-auto shadow-xl bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
                <form action={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-1 md:col-span-3">
                            <Label htmlFor="query" className="sr-only">Clinical Query</Label>
                            <Textarea
                            id="query"
                            name="query"
                            placeholder="Enter a brief clinical query..."
                            className="mt-1 min-h-[120px] bg-white dark:bg-black/20"
                            required
                            />
                        </div>
                        <div className="col-span-1 md:col-span-3">
                            <Label htmlFor="language" className="sr-only">Language</Label>
                            <Select name="language" defaultValue="English">
                            <SelectTrigger className="mt-1 bg-white dark:bg-black/20">
                                <SelectValue placeholder="Select a language" />
                            </SelectTrigger>
                            <SelectContent>
                                {languages.map((lang) => (
                                <SelectItem key={lang.value} value={lang.value}>
                                    {lang.label}
                                </SelectItem>
                                ))}
                            </SelectContent>
                            </Select>
                        </div>
                    </div>
                    
                    <SubmitButton />

                    {error && (
                    <Alert variant="destructive" className="mt-4">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                    )}
                </form>

                <div className="mt-6">
                    <h3 className="font-semibold mb-2 text-left">AI Response:</h3>
                    <Card className="min-h-[150px] bg-secondary/20">
                        <CardContent className="p-4 text-left">
                            {pending ? (
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[80%]" />
                                    <Skeleton className="h-4 w-[90%]" />
                                    <Skeleton className="h-4 w-[75%]" />
                                </div>
                            ) : response ? (
                                <p className="text-muted-foreground whitespace-pre-wrap">{response}</p>
                            ) : (
                                <p className="text-muted-foreground/70 italic">The AI's response will appear here...</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
            <Button size="lg" asChild className="shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <a href="https://vega.aquoris.ai" target="_blank" rel="noopener noreferrer">Try the Live Demo</a>
            </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
