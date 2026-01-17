import Accordion, { AccordionItem } from '../ui/Accordion'

type FAQItem = {
  question: string
  answer: string | React.ReactNode
}

type FAQProps = {
  items: FAQItem[]
  title?: string
  description?: string
  showSchema?: boolean
}

export default function FAQ({
  items,
  title = 'Frequently Asked Questions',
  description,
  showSchema = false,
}: FAQProps) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-neutral-600">{description}</p>
            )}
          </div>
        )}
        <Accordion items={items} />

        {showSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: items.map((item) => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      typeof item.answer === 'string'
                        ? item.answer
                        : 'See website for details',
                  },
                })),
              }),
            }}
          />
        )}
      </div>
    </section>
  )
}
