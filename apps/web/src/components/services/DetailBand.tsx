import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type DetailItem = {
  title: string;
  description?: string;
};

type DetailGroup = {
  eyebrow?: string;
  title: string;
  description?: string;
  items?: DetailItem[];
  note?: string;
  children?: React.ReactNode;
};

export function DetailBand({ id, groups }: { id?: string; groups: DetailGroup[] }) {
  return (
    <Section id={id} tone="mist">
      <div className="space-y-16">
        {groups.map((group) => (
          <div key={group.title}>
            {group.eyebrow ? <p className="eyebrow text-brand">{group.eyebrow}</p> : null}
            <h2 className={cn("text-3xl font-semibold tracking-tight", group.eyebrow && "mt-3")}>{group.title}</h2>
            {group.description ? <p className="mt-4 max-w-2xl leading-relaxed text-muted">{group.description}</p> : null}
            {group.children ? <div className="mt-10">{group.children}</div> : null}
            {group.items ? (
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item.title} className="border border-line bg-paper p-5">
                    <h3 className="font-sans text-base font-semibold text-ink">{item.title}</h3>
                    {item.description ? <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p> : null}
                  </li>
                ))}
              </ul>
            ) : null}
            {group.note ? (
              <p className="mt-8 max-w-2xl border border-line bg-paper px-5 py-4 text-sm leading-relaxed text-muted">{group.note}</p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
