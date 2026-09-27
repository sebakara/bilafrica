import { Section } from "@/components/ui/Section";
import { africaThemes } from "@/data/home";

export function AfricaBand() {
  return (
    <Section tone="mist">
      <div className="max-w-3xl">
        <p className="eyebrow text-brand">Africa and the world</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Building for Africa. Thinking globally.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          BIL is rooted in African markets, including Rwanda and the wider region, and is built for work that also has to meet international partners and standards. The opportunity is practical: institutions modernising services, firms building financial and data infrastructure, and research communities shaping how emerging technology is governed and deployed.
        </p>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {africaThemes.map((theme) => (
          <li key={theme.title} className="border-t border-line pt-4">
            <h3 className="font-semibold">{theme.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{theme.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
