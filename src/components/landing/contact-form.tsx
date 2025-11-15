'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { handleContact } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { SectionWrapper } from './section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

const initialState = {
  message: null,
  errors: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full shadow-lg hover:shadow-primary/30 transition-shadow">
      {pending && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(handleContact, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success === true) {
      toast({
        title: 'Success!',
        description: state.message,
      });
    } else if (state.success === false && state.message) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <SectionWrapper id="contact" className="bg-secondary/30">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Contact Us</CardTitle>
          <CardDescription>Have a question or want to partner with us? Drop a line below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
              {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." required className="min-h-[120px]" />
              {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
