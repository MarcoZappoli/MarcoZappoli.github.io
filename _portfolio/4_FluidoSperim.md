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

  <h1>Wind Tunnel Laboratory Experiments 💨</h1>

  <p>
    This series of laboratory activities focuses on the <b>experimental characterization of aerodynamic flows</b>, 
    combining <b>force measurements</b>, <b>pressure and velocity diagnostics</b>, and <b>advanced flow visualization techniques</b>.
  </p>

  <p>
    The objective is to bridge the gap between theoretical aerodynamics and practice, emphasizing <b>measurement techniques</b>, <b>data processing</b>, and <b>physical interpretation</b>.
  </p>

  <hr>

  <h1>Lab 1 &mdash; Force Measurements 📊</h1>

  <p>
    This experiment focuses on the measurement of <b>aerodynamic forces and moments</b> acting on an airfoil model using a <b>strain-gauge balance system</b>.
  </p>

  <p>
    The goal is to determine the <b>lift</b>, <b>drag</b>, and <b>pitching moment coefficients</b>, and to assess their agreement with theoretical predictions.
  </p>

  <p><b>Methodology:</b></p>

  <ul>
    <li><b>Calibration</b> of the balance using known loads to obtain the calibration matrix</li>
    <li><b>Decoupling</b> of force and moment components from sensor signals</li>
    <li>Measurements across a range of <b>angles of attack</b></li>
    <li>Application of corrections (e.g., <b>blockage</b>, <b>buoyancy</b>)</li>
    <li>Computation of aerodynamic coefficients (\(C_L\), \(C_D\), \(C_M\))</li>
  </ul>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/carico_13_rit_ps1.png" alt="SetupLab1" style="width: 45%; border-radius: 4px;">
      <div style="display: flex; flex-direction: column; gap: 12px; width: 50%;">
        <img src="/images/portanza_xfoil.png" alt="CL Lab1" style="width: 100%; border-radius: 4px;">
        <img src="/images/momento_xfoil.png" alt="Cm Lab1" style="width: 100%; border-radius: 4px;">
      </div>
    </div>
    <figcaption><b>Figure 1:</b> Left: calibration process of the <b>strain-gauge balance</b>. Right: comparison between experimental measurements and <b>XFOIL predictions</b> for lift (top) and pitching moment (bottom).
    <br><b>Image Credit:</b> Marco Zappoli</figcaption>
  </figure>

  <p>
    The results show good agreement in the linear regime, while deviations at higher incidence highlight the role of 
    <b>viscous effects and flow separation</b>.
  </p>

  <a href="/files/Lab_1_Poleni_Vacca_Visconti_Zappoli.pdf" target="_blank" class="pdf-button">
    View or download the full technical report (PDF) for Lab 1
  </a>

  <hr>

  <h1>Lab 2 &mdash; Pressure Measurements & Hot-Wire Anemometry 🌡️</h1>

  <p>
    This experiment investigates the development of the <b>pressure coefficient</b> and the <b>wake structure</b> behind a lifting surface using pressure probes and hot-wire anemometry.
  </p>

  <p>
    The objective is to relate <b>pressure distribution</b>, <b>velocity fields</b>, and <b>turbulence characteristics</b> to aerodynamic performance.
  </p>

  <p><b>Methodology:</b></p>

  <ul>
    <li>Measurement of <b>static</b> and <b>total pressure</b> to reconstruct velocity distributions</li>
    <li>Evaluation of <b>pressure coefficient</b> profiles along the flow</li>
    <li>Hot-wire measurements of <b>wake velocity deficit</b></li>
    <li><b>Statistical</b> and <b>spectral analysis</b> of turbulent fluctuations</li>
  </ul>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; margin-bottom: 12px;">
      <img src="/images/Cp6.png" alt="-Cp @ 6" style="width: 48%; border-radius: 4px;">
      <img src="/images/U_scia2_2.png" alt="U scia" style="width: 48%; border-radius: 4px;">
    </div>
    <div style="display: flex; justify-content: center;">
      <img src="/images/FFT 110.png" alt="FFT scia" style="width: 100%; border-radius: 4px;">
    </div>
    <figcaption><b>Figure 2:</b> Top: pressure coefficient distribution at \(\alpha=6^\circ\) (left) and wake velocity profile at \(\alpha=8^\circ\) (right). Bottom: spectral content of velocity fluctuations (FFT) at \(\alpha=25^\circ\).
    <br><b>Image Credit:</b> Marco Zappoli</figcaption>
  </figure>

  <p>
    The results highlight the link between <b>wake development</b>, <b>momentum deficit</b>, and <b>turbulent fluctuations</b>, providing insight into the mechanisms governing aerodynamic drag.
  </p>

  <a href="/files/Lab_2_Poleni_Vacca_Visconti_Zappoli.pdf" target="_blank" class="pdf-button">
    View or download the full technical report (PDF) for Lab 2
  </a>

  <hr>

  <h1>Lab 3 &mdash; Particle Image Velocimetry (PIV) 🌀</h1> 

  <p>
    This activity focuses on the development of a <b>MATLAB-based algorithm</b> for processing <b>PIV measurements</b>, applied to the analysis of the flow generated by two side-by-side rotors in vortex ring state conditions.
  </p>

  <p>
    The goal is to reconstruct the <b>velocity field</b> and identify coherent flow structures through advanced image processing techniques.
  </p>

  <p><b>Methodology:</b></p>

  <ul>
    <li><b>Calibration</b> to determine spatial resolution (px/mm)</li>
    <li>Pre-processing: <b>alignment</b>, <b>masking</b>, <b>background correction</b></li>
    <li>Cross-correlation analysis:
      <ul>
        <li>standard spatial correlation</li>
        <li><b>FFT-based correlation</b> for improved computational efficiency</li>
      </ul>
    </li>
    <li><b>Subpixel interpolation</b> (Gaussian fitting)</li>
    <li>Post-processing:
      <ul>
        <li><b>outlier detection</b> (median test)</li>
        <li>interpolation of missing vectors</li>
      </ul>
    </li>
  </ul>

  <figure class="zoomable">
    <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
      <img src="/images/background.png" alt="PIVbackground" style="width: 100%; border-radius: 4px;">
      <img src="/images/PIV_12ms.png" alt="PIV12ms" style="width: 100%; border-radius: 4px;">
    </div>
    <figcaption><b>Figure 3:</b> Top: mean background image. Bottom: reconstructed velocity field at 12 m/s obtained using the <b>FFT-based correlation algorithm</b>.
    <br><b>Image Credit:</b> Marco Zappoli</figcaption>
  </figure>

  <p>
    The analysis enables the identification of <b>coherent vortical structures</b> and provides a high-resolution description of the flow field.
  </p>

  <a href="/files/Lab_3_Poleni_Vacca_Visconti_Zappoli.pdf" target="_blank" class="pdf-button">
    View or download the full technical report (PDF) for Lab 3
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