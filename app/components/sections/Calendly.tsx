/**
 * Calendly Scheduling Widget
 * Embeds Dr. Jan Duffy's Calendly scheduler via iframe
 */

type CalendlyProps = {
  title?: string
  description?: string
  className?: string
}

export default function Calendly({
  title = 'Schedule a Consultation',
  description = 'Book a time to discuss assumable mortgage opportunities with Dr. Jan Duffy',
  className = '',
}: CalendlyProps) {
  return (
    <section className={`bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <iframe
            src="https://calendly.com/drjanduffy"
            width="100%"
            height="900"
            frameBorder="0"
            title="Schedule a consultation with Dr. Jan Duffy"
            className="w-full"
            style={{ 
              minHeight: '700px',
              height: '900px'
            }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}