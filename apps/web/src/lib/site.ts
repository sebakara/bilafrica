function resolveSiteUrl() {
  const value = import.meta.env.VITE_SITE_URL || "http://localhost:5173";

  try {
    return new URL(value).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export const siteConfig = {
  name: "Blockchain & Innovation Landscape",
  shortName: "BIL",
  slogan: "Build. Research. Advise. Innovate.",
  description:
    "Blockchain & Innovation Landscape is an emerging-technology company building digital solutions, conducting applied research, advising institutions and developing innovation ecosystems.",
  positioning:
    "An emerging-technology company building digital solutions, conducting applied research, advising institutions, and developing innovation ecosystems.",
  intersection:
    "Technology at the intersection of engineering, research, policy and innovation.",
  url: resolveSiteUrl(),
} as const;
