import raw from '../data/papers.bib?raw';
import { parseBibtex, type Paper } from './bibtex';

export const papers: Paper[] = parseBibtex(raw);
export const selectedPapers = papers.filter((p) => p.selected);

const isThesis = (p: Paper) => p.type.endsWith('thesis');
const isConference = (p: Paper) => ['inproceedings', 'conference'].includes(p.type) || /conference|congress|meeting/i.test(p.venue ?? '');

export const groups: { label: string; items: Paper[] }[] = [
  { label: 'Journal articles', items: papers.filter((p) => p.status === 'published' && !isThesis(p) && !isConference(p)) },
  { label: 'Submitted', items: papers.filter((p) => p.status === 'submitted') },
  { label: 'In preparation', items: papers.filter((p) => p.status === 'in preparation') },
  { label: 'Conference contributions', items: papers.filter((p) => p.status === 'published' && isConference(p)) },
  { label: 'Theses', items: papers.filter((p) => p.status === 'published' && isThesis(p)) },
].filter((g) => g.items.length > 0);

/** Surname shown in bold in author lists. */
export const OWNER = 'Zappoli';
