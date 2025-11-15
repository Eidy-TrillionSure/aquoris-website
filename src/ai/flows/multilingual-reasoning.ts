'use server';

/**
 * @fileOverview This file defines a Genkit flow for multilingual medical reasoning.
 *
 * - multilingualReasoning - A function that accepts a medical query in any language and returns a response.
 * - MultilingualReasoningInput - The input type for the multilingualReasoning function.
 * - MultilingualReasoningOutput - The return type for the multilingualReasoning function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MultilingualReasoningInputSchema = z.object({
  query: z.string().describe('The medical query in any language.'),
  language: z.string().describe('The language of the query.'),
});
export type MultilingualReasoningInput = z.infer<typeof MultilingualReasoningInputSchema>;

const MultilingualReasoningOutputSchema = z.object({
  response: z.string().describe('The response to the medical query in the same language.'),
});
export type MultilingualReasoningOutput = z.infer<typeof MultilingualReasoningOutputSchema>;

export async function multilingualReasoning(input: MultilingualReasoningInput): Promise<MultilingualReasoningOutput> {
  return multilingualReasoningFlow(input);
}

const prompt = ai.definePrompt({
  name: 'multilingualReasoningPrompt',
  input: {schema: MultilingualReasoningInputSchema},
  output: {schema: MultilingualReasoningOutputSchema},
  prompt: `You are a medical AI assistant that can understand and respond to medical queries in any language.

The user will provide a query in their native language, and you should respond in the same language.

Language: {{{language}}}

Query: {{{query}}}

Response: `,
});

const multilingualReasoningFlow = ai.defineFlow(
  {
    name: 'multilingualReasoningFlow',
    inputSchema: MultilingualReasoningInputSchema,
    outputSchema: MultilingualReasoningOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
