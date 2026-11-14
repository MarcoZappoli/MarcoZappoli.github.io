import katex from 'katex';

// Plain-text LaTeX accents and symbols commonly found in BibTeX fields.
const ACCENTS: Record<string, Record<string, string>> = {
  "'": { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú', y: 'ý', A: 'Á', E: 'É', I: 'Í', O: 'Ó', U: 'Ú', c: 'ć', n: 'ń', s: 'ś', z: 'ź' },
  '`': { a: 'à', e: 'è', i: 'ì', o: 'ò', u: 'ù', A: 'À', E: 'È', I: 'Ì', O: 'Ò', U: 'Ù' },
  '"': { a: 'ä', e: 'ë', i: 'ï', o: 'ö', u: 'ü', A: 'Ä', E: 'Ë', I: 'Ï', O: 'Ö', U: 'Ü', y: 'ÿ' },
  '^': { a: 'â', e: 'ê', i: 'î', o: 'ô', u: 'û', A: 'Â', E: 'Ê', I: 'Î', O: 'Ô', U: 'Û' },
  '~': { a: 'ã', n: 'ñ', o: 'õ', A: 'Ã', N: 'Ñ', O: 'Õ' },
  c: { c: 'ç', C: 'Ç' },
  v: { c: 'č', s: 'š', z: 'ž', e: 'ě', r: 'ř', C: 'Č', S: 'Š', Z: 'Ž' },
};
const SYMBOLS: Record<string, string> = { ss: 'ß', o: 'ø', O: 'Ø', aa: 'å', AA: 'Å', ae: 'æ', AE: 'Æ', l: 'ł', L: 'Ł', i: 'ı', '&': '&', '%': '%', _: '_', '#': '#', $: '$' };

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Text outside math: accents, dashes, ties and quotes, braces removed, HTML-escaped. */
function textToHtml(s: string): string {
  let out = s
    .replace(/\\([`'"^~])\s*\{?\\?([A-Za-z])\}?/g, (m, acc, ch) => ACCENTS[acc]?.[ch] ?? ch)
    .replace(/\\([cv])\s*\{([A-Za-z])\}/g, (m, acc, ch) => ACCENTS[acc]?.[ch] ?? ch)
    .replace(/\\(ss|aa|AA|ae|AE|o|O|l|L|i)\b\s?/g, (m, k) => SYMBOLS[k])
    .replace(/\\([&%_#$])/g, '$1')
    .replace(/\\(emph|textit|textbf|textrm|mathrm)\s*\{([^{}]*)\}/g, '$2')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/``|''/g, '"')
    .replace(/~/g, ' ')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ');
  return escapeHtml(out);
}

/**
 * Render a BibTeX/LaTeX string to HTML: $...$ and \(...\) become KaTeX
 * (rendered at build time, no JavaScript in the browser), the rest is text.
 */
export function texToHtml(src: string | undefined): string {
  if (!src) return '';
  const parts: string[] = [];
  const re = /(?<!\\)\$\$([\s\S]+?)\$\$|(?<!\\)\$([^$]+?)\$|\\\(([\s\S]+?)\\\)/g;
  let last = 0;
  for (const m of src.matchAll(re)) {
    parts.push(textToHtml(src.slice(last, m.index)));
    const display = m[1] !== undefined;
    const math = (m[1] ?? m[2] ?? m[3]).trim();
    parts.push(katex.renderToString(math, { displayMode: display, throwOnError: false, output: 'html' }));
    last = (m.index ?? 0) + m[0].length;
  }
  parts.push(textToHtml(src.slice(last)));
  return parts.join('');
}
