'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MARKET_STATS } from '@/lib/constants'

type StatProps = {
  value: string
  label: string
  suffix?: string
  prefix?: string
}

function AnimatedCounter({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = startValue + (target - startValue) * easeOutQuart

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animate()
  }, [isInView, target, duration])

  const formatNumber = (num: number) => {
    if (decimals === 0) {
      return Math.floor(num).toLocaleString()
    }
    return num.toFixed(decimals).toLocaleString()
  }

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

function Stat({ value, label, suffix = '', prefix = '' }: StatProps) {
  // Try to parse number from value for animation
  const numMatch = value.match(/[\d.]+/)
  const hasNumber = numMatch !== null

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-[var(--color-primary)] sm:text-5xl">
        {hasNumber && numMatch ? (
          <AnimatedCounter
            target={parseFloat(numMatch[0])}
            suffix={value.replace(numMatch[0], '').replace(suffix, '') + suffix}
            prefix={prefix}
          />
        ) : (
          `${prefix}${value}${suffix}`
        )}
      </div>
      <p className="mt-2 text-sm font-medium text-neutral-600">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            value={MARKET_STATS.assumableMortgagesText}
            label="Assumable Mortgages Nationwide"
          />
          <Stat
            value={MARKET_STATS.vaLoansBelow5PercentText}
            label="of VA Loans Below 5%"
          />
          <Stat
            value={MARKET_STATS.averageSavingsText}
            label="Average Annual Savings"
          />
          <Stat value="Anyone Can" label="Assume VA Loans" />
        </div>
      </div>
    </section>
  )
}
