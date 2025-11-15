'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleReasoning } from '@/app/actions';
import { SectionWrapper } from './section-wrapper';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, LoaderCircle } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const initialState = {
  response: null,
  error: null,
};

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

export function MultilingualReasoning() {
  const [state, formAction] = useFormState(handleReasoning, initialState);

  return (
    <SectionWrapper id="demo">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
          Asia-First Multilingual Clinical Reasoning
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Enter a clinical scenario in any supported language. Our AI will provide reasoning and insights in that same language, demonstrating the core of Vega OS.
        </p>
      </div>

      <Card className="mt-12 max-w-4xl mx-auto shadow-xl bg-background/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <form action={formAction} className="space-y-6">
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

            {state.error && (
              <Alert variant="destructive" className="mt-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}
          </form>

          <div className="mt-6">
              <h3 className="font-semibold mb-2 text-left">AI Response:</h3>
              <Card className="min-h-[150px] bg-secondary/20">
                  <CardContent className="p-4 text-left">
                      {useFormStatus().pending ? (
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[80%]" />
                            <Skeleton className="h-4 w-[90%]" />
                            <Skeleton className="h-4 w-[75%]" />
                        </div>
                      ) : state.response ? (
                          <p className="text-muted-foreground whitespace-pre-wrap">{state.response}</p>
                      ) : (
                          <p className="text-muted-foreground/70 italic">The AI's response will appear here...</p>
                      )}
                  </CardContent>
              </Card>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
