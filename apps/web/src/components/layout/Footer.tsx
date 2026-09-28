import Link from "@/components/ui/AppLink";
import { Logo } from "@/components/brand/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { useSite } from "@/components/site/SiteContent";

function Column({ title, links }: { title: string; links: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-foam hover:text-paper">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { navigation, chrome, site } = useSite();
  const footerNavigation = navigation.footerNavigation;
  const labels = chrome.footer;

  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="full" theme="light" name={site.name} className="w-[min(100%,18rem)]" />
            <div className="mt-8">
              <h2 className="font-sans text-sm font-semibold">{labels.newsletterTitle}</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-foam">{labels.newsletterText}</p>
              <NewsletterForm />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <Column title={labels.columns.company} links={footerNavigation.company} />
            <Column title={labels.columns.capabilities} links={footerNavigation.capabilities} />
            <Column title={labels.columns.resources} links={footerNavigation.resources} />
            <div>
              <Column title={labels.columns.legal} links={footerNavigation.legal} />
              <h2 className="mt-8 font-sans text-sm font-semibold text-white">{labels.profilesTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foam">{labels.profilesText}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-haze sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.slogan}</p>
        </div>
      </Container>
    </footer>
  );
}
