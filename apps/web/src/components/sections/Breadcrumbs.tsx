import Link from "@/components/ui/AppLink";
import { useSite } from "@/components/site/SiteContent";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const { chrome } = useSite();

  return (
    <nav aria-label={chrome.breadcrumb}>
      <ol className={cn("flex flex-wrap items-center gap-2 text-sm", tone === "dark" ? "text-foam" : "text-muted")}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link href={item.href} className={tone === "dark" ? "hover:text-white" : "hover:text-body"}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={tone === "dark" ? "text-white" : "text-body"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
