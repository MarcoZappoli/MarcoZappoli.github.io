---
title: "Backward FTLE and Lagrangian coherent structures behind a circular cylinder"
summary: "A tool that integrates tracer trajectories backward in time through the cylinder wake and extracts attracting Lagrangian coherent structures from the finite-time Lyapunov exponent field."
category: Software
type: "Research code"
field: "Lagrangian analysis"
tools: "Python"
year: 2026
order: 2
featured: true
draft: true
---
<!-- DRAFT: replace with Marco's description, figures and repository link. Hidden from the site while draft: true. -->

## Method

For a flow map $\mathbf{F}_{t_0}^{T}$ that takes a tracer from $\mathbf{x}_0$ at time $t_0$ to its position at $t_0+T$, the finite-time Lyapunov exponent is

$$
\sigma_{t_0}^{T}(\mathbf{x}_0) = \frac{1}{|T|}\,\ln \sqrt{\lambda_{\max}\!\left(\mathbf{C}_{t_0}^{T}\right)},
\qquad
\mathbf{C}_{t_0}^{T} = \left(\nabla \mathbf{F}_{t_0}^{T}\right)^{\!\top} \nabla \mathbf{F}_{t_0}^{T}.
$$

Integrating backward in time ($T<0$) highlights attracting material lines, the structures along which tracers and inertial particles gather in the wake.
