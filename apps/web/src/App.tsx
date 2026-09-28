import { Outlet } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RouteLoading } from "@/components/layout/RouteLoading";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { SiteContentProvider, useSite } from "@/components/site/SiteContent";

function PublicShell() {
  const { chrome } = useSite();

  return (
    <>
      <a className="skip-link" href="#main">
        {chrome.skip}
      </a>
      <Header />
      <RouteLoading />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <OrganizationJsonLd />
    </>
  );
}

export function AppShell() {
  return (
    <SiteContentProvider>
      <PublicShell />
    </SiteContentProvider>
  );
}
