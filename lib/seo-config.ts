import { SITE_CONFIG, AGENT_INFO } from './constants'
import type { Metadata } from 'next'

export const siteUrl = SITE_CONFIG.baseUrl
export const siteName = SITE_CONFIG.name

/**
 * Generate standard metadata for pages
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}): Metadata {
  const url = `${siteUrl}${path}`
  const fullTitle = `${title} | ${siteName}`
  const imageUrl = `${siteUrl}/og?title=${encodeURIComponent(title)}`

  // Ensure description is under 155 characters for SEO
  const optimizedDescription =
    description.length > 155 ? description.substring(0, 152) + '...' : description

  // Ensure title is under 60 characters
  const optimizedTitle = fullTitle.length > 60 ? title : fullTitle

  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: [
      'assumable mortgage',
      'assumable homes',
      'FHA assumable loan',
      'VA assumable mortgage',
      'USDA assumable loan',
      'assume mortgage Las Vegas',
      'low rate mortgage assumption',
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      url,
      siteName,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: optimizedTitle,
      description: optimizedDescription,
      images: [imageUrl],
      creator: '@assumablehomes',
      site: '@assumablehomes',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

/**
 * Generate breadcrumb items for schema
 */
export function generateBreadcrumbSchema(path: string, items: Array<{ name: string; url: string }>) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return base
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumb,
}: {
  name: string
  description: string
  url: string
  breadcrumb?: ReturnType<typeof generateBreadcrumbSchema>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${siteUrl}#website`,
    },
    about: {
      '@id': `${siteUrl}#organization`,
    },
    breadcrumb: breadcrumb || undefined,
  }
}

/**
 * Generate HowTo schema for process pages
 */
export function generateHowToSchema({
  name,
  description,
  step,
}: {
  name: string
  description: string
  step: Array<{
    name: string
    text: string
    image?: string
  }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: step.map((item, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: item.name,
      text: item.text,
      ...(item.image && { image: item.image }),
    })),
  }
}
