"use client";

import { useEffect, useId, useState } from "react";
import Link from "@/components/ui/AppLink";
import { usePathname } from "@/lib/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useSite } from "@/components/site/SiteContent";
import { cn } from "@/lib/utils";

type DesktopMenu = "work" | "research" | null;

export function Header() {
  const { navigation, chrome, site } = useSite();
  const { whatWeDoMenu, researchMenu } = navigation;
  const labels = chrome.header;
  const pathname = usePathname();
  const [menu, setMenu] = useState<DesktopMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pathSnapshot, setPathSnapshot] = useState(pathname);
  const workId = useId();
  const researchId = useId();
  const mobileId = useId();

  if (pathname !== pathSnapshot) {
    setPathSnapshot(pathname);
    setMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const itemClass = "inline-flex min-h-11 items-center gap-1 rounded-sm px-2.5 text-sm font-medium text-body hover:text-brand";

  return (
    <header
      className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md"
      onMouseLeave={() => setMenu(null)}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo variant="mark" priority name={site.name} />
        <nav aria-label={labels.primaryNav} className="hidden items-center lg:flex">
          <Link href="/" className={cn(itemClass, pathname === "/" && "text-brand")} aria-current={pathname === "/" ? "page" : undefined}>
            {labels.home}
          </Link>
          <div className="relative" onMouseEnter={() => setMenu("work")}>
            <button
              id={`${workId}-button`}
              type="button"
              className={cn(itemClass, menu === "work" && "text-brand")}
              aria-expanded={menu === "work"}
              aria-controls={workId}
              onClick={() => setMenu((current) => (current === "work" ? null : "work"))}
            >
              {labels.work}
              <ChevronDown className="size-4" aria-hidden="true" />
            </button>
          </div>
          <div className="relative" onMouseEnter={() => setMenu("research")}>
            <button
              id={`${researchId}-button`}
              type="button"
              className={cn(itemClass, menu === "research" && "text-brand")}
              aria-expanded={menu === "research"}
              aria-controls={researchId}
              onClick={() => setMenu((current) => (current === "research" ? null : "research"))}
            >
              {labels.research}
              <ChevronDown className="size-4" aria-hidden="true" />
            </button>
            {menu === "research" ? (
              <div id={researchId} className="absolute left-0 top-full z-20 pt-3" role="region" aria-labelledby={`${researchId}-button`}>
                <ul className="w-80 border border-line bg-paper p-3 shadow-[0_24px_48px_-28px_rgba(23,20,17,0.4)]">
                  {researchMenu.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="block rounded-sm px-3 py-3 hover:bg-mist">
                        <span className="block text-sm font-medium">{item.label}</span>
                        <span className="mt-1 block text-sm text-muted">{item.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <Link href="/industries" className={cn(itemClass, pathname.startsWith("/industries") && "text-brand")}>
            {labels.industries}
          </Link>
          <Link href="/insights" className={cn(itemClass, pathname.startsWith("/insights") && "text-brand")}>
            {labels.insights}
          </Link>
          <Link href="/about" className={cn(itemClass, pathname.startsWith("/about") && "text-brand")}>
            {labels.about}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            {labels.contact}
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={mobileOpen ? labels.closeMenu : labels.openMenu}
            onClick={() => {
              setMobileOpen((open) => !open);
              setMenu(null);
            }}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>
      {menu === "work" ? <MegaMenu id={workId} labelledBy={`${workId}-button`} groups={whatWeDoMenu} /> : null}
      {mobileOpen ? (
        <MobileNavigation
          id={mobileId}
          pathname={pathname}
          whatWeDo={whatWeDoMenu}
          research={researchMenu}
          onNavigate={() => setMobileOpen(false)}
        />
      ) : null}
    </header>
  );
}
