import type { Metadata } from 'next'
import Card from '../components/ui/Card'
import ContactForm from '../components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'For Sellers - Market Your Assumable Mortgage',
  description:
    'Sell your home faster and for more money by marketing your assumable mortgage. Attract more buyers with low-rate assumable FHA, VA, or USDA loans.',
}

export default function ForSellersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            For Sellers: Market Your Assumable Mortgage
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Attract more buyers and potentially sell for more money by highlighting
            your assumable mortgage
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Why Market Your Assumable Mortgage?</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-6">
              <Card className="border-2 border-[var(--color-accent)]">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-2">
                  Attract More Buyers
                </h3>
                <p className="text-sm text-neutral-600">
                  In a high-rate market (6-7%+), buyers are actively searching for
                  assumable mortgages (2-4%). Marketing your assumable loan can attract
                  significantly more interested buyers.
                </p>
              </Card>
              <Card className="border-2 border-[var(--color-accent)]">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-2">
                  Sell Faster
                </h3>
                <p className="text-sm text-neutral-600">
                  Homes with assumable mortgages often sell faster because buyers can
                  save $500-$1,500/month compared to getting a new loan at current rates.
                </p>
              </Card>
              <Card className="border-2 border-[var(--color-accent)]">
                <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-2">
                  Command Higher Price
                </h3>
                <p className="text-sm text-neutral-600">
                  Studies show homes with assumable mortgages can sell for $10,000-$20,000
                  more because buyers value the monthly savings from the low rate.
                </p>
              </Card>
            </div>

            <h2>Seller Considerations by Loan Type</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                  FHA Assumable Mortgages
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  FHA loans are straightforward to assume. The seller is released from
                  liability once the assumption is completed, and the process is relatively
                  simple.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Straightforward release of liability
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Relatively simple process
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Assumption fee capped at $900 (paid by buyer)
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                  VA Assumable Mortgages
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  VA loans are assumable, but there are important entitlement considerations
                  for sellers. The seller's VA entitlement remains tied to the property
                  until the loan is paid off, unless the buyer substitutes their entitlement.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Entitlement tied until loan paid off
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Buyer can substitute entitlement (releases seller)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    0.5% assumption fee (paid by buyer)
                  </li>
                </ul>
              </Card>
            </div>

            <h2>How to Market Your Assumable Mortgage</h2>
            <div className="space-y-4 mt-6">
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  1. Highlight in Listing Description
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Make sure your listing agent includes "assumable mortgage" and the
                  interest rate prominently in the listing description. Example:
                </p>
                <div className="bg-neutral-50 p-4 rounded-md text-sm">
                  <p className="font-semibold text-neutral-900 mb-2">
                    "This home features an assumable [FHA/VA/USDA] mortgage with a
                    [X]% interest rate - a rare opportunity to save $500-$1,500/month
                    compared to current market rates!"
                  </p>
                </div>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  2. List on Assumable Mortgage Platforms
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Consider listing your home on platforms specifically for assumable
                  mortgages:
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">•</span>
                    Assumable.io
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">•</span>
                    Roam
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">•</span>
                    AssumeList
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  3. Include Rate and Terms in Marketing
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Be specific about the assumable mortgage details:
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">•</span>
                    Current interest rate (e.g., "2.75% assumable mortgage")
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">•</span>
                    Loan type (FHA, VA, or USDA)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">•</span>
                    Remaining loan balance
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">•</span>
                    Estimated monthly payment at assumed rate
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  4. Calculate Potential Buyer Savings
                </h3>
                <p className="text-sm text-neutral-600">
                  Show buyers how much they can save. For example: "With current market
                  rates at 7%, assuming this 3% mortgage would save buyers approximately
                  $974/month compared to a new loan."
                </p>
              </Card>
            </div>

            <h2>Seller Benefits Summary</h2>
            <Card className="mt-6 bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-accent-dark)] font-bold">✓</span>
                  <span className="font-semibold text-neutral-900">More interested buyers</span> - In a high-rate market, assumable mortgages are highly sought after
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-accent-dark)] font-bold">✓</span>
                  <span className="font-semibold text-neutral-900">Faster sale</span> - Homes with assumable mortgages often sell more quickly
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-accent-dark)] font-bold">✓</span>
                  <span className="font-semibold text-neutral-900">Higher sale price</span> - Can command $10,000-$20,000 more due to buyer savings
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-accent-dark)] font-bold">✓</span>
                  <span className="font-semibold text-neutral-900">Differentiate your listing</span> - Stand out in a competitive market
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <ContactForm
        title="Have an Assumable Mortgage? Let's Market It!"
        description="Contact us to learn how to effectively market your assumable mortgage and attract more buyers"
      />
    </div>
  )
}
