import type { Metadata } from 'next'
import Card from '../components/ui/Card'
import FAQ from '../components/sections/FAQ'
import Calendly from '../components/sections/Calendly'
import Stats from '../components/sections/Stats'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import OfficeListings from '../components/realscout/OfficeListings'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'VA Assumable Loans - Complete Buyer\'s Guide',
  description:
    'Can non-veterans assume VA loans? Yes! Learn about VA assumable mortgages: requirements (620+ credit), 0.5% fee, entitlement considerations, and how to find VA assumable homes.',
  path: '/va-assumable-loans',
  keywords: ['VA assumable mortgage', 'assume VA loan', 'non-veteran VA loan'],
})

const faqItems = [
  {
    question: 'Can non-veterans assume a VA loan?',
    answer:
      'Yes! Non-veterans CAN assume VA loans. While VA loans were originally designed for veterans, anyone can assume an existing VA mortgage as long as they meet the lender\'s credit and income requirements. You do not need to be a veteran to assume a VA loan.',
  },
  {
    question: 'What are the requirements to assume a VA loan?',
    answer:
      'To assume a VA loan, you typically need a credit score of 620 or higher and must meet the lender\'s income and debt-to-income requirements. The VA must approve the assumption, but you do not need to be a veteran.',
  },
  {
    question: 'What is the VA assumption fee?',
    answer:
      'The VA assumption fee is 0.5% of the loan balance. This fee is waived for disabled veterans. For example, on a $300,000 loan, the assumption fee would be $1,500.',
  },
  {
    question: 'What happens to the seller\'s VA entitlement?',
    answer:
      'The seller\'s VA entitlement remains tied to the property until you pay off the loan or refinance. This means the seller cannot use their VA benefits to purchase another home until the loan is paid off, unless they meet certain exceptions.',
  },
  {
    question: 'Do I get VA benefits if I assume a VA loan?',
    answer:
      'No. When you assume a VA loan, you do not receive VA benefits. You simply take over the seller\'s existing loan. If you want VA benefits, you would need to be a qualified veteran and use your own VA entitlement for a new purchase.',
  },
  {
    question: 'How do I find VA assumable homes?',
    answer:
      'Look for listings that mention "VA loan" or "assumable" in the description. You can also search MLS with keywords like "VA assumable" or work with an agent specializing in assumable mortgages.',
  },
]

export default function VALoansPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            VA Assumable Loans
          </h1>
          <p className="mt-6 text-xl text-white/90">
            <strong>Non-veterans CAN assume VA loans!</strong> Learn how to take over a
            low-rate VA mortgage and save thousands
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Primary Lead Magnet - Office Listings */}
      <OfficeListings 
        title="Find VA Assumable Homes"
        description="Browse luxury homes with assumable VA mortgages in Las Vegas and Henderson"
      />

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="rounded-lg bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] p-6 mb-8">
              <h2 className="text-2xl font-bold text-[var(--color-accent-dark)] mb-2">
                Key Point: Non-Veterans CAN Assume VA Loans
              </h2>
              <p className="text-neutral-700">
                While VA loans were originally designed for veterans, anyone can assume
                an existing VA mortgage. You do not need to be a veteran, active-duty
                military, or have any military connection to assume a VA loan. As long as
                you meet the lender's credit and income requirements, you can take over
                the seller's VA loan and enjoy their low interest rate.
              </p>
            </div>

            <h2>What is a VA Assumable Mortgage?</h2>
            <p>
              A VA (Veterans Affairs) assumable mortgage allows a buyer to take over the
              seller's existing VA loan, including its interest rate and terms. VA loans
              are assumable by anyone—veterans and non-veterans alike—making them one of
              the most accessible types of assumable mortgages.
            </p>

            <h2>VA Assumption Requirements</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Credit Score
                </h3>
                <p className="text-3xl font-bold text-neutral-900">620+</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Typically required, though exact requirements vary by lender
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  VA Approval
                </h3>
                <p className="text-3xl font-bold text-neutral-900">Required</p>
                <p className="text-sm text-neutral-600 mt-2">
                  The VA must approve the assumption, but you don't need to be a veteran
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Assumption Fee
                </h3>
                <p className="text-3xl font-bold text-neutral-900">0.5%</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Of loan balance (waived for disabled veterans)
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  No VA Funding Fee
                </h3>
                <p className="text-3xl font-bold text-neutral-900">$0</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Unlike new VA loans, assumptions don't require a VA funding fee
                </p>
              </Card>
            </div>

            <h2>VA Entitlement Considerations for Sellers</h2>
            <p>
              When a VA loan is assumed, the seller's VA entitlement remains tied to the
              property until the loan is paid off or refinanced. This means the seller
              cannot use their VA benefits to purchase another home using a VA loan until
              the assumption is released. However, if the buyer is a veteran who will
              substitute their entitlement, the seller can be released from liability.
            </p>

            <h2>VA Assumption Process</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Find a VA assumable home:</strong> Search for listings with VA
                loans or work with a specialized agent.
              </li>
              <li>
                <strong>Submit assumption application:</strong> Apply with the existing
                loan servicer and request VA approval.
              </li>
              <li>
                <strong>Meet credit and income requirements:</strong> Provide documentation
                to prove you qualify (credit score 620+, income verification).
              </li>
              <li>
                <strong>Pay equity gap and fees:</strong> Cover the difference between home
                price and loan balance, plus the 0.5% assumption fee.
              </li>
              <li>
                <strong>Close and assume the loan:</strong> Transfer the loan to your name
                and start making payments at the assumed rate.
              </li>
            </ol>

            <h2>Pros and Cons of VA Assumptions</h2>
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
                    No VA funding fee
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    Available to everyone (veterans and non-veterans)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    No PMI (Private Mortgage Insurance)
                  </li>
                </ul>
              </Card>
              <Card className="border-2 border-neutral-300">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Cons</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    0.5% assumption fee (unless disabled veteran)
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
        title="VA Assumable Loan FAQ"
        showSchema={true}
      />

      {/* Lead Capture */}
      <Calendly
        title="Ready to Find VA Assumable Homes?"
        description="Contact us to start your search for VA assumable mortgage opportunities"
      />

      {/* SEO Schema Markup */}
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'VA Assumable Loans - Complete Buyer\'s Guide',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/va-assumable-loans',
          breadcrumb: generateBreadcrumbSchema('/va-assumable-loans', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'VA Assumable Loans', url: 'https://assumablehomefinder.com/va-assumable-loans' },
          ]),
        })}
      />
    </div>
  )
}
