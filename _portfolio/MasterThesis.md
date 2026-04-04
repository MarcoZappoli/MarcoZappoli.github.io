---
title: "Clustering and preferential sampling in homogeneous shear turbulence"
excerpt: "Master's thesis project on one-way coupled point-particle simulations of inertial particles in homogeneous shear turbulence, using direct numerical simulation (DNS) to quantify clustering and preferential concentration mechanisms.<br/><img src='/images/Render.png'>"
collection: portfolio
author_profile: false
---

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
  overflow: hidden;         /* clip image if it bleeds out */
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 40px;
  min-height: 300px;

  /* --- BREAKOUT FIX --- */
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
  max-width: 70%;
  margin: 0 0 20px 0;
  border: none;
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
  opacity: 0.95;
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

  <h1>Introduction: particles in turbulence 💨</h1>

  <p>
    The transport of inertial particles in turbulent flows plays a central role in a wide range
    of natural and engineering processes, including plankton encounters and ecological interactions
    in the ocean, droplet growth and collision dynamics in clouds, dust aggregation and the early
    stages of planetesimal formation in protoplanetary disks, as well as spray formation and
    combustion processes. In all these systems, a turbulent carrier flow interacts with a dispersed
    solid or liquid phase, producing highly non-uniform particle distributions. These spatial
    inhomogeneities have profound implications for collision rates, mixing efficiency, and effective
    transport properties. A key challenge is therefore to understand where, and under which
    conditions, particles preferentially accumulate and to identify the physical mechanisms
    responsible for this behavior.
  </p>

  <h2>Our specific case</h2>

  <p>
    In this work, we focus on inertial-particle clustering in homogeneous shear turbulence (HST),
    aiming to isolate the influence of mean shear on clustering mechanisms and anisotropic spatial
    distributions. Moreover, all existing numerical HST studies to date neglect the Basset history
    force, which accounts for the unsteady diffusion of vorticity in the particle boundary layer
    and introduces a non-local time convolution over the particle's past motion.
  </p>

  <p>
    While often omitted due to its substantial computational and memory cost, recent investigations
    in HIT have demonstrated that the Basset history force can contribute a non-negligible fraction
    of the particle acceleration (particularly for particles with sizes on the order of the
    Kolmogorov length scale) and can significantly modify clustering statistics. The absence of
    this force in previous HST studies therefore leaves open fundamental questions regarding its
    impact on anisotropic clustering, preferential sampling, and the validity of reduced-force
    models in shear-dominated turbulent flows.
  </p>

  <h2>Methodology</h2>

  <p>
    Describe the technical approach — simulation setup, numerical methods, mesh generation, etc.
  </p>

  <h2>Results</h2>

  <p>Share key findings. You can embed figures here:</p>

  <img src="/images/R10St1_XZ_2083.png" alt="Result figure" style="max-width: 100%; border-radius: 4px; margin: 20px 0;">

  <h2>Conclusions</h2>

  <p>
    Summarize what was learned and what comes next.
  </p>

</div>