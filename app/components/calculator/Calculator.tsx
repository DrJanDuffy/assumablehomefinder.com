'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '../ui/Input'
import Button from '../ui/Button'
import ResultsDisplay from './ResultsDisplay'
import { calculateSavings, type CalculatorInputs } from '@/lib/calculator-utils'

const calculatorSchema = z.object({
  homePrice: z.number().min(1, 'Home price is required'),
  assumableLoanBalance: z.number().min(1, 'Loan balance is required'),
  assumableInterestRate: z.number().min(0).max(10),
  remainingLoanTerm: z.number().min(1).max(50),
  currentMarketRate: z.number().min(0).max(15),
  downPayment: z.number().min(0),
  secondMortgageRate: z.number().min(0).max(15).optional(),
})

type CalculatorFormData = z.infer<typeof calculatorSchema>

const defaultValues: CalculatorFormData = {
  homePrice: 400000,
  assumableLoanBalance: 300000,
  assumableInterestRate: 3.0,
  remainingLoanTerm: 27,
  currentMarketRate: 7.0,
  downPayment: 20000,
  secondMortgageRate: 8.0,
}

export default function Calculator() {
  const [results, setResults] = useState<ReturnType<typeof calculateSavings> | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CalculatorFormData>({
    resolver: zodResolver(calculatorSchema),
    defaultValues,
  })

  // Watch all form values for real-time calculation
  const formValues = watch()

  const onSubmit = useCallback((data: CalculatorFormData) => {
    const inputs: CalculatorInputs = {
      homePrice: data.homePrice,
      assumableLoanBalance: data.assumableLoanBalance,
      assumableInterestRate: data.assumableInterestRate,
      remainingLoanTerm: data.remainingLoanTerm,
      currentMarketRate: data.currentMarketRate,
      downPayment: data.downPayment,
      secondMortgageRate: data.secondMortgageRate,
    }

    const calculated = calculateSavings(inputs)
    setResults(calculated)
  }, [])

  // Debounced calculation on form change
  useEffect(() => {
    const values = formValues
    if (
      !values.homePrice ||
      !values.assumableLoanBalance ||
      !values.assumableInterestRate ||
      !values.remainingLoanTerm ||
      values.currentMarketRate === undefined
    ) {
      return
    }

    const timeoutId = setTimeout(() => {
      const inputs: CalculatorInputs = {
        homePrice: values.homePrice || 0,
        assumableLoanBalance: values.assumableLoanBalance || 0,
        assumableInterestRate: values.assumableInterestRate || 0,
        remainingLoanTerm: values.remainingLoanTerm || 0,
        currentMarketRate: values.currentMarketRate || 0,
        downPayment: values.downPayment || 0,
        secondMortgageRate: values.secondMortgageRate,
      }

      try {
        const calculated = calculateSavings(inputs)
        setResults(calculated)
      } catch (error) {
        // Ignore calculation errors during typing
      }
    }, 300) // 300ms debounce

    return () => clearTimeout(timeoutId)
  }, [formValues])

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-lg border border-neutral-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label="Home Price ($)"
            id="homePrice"
            type="number"
            step="1000"
            required
            {...register('homePrice', { valueAsNumber: true })}
            error={errors.homePrice?.message}
          />
          <Input
            label="Assumable Loan Balance ($)"
            id="assumableLoanBalance"
            type="number"
            step="1000"
            required
            {...register('assumableLoanBalance', { valueAsNumber: true })}
            error={errors.assumableLoanBalance?.message}
          />
          <Input
            label="Assumable Interest Rate (%)"
            id="assumableInterestRate"
            type="number"
            step="0.1"
            required
            {...register('assumableInterestRate', { valueAsNumber: true })}
            error={errors.assumableInterestRate?.message}
            helperText="e.g., 2.5 for 2.5%"
          />
          <Input
            label="Remaining Loan Term (years)"
            id="remainingLoanTerm"
            type="number"
            step="1"
            required
            {...register('remainingLoanTerm', { valueAsNumber: true })}
            error={errors.remainingLoanTerm?.message}
          />
          <Input
            label="Current Market Rate (%)"
            id="currentMarketRate"
            type="number"
            step="0.1"
            required
            {...register('currentMarketRate', { valueAsNumber: true })}
            error={errors.currentMarketRate?.message}
            helperText="Rate you'd get on a new mortgage"
          />
          <Input
            label="Your Down Payment ($)"
            id="downPayment"
            type="number"
            step="1000"
            required
            {...register('downPayment', { valueAsNumber: true })}
            error={errors.downPayment?.message}
          />
        </div>

        <Input
          label="Second Mortgage Rate (%) - Optional"
          id="secondMortgageRate"
          type="number"
          step="0.1"
          {...register('secondMortgageRate', {
            valueAsNumber: true,
            required: false,
          })}
          error={errors.secondMortgageRate?.message}
          helperText="If you need a second mortgage to cover the equity gap"
        />

        <Button type="submit" fullWidthMobile={true} className="sm:w-auto">
          Calculate Savings
        </Button>
      </form>

      {results && <ResultsDisplay results={results} inputs={formValues} />}
    </div>
  )
}
