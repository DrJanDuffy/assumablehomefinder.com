// Agent Information
export const AGENT_INFO = {
  name: 'Dr. Jan Duffy',
  title: 'REALTOR',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  phone: '(702) 500-1971',
  phoneLink: 'tel:+17025001971',
  email: 'DrJanDuffy@bhhsnv.com',
  primaryMarket: ['Las Vegas', 'Henderson', 'North Las Vegas', 'Nevada'],
} as const

// Market Statistics
export const MARKET_STATS = {
  assumableMortgagesNationwide: 12_000_000,
  vaLoansBelow5Percent: 74,
  averageAnnualSavings: 14_000,
  averageMonthlySavings: 1187,
  vaLoansBelow5PercentText: '74%',
  assumableMortgagesText: '12M+',
  averageSavingsText: '$14,000+',
} as const

// Site Configuration
export const SITE_CONFIG = {
  name: 'Assumable Home Finder',
  domain: 'assumablehomefinder.com',
  baseUrl: 'https://assumablehomefinder.com',
  description:
    'Find homes with assumable FHA, VA, and USDA mortgages. Save $500-$1,500/month by assuming existing low-rate mortgages (2-4%) instead of getting new loans at 6-7%+.',
  tagline: 'Find Homes with 2-4% Assumable Mortgages',
} as const

// Loan Type Information
export const LOAN_TYPES = {
  fha: {
    name: 'FHA Assumable Loans',
    slug: 'fha-assumable-loans',
    description:
      'FHA loans are assumable with credit score 580+, 3.5% down equivalent, DTI under 50%. Assumption fee capped at $900.',
    creditScore: '580+',
    downPayment: '3.5% equivalent',
    dti: 'Under 50%',
    assumptionFee: '$900 cap',
  },
  va: {
    name: 'VA Assumable Loans',
    slug: 'va-assumable-loans',
    description:
      'VA loans are assumable by anyone - veterans and non-veterans. Credit score 620+ typically required. 0.5% funding fee.',
    creditScore: '620+',
    downPayment: 'Varies',
    dti: 'Varies',
    assumptionFee: '0.5%',
    specialNote: 'Non-veterans CAN assume VA loans',
  },
  usda: {
    name: 'USDA Assumable Loans',
    slug: 'usda-assumable-loans',
    description:
      'USDA loans are assumable in rural areas with income limits. Great option for qualified buyers in eligible areas.',
    creditScore: '640+',
    downPayment: '0%',
    dti: '41%',
    assumptionFee: 'Varies',
  },
} as const

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Find Homes', href: '/find-homes' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'For Sellers', href: '/for-sellers' },
  { name: 'FAQ', href: '/faq' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const

// RealScout Configuration
export const REALSCOUT_CONFIG = {
  scriptUrl: 'https://em.realscout.com/widgets/realscout-web-components.umd.js',
  agentEncodedId: 'QWdlbnQtMjI1MDUw',
} as const
