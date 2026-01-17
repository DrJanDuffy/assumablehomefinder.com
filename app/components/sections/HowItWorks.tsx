import Card from '../ui/Card'

type Step = {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Find a Home with an Assumable Loan',
    description:
      'Search for homes with FHA, VA, or USDA mortgages. These loans are assumable, meaning you can take over the seller\'s existing loan terms.',
  },
  {
    number: 2,
    title: 'Qualify with the Existing Lender',
    description:
      'Meet the lender\'s requirements: credit score 580-620+, DTI under 50%, and provide standard documentation. The process is simpler than a new loan.',
  },
  {
    number: 3,
    title: 'Assume the Low Rate & Save Thousands',
    description:
      'Take over the seller\'s 2-4% interest rate instead of getting a new loan at 6-7%+. Save $500-$1,500/month on your mortgage payment.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Three simple steps to save thousands on your mortgage
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.number} className="relative">
              <div className="flex items-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-white">
                  {step.number}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
