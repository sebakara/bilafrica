import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

const tones = {
  white: "bg-white text-body",
  canvas: "bg-canvas text-body",
  mist: "bg-mist text-body",
  dark: "bg-ink text-white",
  navy: "bg-navy text-white",
} as const;

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: keyof typeof tones;
};

export function Section({ id, className, children, tone = "white" }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-28", tones[tone], className)}>
      <Container className="reveal-children">{children}</Container>
    </section>
  );
}
