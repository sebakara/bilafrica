import Link from "@/components/ui/AppLink";
import { Logo } from "@/components/brand/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

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
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="full" theme="light" className="w-[min(100%,18rem)]" />
            <div className="mt-8">
              <h2 className="font-sans text-sm font-semibold">Research updates</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-foam">
                Register interest in future notes. Messages are sent only when there is something to share.
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <Column title="Company" links={footerNavigation.company} />
            <Column title="Capabilities" links={footerNavigation.capabilities} />
            <Column title="Resources" links={footerNavigation.resources} />
            <div>
              <Column title="Legal" links={footerNavigation.legal} />
              <h2 className="mt-8 font-sans text-sm font-semibold text-white">Profiles</h2>
              <p className="mt-3 text-sm leading-relaxed text-foam">
                LinkedIn, X and GitHub profiles will be linked when they are published.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-haze sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p>Build. Research. Advise. Innovate.</p>
        </div>
      </Container>
    </footer>
  );
}
