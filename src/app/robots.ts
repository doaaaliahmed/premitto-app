import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: ' https://premitto-alkjk4hpq-doaaaliahmed.vercel.app/sitemap.xml',
  }
}
