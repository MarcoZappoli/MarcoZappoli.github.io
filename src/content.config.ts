import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects',
    // URL = file name only, so moving a file between folders keeps its link
    generateId: ({ entry }) => entry.replace(/^.*\//, '').replace(/\.mdx?$/, '') }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(['Turbulence', 'CFD', 'Experimental', 'Aerodynamic design', 'Software']),
      type: z.string(),
      field: z.string(),
      tools: z.string(),
      year: z.number().int(),
      order: z.number().default(99),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      cover: image().optional(),
      // looping video shown instead of the cover on the project page (paths under public/, without extension: .webm and .mp4 must both exist)
      coverVideo: z.string().optional(),
      repo: z.url().optional(),
      // PDF buttons in the header; lang (e.g. "Italian") adds a note next to the button
      reports: z.array(z.object({ label: z.string(), href: z.string(), lang: z.string().optional() })).default([]),
      collaborators: z.array(z.string()).default([]), // names; profile links in src/data/people.ts
      paper: z.string().optional(), // BibTeX key of the related publication
    }),
});

export const collections = { projects };
