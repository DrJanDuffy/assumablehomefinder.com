import { SITE_CONFIG } from '@/lib/constants'

export const baseUrl = SITE_CONFIG.baseUrl

export default async function sitemap() {
  const routes = [
    '',
    '/how-it-works',
    '/fha-assumable-loans',
    '/va-assumable-loans',
    '/usda-assumable-loans',
    '/calculator',
    '/find-homes',
    '/for-sellers',
    '/faq',
    '/about',
    '/contact',
    '/privacy',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
