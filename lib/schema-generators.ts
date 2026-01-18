import { AGENT_INFO, SITE_CONFIG } from '@/lib/constants'

/**
 * Enhanced Organization schema with more details
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.baseUrl}#organization`,
    name: AGENT_INFO.brokerage,
    url: SITE_CONFIG.baseUrl,
    logo: `${SITE_CONFIG.baseUrl}/logo.png`, // TODO: Add logo
    telephone: AGENT_INFO.phone,
    email: AGENT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101', // TODO: Add actual postal code
      addressCountry: 'US',
    },
    sameAs: [
      // TODO: Add social media profiles
      // 'https://www.facebook.com/...',
      // 'https://www.linkedin.com/...',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: AGENT_INFO.phone,
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.baseUrl}#business`,
    name: AGENT_INFO.brokerage,
    url: SITE_CONFIG.baseUrl,
    telephone: AGENT_INFO.phone,
    email: AGENT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
  }
}

export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SITE_CONFIG.baseUrl}#agent`,
    name: AGENT_INFO.name,
    jobTitle: `${AGENT_INFO.title} - Assumable Mortgage Specialist`,
    description: `${AGENT_INFO.name} is a Nevada-licensed REALTOR® with 30+ years of experience specializing in assumable mortgages. Recognized expert on FHA, VA, and USDA loan assumptions in Las Vegas, Henderson, and throughout Nevada.`,
    telephone: AGENT_INFO.phone,
    email: AGENT_INFO.email,
    url: SITE_CONFIG.baseUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    worksFor: {
      '@type': 'Organization',
      name: AGENT_INFO.brokerage,
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Real Estate License',
      value: AGENT_INFO.license,
    },
    knowsAbout: [
      'FHA Assumable Loan Process',
      'VA Loan Assumptions',
      'USDA Rural Development Loan Assumptions',
      'Equity Gap Calculations',
      'Las Vegas Real Estate Market',
    ],
    award: [
      '30+ years of real estate experience',
      'Assumable Mortgage Specialist',
      'Las Vegas Market Expert',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'National Association of REALTORS®',
      },
      {
        '@type': 'Organization',
        name: 'Nevada REALTORS®',
      },
    ],
  }
}

export function generateFAQPageSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function generateCalculatorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Assumable Mortgage Savings Calculator',
    url: `${SITE_CONFIG.baseUrl}/calculator`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description:
      'Calculate your potential savings by assuming an existing low-rate mortgage instead of getting a new loan.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}
