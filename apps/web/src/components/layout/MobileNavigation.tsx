"use client";

import { useState } from "react";
import Link from "@/components/ui/AppLink";
import { ChevronDown } from "lucide-react";
import type { NavGroup, NavLink } from "@bil/shared";
import { useSite } from "@/components/site/SiteContent";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type MobileNavigationProps = {
  id: string;
  pathname: string;
  whatWeDo: NavGroup[];
  research: NavLink[];
  onNavigate: () => void;
};

function Group({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-between py-3 text-left text-base font-medium"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
      </button>
      {open ? <div className="space-y-5 pb-4">{children}</div> : null}
    </div>
  );
}

function ItemLink({ href, children, onNavigate }: { href: string; children: React.ReactNode; onNavigate: () => void }) {
  return (
    <Link href={href} onClick={onNavigate} className="block py-1.5 text-sm text-muted">
      {children}
    </Link>
  );
}

export function MobileNavigation({ id, pathname, whatWeDo, research, onNavigate }: MobileNavigationProps) {
  const { chrome } = useSite();
  const labels = chrome.header;
  const linkClass = (href: string) =>
    cn("block border-b border-line py-3 text-base font-medium", pathname === href && "text-brand");

  return (
    <nav id={id} aria-label={labels.mobileNav} className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
      <div className="px-5 pb-6">
        <Link href="/" className={linkClass("/")} onClick={onNavigate}>
          {labels.home}
        </Link>
        <Group label={labels.work}>
          {whatWeDo.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-brand">{group.label}</p>
              <ul className="mt-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <ItemLink href={item.href} onNavigate={onNavigate}>
                      {item.label}
                    </ItemLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Group>
        <Group label={labels.research}>
          <ul>
            {research.map((item) => (
              <li key={item.href}>
                <ItemLink href={item.href} onNavigate={onNavigate}>
                  {item.label}
                </ItemLink>
              </li>
            ))}
          </ul>
        </Group>
        <Link href="/industries" className={linkClass("/industries")} onClick={onNavigate}>
          {labels.industries}
        </Link>
        <Link href="/insights" className={linkClass("/insights")} onClick={onNavigate}>
          {labels.insights}
        </Link>
        <Link href="/about" className={linkClass("/about")} onClick={onNavigate}>
          {labels.about}
        </Link>
        <Link href="/careers" className={linkClass("/careers")} onClick={onNavigate}>
          {labels.careers}
        </Link>
        <div className="pt-4">
          <Button href="/contact" className="w-full" onClick={onNavigate}>
            {labels.contact}
          </Button>
        </div>
      </div>
    </nav>
  );
}
