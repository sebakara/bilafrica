export const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/services/technology",
  "/services/ai-data",
  "/services/blockchain",
  "/services/advisory",
  "/services/research-policy",
  "/services/cybersecurity",
  "/labs",
  "/ecosystem",
  "/industries",
  "/insights",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export type StaticRoute = (typeof staticRoutes)[number];
