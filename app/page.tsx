import type { Metadata } from 'next'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import HowItWorks from './components/sections/HowItWorks'
import LoanTypes from './components/sections/LoanTypes'
import FAQ from './components/sections/FAQ'
import Calendly from './components/sections/Calendly'
import AgentBio from './components/sections/AgentBio'
import Calculator from './components/calculator/Calculator'
import ResultsDisplay from './components/calculator/ResultsDisplay'
import SchemaMarkup from './components/seo/SchemaMarkup'
import Button from './components/ui/Button'
import OfficeListings from './components/realscout/OfficeListings'
import { calculateSavings } from '@/lib/calculator-utils'
import { generatePageMetadata, generateWebPageSchema } from '@/lib/seo-config'
import { generateOrganizationSchema, generateRealEstateAgentSchema } from '@/lib/schema-generators'

export const metadata: Metadata = generatePageMetadata({
  title: 'Find Homes with 2-4% Assumable Mortgages',
  description:
    'Save $500-$1,500/month by assuming existing FHA, VA, or USDA mortgages at 2-4% interest instead of getting new loans at 6-7%+. Find assumable homes in Las Vegas and nationwide.',
  path: '/',
  keywords: ['assumable mortgage calculator', 'assumable homes Las Vegas', 'VA loan assumption'],
})

const homepageSchema = generateWebPageSchema({
  name: 'Find Homes with 2-4% Assumable Mortgages',
  description:
    'Save $500-$1,500/month by assuming existing FHA, VA, or USDA mortgages at 2-4% interest instead of getting new loans at 6-7%+.',
  url: 'https://assumablehomefinder.com/',
})

const exampleCalculatorInputs = {
  homePrice: 400000,
  assumableLoanBalance: 300000,
  assumableInterestRate: 3.0,
  remainingLoanTerm: 27,
  currentMarketRate: 7.0,
  downPayment: 20000,
}

const exampleResults = calculateSavings(exampleCalculatorInputs)

const faqItems = [
  {
    question: 'What is an assumable mortgage?',
    answer:
      'An assumable mortgage allows a homebuyer to take over the seller\'s existing mortgage loan, including its interest rate and terms. Instead of getting a new loan at current market rates, you assume the seller\'s original loan.',
  },
  {
    question: 'Can anyone assume a VA loan?',
    answer:
      'Yes! Non-veterans CAN assume VA loans. While VA loans were originally designed for veterans, anyone can assume an existing VA mortgage as long as they meet the lender\'s credit and income requirements.',
  },
  {
    question: 'How much can I save?',
    answer:
      'Buyers typically save $500-$1,500 per month by assuming a 2-4% mortgage instead of getting a new loan at 6-7%+. Over 30 years, this can add up to $180,000-$540,000 in savings.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'The assumption process typically takes 45-90 days, which is slightly longer than a traditional mortgage (30-45 days). The lender needs to verify your credit, income, and other qualifications before approving the assumption.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Primary Lead Magnet - Office Listings */}
      <OfficeListings 
        title="Luxury Homes with Assumable Mortgages"
        description="Browse our exclusive collection of luxury homes in Las Vegas and Henderson ($500K - $16M) with assumable mortgage opportunities"
      />
      
      <Stats />
      <HowItWorks />
      <LoanTypes />

      {/* Calculator Preview */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Calculate Your Savings
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              See how much you could save with an assumable mortgage
            </p>
          </div>
          <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
            <div className="mb-6 text-sm text-neutral-600">
              <p className="font-semibold mb-2">Example: $400K home with 3% assumable mortgage vs 7% new mortgage</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-xs text-neutral-500">Assumable Payment:</p>
                  <p className="text-lg font-semibold text-[var(--color-accent-dark)]">
                    ${Math.round(exampleResults.assumableMonthlyPayment).toLocaleString()}/mo
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">New Mortgage Payment:</p>
                  <p className="text-lg font-semibold text-neutral-900">
                    ${Math.round(exampleResults.newMortgageMonthlyPayment).toLocaleString()}/mo
                  </p>
                </div>
                <div className="col-span-2 pt-4 border-t">
                  <p className="text-xs text-neutral-500">Monthly Savings:</p>
                  <p className="text-2xl font-bold text-[var(--color-accent-dark)]">
                    ${Math.round(exampleResults.monthlySavings).toLocaleString()}/mo
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button href="/calculator" size="lg" fullWidthMobile={true} className="sm:w-auto">
                See Your Full Savings →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <FAQ
        items={faqItems}
        title="Frequently Asked Questions"
        description="Common questions about assumable mortgages"
        showSchema={true}
      />

      {/* Expert Authority Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)]/5 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Trusted Authority on Assumable Mortgages
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Dr. Jan Duffy brings 30+ years of expertise to help you navigate assumable mortgage opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold">
                  30+
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Years of Experience</h3>
                  <p className="text-sm text-neutral-600">Las Vegas Real Estate Market</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600">
                With over three decades in the Las Vegas real estate market, Dr. Duffy has witnessed and adapted to every market cycle, giving her unique insights into assumable mortgage opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Specialized Expertise</h3>
                  <p className="text-sm text-neutral-600">Assumable Mortgage Specialist</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600">
                Dr. Duffy is one of Nevada's leading experts on assumable mortgages, with deep knowledge of FHA, VA, and USDA loan assumption processes, requirements, and strategies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center font-bold">
                  📊
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Market Intelligence</h3>
                  <p className="text-sm text-neutral-600">Data-Driven Insights</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600">
                Leverage Dr. Duffy's comprehensive understanding of the Las Vegas market, including which areas have more assumable mortgage opportunities and current market trends.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center font-bold">
                  🎓
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Published Expert</h3>
                  <p className="text-sm text-neutral-600">Authoritative Content</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600">
                Dr. Duffy creates comprehensive, expert content on assumable mortgages, sharing her knowledge through detailed guides, articles, and educational resources.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border-2 border-[var(--color-primary)] p-8 text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Why Work with an Assumable Mortgage Specialist?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Assumable mortgages have unique requirements, processes, and opportunities that most real estate agents don't fully understand. Dr. Duffy's specialized expertise means you get accurate information, strategic guidance, and expert navigation through the assumption process—from finding assumable homes to closing successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/about">Learn About Dr. Duffy's Expertise</Button>
              <Button variant="outline" href="/contact">Get Expert Guidance</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <Calendly />

      {/* Agent Bio */}
      <AgentBio />

      {/* SEO Schema Markup */}
      <SchemaMarkup schema={homepageSchema} />
      <SchemaMarkup schema={generateOrganizationSchema()} />
      <SchemaMarkup schema={generateRealEstateAgentSchema()} />
    </>
  )
}
