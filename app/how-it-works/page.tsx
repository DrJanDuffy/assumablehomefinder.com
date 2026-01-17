import type { Metadata } from 'next'
import Card from '../components/ui/Card'
import ContactForm from '../components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'How Assumable Mortgages Work',
  description:
    'Learn the step-by-step process of assuming an existing mortgage. Understand requirements, fees, timeline, and how to save thousands on your home purchase.',
}

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

      {/* Comparison Table */}
      <section className="bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 text-center mb-12">
            Assumable Mortgage vs. New Mortgage
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

      {/* Lead Capture */}
      <ContactForm />
    </div>
  )
}
