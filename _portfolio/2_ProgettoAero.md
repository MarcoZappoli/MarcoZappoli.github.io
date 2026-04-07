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
</style>

<div class="project-hero">
  <div class="project-hero-text">
    <h1>FOSSER: Formation-flight Optimization for a SubSonic mission with Extended Range</h1>
    <p>
      This study analyzes aerodynamic efficiency in two-ship fighter formations, combining the Vortex Lattice Method with optimization techniques (PSO and Kriging) to reduce induced drag and identify optimal configurations.
    </p>
  </div>
  <div class="project-hero-image">
    <img src="/images/F18_OGPos.png" alt="F18 formation non optimized">
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
    Fighter aircraft consume significant fuel during high-speed cruise, making <strong>drag reduction</strong> a key factor for mission range and efficiency.
    While fuel burn depends on multiple variables (throttle, altitude, Mach), reducing aerodynamic drag directly lowers the required engine thrust.
  </p>

  <p>
    One effective strategy is <strong>formation flight</strong>, where aircraft exploit aerodynamic interactions to reduce induced drag.
  </p>

  <ul>
    <li>wingtip vortices can be used beneficially by trailing aircraft</li>
    <li>three-aircraft formations were explored in USAF Project <em>Tom Tom</em></li>
    <li>similar strategies are observed in migratory birds (V-formations)</li>
  </ul>

  <p>
    These benefits are strongest in <strong>subsonic cruise</strong>, where induced drag represents a significant portion of total drag.
  </p>

  <h2>Research goal 🎯</h2>

  <p>
    This work compares a representative set of fighter aircraft across multiple generations to assess their potential for <strong>drag reduction in formation</strong>.
  </p>

  <p>
    The study combines:
  </p>

  <ul>
    <li>potential-flow simulations to evaluate formation effects</li>
    <li>performance metrics comparison across configurations</li>
    <li>geometry optimization for selected aircraft</li>
  </ul>

  <p>
    The objective is to identify configurations and relative positions that maximize
    aerodynamic efficiency under realistic constraints.
  </p>

  <hr>

  <h1>Methodology 🖥️</h1>

  <p>
    Aircraft geometries were reconstructed from publicly available three-view drawings, combined with basic dimensional data such as wingspan, length, and wing area. The models were implemented in <code>.avl</code> format for aerodynamic analysis.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/F-18_top.png" alt="F18 top view" style="width: 48%; border-radius: 4px;">
      <img src="/images/F-18_side.png" alt="F18 side view" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption>Figure 1: AVL-rendered geometry of the McDonnell Douglas F/A-18C fighter. <b>Image Credit: Marco Zappoli</b></figcaption>
  </figure>

  <p>
    Aerodynamic calculations were performed using <strong>AVL</strong>, based on the vortex lattice method (VLM). This approach is well suited for thin lifting surfaces at small angles of attack, enabling efficient evaluation of lift, drag, and stability.
  </p>

  <hr>

  <h1>Results 📊</h1>

  <h2>Aircraft dataset</h2>

  <p>
    To capture the evolution of fighter design, eleven representative aircraft were selected, spanning from early jet configurations to modern fifth-generation designs.
  </p>

  <table style="width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 0.95em;">
    <thead>
      <tr style="border-bottom: 2px solid #888;">
        <th style="text-align: left; padding: 8px;">Generation</th>
        <th style="text-align: left; padding: 8px;">Representative Aircraft</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color:#e6b3b3;">
        <td style="padding: 8px;"><strong>Trainer</strong></td>
        <td style="padding: 8px;">Aermacchi MB-339A</td>
      </tr>

      <tr style="background-color:#c2c2d6;">
        <td style="padding: 8px;"><strong>1</strong></td>
        <td style="padding: 8px;">Fiat G.91R</td>
      </tr>

      <tr style="background-color:#99d6ff;">
        <td style="padding: 8px;"><strong>2</strong></td>
        <td style="padding: 8px;">North American F-100 Super Sabre</td>
      </tr>
      <tr style="background-color:#99d6ff;">
        <td style="padding: 8px;"><strong>2</strong></td>
        <td style="padding: 8px;">McDonnell F-101A Voodoo</td>
      </tr>
      <tr style="background-color:#99d6ff;">
        <td style="padding: 8px;"><strong>2</strong></td>
        <td style="padding: 8px;">Lockheed F-104G Starfighter</td>
      </tr>

      <tr style="background-color:#ffcc99;">
        <td style="padding: 8px;"><strong>3</strong></td>
        <td style="padding: 8px;">McDonnell Douglas F-4E Phantom II</td>
      </tr>
      <tr style="background-color:#ffcc99;">
        <td style="padding: 8px;"><strong>3</strong></td>
        <td style="padding: 8px;">Northrop F-5E Tiger II</td>
      </tr>
      <tr style="background-color:#ffcc99;">
        <td style="padding: 8px;"><strong>3</strong></td>
        <td style="padding: 8px;">Convair F-106 Delta Dart</td>
      </tr>

      <tr style="background-color:#b3e6b3;">
        <td style="padding: 8px;"><strong>4</strong></td>
        <td style="padding: 8px;">McDonnell Douglas F-15A Eagle</td>
      </tr>
      <tr style="background-color:#b3e6b3;">
        <td style="padding: 8px;"><strong>4</strong></td>
        <td style="padding: 8px;">General Dynamics F-16A Fighting Falcon</td>
      </tr>
      <tr style="background-color:#b3e6b3;">
        <td style="padding: 8px;"><strong>4</strong></td>
        <td style="padding: 8px;">McDonnell Douglas F/A-18C Hornet</td>
      </tr>

      <tr style="background-color:#ebadd6;">
        <td style="padding: 8px;"><strong>5</strong></td>
        <td style="padding: 8px;">Lockheed Martin/Boeing F-22A Raptor</td>
      </tr>
    </tbody>
    <caption>
    Table 1: Representative aircraft selected across different generations.
    </caption>
  </table>

  <p style="font-size: 0.85em; color: #666;">
    Table 1: Representative aircraft selected across different generations.
  </p>

  <p>
    To ensure a consistent basis for comparison among different aircraft and formation configurations, a common flight condition was defined, corresponding to a Mach number \(M=0.56\) at a flight altitude of \(25000\) ft.
    The AOA of an aircraft flying solo was trivially obtained by setting up a simulation in AVL with \(C_L\) constrained to the value for steady flight.
    This method cannot be applied in the case of formation flight, since AVL does not natively support the computation of loads of independent subsets of surfaces. Therefore, a particle swarm optimization was set up to identify the (different) AOAs at which both vehicles in a two-aircraft formation achieved the expected \(C_L\) for the trim condition to be satisfied
  </p>


  <h2>Spatial distribution and cluster topology</h2>

  <p>
    Particle organization is largely controlled by the Stokes number \(St\), which sets the response time to the flow.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/R10St0dot1_XZ_2083.png" alt="R10St0dot1_XZ_2083" style="width: 48%; border-radius: 4px;">
      <img src="/images/R10St1_XZ_2083.png" alt="R10St1_XZ_2083" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption>Figure 3: Instantaneous particle distributions (white dots) in the \(x\)–\(z\) plane, overlaid on the magnitude of the vorticity component normal to the plane (lighter regions indicate higher vorticity). The left panel corresponds to lower Stokes numbers, while the right corresponds to higher Stokes numbers, illustrating the transition from near-homogeneous dispersion to enhanced clustering. <b>Image Credit: Marco Zappoli</b></figcaption>
  </figure>

  <p>
    At low \(St\), particles closely follow the flow and remain relatively homogeneous.
    At higher \(St\), they deviate more, leading to strong segregation and concentrated clusters.
  </p>

  <p>
    Cluster topology shows remarkable universality across all cases studied, as well as in homogeneous isotropic turbulence.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/ClusterPlot.png" alt="ClusterPlot" style="width: 55%; border-radius: 4px;">
      <div style="display: flex; flex-direction: column; gap: 12px; width: 40%;">
        <img src="/images/Cluster_Asphericity.png" alt="Cluster_Asphericity" style="width: 100%; border-radius: 4px;">
        <img src="/images/Cluster_Acylindricity.png" alt="Cluster_Acylindricity" style="width: 100%; border-radius: 4px;">
      </div>
    </div>
    <figcaption>Figure 4: Left: example of a coherent particle cluster with its principal axes (primary, secondary, tertiary). Right: probability density functions of normalized asphericity (top) and acylindricity (bottom), quantifying cluster shape. Illustrations below each axis indicate representative geometries associated with the corresponding values. <b>Image Credit: Marco Zappoli</b></figcaption>
  </figure>

  <hr>

  <h1>Takeaway 🎯</h1>

  <p>
    Clustering in turbulent shear flows is a robust yet highly structured phenomenon,
    emerging from the interplay between turbulence, inertia, and memory effects.
  </p>

  <p>
    Particle distributions are not random but exhibit
    <strong>organized, scale-dependent, and anisotropic patterns</strong>
    that significantly influence transport and collision processes.
  </p>

  <hr>

  <div class="notice--info">
    <h4>🖥️ Computational Scope</h4>
    <p>
      This work relies on extensive High-Performance Computing (HPC) resources.
      Only a subset of the methodology and selected results are presented here.
    </p>
  </div>

  <div class="notice--warning">
    <h4>📜 Copyright & Publication Status</h4>
    <p>
      The simulations, figures, and results shown are part of an ongoing manuscript under preparation for the <em>Journal of Fluid Mechanics (JFM)</em>.
      The material presented here is intended for <strong>qualitative illustration only</strong>; quantitative data, scales, and parameters have been intentionally omitted or modified.
      <strong>Copyright © Marco Zappoli.</strong> All rights reserved.
    </p>
  </div>

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