'use client'

import Link from 'next/link'
import { useState } from 'react'
import { NAV_ITEMS, AGENT_INFO } from '@/lib/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[var(--color-primary)]">
            Assumable Home Finder
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-[var(--color-primary)]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Phone */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <a
            href={AGENT_INFO.phoneLink}
            className="text-sm font-medium text-neutral-700 hover:text-[var(--color-primary)]"
          >
            {AGENT_INFO.phone}
          </a>
          <Link
            href="/find-homes"
            className="rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            Find Assumable Homes
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-neutral-200 bg-white px-4 pb-4 pt-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={AGENT_INFO.phoneLink}
              className="block px-3 py-2 text-base font-medium text-[var(--color-primary)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {AGENT_INFO.phone}
            </a>
            <Link
              href="/find-homes"
              className="mt-2 block rounded-md bg-[var(--color-primary)] px-4 py-2 text-center text-base font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Assumable Homes
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
