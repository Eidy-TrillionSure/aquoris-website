'use server';

/**
 * @fileOverview Implements the translation of doctor requests to English before processing with the LLM.
 *
 * - translateDoctorRequests - A function that translates doctor requests to English.
 * - TranslateDoctorRequestsInput - The input type for the translateDoctorRequests function.
 * - TranslateDoctorRequestsOutput - The return type for the translateDoctorRequests function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateDoctorRequestsInputSchema = z.object({
  request: z.string().describe('The doctor\u2019s request in their native language.'),
  sourceLanguage: z.string().describe('The language of the doctor\u2019s request.'),
});
export type TranslateDoctorRequestsInput = z.infer<
  typeof TranslateDoctorRequestsInputSchema
>;

const TranslateDoctorRequestsOutputSchema = z.object({
  translatedRequest: z.string().describe('The translated request in English.'),
});
export type TranslateDoctorRequestsOutput = z.infer<
  typeof TranslateDoctorRequestsOutputSchema
>;

export async function translateDoctorRequests(
  input: TranslateDoctorRequestsInput
): Promise<TranslateDoctorRequestsOutput> {
  return translateDoctorRequestsFlow(input);
}

const translateDoctorRequestsPrompt = ai.definePrompt({
  name: 'translateDoctorRequestsPrompt',
  input: {
    schema: TranslateDoctorRequestsInputSchema,
  },
  output: {
    schema: TranslateDoctorRequestsOutputSchema,
  },
  prompt: `Translate the following request from {{{sourceLanguage}}} to English:\n\n{{{request}}}`,
});

const translateDoctorRequestsFlow = ai.defineFlow(
  {
    name: 'translateDoctorRequestsFlow',
    inputSchema: TranslateDoctorRequestsInputSchema,
    outputSchema: TranslateDoctorRequestsOutputSchema,
  },
  async input => {
    const {output} = await translateDoctorRequestsPrompt(input);
    return output!;
  }
);
