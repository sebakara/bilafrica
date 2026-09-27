import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type PracticeBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
  items: readonly string[];
  footer?: React.ReactNode;
};

export function PracticeBand({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  items,
  footer,
}: PracticeBandProps) {
  return (
    <Section tone="canvas" className="border-t border-line">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={
          <Button href={actionHref} variant="outline">
            {actionLabel}
          </Button>
        }
      />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item, index) => (
          <li key={item} className="border border-line bg-white p-5">
            <span className="text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-lg font-semibold">{item}</h3>
          </li>
        ))}
      </ol>
      {footer ? <div className="mt-8 text-sm leading-relaxed text-muted">{footer}</div> : null}
    </Section>
  );
}
