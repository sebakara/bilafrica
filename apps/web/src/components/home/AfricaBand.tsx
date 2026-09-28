import { Section } from "@/components/ui/Section";
import { useSite } from "@/components/site/SiteContent";

export function AfricaBand() {
  const { home, chrome } = useSite();
  const band = chrome.bands.africa;

  return (
    <Section tone="mist">
      <div className="max-w-3xl">
        <p className="eyebrow text-brand">{band.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{band.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{band.description}</p>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {home.africaThemes.map((theme) => (
          <li key={theme.title} className="border-t border-line pt-4">
            <h3 className="font-semibold">{theme.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{theme.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
