import type { Metadata } from 'next'
import Card from '../components/ui/Card'
import FAQ from '../components/sections/FAQ'
import ContactForm from '../components/sections/ContactForm'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import OfficeListings from '../components/realscout/OfficeListings'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'FHA Assumable Loans - Complete Buyer\'s Guide',
  description:
    'Complete guide to FHA assumable mortgages: requirements (580+ credit, 3.5% down), $900 fee cap, process, and how to find FHA assumable homes.',
  path: '/fha-assumable-loans',
  keywords: ['FHA assumable loan', 'FHA mortgage assumption', 'assume FHA loan'],
})

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

      {/* Primary Lead Magnet - Office Listings */}
      <OfficeListings 
        title="Find FHA Assumable Homes"
        description="Browse luxury homes with assumable FHA mortgages in Las Vegas and Henderson"
      />

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
            <p className="text-neutral-600 mb-6">
              Like any financial decision, assuming an FHA mortgage has both advantages and considerations. Understanding both sides helps you make an informed decision:
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
              <Card className="border-2 border-[var(--color-accent)]">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-4">
                  Advantages of FHA Assumptions
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    <strong>Lower interest rates:</strong> Lock in 2-4% rates vs. 6-7%+ for new mortgages
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    <strong>Significant savings:</strong> Save $500-$1,500/month on your mortgage payment
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    <strong>Lower closing costs:</strong> Assumption fees capped at $900 vs. 2-5% for new mortgages
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    <strong>No appraisal needed:</strong> Most assumptions don't require an appraisal, saving time and money
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    <strong>Seller release:</strong> Seller is released from liability once assumption is complete
                  </li>
                </ul>
              </Card>
              <Card className="border-2 border-neutral-300">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Considerations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    <strong>Mortgage insurance:</strong> MIP continues for the life of the loan when assuming FHA
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    <strong>Processing time:</strong> Longer timeline (45-90 days) compared to traditional mortgages
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    <strong>Equity gap:</strong> Must cover the difference between home price and loan balance
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    <strong>Limited availability:</strong> Only homes with FHA loans are assumable
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    <strong>Qualification required:</strong> Must still meet lender's credit and income requirements
                  </li>
                </ul>
              </Card>
            </div>

            <h2>Finding FHA Assumable Homes in Las Vegas</h2>
            <p className="text-neutral-600 mb-4">
              Locating homes with assumable FHA mortgages requires a targeted search strategy. Here are the most effective methods for finding FHA assumable opportunities:
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              MLS Search Techniques
            </h3>
            <p className="text-neutral-600 mb-4">
              When searching MLS, look for specific keywords in listing descriptions: "FHA loan," "FHA assumable," "assumable mortgage," or "FHA mortgage." Many listing agents will mention if a property has an FHA loan, though they may not always explicitly state it's assumable. If you see "FHA loan" mentioned, it's worth asking the listing agent if it's assumable.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Working with Specialized Agents
            </h3>
            <p className="text-neutral-600 mb-4">
              An agent who specializes in assumable mortgages, like Dr. Jan Duffy, knows how to identify FHA assumable opportunities. They can search MLS with specific criteria, contact listing agents directly to inquire about loan types, and leverage their network to find off-market opportunities. This specialized expertise significantly improves your chances of finding assumable homes.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Direct Seller Inquiries
            </h3>
            <p className="text-neutral-600 mb-4">
              If you're interested in a property, ask the listing agent or seller directly if the current mortgage is an FHA loan and whether it's assumable. Many sellers don't realize their FHA loan is a valuable feature that can attract more buyers, so asking directly can reveal opportunities that aren't being actively marketed.
            </p>

            <h2>FHA Assumption Fees and Cost Breakdown</h2>
            <p className="text-neutral-600 mb-4">
              Understanding the costs associated with assuming an FHA loan helps you plan your budget and compare options:
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Assumption Fee Details
            </h3>
            <p className="text-neutral-600 mb-4">
              The FHA assumption fee is capped at $900 by federal regulation. This fee covers the lender's cost of processing your assumption application, transferring the loan to your name, and handling the necessary paperwork. This is a one-time fee paid at closing, and it's significantly lower than the closing costs on a new mortgage, which can be 2-5% of the loan amount (potentially $6,000-$15,000 on a $300,000 loan).
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Other Closing Costs
            </h3>
            <p className="text-neutral-600 mb-4">
              In addition to the assumption fee, you'll pay standard closing costs including title insurance, escrow fees, recording fees, and any prepaid items like property taxes and homeowners insurance. However, you won't pay origination fees, points, or other lender fees that come with new mortgages. Total closing costs for assumptions are typically 2-3% of the home price, compared to 3-5% for new mortgages.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Equity Gap Calculation
            </h3>
            <p className="text-neutral-600 mb-4">
              The most significant cost consideration is the equity gap - the difference between the home's current price and the assumable loan balance. This must be covered with cash or a second mortgage. For example, if you're buying a $400,000 home with a $280,000 assumable FHA loan balance, you'll need $120,000 (plus closing costs) to cover the equity gap. This is in addition to your down payment, if any.
            </p>
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

      {/* SEO Schema Markup */}
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'FHA Assumable Loans - Complete Buyer\'s Guide',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/fha-assumable-loans',
          breadcrumb: generateBreadcrumbSchema('/fha-assumable-loans', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'FHA Assumable Loans', url: 'https://assumablehomefinder.com/fha-assumable-loans' },
          ]),
        })}
      />
    </div>
  )
}
