---
title: "Clustering and preferential sampling in homogeneous shear turbulence"
excerpt: "Master's thesis project on one-way coupled point-particle simulations of inertial particles in homogeneous shear turbulence, using direct numerical simulation (DNS) to quantify clustering and preferential concentration mechanisms."
collection: portfolio
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
    background-color: #4f4f4f;
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
    <h1>Clustering and preferential sampling in homogeneous shear turbulence</h1>
    <p>
      Master's thesis project on one-way coupled point-particle simulations of inertial particles
      in homogeneous shear turbulence, using direct numerical simulation (DNS) to quantify clustering
      and preferential concentration mechanisms.
    </p>
  </div>
  <div class="project-hero-image">
    <img src="/images/R10St1_XZ_2083.png" alt="Particle clustering visualization">
    <p><b>Image Credit: Marco Zappoli</b></p>
  </div>
</div>

<div class="project-meta">
  <div class="project-meta-item">
    <span>Type</span>
    <span>Master's Thesis</span>
  </div>
  <div class="project-meta-item">
    <span>Field</span>
    <span>Turbulence</span>
  </div>
  <div class="project-meta-item">
    <span>Tools</span>
    <span>DNS/HPC</span>
  </div>
  <div class="project-meta-item">
    <span>Year</span>
    <span>2026</span>
  </div>
</div>

<div class="project-body">

  <h1>The problem: inertial particles in turbulence 🌊</h1>

  <p>
    Unlike passive Lagrangian tracers, inertial particles do not exactly follow the fluid flow.
    Rather than remaining uniformly distributed, they spontaneously form <strong>clusters and voids</strong>, leading to highly intermittent concentration fields.
  </p>

  <p>
    This phenomenon, known as <strong>preferential concentration</strong>, plays a central role in:
  </p>

  <ul>
    <li>cloud droplet growth and collision rates</li>
    <li>dust aggregation in astrophysical environments</li>
    <li>mixing and reaction efficiency in combustion systems</li>
  </ul>

  <p>
    Understanding <em>where particles accumulate</em>, and more importantly <em>why</em>,
    remains a key challenge in turbulence research.
  </p>

  <figure class="zoomable">
    <img src="/images/Render.png" alt="Volumetric rendering" style="max-width: 100%;">
    <figcaption>Figure 1: Volumetric rendering of an instantaneous flow field. Coherent structures are identified using the \(Q\)-criterion, with darker shades indicating lower \(Q\) values. Dark orange markers denote particle positions, highlighting their preferential accumulation in low-\(Q\) regions (strain-dominated zones). <b>Image Credit: Marco Zappoli</b></figcaption>
  </figure>

  <h2>Physical mechanisms ⚙️</h2>

  <p>
    Particle clustering is not random; it arises from well-defined mechanisms driven by the interaction between particle inertia and turbulent structures.
  </p>

  <p>
    Inertial particles tend to:
  </p>

  <ul>
    <li>be expelled from rotating regions (<b>centrifugal mechanism</b>)</li>
    <li>accumulate in strain-dominated regions</li>
    <li>accumulate in regions of weak fluid acceleration (<b>sweep-stick mechanism</b>)</li>
  </ul>

  <p>
    This results in dynamically evolving, cigar-shaped coherent structures. 
    In the presence of <strong>mean shear</strong>, the distribution becomes anisotropic, developing <strong>preferred orientations</strong> that reflect the flow structure.
  </p>

  <hr>

  <h1>Methodology 🖥️</h1>

  <p>
    To investigate these mechanisms, we perform <strong>Direct Numerical Simulations (DNS)</strong> of <strong>homogeneous shear turbulence</strong>, resolving all relevant scales without modeling assumptions.
  </p>

  <p>
    Particle motion is described using a one-way coupled point-particle approach based on the
    <strong>Maxey–Riley–Gatignol (MRG) equation</strong>.
  </p>

  <p>
    Unlike many previous studies, our model includes the <strong>Basset history force</strong>, which accounts for unsteady vorticity diffusion in the particle boundary layer.
    This introduces a <em>memory effect</em>, making the dynamics inherently non-local in time.
  </p>

  <p>
    The numerical implementation follows:
  </p>

  <ul>
    <li><a href="https://doi.org/10.1063/1.4942496" target="_blank" rel="noopener">Sekimoto <em>et al.</em> (2016)</a> for the DNS reference frame</li>
    <li><a href="https://doi.org/10.1016/j.jcp.2010.11.014" target="_blank" rel="noopener">Van Hinsberg <em>et al.</em> (2011)</a> for efficient evaluation of the Basset term</li>
  </ul>

  <p>
    Denoting by \(\rho_p\) the particle density, \(V_p\) its volume, and \(\boldsymbol{U}_p\) its velocity,
    the governing equation reads:
  </p>

  <div class="equation-block">
  $$
  \begin{equation}
  \begin{split}
  \rho_pV_p\frac{d\boldsymbol{U_p}}{dt} 
  &= \underbrace{3\pi d_p \rho_f \nu 
  \left( \boldsymbol{U}-\boldsymbol{U_p} + \frac{1}{6} \left(\frac{d_p}{2}\right)^2 \nabla^2\boldsymbol{U} \right)}_{\textit{Stokes drag}} + \underbrace{\rho_fV_p\frac{D\boldsymbol{U}}{Dt}}_{\textit{Pressure gradient}} \\[3pt]
  &\quad + \underbrace{\frac{\rho_fV_p}{2}
  \left( \frac{D\boldsymbol{U}}{Dt}
  - \frac{d\boldsymbol{U_p}}{dt}
  + \frac{1}{10}\left(\frac{d_p}{2}\right)^2
  \frac{d}{dt}\big(\nabla^2\boldsymbol{U}\big) \right)}_{\textit{Added mass}} \\[3pt]
  &\quad + \underbrace{\frac{3}{2}d_p^2\rho_f\sqrt{\pi\nu}
  \int_{-\infty}^t K_B(t-\tau)
  \left( \frac{d\boldsymbol{U}}{d\tau}-\frac{d\boldsymbol{U_p}}{d\tau}
  + \frac{1}{6}\left(\frac{d_p}{2}\right)^2
  \frac{d}{d\tau}\left(\nabla^2\boldsymbol{U}\right) \right) d\tau}_{\textit{Basset history force}}
  \end{split}
  \end{equation}
  $$
  </div>

  <p>
    Here \(\boldsymbol{U}\) denotes the undisturbed fluid velocity evaluated at the particle position, \(\boldsymbol{U}_p\) is the particle velocity, and \(D/Dt\) denotes the material derivative.
  </p>

  <p>
    We explore different regimes by varying the Stokes number \(St\) and density ratio \(\rho_p / \rho_f\), focusing on how inertia and memory effects influence clustering and force balance.
  </p>

  <hr>

  <h1>Results 📊</h1>

  <h2>Force balance</h2>

  <p>
    The relative importance of the forces strongly depends on particle parameters.
    In particular, the contribution of the <strong>Basset history force</strong> increases with particle size.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/MRG_R100St0dot1.png" alt="MRG R100 St0.1" style="width: 48%; border-radius: 4px;">
      <img src="/images/MRG_R10St1.png" alt="MRG R10 St1" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption>Figure 2: Probability density functions of normalized force contributions \(a_i/a_p\). Main panels use linear–linear scales; insets use linear–logarithmic scales to emphasize rare, intense events. Left: \((St=0.1,\,\rho_p/\rho_f=100)\). Right: \((St=1,\,\rho_p/\rho_f=10)\). <b>Image Credit: Marco Zappoli</b></figcaption>
  </figure>

  <h2>Spatial distribution and cluster topology</h2>

  <p>
    Particle organization is largely controlled by the Stokes number \(St\), which sets the response time to the flow.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/R10St0dot1_XZ_2083.png" alt="R10St0dot1_XZ_2083" style="width: 48%; border-radius: 4px;">
      <img src="/images/R10St1_XZ_2083.png" alt="R10St1_XZ_2083" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption>Figure 3: Instantaneous particle distributions for \(\rho_p/\rho_f=10\) (white dots) in the \(x\)–\(z\) plane, overlaid on the magnitude of the vorticity component normal to the plane (lighter regions indicate higher vorticity). Left: \(St=0.1\); right: \(St=1\), illustrating the transition from near-homogeneous dispersion to pronounced clustering. <b>Image Credit: Marco Zappoli</b></figcaption>
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