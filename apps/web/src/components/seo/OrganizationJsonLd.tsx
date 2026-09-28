import { siteConfig } from "@/lib/site";
import { useSite } from "@/components/site/SiteContent";

export function OrganizationJsonLd() {
  const { site } = useSite();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: siteConfig.url,
    description: site.description,
    slogan: site.slogan,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
