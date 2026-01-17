import type { Metadata } from 'next'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import HowItWorks from './components/sections/HowItWorks'
import LoanTypes from './components/sections/LoanTypes'
import FAQ from './components/sections/FAQ'
import ContactForm from './components/sections/ContactForm'
import AgentBio from './components/sections/AgentBio'
import Calculator from './components/calculator/Calculator'
import ResultsDisplay from './components/calculator/ResultsDisplay'
import SchemaMarkup from './components/seo/SchemaMarkup'
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
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                See Your Full Savings →
              </a>
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

      {/* Lead Capture */}
      <ContactForm />

      {/* Agent Bio */}
      <AgentBio />

      {/* SEO Schema Markup */}
      <SchemaMarkup schema={homepageSchema} />
      <SchemaMarkup schema={generateOrganizationSchema()} />
      <SchemaMarkup schema={generateRealEstateAgentSchema()} />
    </>
  )
}
