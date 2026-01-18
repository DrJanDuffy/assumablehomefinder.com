/**
 * Expert Insight Component
 * Shows Dr. Duffy's expertise with quotes/insights on key topics
 * Used to demonstrate authority and unique knowledge
 */

type ExpertInsightProps = {
  quote: string
  topic?: string
  className?: string
}

export default function ExpertInsight({ quote, topic, className = '' }: ExpertInsightProps) {
  return (
    <div className={`bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 border-l-4 border-[var(--color-primary)] p-6 rounded-r-lg ${className}`}>
      <div className="flex items-start gap-4">
        <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <div className="flex-1">
          {topic && (
            <p className="text-sm font-semibold text-[var(--color-primary)] mb-2 uppercase tracking-wide">
              Expert Insight: {topic}
            </p>
          )}
          <p className="text-neutral-700 italic leading-relaxed">{quote}</p>
          <p className="text-sm text-neutral-600 mt-3">
            — <strong>Dr. Jan Duffy</strong>, Assumable Mortgage Specialist
          </p>
        </div>
      </div>
    </div>
  )
}
