import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

type CapabilityLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  breadcrumbs: { label: string; href?: string }[];
  actions?: React.ReactNode;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaLabel?: string;
  children: React.ReactNode;
};

export function CapabilityLayout({
  eyebrow,
  title,
  description,
  tone = "light",
  breadcrumbs,
  actions,
  ctaTitle,
  ctaDescription,
  ctaLabel = "Discuss a Project",
  children,
}: CapabilityLayoutProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} tone={tone} breadcrumbs={breadcrumbs} actions={actions} />
      {children}
      <CTASection title={ctaTitle} description={ctaDescription} primaryLabel={ctaLabel} />
    </>
  );
}
