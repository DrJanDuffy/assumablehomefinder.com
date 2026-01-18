import Card from '../ui/Card'
import { LOAN_TYPES } from '@/lib/constants'

export default function LoanTypes() {
  const loanTypes = Object.values(LOAN_TYPES)

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Types of Assumable Mortgages
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Three loan types allow you to assume existing mortgages
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {loanTypes.map((loan) => (
            <Card
              key={loan.slug}
              href={`/${loan.slug}`}
              className="flex flex-col transition-all duration-200 min-h-[280px] active:bg-neutral-50 [@media(hover:hover)]:hover:scale-[1.02] [@media(hover:hover)]:hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                {loan.name}
              </h3>
              <p className="mt-4 flex-1 text-sm text-neutral-600">
                {loan.description}
              </p>
              <div className="mt-6 space-y-2 border-t border-neutral-200 pt-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Credit Score:</span>
                  <span className="font-medium text-neutral-900">
                    {loan.creditScore}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Down Payment:</span>
                  <span className="font-medium text-neutral-900">
                    {loan.downPayment}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Assumption Fee:</span>
                  <span className="font-medium text-neutral-900">
                    {loan.assumptionFee}
                  </span>
                </div>
              </div>
              {'specialNote' in loan && loan.specialNote && (
                <div className="mt-4 rounded-md bg-[var(--color-accent)]/10 p-3 text-xs font-medium text-[var(--color-accent-dark)]">
                  {loan.specialNote}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
