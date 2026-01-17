import type { Metadata } from 'next'
import Card from '../components/ui/Card'
import FAQ from '../components/sections/FAQ'
import ContactForm from '../components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'FHA Assumable Loans - Complete Buyer\'s Guide',
  description:
    'Everything you need to know about FHA assumable mortgages. Requirements, fees, process, and how to find FHA assumable homes.',
}

const faqItems = [
  {
    question: 'What is an FHA assumable mortgage?',
    answer:
      'An FHA assumable mortgage allows a buyer to take over the seller\'s existing FHA loan, including its interest rate and terms. FHA loans are assumable, meaning you can assume the seller\'s original loan instead of getting a new mortgage.',
  },
  {
    question: 'What are the requirements to assume an FHA loan?',
    answer:
      'To assume an FHA loan, you typically need a credit score of 580 or higher, a debt-to-income ratio under 50%, and must provide standard documentation (W-2s, tax returns, bank statements). The lender will also verify your income and assets.',
  },
  {
    question: 'What is the FHA assumption fee?',
    answer:
      'The FHA assumption fee is capped at $900. This fee covers the cost of processing the assumption application and transferring the loan to the new borrower.',
  },
  {
    question: 'Does mortgage insurance continue with an FHA assumption?',
    answer:
      'Yes, mortgage insurance continues for the life of the loan when you assume an FHA mortgage. The monthly mortgage insurance premium (MIP) is included in your monthly payment.',
  },
  {
    question: 'How do I find FHA assumable homes?',
    answer:
      'Look for listings that mention "FHA loan" or "assumable" in the description. You can also search MLS with keywords like "FHA assumable" or work with an agent specializing in assumable mortgages.',
  },
]

export default function FHALoansPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            FHA Assumable Loans
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Complete guide to assuming an FHA mortgage and saving thousands
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What is an FHA Assumable Mortgage?</h2>
            <p>
              An FHA (Federal Housing Administration) assumable mortgage allows a buyer
              to take over the seller's existing FHA loan, including its interest rate
              and terms. Instead of getting a new loan at current market rates (6-7%+),
              you can assume the seller's original loan at a lower rate (often 2-4%),
              saving hundreds of dollars per month.
            </p>

            <h2>FHA Assumption Requirements</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Credit Score
                </h3>
                <p className="text-3xl font-bold text-neutral-900">580+</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Minimum credit score required to assume an FHA loan
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Debt-to-Income Ratio
                </h3>
                <p className="text-3xl font-bold text-neutral-900">Under 50%</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Your total monthly debt payments divided by gross monthly income
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Down Payment
                </h3>
                <p className="text-3xl font-bold text-neutral-900">3.5% equivalent</p>
                <p className="text-sm text-neutral-600 mt-2">
                  You need enough cash to cover the equity gap (home price - loan balance)
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Assumption Fee
                </h3>
                <p className="text-3xl font-bold text-neutral-900">$900 cap</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Maximum fee charged by the lender to process the assumption
                </p>
              </Card>
            </div>

            <h2>FHA Assumption Process</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Find an FHA assumable home:</strong> Search for listings with
                FHA loans or work with a specialized agent.
              </li>
              <li>
                <strong>Submit assumption application:</strong> Apply directly with the
                existing loan servicer, not a new lender.
              </li>
              <li>
                <strong>Meet credit and income requirements:</strong> Provide documentation
                to prove you qualify (credit score 580+, DTI under 50%).
              </li>
              <li>
                <strong>Pay equity gap and fees:</strong> Cover the difference between home
                price and loan balance, plus the $900 assumption fee.
              </li>
              <li>
                <strong>Close and assume the loan:</strong> Transfer the loan to your name
                and start making payments at the assumed rate.
              </li>
            </ol>

            <h2>Pros and Cons of FHA Assumptions</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
              <Card className="border-2 border-[var(--color-accent)]">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-4">
                  Pros
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    Lower interest rates (2-4% vs. 6-7%+)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    Save $500-$1,500/month
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    Lower closing costs
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    Usually no appraisal required
                  </li>
                </ul>
              </Card>
              <Card className="border-2 border-neutral-300">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Cons</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Mortgage insurance for life of loan
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Longer processing time (45-90 days)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Must cover equity gap
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Fewer assumable homes available
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="FHA Assumable Loan FAQ"
        showSchema={true}
      />

      {/* Lead Capture */}
      <ContactForm
        title="Ready to Find FHA Assumable Homes?"
        description="Contact us to start your search for FHA assumable mortgage opportunities"
      />
    </div>
  )
}
