import { SITE_CONFIG } from '@/lib/constants'
import { getBlogPosts } from './blog/utils'

export const baseUrl = SITE_CONFIG.baseUrl

export default async function sitemap() {
  // Static routes
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
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog posts
  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt
      ? new Date(post.metadata.publishedAt).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogPosts]
}
