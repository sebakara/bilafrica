import Link from "@/components/ui/AppLink";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ href, title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group flex h-full flex-col border border-line bg-paper p-6 transition-colors hover:border-brand">
      <Icon className="size-5 text-brand" strokeWidth={1.5} aria-hidden="true" />
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
        View capability
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
