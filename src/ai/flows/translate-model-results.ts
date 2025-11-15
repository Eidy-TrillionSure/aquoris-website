'use server';

/**
 * @fileOverview This flow translates the model results back into the doctor's native language.
 *
 * - translateModelResults - A function that handles the translation process.
 * - TranslateModelResultsInput - The input type for the translateModelResults function.
 * - TranslateModelResultsOutput - The return type for the translateModelResults function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateModelResultsInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  language: z.string().describe('The target language for translation.'),
});
export type TranslateModelResultsInput = z.infer<
  typeof TranslateModelResultsInputSchema
>;

const TranslateModelResultsOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateModelResultsOutput = z.infer<
  typeof TranslateModelResultsOutputSchema
>;

export async function translateModelResults(
  input: TranslateModelResultsInput
): Promise<TranslateModelResultsOutput> {
  return translateModelResultsFlow(input);
}

const translateModelResultsPrompt = ai.definePrompt({
  name: 'translateModelResultsPrompt',
  input: {schema: TranslateModelResultsInputSchema},
  output: {schema: TranslateModelResultsOutputSchema},
  prompt: `Translate the following text into {{{language}}}:\n\n{{{text}}}`,
});

const translateModelResultsFlow = ai.defineFlow(
  {
    name: 'translateModelResultsFlow',
    inputSchema: TranslateModelResultsInputSchema,
    outputSchema: TranslateModelResultsOutputSchema,
  },
  async input => {
    const {output} = await translateModelResultsPrompt(input);
    return output!;
  }
);
