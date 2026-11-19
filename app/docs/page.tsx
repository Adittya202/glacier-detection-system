import type { Metadata } from "next";
import { DocsClientWorkspace } from "@/components/docs/DocsClientWorkspace";

export const metadata: Metadata = {
  title: "Documentation & YC Pitch Deck | GMEWS - Team Chronos",
  description:
    "Live system documentation, technical architecture whitepaper, and YC-style pitch deck for the Glacier Monitoring & Early Warning System (GMEWS).",
};

export default function DocsPage() {
  return <DocsClientWorkspace />;
}
