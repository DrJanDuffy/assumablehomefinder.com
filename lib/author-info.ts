/**
 * Author Information and Authority Indicators
 * E-E-A-T signals for Dr. Jan Duffy
 */

import { AGENT_INFO, SITE_CONFIG } from './constants'

export const AUTHOR_INFO = {
  ...AGENT_INFO,
  
  // Experience & Expertise
  yearsOfExperience: 30,
  specialization: 'Assumable Mortgages (FHA, VA, USDA)',
  
  // Credentials & Certifications
  credentials: [
    'Nevada Real Estate License (S.0197614.LLC)',
    'REALTOR® Designation',
    'Berkshire Hathaway HomeServices Nevada Properties',
    'Assumable Mortgage Specialist',
  ],
  
  // Expertise Areas
  expertiseAreas: [
    'FHA Assumable Loan Process',
    'VA Loan Assumptions (Veterans & Non-Veterans)',
    'USDA Rural Development Loan Assumptions',
    'Equity Gap Calculations',
    'Second Mortgage Financing for Assumptions',
    'Blended Rate Analysis',
    'Las Vegas Real Estate Market',
    'Henderson Luxury Homes',
    'First-Time Homebuyer Guidance',
    'Investment Property Analysis',
  ],
  
  // Market Expertise
  marketExpertise: {
    primaryMarkets: ['Las Vegas', 'Henderson', 'North Las Vegas'],
    marketYears: 30,
    specialtyMarkets: ['Luxury Homes', 'Assumable Mortgages', 'New Construction'],
  },
  
  // Publications & Authority Indicators
  authorityIndicators: {
    publishedArticles: true,
    recognizedExpert: true,
    specializedKnowledge: 'Assumable Mortgages',
    marketDataExpert: true,
    educationalContent: true,
  },
  
  // Achievement Highlights
  achievements: [
    '30+ years of real estate experience in Las Vegas market',
    'Specialized expertise in assumable mortgage transactions',
    'Recognized authority on FHA, VA, and USDA loan assumptions',
    'Successfully guided hundreds of assumable mortgage transactions',
    'Deep knowledge of Las Vegas, Henderson, and North Las Vegas markets',
    'Published expert content on assumable mortgage strategies',
  ],
  
  // Education (if applicable - add if you have info)
  education: [
    // Add educational background if available
  ],
  
  // Professional Memberships
  memberships: [
    'National Association of REALTORS® (NAR)',
    'Nevada REALTORS®',
    'Las Vegas REALTORS®',
  ],
}

/**
 * Generate enhanced Person schema with E-E-A-T signals
 */
export function generateAuthorPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_CONFIG.baseUrl}#author`,
    name: AUTHOR_INFO.name,
    jobTitle: `${AUTHOR_INFO.title} - ${AUTHOR_INFO.specialization}`,
    description: `${AUTHOR_INFO.name} is a Nevada-licensed REALTOR® with ${AUTHOR_INFO.yearsOfExperience}+ years of experience specializing in assumable mortgages. Recognized expert on FHA, VA, and USDA loan assumptions in Las Vegas.`,
    telephone: AUTHOR_INFO.phone,
    email: AUTHOR_INFO.email,
    url: `${SITE_CONFIG.baseUrl}/about`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    knowsAbout: AUTHOR_INFO.expertiseAreas,
    alumniOf: AUTHOR_INFO.brokerage,
    memberOf: AUTHOR_INFO.memberships.map(name => ({
      '@type': 'Organization',
      name,
    })),
    award: AUTHOR_INFO.achievements,
    sameAs: [
      // Add social media profiles when available
    ],
    // Professional credential
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      name: `Nevada Real Estate License ${AUTHOR_INFO.license}`,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Nevada Real Estate Division',
      },
    },
  }
}

/**
 * Generate Article author attribution
 */
export function generateArticleAuthorSchema(articleUrl: string) {
  return {
    '@type': 'Person',
    name: AUTHOR_INFO.name,
    url: `${SITE_CONFIG.baseUrl}/about`,
    jobTitle: AUTHOR_INFO.title,
    worksFor: {
      '@type': 'Organization',
      name: AUTHOR_INFO.brokerage,
    },
  }
}

/**
 * Get authority badges for display
 */
export function getAuthorityBadges() {
  return [
    {
      label: `${AUTHOR_INFO.yearsOfExperience}+ Years Experience`,
      icon: 'experience',
    },
    {
      label: 'Assumable Mortgage Specialist',
      icon: 'specialization',
    },
    {
      label: 'Las Vegas Market Expert',
      icon: 'location',
    },
    {
      label: 'Nevada Licensed REALTOR®',
      icon: 'credential',
    },
  ]
}
