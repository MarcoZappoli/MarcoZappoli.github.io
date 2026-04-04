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
  .page__inner-wrap,
  .page {
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
</style>

<style>
.project-hero {
  background-color: #000;
  color: white;
  padding: 60px 48px;
  display: flex;
  align-items: center;
  position: relative;       /* needed for absolute image */
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 40px;
  min-height: 400px;

  /* --- BREAKOUT FIX --- */
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.project-hero-text {
  flex: 1;
  min-width: 0;
  max-width: 80%;
  position: relative;
  z-index: 2;
}

.project-hero-text h1 {
  font-size: 2.5em;
  font-weight: 700;
  line-height: 1.2;
  max-width: 70%;
  margin: 0 0 20px 0;
  border: none;
}

.project-hero-text p {
  font-size: 1.1em;
  line-height: 1.7;
  max-width: 70%;
  color: #cccccc;
  margin: 0;
}

.project-hero-image {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 48px;
  padding-top: 20px;
}

.project-hero-image img {
  max-width: 500px;
  width: 100%;
  border-radius: 4px;
  opacity: 1.0;
}

.project-hero-image p {
  font-size: 0.75em;
  color: #888;
  margin-top: 8px;
}

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
  border-bottom: 1px solid #888;
  padding-bottom: 6px;
}

.project-body p {
  font-size: 1.0em;
  line-height: 1.8;
  margin-bottom: 1.2em;
}

.project-body img {
  max-width: 100%;
  border-radius: 4px;
  margin: 20px 0;
  display: block;
}

.project-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 130px;
  flex-wrap: wrap;
  margin-bottom: 36px;
  padding: 20px 0;
  border-top: 2px solid #888;
  border-bottom: 2px solid #888;
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
  font-weight: 650;
}

.project-meta-item span:last-child {
  font-size: 0.95em;
  font-weight: 650;
}

.equation-block {
  overflow-x: auto;
  margin: 24px 0;
  padding: 20px 24px;
  border-left: 3px solid #ff6600;
  border-radius: 0 4px 4px 0;
  font-size: 1.05em;

  /* light mode */
  background-color: #f8f8f8;
  color: #111;
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
    <img src="/images/R10St1_XZ_2083.png">
    <p>Image Credit: Marco Zappoli</p>
  </div>
</div>

<div class="project-body">

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

  <h1>Introduction: particles in turbulence 🌊</h1>

  <p>
    The transport of inertial particles in turbulent flows plays a central role in a wide range of natural and engineering processes, including plankton encounters and ecological interactions in the ocean, droplet growth and collision dynamics in clouds, dust aggregation and the early stages of planetesimal formation in protoplanetary disks, as well as spray formation and combustion processes. In all these systems, a turbulent carrier flow interacts with a dispersed solid or liquid phase, producing highly non-uniform particle distributions. These spatial inhomogeneities have profound implications for collision rates, mixing efficiency, and effective transport properties. A key challenge is therefore to understand where, and under which conditions, particles preferentially accumulate and to identify the physical mechanisms responsible for this behavior.
  </p>

  <figure class="zoomable">
    <img src="/images/Render.png" alt="Result figure" style="max-width: 100%; border-radius: 4px; margin: 20px 0;">
    <figcaption>Figure 1: Volumetric rendering of an instantaneous flow field. Flow structures are visualized using the \(Q\)-criterion, with darker shades corresponding to lower \(Q\) values. Dark orange markers indicate particle positions, highlighting their preferential concentration in low-\(Q\) regions. Image Credit: Marco Zappoli</figcaption>
  </figure>

  <h1>Methodology 🖥️</h1>

  <p>
    Differently from the general Rogallo scheme used in previous studies, we performed <b>Direct Numerical Simulations (DNS)</b> in a fixed reference frame following the scheme proposed by <a href="https://doi.org/10.1063/1.4942496" target="_blank" rel="noopener">Sekimoto <em>et al.</em> (2016)</a>. 
    A one-way coupled point-particle model based on the <b>Maxey-Riley-Gatignol (MRG) equation</b> is considered. To account for the Basset history term, which describes the unsteady diffusion of vorticity in the boundary layer, we implemented and verified an efficient second-order scheme proposed by <a href="https://doi.org/10.1016/j.jcp.2010.11.014" target="_blank" rel="noopener">Van Hinsberg <em>et al.</em> (2011)</a>.
  </p>

  <p>
    Denoting by \(\rho_p\) the particle density, \(V_p\) its volume, \(d_p\) its diameter, and by \(\rho_f\) and \(\nu\) the density and kinematic viscosity of the fluid, respectively, the particle momentum equation reads:
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

  <h1>Results 📊</h1>

  <p>
    The Basset history force relative importance increases as particle size increases.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/MRG_R100St0dot1.png" alt="MRG_R100St0dot1" style="width: 48%; border-radius: 4px;">
      <img src="/images/MRG_R10St1.png" alt="MRG_R10St1" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption>Figure 2: Probability density functions of the normalized force contributions \(a_i/a_p\). Main panels use linear&ndash;linear scales, while insets use linear&ndash;logarithmic scales to emphasize distribution tails. Left: \((St=0.1, \rho_p/\rho_f=100)\). Right: \((St=1, \rho_p/\rho_f=10)\). Image Credit: Marco Zappoli</figcaption>
  </figure>

  <p>
    The particle distribution shows high dependency on the particle Stokes number \(St\), which measure how quickly the particle responds to the sorrounding flow.
  </p>

  <figure class="zoomable">
    <div style="display: flex; gap: 12px; align-items: center;">
      <img src="/images/R10St0dot1_XZ_2083.png" alt="R10St0dot1_XZ_2083" style="width: 48%; border-radius: 4px;">
      <img src="/images/R10St1_XZ_2083.png" alt="R10St1_XZ_2083" style="width: 48%; border-radius: 4px;">
    </div>
    <figcaption>Figure 3: Instantaneous particle configurations for \(\rho_p/\rho_f=10\) (white dots) in the \(x\)&ndash;\(z\) plane, superimposed on the modulus of the vorticity component normal to the plane (lighter regions correspond to higher vorticity). From left to right: \(St=0.1\) and \(St=1\). Image Credit: Marco Zappoli</figcaption>
  </figure>

  <h2>Conclusions</h2>

  <p>
    Summarize what was learned and what comes next.
  </p>

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

        <!-- Left Arrow -->
        <button onclick="navigateLightbox(${index - 1})"
          style="position: absolute; left: -60px; top: 50%; transform: translateY(-50%);
                 background: #111; border: 1px solid #444; color: #fff;
                 font-size: 2.5em; width: 44px; height: 44px;
                 border-radius: 6px; cursor: pointer; 
                 display: ${index === 0 ? 'none' : 'flex'};
                 align-items: center; justify-content: center;
                 z-index: 9999; transition: background 0.2s;"
          onmouseover="this.style.background='#333'" onmouseout="this.style.background='#111'">
          <span style="margin-top: -4px;">&#8249;</span>
        </button>

        <!-- Image Container -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
          <img src="${img.src}" style="max-width: 80vw; max-height: 80vh; border-radius: 4px; box-shadow: 0 0 20px rgba(0,0,0,0.5);">
          <span style="color: #ccc; font-size: 0.9em; font-weight: 500; background: rgba(0,0,0,0.6); padding: 2px 10px; border-radius: 10px;">
            ${index + 1} / ${total}
          </span>
        </div>

        <!-- Right Arrow -->
        <button onclick="navigateLightbox(${index + 1})"
          style="position: absolute; right: -60px; top: 50%; transform: translateY(-50%);
                 background: #111; border: 1px solid #444; color: #fff;
                 font-size: 2.5em; width: 44px; height: 44px;
                 border-radius: 6px; cursor: pointer; 
                 display: ${index === total - 1 ? 'none' : 'flex'};
                 align-items: center; justify-content: center;
                 z-index: 9999; transition: background 0.2s;"
          onmouseover="this.style.background='#333'" onmouseout="this.style.background='#111'">
          <span style="margin-top: -4px;">&#8250;</span>
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

  // keyboard navigation
  document.addEventListener('keydown', e => {
    if (!window._currentLightbox || !window._currentLightbox.visible()) return;
    if (e.key === 'ArrowRight') navigateLightbox(window._currentLightbox._index + 1);
    if (e.key === 'ArrowLeft')  navigateLightbox(window._currentLightbox._index - 1);
    if (e.key === 'Escape')     window._currentLightbox.close();
  });
</script>