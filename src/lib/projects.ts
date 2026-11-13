import { getCollection } from 'astro:content';

/** Published projects, ordered by `order` then newest first. Drafts are hidden. */
export async function getProjects() {
  const all = await getCollection('projects', (p) => !p.data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}
