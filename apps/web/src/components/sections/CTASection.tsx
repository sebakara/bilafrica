import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useSite } from "@/components/site/SiteContent";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  const { chrome } = useSite();
  const heading = title ?? chrome.cta.title;
  const text = description ?? chrome.cta.description;
  const href = primaryHref ?? chrome.cta.primaryHref;
  const label = primaryLabel ?? chrome.cta.primaryLabel;
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" />
      <Container className="relative py-16 sm:py-20">
        <div className="reveal max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{heading}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foam">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={href} variant="dark">
              {label}
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
