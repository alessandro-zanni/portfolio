import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

// Public CV: open to every crawler, AI ones included — being cited is the point.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
