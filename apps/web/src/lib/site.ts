function resolveSiteUrl() {
  const value = import.meta.env.VITE_SITE_URL || "http://localhost:5173";

  try {
    return new URL(value).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export const siteConfig = {
  url: resolveSiteUrl(),
};
