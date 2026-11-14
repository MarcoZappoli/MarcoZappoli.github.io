// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkCallouts from './src/lib/remark-callouts.mjs';
import remarkPanels from './src/lib/remark-panels.mjs';

export default defineConfig({
  site: 'https://marcozappoli.github.io',
  integrations: [mdx(), sitemap()],
  // Multi-panel figures: images on one line become a row (see src/lib/remark-panels.mjs).
  // Callout banners: > [!NOTE] / [!TIP] / [!IMPORTANT] / [!WARNING] / [!CAUTION] (see src/lib/remark-callouts.mjs).
  // Markdown with TeX maths ($...$ and $$...$$), rendered to HTML by KaTeX at build time.
  markdown: { processor: unified({ remarkPlugins: [remarkMath, remarkCallouts, remarkPanels], rehypePlugins: [rehypeKatex] }) },
});
