import { AdvisoryBand } from "@/components/home/AdvisoryBand";
import { AfricaBand } from "@/components/home/AfricaBand";
import { Capabilities } from "@/components/home/Capabilities";
import { Hero } from "@/components/home/Hero";
import { IndustriesBand } from "@/components/home/IndustriesBand";
import { InnovationBand } from "@/components/home/InnovationBand";
import { InsightsBand } from "@/components/home/InsightsBand";
import { LabsBand } from "@/components/home/LabsBand";
import { Principles } from "@/components/home/Principles";
import { ResearchBand } from "@/components/home/ResearchBand";
import { TechnologyBand } from "@/components/home/TechnologyBand";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blockchain & Innovation Landscape | Technology, Research & Innovation",
  description: siteConfig.description,
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Principles />
      <Capabilities />
      <TechnologyBand />
      <LabsBand />
      <AdvisoryBand />
      <ResearchBand />
      <InnovationBand />
      <IndustriesBand />
      <AfricaBand />
      <InsightsBand />
      <CTASection />
    </>
  );
}
