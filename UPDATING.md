# Updating the site

Routine updates need no code changes. For each one: edit, preview, push, merge, approve.

## Preview any change locally

```bash
cd ~/projects/website
npm run dev          # http://localhost:4321, reloads on save (clears the content cache at start)
npm run dev:stop     # stop a dev server left running; do this after git pull, then npm run dev again
npm run build        # must finish without errors before you push
```

## Add a publication

1. Open `src/data/papers.bib` and paste the BibTeX entry (from the journal, arXiv or Google Scholar).
2. Add the site fields you need:
   - `status = {published}`, `{submitted}` or `{in preparation}` (default: published)
   - `selected = {true}` to show it on the home page
   - `pdf = {file.pdf}` and put the file in `public/pdf/`
   - `code = {https://github.com/...}`
   - `image = {file.png}` and put the figure in `src/assets/papers/` (any size; shown as a small thumbnail). The title and the thumbnail link to the DOI, else `url`, arXiv or PDF; with none of these they are not clickable
   - Math in titles and abstracts: `$Re_\lambda$` inline; LaTeX accents (`Fax\'en`) and `--` dashes are converted.
3. When a paper moves from submitted to published, change `status` and add `doi`.

## Add a project or new code

1. Copy an existing file into the folder for its section and rename it, for example `my-new-code.md`. The file name becomes the URL: `/projects/my-new-code/`.
   - `src/content/projects/research/`: thesis and research work (the MSc thesis; later the PhD work)
   - `src/content/projects/msc/`: MSc course projects
   - `src/content/projects/independent/`: personal projects and code done on your own
   Moving a file between folders moves it to another section without changing its URL.
2. Put figures in `src/assets/projects/my-new-code/` (PNG or JPG, any size; the build makes web versions).
3. Fill in the header (`title`, `summary`, `category`, `type`, `field`, `tools`, `year`, optional `repo`, `cover`, `featured`, `paper: <BibTeX key>` to add a "Related publication" button) and write the page in Markdown.
   - PDF buttons: `reports:` with one line per file, e.g. `- { label: "Lab 1 (PDF)", href: /pdf/file.pdf, lang: Italian }` (`lang` is optional and shows "in Italian" next to the button).
   - Co-authors: `collaborators: [Name One, Name Two]`. Put their LinkedIn URLs in `src/data/people.ts` once and every page links them. Equations: `$...$` inline, `$$...$$` for display.
4. Coloured banners: start a quote with a type, for example
   ```md
   > [!WARNING] Optional title
   > Text of the banner.
   ```
   Types: `NOTE` (blue), `TIP` (green), `IMPORTANT` (violet), `WARNING` (amber), `CAUTION` (red).
5. Figures side by side: put the images on one line, with an optional label in quotes:
   ```md
   ![Cluster](../../../assets/projects/my-project/a.png "(a)") ![PDF](../../../assets/projects/my-project/b.png "(b)")
   ```
   They become one row with equal heights (stacked on phones). Write the caption in the next paragraph.
6. Keep `draft: true` until it is ready to appear.

`category` must be one of Turbulence, CFD, Experimental, Aerodynamic design, Software (edit the list in `src/content.config.ts`). A missing or misspelled field stops the build with a message naming the file.

## Replace the CV

Overwrite `public/pdf/CV_Marco_Zappoli.pdf`. Update `src/data/cv.ts` if the web CV should change too.

## Publish

```bash
git add -A && git commit -m "Add <paper or project>"
git push                       # to the redesign branch: GitHub runs the build check
```

Open a pull request into `master` on GitHub, merge it, then approve the waiting deployment in the Actions tab.

## Versions

Every dependency is pinned in `package.json` and `package-lock.json`, and Node is pinned in `.nvmrc`. Nothing needs upgrading. If you ever choose to upgrade Astro, do it on a separate branch and read its upgrade guide first.
