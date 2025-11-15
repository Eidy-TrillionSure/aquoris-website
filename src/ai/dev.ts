import { config } from 'dotenv';
config();

import '@/ai/flows/translate-doctor-requests.ts';
import '@/ai/flows/translate-model-results.ts';
import '@/ai/flows/multilingual-reasoning.ts';