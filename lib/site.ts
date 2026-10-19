// Set NEXT_PUBLIC_SITE_URL at deploy to the real domain; the fallback feeds
// absolute URLs in metadata, robots and the sitemap.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alessandrozanni.dev"
