// Web CV. The PDF in public/pdf/ remains the formal version.
export const cv = {
  "education": [
    {
      "degree": "MSc in Aeronautical Engineering",
      "institution": "Politecnico di Milano",
      "dates": "Sep 2023 – Mar 2026",
      "details": [
        "110/110 cum laude, GPA 29.47/30",
        "Thesis: Clustering and preferential sampling in homogeneous shear turbulence (advisor Dr. Alessandro Chiarini, co-advisor Prof. Maurizio Quadrio)",
        "Courses: Aerodynamics; Turbulence: Physics and Modeling; Numerical Modeling of Differential Problems; Computational Fluid Dynamics; Compressible Fluid Dynamics; Structural Dynamics and Aeroelasticity"
      ]
    },
    {
      "degree": "BSc in Aerospace Engineering",
      "institution": "Politecnico di Milano",
      "dates": "Sep 2020 – Jul 2023",
      "details": [
        "105/110, GPA 26.77/30"
      ]
    }
  ],
  "research": [
    {
      "title": "Vortex stretching and the turbulent energy cascade",
      "place": "Ongoing research",
      "dates": "Oct 2026 – present",
      "details": [
        "Role of vortex stretching in energy transfer across scales, small-scale dynamics and intermittency in homogeneous isotropic turbulence",
        "EDQNM spectral closure with reduced vortex stretching, written in Python with Numba"
      ],
      "link": "/projects/edqnm-reduced-vortex-stretching/"
    },
    {
      "title": "Master's thesis research",
      "place": "Politecnico di Milano",
      "dates": "2025 – 2026",
      "details": [
        "DNS of homogeneous shear turbulence with one-way coupled inertial point particles, including the Basset history force",
        "HPC runs on the CINECA cluster",
        "Results in a manuscript submitted to the Journal of Fluid Mechanics"
      ],
      "link": "/projects/dns-particles-shear-turbulence/"
    }
  ],
  "publications": [
    {
      "text": "Zappoli, M., Quadrio, M. & Chiarini, A. Clustering and preferential sampling of particles in homogeneous shear turbulence. Submitted to the Journal of Fluid Mechanics, 2026.",
      "link": "/publications/#zappoli2026clustering"
    }
  ],
  "projects": [
    { "title": "Lagrangian coherent structures in bluff-body wakes (backward FTLE)", "dates": "2026", "link": "/projects/lcs-bluff-body-wakes/" },
    { "title": "FOSSER: formation-flight optimization for a subsonic mission with extended range", "dates": "A.Y. 2024/25", "link": "/projects/fosser-formation-flight/" },
    { "title": "Experimental wind-tunnel testing: measurement and flow characterization", "dates": "A.Y. 2024/25", "link": "/projects/wind-tunnel-experiments/" },
    { "title": "Ice accretion on the NACA 23012 airfoil: RANS CFD", "dates": "A.Y. 2024/25", "link": "/projects/ice-accretion-naca23012/" }
  ],
  "skills": [
    {
      "area": "CFD and simulation",
      "items": "SU2, OpenFOAM (basics), DNS, RANS"
    },
    {
      "area": "Meshing and CAD",
      "items": "Gmsh, Pointwise, SolidWorks, Solid Edge"
    },
    {
      "area": "Programming",
      "items": "Python (NumPy, Numba), MATLAB, Fortran, CPL"
    },
    {
      "area": "Experimental",
      "items": "Wind-tunnel testing, hot-wire anemometry, PIV"
    },
    {
      "area": "Tools",
      "items": "LaTeX, Linux, HPC (CINECA)"
    }
  ],
  "awards": [
    "IELTS Academic, overall 8.0 (2026)"
  ],
  "languages": "Italian (native), English (fluent)"
};
