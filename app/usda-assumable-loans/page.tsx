import type { Metadata } from 'next'
import Card from '../components/ui/Card'
import FAQ from '../components/sections/FAQ'
import ContactForm from '../components/sections/ContactForm'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import OfficeListings from '../components/realscout/OfficeListings'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'USDA Assumable Loans - Complete Buyer\'s Guide',
  description:
    'Learn about USDA assumable mortgages for rural properties. Requirements (640+ credit, 41% DTI), income limits, and how to find USDA assumable homes.',
  path: '/usda-assumable-loans',
  keywords: ['USDA assumable loan', 'USDA mortgage assumption', 'rural assumable mortgage'],
})

const faqItems = [
  {
    question: 'What is a USDA assumable mortgage?',
    answer:
      'A USDA assumable mortgage allows a buyer to take over the seller\'s existing USDA loan, including its interest rate and terms. USDA loans are assumable, making them attractive for buyers in rural areas.',
  },
  {
    question: 'Where can I use a USDA loan?',
    answer:
      'USDA loans are only available for properties in rural areas as defined by the USDA. Many areas that appear suburban actually qualify as rural under USDA guidelines.',
  },
  {
    question: 'What are the income limits for USDA loans?',
    answer:
      'Income limits vary by area and household size, but generally, your household income must be no more than 115% of the median income for your area.',
  },
  {
    question: 'What are the requirements to assume a USDA loan?',
    answer:
      'To assume a USDA loan, you typically need a credit score of 640 or higher, meet income limits for your area, and the property must be in a USDA-eligible rural area.',
  },
]

export default function USDALoansPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            USDA Assumable Loans
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Complete guide to assuming a USDA mortgage for rural properties
          </p>
        </div>
      </section>

      {/* Primary Lead Magnet - Office Listings */}
      <OfficeListings 
        title="Find USDA Assumable Homes"
        description="Browse luxury homes with assumable USDA mortgages in Las Vegas and Henderson"
      />

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>What is a USDA Assumable Mortgage?</h2>
            <p>
              A USDA (United States Department of Agriculture) assumable mortgage allows
              a buyer to take over the seller's existing USDA loan, including its interest
              rate and terms. USDA loans are designed for rural properties and offer
              0% down payment options, making them an excellent choice for qualified buyers
              in eligible areas.
            </p>

            <h2>USDA Assumption Requirements</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Credit Score
                </h3>
                <p className="text-3xl font-bold text-neutral-900">640+</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Minimum credit score required to assume a USDA loan
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Down Payment
                </h3>
                <p className="text-3xl font-bold text-neutral-900">0%</p>
                <p className="text-sm text-neutral-600 mt-2">
                  USDA loans typically require no down payment
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Debt-to-Income Ratio
                </h3>
                <p className="text-3xl font-bold text-neutral-900">Under 41%</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Maximum debt-to-income ratio for USDA loans
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">
                  Rural Area
                </h3>
                <p className="text-3xl font-bold text-neutral-900">Required</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Property must be in a USDA-eligible rural area
                </p>
              </Card>
            </div>

            <h2>Rural Area Requirements for USDA Loans</h2>
            <p>
              USDA loans are only available for properties in rural areas as defined by the USDA. However, many areas that appear suburban or even on the outskirts of major cities actually qualify as rural under USDA guidelines. This makes USDA loans more accessible than many people realize.
            </p>
            <p>
              You can check if a property is in an eligible area using the USDA eligibility map on the USDA website. In Nevada, many areas outside the immediate Las Vegas and Henderson city limits qualify as rural. Properties in areas like North Las Vegas, Pahrump, and surrounding rural communities often qualify for USDA loans.
            </p>
            <p>
              When assuming a USDA loan, the property must remain in a USDA-eligible rural area. If you're considering assuming a USDA mortgage, verify the property's eligibility status before proceeding, as USDA eligibility boundaries can change.
            </p>

            <h2>USDA Loan Income Limits and Requirements</h2>
            <p>
              Income limits for USDA loans vary by area and household size, but generally, your household income must be no more than 115% of the median income for your area. These limits are designed to help moderate-income families access homeownership in rural areas.
            </p>
            <p>
              For example, in many Nevada rural areas, the income limit for a family of 4 might be around $90,000-$110,000 annually, depending on the specific location. These limits are adjusted annually and vary by county. Check with your lender or the USDA website for specific income limits in your area.
            </p>
            <p>
              When assuming a USDA loan, you'll need to meet the current income limits for your area. The lender will verify your income using standard documentation including W-2s, tax returns, and pay stubs. It's important to note that these income limits apply to everyone in your household, not just the primary borrower.
            </p>

            <h2>USDA Assumption Process and Timeline</h2>
            <p>
              The process of assuming a USDA loan is similar to other assumable mortgages but involves USDA-specific steps. Here's what you can expect:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-neutral-600 mb-4">
              <li>
                <strong>Find a USDA assumable home:</strong> Search for listings with USDA loans or work with an agent specializing in rural properties and assumable mortgages.
              </li>
              <li>
                <strong>Submit assumption application:</strong> Apply with the existing loan servicer and request USDA approval for the assumption.
              </li>
              <li>
                <strong>Meet credit and income requirements:</strong> Provide documentation proving you qualify (credit score 640+, income within limits, DTI under 41%).
              </li>
              <li>
                <strong>USDA approval:</strong> The USDA must approve the assumption, verifying that you meet program requirements.
              </li>
              <li>
                <strong>Pay equity gap and fees:</strong> Cover the difference between home price and loan balance, plus any assumption fees.
              </li>
              <li>
                <strong>Close and assume the loan:</strong> Transfer the loan to your name and start making payments at the assumed rate.
              </li>
            </ol>
            <p>
              The timeline for USDA assumptions is typically 45-90 days, similar to other assumable mortgages. The USDA approval process may add some time, so it's important to work with experienced professionals who understand the requirements.
            </p>

            <h2>Pros and Cons of USDA Assumptions</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
              <Card className="border-2 border-[var(--color-accent)]">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-4">
                  Advantages of USDA Assumable Loans
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    Lower interest rates (2-4% vs. 6-7%+)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    Save $500-$1,500/month compared to new mortgages
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    No down payment typically required (0% down)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    Lower closing costs than new mortgages
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-accent)]">✓</span>
                    More affordable homeownership in rural areas
                  </li>
                </ul>
              </Card>
              <Card className="border-2 border-neutral-300">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Considerations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Property must be in USDA-eligible rural area
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Income limits apply (must meet current thresholds)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Longer processing time (45-90 days)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Must cover equity gap if home has appreciated
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    USDA guarantees fee may apply
                  </li>
                </ul>
              </Card>
            </div>

            <h2>How to Find USDA Assumable Homes in Nevada</h2>
            <p>
              Finding homes with USDA assumable mortgages requires a targeted search approach. Here are the most effective methods:
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              MLS Search Strategies
            </h3>
            <p className="text-neutral-600 mb-4">
              When searching MLS listings, look for keywords like "USDA loan," "rural development loan," "assumable," or "USDA assumable" in the listing description. Many listing agents will mention if a property has a USDA loan that could be assumable.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Work with a Specialized Agent
            </h3>
            <p className="text-neutral-600 mb-4">
              An agent specializing in assumable mortgages, especially in rural areas, will know how to identify USDA assumable opportunities. They can search MLS with specific criteria, contact listing agents directly, and leverage their network to find off-market opportunities.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Direct Seller Contact
            </h3>
            <p className="text-neutral-600 mb-4">
              If you're interested in a property in a rural area, ask the listing agent or seller directly if the current mortgage is a USDA loan and whether it's assumable. Many sellers don't realize their USDA loan is a valuable marketing feature, so asking directly can reveal opportunities.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Partner Platforms
            </h3>
            <p className="text-neutral-600 mb-4">
              Platforms like Assumable.io, Roam, and AssumeList may list USDA assumable homes. While these platforms tend to focus on FHA and VA loans, some USDA opportunities may be listed. It's worth checking these platforms alongside traditional MLS searches.
            </p>

            <h2>USDA Loan Assumption Fees and Costs</h2>
            <p>
              The costs associated with assuming a USDA loan are generally lower than getting a new mortgage, but there are some fees to consider. The USDA may charge a guarantee fee when assuming a loan, which is typically lower than the upfront guarantee fee on new USDA loans. This fee helps support the USDA loan program.
            </p>
            <p>
              Other costs include standard closing costs like title insurance, escrow fees, and recording fees. However, you won't pay origination fees, points, or other lender fees associated with new mortgages. The total cost is typically 2-3% of the home price, compared to 3-5% for a new mortgage.
            </p>
            <p>
              The equity gap - the difference between the home price and the assumable loan balance - is your primary consideration. If a home has appreciated significantly, you'll need cash or a second mortgage to cover this gap. However, the monthly payment savings often make this worthwhile.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="USDA Assumable Loan FAQ"
        showSchema={true}
      />

      {/* Lead Capture */}
      <ContactForm
        title="Ready to Find USDA Assumable Homes?"
        description="Contact us to start your search for USDA assumable mortgage opportunities"
      />

      {/* SEO Schema Markup */}
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'USDA Assumable Loans - Complete Buyer\'s Guide',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/usda-assumable-loans',
          breadcrumb: generateBreadcrumbSchema('/usda-assumable-loans', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'USDA Assumable Loans', url: 'https://assumablehomefinder.com/usda-assumable-loans' },
          ]),
        })}
      />
    </div>
  )
}
