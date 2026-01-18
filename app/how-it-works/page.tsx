import type { Metadata } from 'next'
import Card from '../components/ui/Card'
import ContactForm from '../components/sections/ContactForm'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import OfficeListings from '../components/realscout/OfficeListings'
import { generatePageMetadata, generateWebPageSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'How Assumable Mortgages Work',
  description:
    'Learn the 6-step process of assuming an existing mortgage. Understand requirements, fees, timeline, and save thousands on your home purchase.',
  path: '/how-it-works',
  keywords: ['how to assume mortgage', 'assumable mortgage process', 'mortgage assumption steps'],
})

const steps = [
  {
    number: 1,
    title: 'Understand Assumable Mortgages',
    description:
      'Learn which loans qualify (FHA, VA, USDA) and why they exist. These government-backed loans have assumable features that allow buyers to take over the seller\'s existing mortgage terms, including the interest rate.',
    details: [
      'FHA, VA, and USDA loans are assumable',
      'Conventional loans typically are not assumable',
      'Rates are locked at the original loan terms',
    ],
  },
  {
    number: 2,
    title: 'Search for Assumable Homes',
    description:
      'Find homes with assumable mortgages through MLS listings, partner platforms, or work with a specialized agent. Look for keywords like "assumable", "FHA loan", "VA loan" in listing descriptions.',
    details: [
      'Search MLS for assumable loan types',
      'Use partner platforms (Assumable.io, Roam, AssumeList)',
      'Work with an agent specializing in assumable mortgages',
    ],
  },
  {
    number: 3,
    title: 'Evaluate the Deal',
    description:
      'Compare the assumed rate vs. current market rates. Calculate the equity gap and down payment needed. Consider second mortgage options if the home has appreciated significantly.',
    details: [
      'Compare assumed rate (2-4%) vs. market rate (6-7%+)',
      'Calculate equity gap: Home Price - Loan Balance - Down Payment',
      'Consider second mortgage to cover equity gap',
    ],
  },
  {
    number: 4,
    title: 'Get Pre-Qualified',
    description:
      'Meet the lender\'s credit and income requirements. Typically need credit score 580-640+ and DTI under 50%. Gather standard documentation (W-2s, tax returns, bank statements).',
    details: [
      'Credit score: 580-640+ depending on loan type',
      'DTI under 50% for FHA',
      'Standard documentation required',
    ],
  },
  {
    number: 5,
    title: 'Submit Assumption Application',
    description:
      'Work with the existing loan servicer to process the assumption. Timeline is typically 45-90 days. Pay assumption fees (FHA: ~$900 cap, VA: 0.5% funding fee).',
    details: [
      'Process takes 45-90 days',
      'FHA assumption fee: capped at $900',
      'VA assumption fee: 0.5% (waived for disabled vets)',
    ],
  },
  {
    number: 6,
    title: 'Close and Save',
    description:
      'Complete the assumption, transfer the loan, and release the seller\'s liability. Start enjoying your lower monthly payments - saving $500-$1,500/month compared to a new mortgage.',
    details: [
      'Loan transfers to your name',
      'Seller released from liability',
      'Start saving immediately with lower payments',
    ],
  },
]

const comparison = {
  assumable: {
    rate: '2-4% (locked)',
    closing: 'Lower',
    appraisal: 'Usually not required',
    time: '45-90 days',
    savings: '$500-$1,500+ per month',
  },
  newMortgage: {
    rate: '6-7%+ (current)',
    closing: 'Higher',
    appraisal: 'Required',
    time: '30-45 days',
    savings: 'Baseline (no savings)',
  },
}

export default function HowItWorksPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How Assumable Mortgages Work
          </h1>
          <p className="mt-6 text-xl text-white/90">
            A step-by-step guide to assuming an existing mortgage and saving thousands
          </p>
        </div>
      </section>

      {/* Primary Lead Magnet - Office Listings */}
      <OfficeListings 
        title="Browse Luxury Homes with Assumable Mortgages"
        description="Explore our collection of luxury homes in Las Vegas and Henderson with assumable mortgage opportunities"
      />

      {/* Steps */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {steps.map((step) => (
              <Card key={step.number} className="relative">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xl font-bold text-white">
                    {step.number}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-neutral-600">
                      {step.description}
                    </p>
                    {step.details && (
                      <ul className="mt-4 space-y-2">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-sm text-neutral-600">
                            <span className="mr-2 text-[var(--color-primary)]">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 text-center mb-12">
            Key Benefits of Assuming an Existing Mortgage
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-6">
              Assuming an existing mortgage offers numerous advantages over getting a new loan, especially in today's high-interest-rate environment. Here are the primary benefits that make assumable mortgages an attractive option for homebuyers:
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
              <div className="bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-3">
                  Massive Monthly Savings
                </h3>
                <p className="text-sm text-neutral-600">
                  The primary benefit is immediate monthly savings. Assuming a 2-4% mortgage instead of getting a new loan at 6-7%+ can save you $500-$1,500 per month. This is real, recurring savings that adds up significantly over time.
                </p>
              </div>
              <div className="bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-3">
                  Lower Interest Rates Locked In
                </h3>
                <p className="text-sm text-neutral-600">
                  When you assume a mortgage, you lock in the seller's original interest rate. With rates currently at 6-7%+ for new mortgages, assuming a 2.5% or 3% loan provides immediate value that compounds over years.
                </p>
              </div>
              <div className="bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-3">
                  Reduced Closing Costs
                </h3>
                <p className="text-sm text-neutral-600">
                  Closing costs for assumptions are typically lower than new mortgages. You won't pay origination fees, points, or other lender fees. Assumption fees (FHA: $900 cap, VA: 0.5%) are much lower than new mortgage closing costs.
                </p>
              </div>
              <div className="bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-3">
                  Usually No Appraisal Required
                </h3>
                <p className="text-sm text-neutral-600">
                  Most assumable mortgages don't require an appraisal, saving time and money. This speeds up the process and reduces costs. Appraisals are only required in certain circumstances, such as significant home appreciation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 text-center mb-12">
            Side-by-Side: Assumable Mortgage vs. New Mortgage
          </h2>
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">
                    Factor
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">
                    Assumable Mortgage
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">
                    New Mortgage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900">
                    Interest Rate
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-accent-dark)] font-semibold">
                    {comparison.assumable.rate}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {comparison.newMortgage.rate}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900">
                    Closing Costs
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-accent-dark)] font-semibold">
                    {comparison.assumable.closing}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {comparison.newMortgage.closing}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900">
                    Appraisal
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-accent-dark)] font-semibold">
                    {comparison.assumable.appraisal}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {comparison.newMortgage.appraisal}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900">
                    Processing Time
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {comparison.assumable.time}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {comparison.newMortgage.time}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900">
                    Monthly Savings
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--color-accent-dark)] font-semibold">
                    {comparison.assumable.savings}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-600">
                    {comparison.newMortgage.savings}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Important Considerations Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 text-center mb-12">
            Important Considerations When Assuming a Mortgage
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-6">
              While assumable mortgages offer significant benefits, it's important to understand the considerations and potential challenges:
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Equity Gap Considerations
            </h3>
            <p className="text-neutral-600 mb-4">
              If a home has appreciated significantly since the original mortgage was taken out, there will be an equity gap between the home's current price and the assumable loan balance. This gap must be covered with cash or a second mortgage. For example, if a home is worth $500,000 but the assumable loan balance is only $300,000, you'll need $200,000 (plus closing costs) to cover the equity gap.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Longer Processing Timeline
            </h3>
            <p className="text-neutral-600 mb-4">
              Assumptions typically take 45-90 days compared to 30-45 days for traditional mortgages. This is because the existing lender needs to verify your qualifications, and the process may involve additional approvals (especially for VA and USDA loans). Plan accordingly and set realistic expectations for your timeline.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Qualification Requirements
            </h3>
            <p className="text-neutral-600 mb-4">
              You must still qualify with the existing lender, meeting their credit score, income, and DTI requirements. While these are often similar to or slightly less strict than new mortgage requirements, you still need to provide documentation and meet their standards. Work with an experienced agent to ensure you're well-prepared for the qualification process.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Loan Type Limitations
            </h3>
            <p className="text-neutral-600 mb-4">
              Only FHA, VA, and USDA loans are assumable. Conventional loans are typically not assumable. This means your options are limited to homes with these specific loan types. However, there are over 12 million assumable mortgages nationwide, so there are plenty of opportunities available.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 text-center mb-12">
            Getting Started with Assumable Mortgages in Las Vegas
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-neutral-600 mb-6">
              Ready to explore assumable mortgage opportunities? Here's how to get started:
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Step 1: Understand Your Financial Situation
            </h3>
            <p className="text-neutral-600 mb-4">
              Review your credit score, calculate your debt-to-income ratio, and determine how much cash you have available for a down payment or equity gap. Most assumable mortgages require credit scores of 580-640+ and DTI ratios under 41-50%, depending on the loan type.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Step 2: Work with a Specialized Agent
            </h3>
            <p className="text-neutral-600 mb-4">
              Partner with an agent who understands assumable mortgages. They can help you identify opportunities, navigate the process, and avoid common pitfalls. Dr. Jan Duffy specializes in assumable mortgages and has the expertise to guide you successfully.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Step 3: Start Your Search
            </h3>
            <p className="text-neutral-600 mb-4">
              Use MLS searches, partner platforms, or work directly with your agent to find homes with assumable FHA, VA, or USDA mortgages. Be proactive in asking listing agents about assumable loans, as this information isn't always prominently featured.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Step 4: Evaluate Opportunities
            </h3>
            <p className="text-neutral-600 mb-4">
              When you find a home with an assumable mortgage, calculate the equity gap, estimate your monthly payment savings, and determine if the opportunity makes financial sense. Our calculator on the calculator page can help with these calculations.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <ContactForm />

      {/* SEO Schema Markup */}
      <SchemaMarkup
        schema={generateHowToSchema({
          name: 'How to Assume an Existing Mortgage',
          description: 'Learn the 6-step process of assuming an existing FHA, VA, or USDA mortgage and saving thousands on your home purchase.',
          step: steps.map((step) => ({
            name: step.title,
            text: step.description + ' ' + step.details.join(' '),
          })),
        })}
      />
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'How Assumable Mortgages Work',
          description: 'Learn the 6-step process of assuming an existing mortgage. Understand requirements, fees, timeline, and how to save thousands on your home purchase.',
          url: 'https://assumablehomefinder.com/how-it-works',
          breadcrumb: generateBreadcrumbSchema('/how-it-works', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'How It Works', url: 'https://assumablehomefinder.com/how-it-works' },
          ]),
        })}
      />
    </div>
  )
}
