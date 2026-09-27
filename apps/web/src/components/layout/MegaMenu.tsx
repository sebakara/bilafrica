import Link from "@/components/ui/AppLink";
import type { NavGroup } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

type MegaMenuProps = {
  groups: NavGroup[];
  labelledBy: string;
  id: string;
};

export function MegaMenu({ groups, labelledBy, id }: MegaMenuProps) {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      className="absolute inset-x-0 top-full border-t border-line bg-paper shadow-[0_24px_48px_-28px_rgba(23,20,17,0.4)]"
    >
      <Container className="grid gap-10 py-8 md:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <div key={group.label}>
            <Link href={group.href} className="text-sm font-semibold text-brand">
              {group.label}
            </Link>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group block rounded-sm">
                    <span className="block text-sm font-medium text-body group-hover:text-navy">{item.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted"> {item.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </div>
  );
}
