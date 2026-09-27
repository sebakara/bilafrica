import { BrainCircuit, Compass, Cpu, Library, Network, Orbit } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { capabilities } from "@/data/home";

const icons = {
  technology: Cpu,
  ai: BrainCircuit,
  blockchain: Network,
  advisory: Compass,
  research: Library,
  ecosystem: Orbit,
} as const;

export function Capabilities() {
  return (
    <Section tone="canvas">
      <SectionHeader
        eyebrow="What we do"
        title="Capabilities that reinforce each other."
        description="Commercial technology development sits at the centre. Research, advisory and ecosystem work make that delivery more precise."
        action={
          <Button href="/services" variant="outline">
            Explore Our Capabilities
          </Button>
        }
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((capability) => (
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
