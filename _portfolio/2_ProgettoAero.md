---
title: "FOSSER: Formation-flight Optimization for a SubSonic mission with Extended Range"
excerpt: "This study analyzes aerodynamic efficiency in two-ship fighter formations, combining the Vortex Lattice Method with optimization techniques (PSO and Kriging) to reduce induced drag and identify optimal configurations."
collection: portfolio
permalink: /projects/2_ProgettoAero
author_profile: false
---

<script>
  MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
    svg: { fontCache: 'global' }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5/dist/basicLightbox.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5/dist/basicLightbox.min.css">

<style>
html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.page__inner-wrap, .page {
  padding-left: 0 !important;
  margin-left: 0 !important;
}

.sidebar, .author__urls-wrapper, .author__avatar, .author__content {
  display: none !important;
}

.page {
  width: 100% !important;
  float: none !important;
  padding-right: 0 !important;
}

.page__title {
  display: none !important;
}

.page__share {
  display: none !important;
}

/* ── Hero ── */
.project-hero {
  background-color: #000;
  color: white;
  padding: 60px 48px;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 40px;
  min-height: 400px;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.project-hero-text {
  flex: 1;
  min-width: 0;
  max-width: 60%;
  position: relative;
  z-index: 2;
}

.project-hero-text h1 {
  font-size: 2.5em;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 20px 0;
  border: none;
  color: white;
}

.project-hero-text p {
  font-size: 1.1em;
  line-height: 1.7;
  color: #cccccc;
  margin: 0;
}

.project-hero-image {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 48px;
  padding-top: 20px;
}

.project-hero-image img {
  max-width: 500px;
  max-height: 360px;
  width: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.project-hero-image p {
  font-size: 0.75em;
  color: #888;
  margin-top: 8px;
  text-align: right;
}

/* ── Meta bar ── */
.project-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 140px;
  flex-wrap: wrap;
  margin: 36px auto;
  padding: 20px 0;
  border-top: 2px solid #888;
  border-bottom: 2px solid #888;
  max-width: 1000px;
}

.project-meta-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4px;
}

.project-meta-item span:first-child {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #ff6600;
  font-weight: 700;
}

.project-meta-item span:last-child {
  font-size: 0.95em;
  font-weight: 700;
}

/* ── Body ── */
.project-body {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.project-body h1 {
  font-size: 2em;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 12px;
  border-bottom: 2px solid #888;
  padding-bottom: 6px;
}

.project-body h2 {
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 12px;
  border-bottom: 1 solid #888;
  padding-bottom: 6px;
}

.project-body p {
  font-size: 1.0em;
  line-height: 1.8;
  margin-bottom: 1.2em;
}

/* ── Equation ── */
.equation-block {
  overflow-x: auto;
  margin: 24px 0;
  padding: 20px 24px;
  border-left: 3px solid #ff6600;
  border-radius: 0 4px 4px 0;
  font-size: 1.05em;
  background-color: #f8f8f8;
  color: #4f4f4f;
}

@media (prefers-color-scheme: dark) {
  .equation-block {
    background-color: #1e1e1e;
    color: #e8e8e8;
  }
}

/* ── Figures ── */
figure {
  margin: 32px 0;
}

figcaption {
  font-size: 0.85em;
  color: #555;
  margin-top: 10px;
  font-style: italic;
  line-height: 1.5;
}

@media (prefers-color-scheme: dark) {
  figcaption { color: #aaa; }
}

figure.zoomable img {
  cursor: zoom-in;
  border-radius: 4px;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .project-hero {
    padding: 40px 24px;
    min-height: unset;
  }

  .project-hero-text {
    max-width: 100%;
  }

  .project-hero-text h1 {
    font-size: 1.6em;
  }

  .project-hero-image {
    display: none;
  }

  .project-meta {
    gap: 24px;
  }

  .equation-block {
    font-size: 0.75em;
    padding: 12px;
  }

  figure > div {
    flex-direction: column !important;
  }

  figure > div > img {
    width: 100% !important;
  }
}

.notice--warning p,
.notice--info p,
.notice--danger p,
.notice--success p {
  font-size: 1.1em;
  line-height: 1.5;
  margin-bottom: 0.5em;
}

.notice--warning h4,
.notice--info h4,
.notice--danger h4,
.notice--success h4 {
  font-size: 1.3em;
  margin-top: 0;
  margin-bottom: 6px;
}

/* ── Grid layout ── */
.hover-grid {
  display: flex;
  gap: 16px;
  margin: 40px 0;
}

.hover-item {
  flex: 1;
  text-align: center;
}

/* ── Hover container ── */
.hover-fade {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3; /* adjust if needed */
  overflow: hidden;
  border-radius: 6px;
}

/* ── Stacked images (BOTTOM aligned) ── */
.hover-fade img {
  position: absolute;
  bottom: 0;   /* key change */
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* use 'cover' if misalignment persists */
  border-radius: 6px;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

/* Hover image */
.hover-fade .hover {
  opacity: 0;
}

/* On hover → fully replace */
.hover-fade:hover .hover {
  opacity: 1;
  transform: scale(1.01);
}

/* Fine vertical alignment correction */
.hover-fade .hover {
  transform: translateY(15px); /* adjust this value */
}

/* Keep hover animation */
.hover-fade:hover .hover {
  opacity: 1;
  transform: translateY(15px) scale(1.01);
}

/* ── Overlay label (caption-style) ── */
.label {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  
  font-size: 0.75em;
  font-style: italic;
  color: #eee;
  
  background: rgba(0, 0, 0, 0.65);
  padding: 4px 10px;
  border-radius: 4px;
  
  letter-spacing: 0.02em;
  z-index: 3;
  
  transition: opacity 0.3s ease;
}

/* Default = baseline */
.label.before {
  opacity: 1;
}

/* Hover = optimized */
.label.after {
  opacity: 0;
}

/* Swap labels */
.hover-fade:hover .label.before {
  opacity: 0;
}

.hover-fade:hover .label.after {
  opacity: 1;
}

/* ── Caption under figure ── */
.hover-caption {
  margin-top: 10px;
  font-size: 0.85em;
  color: #555;
  font-style: italic;
  line-height: 1.4;
}

@media (prefers-color-scheme: dark) {
  .hover-caption {
    color: #aaa;
  }
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .hover-grid {
    flex-direction: column;
  }
}

/* ── PDF Button ── */
.pdf-button {
  display: block;
  width: fit-content;
  max-width: 100%;
  
  background: #6f767b; /* grey tone */
  color: #fff;
  
  padding: 14px 22px;
  margin: 40px 0;
  
  border-radius: 6px;
  font-size: 1.1em;
  font-weight: 700;
  
  text-decoration: none;
  
  transition: all 0.2s ease;
}

/* Hover effect */
.pdf-button:hover {
  background: #5f666b;
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .pdf-button {
    background: #444;
  }

  .pdf-button:hover {
    background: #555;
  }
}
</style>

<div class="project-hero">
  <div class="project-hero-text">
    <h1>FOSSER: Formation-flight Optimization for a SubSonic mission with Extended Range</h1>
    <p>
      This study analyzes aerodynamic efficiency in two-ship fighter formations, combining the Vortex Lattice Method with optimization techniques (PSO and Kriging) to reduce induced drag and identify optimal configurations.
    </p>
  </div>
  <div class="project-hero-image">
    <img src="/images/F18_OGPos_Front.png" alt="F18 formation non optimized">
    <p><b>Image Credit: Marco Zappoli</b></p>
  </div>
</div>

<div class="project-meta">
  <div class="project-meta-item">
    <span>Type</span>
    <span>Master's Project</span>
  </div>
  <div class="project-meta-item">
    <span>Field</span>
    <span>Aerodynamics</span>
  </div>
  <div class="project-meta-item">
    <span>Tools</span>
    <span>VLM/PSO</span>
  </div>
  <div class="project-meta-item">
    <span>Year</span>
    <span>2025</span>
  </div>
</div>

<div class="project-body">

  <h1>The problem: formation flight ✈️</h1>

  <p>
    Formation flight offers a way to <strong>reduce aerodynamic drag</strong> by exploiting the interaction between aircraft wakes. A trailing aircraft flying in the upwash of a leader’s wingtip vortex requires less lift, and therefore less thrust, to maintain flight.
  </p>

  <p>
    Experimental and theoretical studies show that this mechanism can significantly reduce induced drag and fuel consumption, especially in <strong>subsonic cruise</strong>, where induced drag is dominant.
  </p>

  <p>
    However, for fighter aircraft (characterized by <strong>low-aspect-ratio, swept wings</strong>) the effectiveness of formation flight is still not well understood and depends strongly on:
  </p>

  <ul>
    <li>aircraft geometry</li>
    <li>relative positioning in formation</li>
    <li>wake interaction structure</li>
  </ul>


  <h2>What this work does 🎯</h2>

  <p>
    This project investigates how different fighter aircraft benefit from formation flight, and whether <strong>aerodynamic optimization</strong> can enhance these effects.
  </p>

  <p>
    The study is structured in three main steps:
  </p>

  <ul>
    <li>comparison of multiple aircraft across generations</li>
    <li>optimization of wing planforms for selected configurations</li>
    <li>analysis of optimal relative positioning in formation</li>
  </ul>

  <p>
    The final goal is to quantify how formation flight can improve <strong>drag, efficiency, and operational range</strong>.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/F-18_top.png" alt="MRG R100 St0.1" style="width: 48%; border-radius: 4px;">
      <img src="/images/F-18_side.png" alt="MRG R10 St1" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption>Figure 1: Aircraft configurations are reconstructed from three-view drawings and implemented in AVL. <b>Image Credit: Marco Zappoli</b></figcaption>
  </figure>

  <hr>

  <h1>Key findings 📊</h1>

  <h2>1. Formation flight reduces drag (but not equally)</h2>

  <p>
    Trailing aircraft experience significant induced drag reduction, typically in the range of <strong>20–60%</strong>, depending on configuration and spacing.
    Leader aircraft instead see only minor benefits, or even slight penalties.
  </p>

  <p>
    The effectiveness strongly depends on wing geometry,
    confirming that <strong>not all fighter designs benefit equally</strong>.
  </p>

  <h2>2. Positioning is critical</h2>

  <p>
    Maximum benefit occurs when aircraft are positioned such that their <strong>wingtip vortices interact</strong>, typically with aligned wingtips.
  </p>

  <p>
    Even small deviations from the optimal position can significantly reduce the advantage,
    making formation flight a <strong>highly sensitive configuration</strong>.
  </p>

  <h2>3. Optimization enhances and stabilizes benefits</h2>

  <p>
    Wing optimization (via particle swarm algorithms) produces non-intuitive geometries that improve lift-to-drag performance.
  </p>

  <p>
    These optimized configurations:
  </p>

  <ul>
    <li>increase drag reduction for trailing aircraft</li>
    <li>reduce sensitivity to positioning errors</li>
    <li>expand the region of beneficial interaction</li>
  </ul>

  <div class="hover-grid">

  <div class="hover-item">
    <div class="hover-fade">
      <span class="label before">Baseline</span>
      <span class="label after">Optimized</span>
      <img src="/images/F18_OGPos.png" class="base">
      <img src="/images/F18_OptPos.png" class="hover">
    </div>
    <p class="hover-caption">
      McDonnell Douglas F/A-18C
    </p>
  </div>

  <div class="hover-item">
    <div class="hover-fade">
      <span class="label before">Baseline</span>
      <span class="label after">Optimized</span>
      <img src="/images/F22_OGPos.png" class="base">
      <img src="/images/F22_OptPos.png" class="hover">
    </div>
    <p class="hover-caption">
      McDonnell Douglas F-22A
    </p>
  </div>
  </div>

  <p style="text-align:left; font-size:0.85em; color:#888;">
    Figure 2: Hover to compare baseline and optimized configurations. 
    \(\Delta C_{D,i}\) is defined as the difference between the induced drag coefficient of the trailer in formation and the induced drag coefficient of the same aircraft in solo flight with the original wing geometry. Contour slices indicate regions where \(\Delta C_{D,i} < 0\). The floor projection shows the filled contour in the X-Y plane at the optimal Z-position. The black dots represent the Latin Hypercube Sampling studied point, while the red one the reference configuration.
  </p>

  <h2>4. Real operational impact: range extension</h2>

  <p>
    Formation flight translates directly into <strong>increased mission range</strong>.
  </p>

  <p>
    Using the Breguet equation, the study shows that:
  </p>

  <ul>
    <li>two-aircraft formations significantly extend ferry range</li>
    <li>optimized geometries further amplify this effect</li>
    <li>some missions become feasible without aerial refueling</li>
  </ul>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/F18_Range.png" alt="F18 Range" style="width: 48%; border-radius: 4px;">
      <img src="/images/F22_Range.png" alt="F22 Range" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption>Figure 3: Ferry range comparison for (left) F-22A and (right) F/A-18C. Range contours are computed with the Breguet equation at cruise conditions (\(M=0.56\) at \(25000\) ft), using dry thrust-specific fuel consumption values and a 20% fuel reserve for safe landing. Formation denotes the range when the trailer benefits from wake-induced drag reduction. <b>Image Credit: Marco Zappoli</b></figcaption>
  </figure>

  <hr>

  <h1>Takeaway 🚀</h1>

  <p>
    Formation flight is a powerful but sensitive mechanism for improving aerodynamic efficiency.
  </p>

  <p>
    Its effectiveness depends on a delicate balance between:
  </p>

  <ul>
    <li>aircraft design</li>
    <li>relative positioning</li>
    <li>wake interactions</li>
  </ul>

  <p>
    Coupling formation flight with aerodynamic optimization offers a promising pathway to <strong>extend range, reduce fuel consumption, and enhance mission flexibility</strong>.
  </p>

  <hr>

  <a href="/files/Report Progetto Aerodinamico.pdf" target="_blank" class="pdf-button">
    📄 Download Full Technical Report (PDF)
  </a>

</div>

<script>
  const zoomableImages = [];

  document.querySelectorAll('figure.zoomable img').forEach(img => {
    img.style.cursor = 'zoom-in';
    zoomableImages.push(img);
  });

  function openLightbox(index) {
    const img = zoomableImages[index];
    const total = zoomableImages.length;

    const instance = basicLightbox.create(`
      <div style="position: relative; display: flex; align-items: center; justify-content: center; max-width: 95vw;">

        <button onclick="navigateLightbox(${index - 1})"
          style="position: absolute; left: -60px; top: 50%; transform: translateY(-50%);
          background: #111; border: 1px solid #444;
          width: 44px; height: 44px; border-radius: 6px; cursor: pointer;
          display: ${index === 0 ? 'none' : 'flex'};
          align-items: center; justify-content: center;
          z-index: 9999; transition: background 0.2s; padding: 0;"
          onmouseover="this.style.background='#333'" onmouseout="this.style.background='#111'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
          <img src="${img.src}" style="max-width: 80vw; max-height: 80vh; border-radius: 4px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
          <span style="color: #ccc; font-size: 0.9em; font-weight: 500; background: rgba(0,0,0,0.6); padding: 2px 10px; border-radius: 10px;">
            ${index + 1} / ${total}
          </span>
        </div>

        <button onclick="navigateLightbox(${index + 1})"
          style="position: absolute; right: -60px; top: 50%; transform: translateY(-50%);
          background: #111; border: 1px solid #444;
          width: 44px; height: 44px; border-radius: 6px; cursor: pointer;
          display: ${index === total - 1 ? 'none' : 'flex'};
          align-items: center; justify-content: center;
          z-index: 9999; transition: background 0.2s; padding: 0;"
          onmouseover="this.style.background='#333'" onmouseout="this.style.background='#111'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

      </div>
    `);

    window._currentLightbox = instance;
    window._currentLightbox._index = index;
    instance.show();
  }

  function navigateLightbox(index) {
    if (index < 0 || index >= zoomableImages.length) return;
    if (window._currentLightbox) window._currentLightbox.close();
    openLightbox(index);
  }

  zoomableImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  document.addEventListener('keydown', e => {
    if (!window._currentLightbox || !window._currentLightbox.visible()) return;
    if (e.key === 'ArrowRight') navigateLightbox(window._currentLightbox._index + 1);
    if (e.key === 'ArrowLeft')  navigateLightbox(window._currentLightbox._index - 1);
    if (e.key === 'Escape')     window._currentLightbox.close();
  });
</script>