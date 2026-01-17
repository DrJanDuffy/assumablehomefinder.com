import type { Metadata } from 'next'
import Calculator from '../components/calculator/Calculator'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import { generateCalculatorSchema } from '@/lib/schema-generators'
import ContactForm from '../components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Assumable Mortgage Savings Calculator',
  description:
    'Calculate how much you can save by assuming an existing low-rate mortgage instead of getting a new loan. Compare payments and see your potential savings.',
}

export default function CalculatorPage() {
  return (
    <div className="bg-neutral-50 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Assumable Mortgage Savings Calculator
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Calculate your potential savings by assuming an existing mortgage
            with a low interest rate instead of getting a new loan.
          </p>
        </div>

        <Calculator />

        <div className="mt-16">
          <ContactForm
            title="Want help finding homes with rates like this?"
            description="Contact us to get started on your assumable mortgage search."
            loanTypeField={false}
          />
        </div>
      </div>

      <SchemaMarkup schema={generateCalculatorSchema()} />
    </div>
  )
}
