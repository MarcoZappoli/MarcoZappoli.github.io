---
title: "Experimental Wind Tunnel Testing: Advanced Measurement and Flow Characterization"
excerpt: "This project presents three wind tunnel studies: force measurements on a NACA 0015 airfoil, pressure and wake analysis on a NACA 23012 airfoil, and PIV-based flow characterization of a side-by-side eVTOL propeller system."
collection: portfolio
permalink: /projects/4_FluidoSperim
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

/* ── PDF Button ── */
.pdf-button {
  display: block;
  width: fit-content;
  max-width: 100%;
  
  background: #8c8c8c; /* grey tone */
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
    background: #8c8c8c;
  }

  .pdf-button:hover {
    background: #5f666b;
  }
}
</style>

<div class="project-hero">
  <div class="project-hero-text">
    <h1>Experimental Wind Tunnel Testing: Advanced Measurement and Flow Characterization</h1>
    <p>
      This project presents three wind tunnel studies: force measurements on a NACA 0015 airfoil, pressure and wake analysis on a NACA 23012 airfoil, and PIV-based flow characterization of a side-by-side eVTOL propeller system.
    </p>
  </div>
  <div class="project-hero-image">
    <img src="/images/PIV_cover.png" alt="PIV at 12ms">
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
    <span>Experimental</span>
  </div>
  <div class="project-meta-item">
    <span>Tools</span>
    <span>WT/PIV</span>
  </div>
  <div class="project-meta-item">
    <span>Year</span>
    <span>2024</span>
  </div>
</div>

<div class="project-body">

  <h1>Lab 1 &mdash; Force Measurements</h1>

  <hr>

  <h1>Lab 2 &mdash; Preassure Measurements and Hot-Wire</h1> 

  <hr>

  <h1>Lab 3 &mdash; Particle Image Velocimetry (PIV)</h1> 

  <p>
    Development of a MATLAB-based algorithm for processing PIV data and analysis of the velocity field generated by two side-by-side rotors under vortex ring state conditions.
  </p>

  <p><b>Methodology:</b></p>

  <ul>
    <li>Calibration to determine magnification factor (px/mm)</li>
    <li>Pre-processing: alignment, masking, flat-field correction</li>
    <li>Cross-correlation analysis:
    <ul>
      <li>Standard spatial correlation</li>
      <li>FFT-based correlation (significant speed improvement)</li>
    </ul>
    </li>
    <li>Subpixel interpolation using Gaussian fitting</li>
    <li>Post-processing:
    <ul>
      <li>Outlier removal (median test)</li>
      <li>Interpolation of missing data</li>
    </ul>
    </li>
    </ul>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/background.png" alt="PIVbackground" style="width: 100%; border-radius: 4px;">
      <img src="/images/PIV_12ms.png" alt="PIV12ms" style="width: 100%; border-radius: 4px;">
    </div>
    <figcaption><b>Figure 1:</b> Left: Mean background obtained from all the pair images acquired. Right: Mean flow field obtained at 12 m/s using FFT-based algorithm. 
    <br><b>Image Credit:</b> Marco Zappoli</figcaption>
  </figure>

  <p>
    The study focuses on quantifying variations in <b>lift</b>, <b>drag</b>, and <b>pitching moment</b> across multiple iced configurations, representative of both <b>rime</b> and <b>glaze ice</b> conditions.
  </p>

  <hr>

  <h1>Methodology 🖥️</h1>

  <p>
    The analysis was performed using <b>steady, compressible RANS simulations</b> with the <b>SU2 solver</b>, under representative flight conditions (\(M=0.325\), \(Re=3.8 \cdot 10^6\)).
  </p>

  <p>
    A <b>hybrid meshing strategy</b> was adopted to ensure accurate boundary layer resolution (\(y^+ \approx 1\)), combining structured layers near the wall with unstructured elements in the far field. Mesh generation was carried out using <b>Gmsh</b> and <b>Pointwise</b>, alongside the development of a <b>custom MATLAB-based workflow</b> to handle the complexity of iced geometries.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/MESH251_TREX.png" alt="MESH251 TREX" style="width: 48%; border-radius: 4px;">
      <img src="/images/MESH251.png" alt="MESH251 CLOSE UP" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption><b>Figure 2:</b> Mesh generation for complex iced geometries. Left: boundary layer resolution using the <b>T-Rex anisotropic extrusion</b> algorithm. Right: detailed view highlighting mesh quality in regions of strong geometric irregularity.
    <br><b>Image Credit:</b> Marco Zappoli</figcaption>
  </figure>

  <p>Two turbulence models were considered:</p>

  <ul>
    <li><b>Spalart–Allmaras (SA)</b></li>
    <li><b>\(k-\omega\) SST</b></li>
  </ul>

  <p>
    <b>Grid convergence studies</b> were performed to assess numerical reliability. The computational setup was validated against experimental wind tunnel data, confirming the robustness of the adopted methodology.
  </p>

  <hr>

  <h1>Results 📊</h1>

  <p>
    Ice accretion leads to a <b>substantial degradation of aerodynamic performance</b>, with severity strongly dependent on ice morphology:
  </p>

  <ul>
    <li>
      <b>Rime ice (Case-241):</b> Moderate impact, primarily increasing the effective chord and inducing localized separation. 
      <br>\(\rightarrow\) Stall angle reduced from \(\approx 15^\circ\) to \(\approx 12^\circ\).
    </li>
    <li>
      <b>Glaze ice (Case-242, Case-251):</b> Severe degradation due to <b>horn-shaped leading-edge formations</b>.
      <ul>
        <li>Stall angle reduced below \(5^\circ\) (Case-242)</li>
        <li>Significant decrease in <b>lift slope</b> and increase in <b>drag</b></li>
        <li>Early onset of <b>large-scale separation</b> and <b>recirculation</b></li>
      </ul>
    </li>
  </ul>

  <p>
    Surface roughness further amplifies drag, with <b>skin friction contributions increasing by ~30%</b>, highlighting the combined effect of geometry and near-wall turbulence.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/confronto_cl.png" alt="CL comparison" style="width: 46%; border-radius: 4px;">
      <img src="/images/CDP_CDSFC_241_rough.png" alt="Roughness effect" style="width: 50%; border-radius: 4px;">
    </div>
    <figcaption><b>Figure 3:</b> Left: comparison of lift curves for all configurations using the SA turbulence model. Right: decomposition of drag into <b>pressure</b> (\(C_{D,P}\)) and <b>skin-friction</b> (\(C_{D,SFC}\)) components for Case-241, with and without surface roughness.
    <br><b>Image credit:</b> Marco Zappoli</figcaption>
  </figure>

  <hr>

  <h1>Key Takeaways 🚀</h1>

  <ul>
    <li><b>Ice accretion alters boundary layer physics</b>, promoting early separation and forced transition.</li>
    <li><b>Glaze ice</b> produces the most critical degradation due to strong geometric discontinuities.</li>
    <li>The <b>aerodynamic center shifts toward the leading edge</b>, affecting pitching moment and longitudinal stability.</li>
    <li><b>Turbulence modeling choices</b> significantly influence predictions in separated flow regimes.</li>
  </ul>

  <p>
    Overall, the results demonstrate how ice accretion leads to <b>reduced lift capability</b>, <b>increased drag</b>, and <b>altered stability characteristics</b>, emphasizing the importance of accurate CFD modeling for aeronautical safety applications.
  </p>

  <hr>

  <h1>Technical report 📄</h1>

  <p>
    The complete report provides a detailed description of the <b>methodology</b>, <b>modeling assumptions</b>, and <b>validation analyses</b> supporting this work.
  </p>

  <a href="/files/CFD_Project.pdf" target="_blank" class="pdf-button">
    View or download the full technical report (PDF)
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