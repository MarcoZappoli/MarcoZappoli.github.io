import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(['DNS', 'CFD', 'Experimental', 'Design', 'Software']),
      type: z.string(),
      field: z.string(),
      tools: z.string(),
      year: z.number().int(),
      order: z.number().default(99),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      cover: image().optional(),
      repo: z.url().optional(),
      report: z.string().optional(),
    }),
});

export const collections = { projects };
