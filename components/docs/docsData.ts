export interface TeamMember {
  name: string;
  role: string;
  badge: string;
  focus: string;
  skills: string[];
}

export const TEAM_POCO: {
  teamName: string;
  leadQuote: string;
  members: TeamMember[];
} = {
  teamName: "Team Poco",
  leadQuote: "Engineering continuous cryosphere observation and deep GLOF early warning intelligence for climate-resilient mountain communities — Presented for AI Congress.",
  members: [
    {
      name: "Adittya Dey",
      role: "Team Leader",
      badge: "Team Lead",
      focus: "System Architecture, Earth Observation Pipeline & Product Direction",
      skills: ["System Architecture", "Cryosphere Research", "Project Leadership", "Next.js 16"]
    },
    {
      name: "Takib Al Hasan",
      role: "Developer",
      badge: "Full-Stack & Systems",
      focus: "Core Platform Development, Real-Time Ingestion & Interactive Geospatial UI",
      skills: ["Full-Stack Engineering", "TypeScript", "Hydrodynamic Simulation", "GIS Visualization"]
    },
    {
      name: "Abrar Kamal Toha",
      role: "Researcher",
      badge: "Cryosphere Research",
      focus: "Glaciological Modeling, Remote Sensing Interpretation & Empirical Breach Physics",
      skills: ["Glaciology", "Satellite InSAR / ATL06", "Hazard Assessment", "Empirical Analytics"]
    },
    {
      name: "Jannatul Mehzabin Suchinta",
      role: "Presenter",
      badge: "Product & Presentation",
      focus: "Product Narrative, Technical Dissemination & Stakeholder Engagement",
      skills: ["Product Strategy", "Scientific Storytelling", "Stakeholder Communication", "Pitch Delivery"]
    }
  ]
};

export interface DocsConfig {
  published: boolean;
  startDate: string; // ISO string e.g. "2026-06-10T00:00:00+06:00"
  endDate: string;   // ISO string e.g. "2026-06-14T23:59:59+06:00"
  timezone: string;  // "Asia/Dhaka (UTC+6)"
  devOverride: boolean; // Enables view during local inspection / testing
}

export const DEFAULT_DOCS_CONFIG: DocsConfig = {
  published: true,
  startDate: "2026-06-10T00:00:00+06:00",
  endDate: "2026-06-14T23:59:59+06:00",
  timezone: "Asia/Dhaka (UTC+6)",
  devOverride: true,
};
