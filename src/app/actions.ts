'use server';

import { z } from 'zod';
import { multilingualReasoning } from '@/ai/flows/multilingual-reasoning';

const reasoningSchema = z.object({
  query: z.string().min(10, 'Query must be at least 10 characters.'),
  language: z.string(),
});

export async function handleReasoning(prevState: any, formData: FormData) {
  try {
    const validatedFields = reasoningSchema.safeParse({
      query: formData.get('query'),
      language: formData.get('language'),
    });

    if (!validatedFields.success) {
      return {
        ...prevState,
        error: 'Invalid input. Please check your query.',
        response: null,
      };
    }

    const { query, language } = validatedFields.data;
    const result = await multilingualReasoning({ query, language });

    return {
      ...prevState,
      response: result.response,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      error: 'An error occurred while processing your request. Please try again.',
      response: null,
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function handleContact(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        message: 'Invalid form data.',
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }
    
    // Here you would typically send an email or save to a database.
    // For this example, we'll just log it.
    console.log('New contact form submission:');
    console.log('Name:', validatedFields.data.name);
    console.log('Email:', validatedFields.data.email);
    console.log('Message:', validatedFields.data.message);

    return {
      message: 'Thank you for your message! We will get back to you soon.',
      success: true,
      errors: null,
    };
  } catch (error) {
    return {
      message: 'An unexpected error occurred. Please try again.',
      success: false,
      errors: null,
    };
  }
}
