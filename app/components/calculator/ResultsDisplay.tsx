import { formatCurrency, formatPercentage } from '@/lib/calculator-utils'
import Button from '../ui/Button'
import Card from '../ui/Card'
import type { CalculatorResults } from '@/lib/calculator-utils'

type ResultsDisplayProps = {
  results: CalculatorResults
  inputs: {
    homePrice: number
    assumableLoanBalance: number
    assumableInterestRate: number
    currentMarketRate: number
  }
}

export default function ResultsDisplay({
  results,
  inputs,
}: ResultsDisplayProps) {
  const {
    assumableMonthlyPayment,
    newMortgageMonthlyPayment,
    monthlySavings,
    annualSavings,
    thirtyYearTotalSavings,
    equityGap,
    blendedRate,
  } = results

  return (
    <div className="space-y-6">
      {/* Savings Summary */}
      <Card className="bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-primary)]/10">
        <h3 className="text-2xl font-bold text-neutral-900 mb-6">
          Your Savings Breakdown
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-sm font-medium text-neutral-600">
              Monthly Savings
            </p>
            <p className="mt-2 text-3xl font-bold text-[var(--color-accent-dark)]">
              {formatCurrency(monthlySavings)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-neutral-600">
              Annual Savings
            </p>
            <p className="mt-2 text-3xl font-bold text-[var(--color-accent-dark)]">
              {formatCurrency(annualSavings)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-neutral-600">
              30-Year Total Savings
            </p>
            <p className="mt-2 text-3xl font-bold text-[var(--color-accent-dark)]">
              {formatCurrency(thirtyYearTotalSavings)}
            </p>
          </div>
        </div>
      </Card>

      {/* Payment Comparison */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-2 border-[var(--color-accent)]">
          <h4 className="text-lg font-semibold text-neutral-900 mb-4">
            With Assumable Mortgage
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Monthly Payment:</span>
              <span className="font-semibold text-neutral-900">
                {formatCurrency(assumableMonthlyPayment)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Interest Rate:</span>
              <span className="font-semibold text-neutral-900">
                {formatPercentage(inputs.assumableInterestRate)}
              </span>
            </div>
            {blendedRate && (
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Blended Rate:</span>
                <span className="font-semibold text-neutral-900">
                  {formatPercentage(blendedRate)}
                </span>
              </div>
            )}
            {equityGap > 0 && (
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-500">
                  Equity Gap: {formatCurrency(equityGap)}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {equityGap > 0
                    ? 'A second mortgage may be needed to cover the equity gap.'
                    : 'Down payment covers the equity gap.'}
                </p>
              </div>
            )}
          </div>
        </Card>

        <Card className="border-2 border-neutral-300">
          <h4 className="text-lg font-semibold text-neutral-900 mb-4">
            With New Mortgage
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Monthly Payment:</span>
              <span className="font-semibold text-neutral-900">
                {formatCurrency(newMortgageMonthlyPayment)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Interest Rate:</span>
              <span className="font-semibold text-neutral-900">
                {formatPercentage(inputs.currentMarketRate)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Loan Amount:</span>
              <span className="font-semibold text-neutral-900">
                {formatCurrency(inputs.homePrice - (results.equityGap + inputs.assumableLoanBalance))}
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Visual Comparison Bar */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-neutral-900">
          Monthly Payment Comparison
        </h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-600">Assumable Mortgage</span>
              <span className="font-semibold text-[var(--color-accent-dark)]">
                {formatCurrency(assumableMonthlyPayment)}
              </span>
            </div>
            <div className="h-6 bg-[var(--color-accent)] rounded-md" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-600">New Mortgage</span>
              <span className="font-semibold text-neutral-900">
                {formatCurrency(newMortgageMonthlyPayment)}
              </span>
            </div>
            <div
              className="h-6 bg-neutral-400 rounded-md"
              style={{
                width: `${(newMortgageMonthlyPayment / assumableMonthlyPayment) * 100}%`,
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <Card className="bg-[var(--color-primary)] text-white text-center">
        <h4 className="text-xl font-semibold mb-2">
          Want help finding homes with rates like this?
        </h4>
        <p className="text-white/80 mb-6">
          Contact us to get started on your assumable mortgage search.
        </p>
        <Button
          variant="secondary"
          href="/contact"
          className="bg-white text-[var(--color-primary)] hover:bg-neutral-100"
        >
          Get Started Today
        </Button>
      </Card>
    </div>
  )
}
