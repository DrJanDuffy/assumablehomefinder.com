export type CalculatorInputs = {
  homePrice: number
  assumableLoanBalance: number
  assumableInterestRate: number
  remainingLoanTerm: number // in years
  currentMarketRate: number
  downPayment: number
  secondMortgageRate?: number
}

export type CalculatorResults = {
  assumableMonthlyPayment: number
  newMortgageMonthlyPayment: number
  monthlySavings: number
  annualSavings: number
  thirtyYearTotalSavings: number
  equityGap: number
  blendedRate?: number
}

/**
 * Calculate monthly mortgage payment
 */
function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  if (annualRate === 0) {
    return principal / (years * 12)
  }

  const monthlyRate = annualRate / 100 / 12
  const numberOfPayments = years * 12

  return (
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  )
}

/**
 * Calculate assumable mortgage savings
 */
export function calculateSavings(inputs: CalculatorInputs): CalculatorResults {
  const {
    homePrice,
    assumableLoanBalance,
    assumableInterestRate,
    remainingLoanTerm,
    currentMarketRate,
    downPayment,
    secondMortgageRate,
  } = inputs

  // Calculate equity gap
  const equityGap = homePrice - assumableLoanBalance - downPayment

  // Calculate assumable monthly payment
  const assumableMonthlyPayment = calculateMonthlyPayment(
    assumableLoanBalance,
    assumableInterestRate,
    remainingLoanTerm
  )

  // Calculate new mortgage monthly payment
  const newLoanAmount = homePrice - downPayment
  const newMortgageMonthlyPayment = calculateMonthlyPayment(
    newLoanAmount,
    currentMarketRate,
    30 // Assume 30-year term for new mortgage
  )

  // If there's an equity gap, calculate blended rate
  let secondMortgagePayment = 0
  let blendedRate: number | undefined

  if (equityGap > 0 && secondMortgageRate) {
    // Calculate second mortgage payment (15-year term typical)
    secondMortgagePayment = calculateMonthlyPayment(
      equityGap,
      secondMortgageRate,
      15
    )
    
    // Calculate blended rate
    const totalDebt = assumableLoanBalance + equityGap
    const weightedRate =
      (assumableLoanBalance / totalDebt) * assumableInterestRate +
      (equityGap / totalDebt) * secondMortgageRate
    blendedRate = weightedRate
  }

  const totalAssumablePayment = assumableMonthlyPayment + secondMortgagePayment

  // Calculate savings
  const monthlySavings = newMortgageMonthlyPayment - totalAssumablePayment
  const annualSavings = monthlySavings * 12
  const thirtyYearTotalSavings = annualSavings * 30

  return {
    assumableMonthlyPayment: totalAssumablePayment,
    newMortgageMonthlyPayment,
    monthlySavings,
    annualSavings,
    thirtyYearTotalSavings,
    equityGap,
    blendedRate,
  }
}

/**
 * Format currency
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format percentage
 */
export function formatPercentage(value: number, decimals = 2): string {
  return `${value.toFixed(decimals)}%`
}
