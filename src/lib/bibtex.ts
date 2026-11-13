// BibTeX parsing helpers adapted from Scholar Pages (astro-theme-scholars)
// Copyright (c) 2025 Jiaxin Peng, MIT License. https://github.com/jxpeng98/astro-theme-scholars
// Paper model and status handling: Marco Zappoli site.

interface BibAuthor {
	given: string;
	family: string;
	suffix?: string;
	literal?: string;
}

function displayText(value: string): string {
	return value.replace(/(?<!\\)[{}]/g, '').replace(/\\([{}%&_#$])/g, '$1').replace(/\s+/g, ' ').trim();
}

function splitOutsideBraces(value: string, separator: RegExp): string[] {
	const delimiter = new RegExp(separator.source, 'iy');
	const parts: string[] = [];
	let depth = 0;
	let start = 0;
	for (let i = 0; i < value.length; i++) {
		if (value[i] === '\\') { i++; continue; }
		if (value[i] === '{') depth++;
		if (value[i] === '}') depth--;
		delimiter.lastIndex = i;
		const match = depth === 0 ? delimiter.exec(value) : null;
		if (match) {
			parts.push(value.slice(start, i).trim());
			i += match[0].length - 1;
			start = i + 1;
		}
	}
	parts.push(value.slice(start).trim());
	return parts.filter(Boolean);
}

function nameParts(name: string): BibAuthor {
	const trimmed = name.trim();
	if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
		return { literal: displayText(trimmed), given: '', family: '' };
	}
	const commaParts = splitOutsideBraces(trimmed, /,/).map(displayText);
	if (commaParts.length > 1) {
		return {
			family: commaParts[0],
			given: commaParts.at(-1) ?? '',
			...(commaParts.length > 2 ? { suffix: commaParts[1] } : {}),
		};
	}
	const words = splitOutsideBraces(trimmed, /\s+/);
	const particle = words.findIndex((word, index) => index > 0 && /^\p{Ll}/u.test(word));
	const familyStart = particle === -1 ? words.length - 1 : particle;
	return {
		given: displayText(words.slice(0, familyStart).join(' ')),
		family: displayText(words.slice(familyStart).join(' ')),
	};
}

function displayAuthor(author: BibAuthor): string {
	return author.literal ?? [author.given, author.family].filter(Boolean).join(' ') +
		(author.suffix ? `, ${author.suffix}` : '');
}

function skipTrivia(source: string, start: number): number {
	let i = start;
	while (i < source.length) {
		if (/\s/.test(source[i])) i++;
		else if (source[i] === '%') {
			const end = source.indexOf('\n', i);
			i = end === -1 ? source.length : end + 1;
		} else break;
	}
	return i;
}

function readBlock(source: string, start: number, entry = false) {
	const opener = source[start];
	const closer = opener === '(' ? ')' : opener === '"' ? '"' : '}';
	let depth = 0;
	let quoted = false;
	for (let i = start + 1; i < source.length; i++) {
		const char = source[i];
		if (char === '\\') { i++; continue; }
		if (entry && depth === 0 && !quoted && char === '%') {
			i = skipTrivia(source, i) - 1;
			continue;
		}
		if (entry && depth === 0 && char === '"') { quoted = !quoted; continue; }
		if (!quoted && depth === 0 && char === closer) return { value: source.slice(start + 1, i), end: i + 1 };
		if (char === '{') depth++;
		if (char === '}') depth--;
		if (depth < 0) break;
	}
	throw new Error(`Unterminated BibTeX block: ${source.slice(start, start + 60)}`);
}

function parseFields(body: string, macros: Map<string, string>): Record<string, string> {
	const fields: Record<string, string> = {};
	let index = skipTrivia(body, 0);
	while (index < body.length) {
		const keyMatch = body.slice(index).match(/^([A-Za-z][\w-]*)\s*=\s*/);
		if (!keyMatch) throw new Error(`Invalid BibTeX field near: ${body.slice(index, index + 60)}`);
		const key = keyMatch[1].toLowerCase();
		index += keyMatch[0].length;
		let value = '';
		do {
			index = skipTrivia(body, index);
			if (body[index] === '{' || body[index] === '"') {
				const block = readBlock(body, index);
				value += block.value;
				index = block.end;
			} else {
				const token = body.slice(index).match(/^[\w:+.-]+/)?.[0];
				if (!token) throw new Error(`Missing BibTeX value for ${key}`);
				const expanded = /^\d+$/.test(token) ? token : macros.get(token.toLowerCase());
				if (expanded === undefined) throw new Error(`Undefined BibTeX string: ${token}`);
				value += expanded;
				index += token.length;
			}
			index = skipTrivia(body, index);
			if (body[index] !== '#') break;
			index++;
		} while (index <= body.length);
		fields[key] = value;
		if (index < body.length && body[index] !== ',') throw new Error(`Expected comma after BibTeX field ${key}`);
		index = skipTrivia(body, index + 1);
	}
	return fields;
}

export type Status = 'published' | 'submitted' | 'in preparation';

export interface Paper {
  id: string;
  type: string;
  title: string;
  authors: string[];
  year?: number;
  venue?: string;
  status: Status;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  code?: string;
  url?: string;
  abstract?: string;
  selected: boolean;
  bibtex: string;
}

const STATUSES: Status[] = ['published', 'submitted', 'in preparation'];

/** Parse a .bib file. Fails the build with a clear message on malformed entries. */
export function parseBibtex(raw: string): Paper[] {
  const papers: Paper[] = [];
  const ids = new Set<string>();
  const macros = new Map<string, string>(
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      .map((m) => [m.slice(0, 3).toLowerCase(), m]),
  );
  let index = 0;
  while (index < raw.length) {
    index = skipTrivia(raw, index);
    if (index >= raw.length) break;
    if (raw[index] !== '@') { index++; continue; }
    const header = raw.slice(index).match(/^@(\w+)\s*([{(])/);
    if (!header) throw new Error(`Invalid BibTeX entry near: ${raw.slice(index, index + 60)}`);
    const type = header[1].toLowerCase();
    const block = readBlock(raw, index + header[0].length - 1, true);
    const source = raw.slice(index, block.end);
    index = block.end;
    if (type === 'comment' || type === 'preamble') continue;
    if (type === 'string') {
      for (const [k, v] of Object.entries(parseFields(block.value, macros))) macros.set(k, v);
      continue;
    }
    const comma = block.value.indexOf(',');
    const id = block.value.slice(0, comma).trim();
    if (comma < 1 || !id) throw new Error('BibTeX entry needs a citation key and fields');
    if (ids.has(id)) throw new Error(`Duplicate BibTeX key: ${id}`);
    ids.add(id);
    const f = parseFields(block.value.slice(comma + 1), macros);
    const text = (k: string) => (f[k] ? displayText(f[k]) : undefined);
    if (!f.title?.trim()) throw new Error(`BibTeX entry ${id} needs a title`);
    const status = (text('status')?.toLowerCase() ?? 'published') as Status;
    if (!STATUSES.includes(status)) throw new Error(`BibTeX entry ${id}: status must be one of ${STATUSES.join(', ')}`);
    const year = f.year ? Number(displayText(f.year)) : undefined;
    if (year !== undefined && !Number.isInteger(year)) throw new Error(`Invalid BibTeX year in ${id}`);
    papers.push({
      id, type, status, year,
      title: displayText(f.title),
      authors: f.author ? splitOutsideBraces(f.author, /\s+and\s+/).map(nameParts).map(displayAuthor) : [],
      venue: text('journal') ?? text('booktitle') ?? text('school') ?? text('howpublished'),
      doi: text('doi')?.replace(/^https?:\/\/(dx\.)?doi\.org\//i, ''),
      arxiv: text('arxiv') ?? text('eprint'),
      pdf: text('pdf'),
      code: text('code'),
      url: text('url'),
      abstract: text('abstract'),
      selected: text('selected')?.toLowerCase() === 'true',
      bibtex: source
        .split('\n')
        .filter((line) => !/^\s*(status|selected|pdf|code|preview)\s*=/.test(line))
        .join('\n'),
    });
  }
  return papers.sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}
