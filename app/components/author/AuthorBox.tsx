/**
 * Author Box Component
 * Displays Dr. Jan Duffy's credentials and expertise
 * Used on blog posts and key pages to establish authority
 */

import { AGENT_INFO } from '@/lib/constants'
import Link from 'next/link'

type AuthorBoxProps = {
  variant?: 'full' | 'compact' | 'inline'
  showImage?: boolean
  showContact?: boolean
  className?: string
}

export default function AuthorBox({
  variant = 'full',
  showImage = true,
  showContact = true,
  className = '',
}: AuthorBoxProps) {
  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <span className="text-neutral-600">Written by</span>
        <Link
          href="/about"
          className="font-semibold text-[var(--color-primary)] hover:underline"
        >
          {AGENT_INFO.name}
        </Link>
        <span className="text-neutral-500">|</span>
        <span className="text-sm text-neutral-600">{AGENT_INFO.title}</span>
        <span className="text-neutral-500">|</span>
        <span className="text-sm text-neutral-600">License {AGENT_INFO.license}</span>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-neutral-50 rounded-lg border border-neutral-200 p-4 ${className}`}>
        <div className="flex items-start gap-4">
          {showImage && (
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-semibold">
                {AGENT_INFO.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <Link
              href="/about"
              className="font-semibold text-neutral-900 hover:text-[var(--color-primary)] transition-colors"
            >
              {AGENT_INFO.name}
            </Link>
            <p className="text-sm text-neutral-600 mt-1">
              {AGENT_INFO.title} | License {AGENT_INFO.license}
            </p>
            <p className="text-sm text-neutral-600">
              {AGENT_INFO.brokerage}
            </p>
            <p className="text-sm text-neutral-600 mt-1">
              30+ years experience | Assumable Mortgage Specialist
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Full variant
  return (
    <div className={`bg-gradient-to-br from-neutral-50 to-white rounded-lg border-2 border-[var(--color-primary)]/20 p-6 sm:p-8 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-6">
        {showImage && (
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              {AGENT_INFO.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Link
              href="/about"
              className="text-2xl font-bold text-neutral-900 hover:text-[var(--color-primary)] transition-colors"
            >
              {AGENT_INFO.name}
            </Link>
            <span className="px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-full">
              Expert Author
            </span>
          </div>
          <p className="text-lg font-semibold text-[var(--color-primary)] mb-2">
            {AGENT_INFO.title} | License {AGENT_INFO.license}
          </p>
          <p className="text-base text-neutral-700 font-medium mb-4">
            {AGENT_INFO.brokerage}
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>30+ years</strong> of real estate market expertise</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Assumable Mortgage Specialist</strong> - FHA, VA, USDA loans</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Las Vegas Market Expert</strong> - Deep local knowledge</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Published Expert</strong> - Trusted authority on assumable mortgages</span>
            </div>
          </div>

          <p className="text-sm text-neutral-600 mb-4">
            Dr. Jan Duffy is recognized as one of Nevada's leading experts on assumable mortgages, 
            with specialized knowledge in FHA, VA, and USDA loan assumptions. Her 30+ years of 
            experience in the Las Vegas real estate market, combined with her deep understanding 
            of assumption processes, makes her uniquely qualified to guide buyers and sellers 
            through assumable mortgage transactions.
          </p>

          {showContact && (
            <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-200">
              <Link
                href="/about"
                className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-md text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Learn More About Dr. Duffy
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-md text-sm font-medium hover:bg-[var(--color-primary)]/10 transition-colors"
              >
                Contact Dr. Duffy
              </Link>
              <a
                href={AGENT_INFO.phoneLink}
                className="px-4 py-2 border border-neutral-300 text-neutral-700 rounded-md text-sm font-medium hover:bg-neutral-50 transition-colors"
              >
                Call {AGENT_INFO.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
