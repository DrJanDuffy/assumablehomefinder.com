'use client'

import { useState, type ReactNode } from 'react'

type AccordionItemProps = {
  question: string
  answer: ReactNode | string
  defaultOpen?: boolean
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-neutral-200">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-neutral-900 pr-4">{question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-neutral-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-neutral-600">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  )
}

type AccordionProps = {
  items: Array<{ question: string; answer: ReactNode | string }>
  className?: string
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  return (
    <div className={`space-y-0 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}
