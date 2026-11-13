import { getCollection, type CollectionEntry } from 'astro:content';
import { papers } from './papers';

/** Sections of the Projects page, one per folder in src/content/projects/. */
export const GROUPS = [
  { folder: 'research', label: 'Research', blurb: 'Thesis and ongoing research work.' },
  { folder: 'msc', label: 'MSc projects', blurb: 'Course projects from the MSc in Aeronautical Engineering.' },
  { folder: 'independent', label: 'Independent projects', blurb: 'Personal projects and code developed on my own time.' },
] as const;
export type Group = (typeof GROUPS)[number]['folder'];

/** The folder a project file sits in decides its group. */
export function groupOf(p: CollectionEntry<'projects'>): Group {
  const folder = p.filePath?.split('/').at(-2);
  const g = GROUPS.find((x) => x.folder === folder);
  if (!g) throw new Error(`Project ${p.id}: put the file in one of src/content/projects/{${GROUPS.map((x) => x.folder).join(',')}}/`);
  return g.folder;
}

/** Published projects, ordered by `order` then newest first. Drafts are hidden. */
export async function getProjects() {
  const all = await getCollection('projects', (p) => !p.data.draft);
  for (const p of all) {
    groupOf(p);
    if (p.data.paper && !papers.some((x) => x.id === p.data.paper))
      throw new Error(`Project ${p.id}: paper ${p.data.paper} is not a key in src/data/papers.bib`);
  }
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}
