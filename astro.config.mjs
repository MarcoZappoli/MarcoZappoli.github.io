// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkCallouts from './src/lib/remark-callouts.mjs';

export default defineConfig({
  site: 'https://marcozappoli.github.io',
  integrations: [mdx(), sitemap()],
  // Callout banners: > [!NOTE] / [!TIP] / [!IMPORTANT] / [!WARNING] / [!CAUTION] (see src/lib/remark-callouts.mjs).
  // Markdown with TeX maths ($...$ and $$...$$), rendered to HTML by KaTeX at build time.
  markdown: { processor: unified({ remarkPlugins: [remarkMath, remarkCallouts], rehypePlugins: [rehypeKatex] }) },
});
