import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "Have a problem worth solving?",
  description = "Whether you are building a new digital platform, exploring emerging technology, conducting research, or developing an innovation program, BIL can help move the idea forward.",
  primaryHref = "/contact",
  primaryLabel = "Start a Conversation",
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" />
      <Container className="relative py-16 sm:py-20">
        <div className="reveal max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foam">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} variant="dark">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
