import type { Metadata } from 'next'
import Calculator from '../components/calculator/Calculator'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import { generateCalculatorSchema } from '@/lib/schema-generators'
import ContactForm from '../components/sections/ContactForm'
import OfficeListings from '../components/realscout/OfficeListings'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'Assumable Mortgage Savings Calculator',
  description:
    'Calculate savings by assuming existing 2-4% mortgages vs new 6-7% loans. See monthly, annual, and 30-year savings with our interactive calculator.',
  path: '/calculator',
  keywords: ['assumable mortgage calculator', 'mortgage savings calculator', 'assumable loan calculator'],
})

export default function CalculatorPage() {
  return (
    <div className="bg-neutral-50 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Assumable Mortgage Savings Calculator
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-neutral-600">
            Calculate your potential savings by assuming an existing mortgage
            with a low interest rate instead of getting a new loan.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8 mb-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
            Why Calculate Your Assumable Mortgage Savings?
          </h2>
          <p className="text-neutral-600 mb-4">
            With current mortgage rates at 6-7% or higher, assuming an existing mortgage at 2-4% can save you hundreds or even thousands of dollars per month. Our interactive calculator helps you understand exactly how much you could save by taking over the seller's existing FHA, VA, or USDA loan instead of getting a new mortgage at current market rates.
          </p>
          <p className="text-neutral-600 mb-4">
            Understanding your potential savings is the first step in deciding whether to pursue an assumable mortgage opportunity. The calculator below allows you to input real numbers from homes you're considering and see immediate, accurate calculations of your monthly, annual, and lifetime savings.
          </p>
          <p className="text-neutral-600">
            Whether you're buying in Las Vegas, Henderson, North Las Vegas, or anywhere in Nevada, this calculator gives you the data you need to make an informed decision about assumable mortgages.
          </p>
        </section>

        {/* Primary Lead Magnet - Office Listings */}
        <OfficeListings 
          title="Browse Luxury Homes with Assumable Mortgages"
          description="See real luxury homes in Las Vegas and Henderson - many with assumable mortgage opportunities"
        />

        <Calculator />

        {/* How to Use the Calculator */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8 mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
            How to Use the Assumable Mortgage Calculator
          </h2>
          <p className="text-neutral-600 mb-6">
            Our calculator is designed to be straightforward and user-friendly. Here's how to get the most accurate savings estimate:
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Step 1: Enter Home Details
          </h3>
          <p className="text-neutral-600 mb-4">
            Start by entering the home's purchase price. This is the total amount you're paying for the property. For example, if you're looking at a $400,000 home, enter 400000.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Step 2: Enter Assumable Loan Information
          </h3>
          <p className="text-neutral-600 mb-4">
            You'll need to know the assumable loan balance (how much is still owed on the existing mortgage) and the interest rate on that loan. This information is typically available from the listing agent or seller. Most assumable mortgages have rates between 2% and 4%, which are significantly lower than current market rates.
          </p>
          <p className="text-neutral-600 mb-4">
            Also enter the remaining loan term. For example, if the seller got a 30-year mortgage 3 years ago, enter 27 years as the remaining term.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Step 3: Enter Current Market Rate
          </h3>
          <p className="text-neutral-600 mb-4">
            This is the interest rate you would get if you applied for a new mortgage today. Current market rates vary but are typically in the 6-7% range as of 2025. You can check current rates with any lender or mortgage broker. This rate is used to calculate what your monthly payment would be with a new mortgage for comparison.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Step 4: Enter Your Down Payment
          </h3>
          <p className="text-neutral-600 mb-4">
            Enter the amount of cash you plan to put down. When assuming a mortgage, your down payment covers the "equity gap" - the difference between the home price and the assumable loan balance. For example, if a home costs $400,000 and the assumable loan balance is $300,000, you'd need $100,000 plus closing costs to cover the equity gap.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Step 5: Optional Second Mortgage Rate
          </h3>
          <p className="text-neutral-600 mb-4">
            If the home has appreciated significantly and there's a large equity gap, you may need a second mortgage to cover the difference. Enter the interest rate for this second mortgage if applicable. The calculator will factor this into your total monthly payment calculation.
          </p>
        </section>

        {/* Understanding the Results */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8 mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
            Understanding Your Calculator Results
          </h2>
          <p className="text-neutral-600 mb-6">
            Once you've entered all the information, the calculator will display several key metrics that help you understand the financial impact of assuming a mortgage versus getting a new loan.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Monthly Payment Comparison
          </h3>
          <p className="text-neutral-600 mb-4">
            You'll see your monthly payment if you assume the existing mortgage versus your monthly payment with a new mortgage at current market rates. This is often the most impactful number for buyers, as it shows your immediate cash flow savings. For example, assuming a 3% mortgage on a $400,000 home might result in a $1,200 monthly payment, while a new 7% mortgage could be $2,400 per month - a savings of $1,200 every month.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Monthly Savings
          </h3>
          <p className="text-neutral-600 mb-4">
            This is the difference between your assumable mortgage payment and your new mortgage payment. This money stays in your pocket each month and can be used for other expenses, savings, investments, or improving your quality of life.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Annual Savings
          </h3>
          <p className="text-neutral-600 mb-4">
            Your monthly savings multiplied by 12. This gives you a clear picture of your yearly financial benefit. For example, saving $1,200 per month equals $14,400 per year in savings. That's substantial money that can be redirected toward other financial goals.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            30-Year Total Savings
          </h3>
          <p className="text-neutral-600 mb-4">
            This shows your total savings over the life of the loan, assuming you hold the mortgage for the full 30 years. This number can be staggering - often $200,000 to $500,000 or more in total savings. However, it's important to remember that many homeowners refinance or sell before the full term, so this is a maximum potential savings figure.
          </p>
        </section>

        {/* Real-World Example */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8 mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
            Real-World Example: Las Vegas Home Purchase
          </h2>
          <p className="text-neutral-600 mb-4">
            Let's walk through a realistic example of how assumable mortgages work in the Las Vegas real estate market:
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Scenario: $450,000 Home in Henderson
          </h3>
          <p className="text-neutral-600 mb-4">
            Imagine you're looking at a beautiful home in Henderson, Nevada, listed at $450,000. The seller has a VA assumable mortgage with a remaining balance of $320,000 at 2.75% interest rate, with 27 years remaining on the loan. Current market rates are 6.8% for a new 30-year mortgage.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            The Math
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-600 mb-4">
            <li><strong>Equity Gap:</strong> $450,000 (home price) - $320,000 (loan balance) = $130,000</li>
            <li><strong>Your Down Payment:</strong> $130,000 (to cover equity gap)</li>
            <li><strong>Assumable Monthly Payment:</strong> Approximately $1,350 at 2.75%</li>
            <li><strong>New Mortgage Payment:</strong> Approximately $2,800 at 6.8% (on $450,000)</li>
            <li><strong>Monthly Savings:</strong> $2,800 - $1,350 = $1,450 per month</li>
            <li><strong>Annual Savings:</strong> $1,450 × 12 = $17,400 per year</li>
            <li><strong>30-Year Savings:</strong> Over $520,000 in total savings</li>
          </ul>

          <p className="text-neutral-600 mb-4">
            In this example, you'd save $1,450 every single month by assuming the existing mortgage. Over just one year, that's $17,400 saved. Over the life of the loan, that's more than half a million dollars in savings compared to getting a new mortgage at current rates.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            What This Means for You
          </h3>
          <p className="text-neutral-600 mb-4">
            These savings can be life-changing. With an extra $1,450 per month, you could pay off other debt faster, invest for retirement, save for your children's education, take family vacations, or simply have more financial breathing room. The calculator helps you see these numbers for any home you're considering.
          </p>
        </section>

        {/* Common Questions About Assumable Mortgage Calculations */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8 mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
            Common Questions About Assumable Mortgage Calculations
          </h2>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            What if the Home Has Appreciated Significantly?
          </h3>
          <p className="text-neutral-600 mb-4">
            If a home has appreciated, creating a large equity gap, you have two options: pay the difference in cash or use a second mortgage to cover the gap. Our calculator allows you to factor in a second mortgage rate to see your total monthly payment. While a second mortgage will increase your monthly payment, you'll still save significantly compared to a new mortgage at current rates.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Do Assumption Fees Affect the Calculation?
          </h3>
          <p className="text-neutral-600 mb-4">
            Assumption fees are relatively small one-time costs (FHA: $900 cap, VA: 0.5% of loan balance) and don't significantly impact your monthly payment calculations. However, these fees are much lower than closing costs on a new mortgage, which can be 2-5% of the loan amount. The calculator focuses on monthly payment comparisons, where assumption fees don't directly factor in.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            What About Mortgage Insurance?
          </h3>
          <p className="text-neutral-600 mb-4">
            For FHA loans, mortgage insurance continues with the assumption. For VA loans, there's no PMI. Our calculator focuses on principal and interest payments. Mortgage insurance costs are typically a small percentage and don't significantly change the overall savings picture shown by the calculator.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            How Accurate Are These Calculations?
          </h3>
          <p className="text-neutral-600 mb-4">
            Our calculator uses standard mortgage payment formulas to provide accurate estimates. The actual monthly payment may vary slightly based on property taxes, homeowners insurance, and mortgage insurance, but the principal and interest calculations are precise. These numbers give you a reliable estimate of your savings potential.
          </p>
        </section>

        <div className="mt-16">
          <ContactForm
            title="Want help finding homes with rates like this?"
            description="Contact us to get started on your assumable mortgage search."
            loanTypeField={false}
          />
        </div>
      </div>

      {/* SEO Schema Markup */}
      <SchemaMarkup schema={generateCalculatorSchema()} />
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'Assumable Mortgage Savings Calculator',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/calculator',
          breadcrumb: generateBreadcrumbSchema('/calculator', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'Calculator', url: 'https://assumablehomefinder.com/calculator' },
          ]),
        })}
      />
    </div>
  )
}
