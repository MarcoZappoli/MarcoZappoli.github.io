/**
 * Multi-panel figures in Markdown: put the images on one line, separated by spaces.
 *
 *   ![Cluster](a.png "(a)") ![Asphericity](b.png "(b)") ![Acylindricity](c.png "(c)")
 *
 * A paragraph that holds only images (two or more) becomes one row of panels with
 * equal heights; on phones the panels stack. The optional "title" in quotes is shown
 * as a label under the panel. Styles: .panels in src/styles/global.css.
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

/** Width / height of a PNG or JPEG, or 1 if it cannot be read. */
function aspect(file) {
  try {
    const b = readFileSync(file);
    if (b.readUInt32BE(0) === 0x89504e47) return b.readUInt32BE(16) / b.readUInt32BE(20);
    if (b[0] === 0xff && b[1] === 0xd8) {
      for (let i = 2; i < b.length; ) {
        const marker = b[i + 1], len = b.readUInt16BE(i + 2);
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker))
          return b.readUInt16BE(i + 7) / b.readUInt16BE(i + 5);
        i += 2 + len;
      }
    }
  } catch {}
  return 1;
}

const blank = (n) => (n.type === 'text' && !n.value.trim()) || n.type === 'break';

function walk(node, dir) {
  if (!node.children) return;
  for (const child of node.children) {
    if (child.type === 'paragraph') convert(child, dir);
    else walk(child, dir);
  }
}

function convert(p, dir) {
  const images = p.children.filter((n) => n.type === 'image');
  if (images.length < 2 || !p.children.every((n) => n.type === 'image' || blank(n))) return;
  p.data = { hName: 'div', hProperties: { className: ['panels'] } };
  p.children = images.map((img) => {
    const label = img.title;
    img.title = null;
    const ratio = dir && !/^[a-z]+:/i.test(img.url) ? aspect(resolve(dir, decodeURI(img.url))) : 1;
    return {
      type: 'panel',
      data: { hName: 'span', hProperties: { className: ['panel'], style: `flex-grow: ${ratio.toFixed(4)}` } },
      children: [img, ...(label ? [{ type: 'panelLabel', data: { hName: 'span', hProperties: { className: ['panel-label'] } }, children: [{ type: 'text', value: label }] }] : [])],
    };
  });
}

export default function remarkPanels() {
  return (tree, file) => walk(tree, file.path ? dirname(file.path) : undefined);
}
