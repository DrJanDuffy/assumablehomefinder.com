'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { NAV_ITEMS, AGENT_INFO } from '@/lib/constants'
import { AnimatePresence, motion } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)
  const lastFocusableRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      // Focus first element in menu
      setTimeout(() => firstFocusableRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Handle keyboard navigation (focus trap)
  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-sm' : 'py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl font-bold text-[var(--color-primary)]">
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
            className="rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-dark)] min-h-[48px] min-w-[48px] flex items-center justify-center"
          >
            Find Assumable Homes
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
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

      {/* Mobile Menu with Slide Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-out Menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] max-w-[85vw] bg-white z-50 md:hidden shadow-xl overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="p-4 flex justify-end">
                <button
                  ref={firstFocusableRef}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="px-4 py-2 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 text-lg font-medium rounded-lg active:bg-neutral-100 transition-colors min-h-[48px] touch-manipulation"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Prominent Phone CTA at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-200 bg-white">
                <a
                  href={AGENT_INFO.phoneLink}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-primary)] text-white rounded-lg font-medium text-lg min-h-[56px] touch-manipulation active:bg-[var(--color-primary-dark)] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {AGENT_INFO.phone}
                </a>
                <Link
                  ref={lastFocusableRef}
                  href="/find-homes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 block w-full py-3 rounded-lg bg-neutral-100 text-[var(--color-primary)] text-center font-medium min-h-[48px] flex items-center justify-center touch-manipulation active:bg-neutral-200 transition-colors"
                >
                  Find Assumable Homes
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
