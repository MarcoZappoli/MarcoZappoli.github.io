/**
 * Coloured callout banners in Markdown, written like GitHub alerts:
 *
 *   > [!NOTE] Optional title
 *   > Text of the banner.
 *
 * Types: NOTE (blue), TIP (green), IMPORTANT (violet), WARNING (amber), CAUTION (red).
 * Without a title the type name is used. Styles live in src/styles/global.css (.callout).
 */
const LABELS = { note: 'Note', tip: 'Tip', important: 'Important', warning: 'Warning', caution: 'Caution' };
const MARKER = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*([^\n]*)\n?/i;

function walk(node) {
  if (!node.children) return;
  for (const child of node.children) {
    if (child.type === 'blockquote') convert(child);
    walk(child);
  }
}

function convert(quote) {
  const first = quote.children[0];
  const text = first?.type === 'paragraph' ? first.children[0] : undefined;
  if (text?.type !== 'text') return;
  const m = text.value.match(MARKER);
  if (!m) return;
  const type = m[1].toLowerCase();
  const title = m[2].trim() || LABELS[type];
  text.value = text.value.slice(m[0].length);
  if (!text.value) first.children.shift();
  if (first.children[0]?.type === 'break') first.children.shift();
  if (!first.children.length) quote.children.shift();
  quote.data = { hName: 'aside', hProperties: { className: ['callout', `callout-${type}`] } };
  quote.children.unshift({
    type: 'paragraph',
    data: { hProperties: { className: ['callout-title'] } },
    children: [{ type: 'text', value: title }],
  });
}

export default function remarkCallouts() {
  return (tree) => walk(tree);
}
