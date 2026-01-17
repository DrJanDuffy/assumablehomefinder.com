import type { Metadata } from 'next'
import Card from '../components/ui/Card'
import FAQ from '../components/sections/FAQ'
import ContactForm from '../components/sections/ContactForm'
import SchemaMarkup from '../components/seo/SchemaMarkup'
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

            <h2>Rural Area Requirements</h2>
            <p>
              USDA loans are only available for properties in rural areas as defined by
              the USDA. Many areas that appear suburban actually qualify as rural under
              USDA guidelines. You can check if a property is in an eligible area using
              the USDA eligibility map.
            </p>

            <h2>Income Limits</h2>
            <p>
              Income limits vary by area and household size, but generally, your household
              income must be no more than 115% of the median income for your area. Check
              with your lender or the USDA website for specific income limits in your area.
            </p>

            <h2>How to Find USDA Assumable Homes</h2>
            <p>
              Look for listings that mention "USDA loan" or "assumable" in the description.
              You can also search MLS with keywords like "USDA assumable" or work with an
              agent specializing in assumable mortgages.
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
