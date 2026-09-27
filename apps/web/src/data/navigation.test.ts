import { describe, expect, it } from "vitest";
import { footerNavigation, researchMenu, whatWeDoMenu } from "@/data/navigation";
import { staticRoutes } from "@/data/routes";

function routeOf(href: string) {
  const path = href.split("#")[0];
  return path || "/";
}

describe("navigation", () => {
  it("keeps primary destinations on known internal routes", () => {
    const hrefs = [
      ...whatWeDoMenu.flatMap((group) => [group.href, ...group.items.map((item) => item.href)]),
      ...researchMenu.map((item) => item.href),
      ...footerNavigation.company.map((item) => item.href),
      ...footerNavigation.capabilities.map((item) => item.href),
      ...footerNavigation.resources.map((item) => item.href),
      ...footerNavigation.legal.map((item) => item.href),
    ];

    for (const href of hrefs) {
      expect(href.startsWith("/")).toBe(true);
      expect(staticRoutes).toContain(routeOf(href));
    }
  });

  it("includes the critical public paths", () => {
    for (const path of ["/services", "/labs", "/insights", "/contact", "/about", "/services/blockchain"]) {
      expect(staticRoutes).toContain(path);
    }
  });
});
