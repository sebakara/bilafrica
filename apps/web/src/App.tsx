import { Outlet } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RouteLoading } from "@/components/layout/RouteLoading";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

export function AppShell() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
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
