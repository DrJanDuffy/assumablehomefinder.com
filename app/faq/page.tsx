import type { Metadata } from 'next'
import FAQ from '../components/sections/FAQ'
import { generateFAQPageSchema } from '@/lib/schema-generators'

export const metadata: Metadata = {
  title: 'FAQ - Assumable Mortgage Questions',
  description:
    'Frequently asked questions about assumable mortgages, FHA loans, VA loans, USDA loans, requirements, fees, and the assumption process.',
}

const generalQuestions = [
  {
    question: 'What is an assumable mortgage?',
    answer:
      'An assumable mortgage allows a homebuyer to take over the seller\'s existing mortgage loan, including its interest rate and terms. Instead of getting a new loan at current market rates, you assume the seller\'s original loan.',
  },
  {
    question: 'Which loans are assumable?',
    answer:
      'FHA, VA, and USDA loans are assumable. Conventional loans typically are not assumable, though there may be exceptions in certain situations.',
  },
  {
    question: 'Can anyone assume a VA loan?',
    answer:
      'Yes! Non-veterans CAN assume VA loans. While VA loans were originally designed for veterans, anyone can assume an existing VA mortgage as long as they meet the lender\'s credit and income requirements.',
  },
  {
    question: 'How much can I save with an assumable mortgage?',
    answer:
      'Buyers typically save $500-$1,500 per month by assuming a 2-4% mortgage instead of getting a new loan at 6-7%+. Over 30 years, this can add up to $180,000-$540,000 in savings.',
  },
  {
    question: 'How long does the assumption process take?',
    answer:
      'The assumption process typically takes 45-90 days, which is slightly longer than a traditional mortgage (30-45 days). The lender needs to verify your credit, income, and other qualifications before approving the assumption.',
  },
  {
    question: 'What are the fees for assuming a mortgage?',
    answer:
      'Fees vary by loan type: FHA assumption fee is capped at $900, VA assumption fee is 0.5% of the loan balance (waived for disabled veterans), and USDA fees vary. These fees are typically lower than closing costs on a new mortgage.',
  },
]

const qualificationQuestions = [
  {
    question: 'What credit score do I need to assume a mortgage?',
    answer:
      'Credit score requirements vary by loan type: FHA requires 580+, VA typically requires 620+, and USDA requires 640+. These are generally similar to or slightly lower than requirements for new loans.',
  },
  {
    question: 'What is the debt-to-income requirement?',
    answer:
      'DTI requirements vary by loan type: FHA requires under 50%, VA requirements vary by lender, and USDA requires under 41%. Your total monthly debt payments divided by gross monthly income must meet these thresholds.',
  },
  {
    question: 'Do I need to be a veteran to assume a VA loan?',
    answer:
      'No. You do not need to be a veteran, active-duty military, or have any military connection to assume a VA loan. Anyone who meets the lender\'s credit and income requirements can assume a VA mortgage.',
  },
  {
    question: 'What documentation is required?',
    answer:
      'You\'ll need standard mortgage documentation: W-2s or tax returns, bank statements, pay stubs, and employment verification. The lender may also require additional documentation specific to the assumption process.',
  },
]

const processQuestions = [
  {
    question: 'How do I find homes with assumable mortgages?',
    answer:
      'Search MLS listings for keywords like "assumable", "FHA loan", "VA loan", or "USDA loan". You can also use partner platforms like Assumable.io, Roam, or AssumeList, or work with an agent specializing in assumable mortgages.',
  },
  {
    question: 'What happens to the seller\'s liability?',
    answer:
      'For FHA loans, the seller is released from liability once the assumption is completed. For VA loans, the seller\'s entitlement remains tied to the property until the loan is paid off, unless the buyer substitutes their entitlement.',
  },
  {
    question: 'Can I assume a mortgage and get a second loan for the equity?',
    answer:
      'Yes. If the home has appreciated significantly, creating an equity gap (home price - loan balance), you can assume the mortgage and get a second mortgage to cover the equity gap. This creates a blended rate scenario.',
  },
  {
    question: 'What if the home has increased in value significantly?',
    answer:
      'If the home has appreciated, creating an equity gap, you\'ll need to cover that gap with cash or a second mortgage. The equity gap = Home Price - Assumable Loan Balance - Down Payment. Many buyers use second mortgages to cover this gap.',
  },
]

const costQuestions = [
  {
    question: 'What are FHA assumption fees?',
    answer:
      'The FHA assumption fee is capped at $900. This fee covers the cost of processing the assumption application and transferring the loan to the new borrower. This is typically much lower than closing costs on a new mortgage.',
  },
  {
    question: 'What is the VA assumption funding fee?',
    answer:
      'The VA assumption funding fee is 0.5% of the loan balance. For example, on a $300,000 loan, the fee would be $1,500. This fee is waived for disabled veterans. Unlike new VA loans, assumptions don\'t require a VA funding fee.',
  },
  {
    question: 'Are there closing costs on an assumed mortgage?',
    answer:
      'Yes, but they\'re typically lower than closing costs on a new mortgage. You\'ll pay the assumption fee (FHA: $900 cap, VA: 0.5%), plus standard closing costs like title insurance, escrow fees, and recording fees. However, you won\'t pay origination fees or points like you would on a new loan.',
  },
  {
    question: 'Is an appraisal required?',
    answer:
      'Usually not. Most assumable mortgages don\'t require an appraisal, which saves both time and money. However, the lender may require an appraisal in certain circumstances, such as if the home has appreciated significantly.',
  },
]

const allQuestions = [
  ...generalQuestions,
  ...qualificationQuestions,
  ...processQuestions,
  ...costQuestions,
]

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Everything you need to know about assumable mortgages
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              General Questions
            </h2>
            <FAQ items={generalQuestions} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Qualification Questions
            </h2>
            <FAQ items={qualificationQuestions} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Process Questions
            </h2>
            <FAQ items={processQuestions} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Cost Questions
            </h2>
            <FAQ items={costQuestions} />
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: allQuestions.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
