# Glacier Monitoring & Early Warning System (GMEWS)
### Developed by Team Chronos

[![Live Deployment on Vercel](https://img.shields.io/badge/Live_Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://glacier-detection-system-lac.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🌐 Live Production Application
- **Main Mission Control**: [https://glacier-detection-system-lac.vercel.app/](https://glacier-detection-system-lac.vercel.app/)
- **Live Documentation & Pitch Deck (/docs)**: [https://glacier-detection-system-lac.vercel.app/docs](https://glacier-detection-system-lac.vercel.app/docs)
- **Surveillance Hub (/dashboard)**: [https://glacier-detection-system-lac.vercel.app/dashboard](https://glacier-detection-system-lac.vercel.app/dashboard)
- **GLOF Hydrodynamic Modeling (/glof-modeling)**: [https://glacier-detection-system-lac.vercel.app/glof-modeling](https://glacier-detection-system-lac.vercel.app/glof-modeling)
- **Investigation Workspace (/investigate)**: [https://glacier-detection-system-lac.vercel.app/investigate](https://glacier-detection-system-lac.vercel.app/investigate)
- **Glaciers & Lakes Explorer (/glaciers)**: [https://glacier-detection-system-lac.vercel.app/glaciers](https://glacier-detection-system-lac.vercel.app/glaciers)
- **Observations Catalog (/observations)**: [https://glacier-detection-system-lac.vercel.app/observations](https://glacier-detection-system-lac.vercel.app/observations)

---

## 🏔️ About GMEWS
**Glacier Monitoring & Early Warning System (GMEWS)** is a high-altitude Earth Observation (EO) and computational hazard modeling platform designed to safeguard mountain basins, critical military outposts, and downstream civilian settlements against Glacial Lake Outburst Floods (GLOFs) and catastrophic cryosphere collapses.

Focusing on the **Siachen Basin, Saltoro Ridge, and Nubra River Valley** (35.42° N, 77.10° E), GMEWS continuously monitors glacier surface velocity, subglacial reservoir dilation, transverse crevasse expansion, and dam-break inundation wavefronts.

---

## 👥 Team Chronos
*Engineering continuous cryosphere observation and deep GLOF early warning intelligence for climate-resilient mountain communities.*

| Member | Role | Focus Area |
| :--- | :--- | :--- |
| **Adittya Dey** | **Team Leader** | System Architecture, Earth Observation Pipeline & Product Direction |
| **Takib Al Hasan** | **Developer** | Core Platform Development, Real-Time Ingestion & Interactive Geospatial UI |
| **Abrar Kamal Toha** | **Researcher** | Glaciological Modeling, Remote Sensing Interpretation & Empirical Breach Physics |
| **Jannatul Mehzabin Suchinta** | **Presenter** | Product Narrative, Technical Dissemination & Stakeholder Engagement |

---

## ⚡ Core Modules & Architecture

### 1. Mission Control (`/`)
- Real-time geospatial cryosphere surveillance overview with interactive topographic map.
- Critical threshold telemetry feed and immediate status tracking across the Siachen basin.

### 2. GLOF Hydrodynamic Modeling (`/glof-modeling`)
- Interactive dam-break hydrograph simulations based on **Froehlich (2008)** breach discharge formulas and **Manning-Strickler** wave translation physics.
- Real-time calculations of peak discharge ($Q_{\text{peak}}$), breach width variation, impulse wave heights, and downstream settlement wave arrival times (Warshi, Panamik, Tegar, Nubra Confluence).

### 3. Investigation Workspace (`/investigate`)
- Target triage and DInSAR surface dilation profiling.
- Transverse crevasse displacement and acoustic cryoseismic anomaly monitoring.

### 4. Glaciers & Lakes Explorer (`/glaciers`)
- Comprehensive catalog of glaciated sectors (Siachen Central Trunk, Teram Shehr Subglacial Basin, Saltoro Ridge Hanging Wall, Nubra Outflow Snout).
- Metrics for area, volume, velocity drift, and moraine stability factors.

### 5. Observations Feed (`/observations`)
- Multi-mission satellite catalog filtering Sentinel-1B Synthetic Aperture Radar (all-weather C-band SAR), Landsat-9 SWIR thermal, Sentinel-2B multispectral, and ICESat-2 ATL06 photon altimetry passes.

### 6. Live Documentation & YC Pitch Deck (`/docs`)
- **YC-Style Pitch Deck**: Business case, Problem, Solution, Why Now, Target Beneficiaries, Sustainability Model, and Competitive Advantage over desktop GIS.
- **Technical Whitepaper**: System topography, feature matrix (Operational vs. Planned), hydrodynamic formulations, and live-synced telemetry state.
- **Admin Publishing Controls**: Configurable visibility window (Default: June 10, 2026, 00:00 to June 14, 2026, 23:59 Asia/Dhaka) with developer testing bypass.

---

## 🛠️ Technology Stack
- **Frontend Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Runtime**: [React 19](https://react.dev/)
- **Programming Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Typography**: Google Material Symbols, Geist, JetBrains Mono, Space Grotesk
- **Visualization**: Hardware-accelerated SVG vector topography, interactive hydrographs, dynamic bathymetry
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v20+ or v24+)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/Adittya202/glacier-detection-system.git
cd glacier-detection-system

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

---

## 📜 License
Developed for Earth Observation and Cryosphere Hazard Research by **Team Chronos**.
