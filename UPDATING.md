# Updating the site

Routine updates need no code changes. For each one: edit, preview, push, merge, approve.

## Preview any change locally

```bash
cd ~/projects/website
npm run dev          # http://localhost:4321, reloads on save
npm run build        # must finish without errors before you push
```

## Add a publication

1. Open `src/data/papers.bib` and paste the BibTeX entry (from the journal, arXiv or Google Scholar).
2. Add the site fields you need:
   - `status = {published}`, `{submitted}` or `{in preparation}` (default: published)
   - `selected = {true}` to show it on the home page
   - `pdf = {file.pdf}` and put the file in `public/pdf/`
   - `code = {https://github.com/...}`
3. When a paper moves from submitted to published, change `status` and add `doi`.

## Add a project or new code

1. Copy an existing file in `src/content/projects/` and rename it, for example `my-new-code.md`. The file name becomes the URL: `/projects/my-new-code/`.
2. Put figures in `src/assets/projects/my-new-code/` (PNG or JPG, any size; the build makes web versions).
3. Fill in the header (`title`, `summary`, `category`, `type`, `field`, `tools`, `year`, optional `repo`, `cover`, `featured`) and write the page in Markdown. Equations: `$...$` inline, `$$...$$` for display.
4. Keep `draft: true` until it is ready to appear.

`category` must be one of DNS, CFD, Experimental, Design, Software. A missing or misspelled field stops the build with a message naming the file.

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
