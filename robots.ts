import type { MetadataRoute } from 'next'
const url = process.env.NEXT_PUBLIC_URL as string
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${url}/sitemap.xml`, 
  }
}