'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input, Textarea } from '../ui/Input'
import Button from '../ui/Button'
import { useState } from 'react'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  city: z.string().optional(),
  zip: z.string().optional(),
  loanTypeInterest: z.enum(['FHA', 'VA', 'USDA', 'Any']).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

type ContactFormProps = {
  title?: string
  description?: string
  loanTypeField?: boolean
}

export default function ContactForm({
  title = 'Get Notified of Assumable Homes in Your Area',
  description = 'Fill out the form below and we\'ll help you find assumable mortgage opportunities',
  loanTypeField = true,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-neutral-600">{description}</p>
          )}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-lg border border-neutral-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label="Full Name"
              id="name"
              type="text"
              required
              {...register('name')}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              id="email"
              type="email"
              required
              {...register('email')}
              error={errors.email?.message}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label="Phone"
              id="phone"
              type="tel"
              required
              {...register('phone')}
              error={errors.phone?.message}
            />
            <Input
              label="City/Zip"
              id="city"
              type="text"
              {...register('city')}
              error={errors.city?.message}
              helperText="Optional"
            />
          </div>

          {loanTypeField && (
            <div>
              <label
                htmlFor="loanTypeInterest"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Loan Type Interest (Optional)
              </label>
              <select
                id="loanTypeInterest"
                {...register('loanTypeInterest')}
                className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 sm:py-2 text-base sm:text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 min-h-[48px]"
              >
                <option value="">Any</option>
                <option value="FHA">FHA</option>
                <option value="VA">VA</option>
                <option value="USDA">USDA</option>
              </select>
            </div>
          )}

          <Textarea
            label="Message"
            id="message"
            rows={4}
            required
            {...register('message')}
            error={errors.message?.message}
            helperText="Tell us about your homebuying goals"
          />

          {submitStatus === 'success' && (
            <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
              Thank you! We'll be in touch soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
              There was an error submitting your form. Please try again or call
              us directly.
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            fullWidthMobile={true}
            className="sm:w-auto"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </section>
  )
}
