import { BrainCircuit, Compass, Cpu, Library, Network, Orbit } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/components/site/SiteContent";

const icons = {
  technology: Cpu,
  ai: BrainCircuit,
  blockchain: Network,
  advisory: Compass,
  research: Library,
  ecosystem: Orbit,
} as const;

export function Capabilities() {
  const { home, chrome } = useSite();
  const band = chrome.bands.capabilities;

  return (
    <Section tone="canvas">
      <SectionHeader
        eyebrow={band.eyebrow}
        title={band.title}
        description={band.description}
        action={
          <Button href="/services" variant="outline">
            {band.action}
          </Button>
        }
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {home.capabilities.map((capability) => (
          <ServiceCard
            key={capability.href}
            href={capability.href}
            title={capability.title}
            description={capability.description}
            icon={icons[capability.icon]}
          />
        ))}
      </div>
    </Section>
  );
}
