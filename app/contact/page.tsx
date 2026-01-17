import type { Metadata } from 'next'
import ContactForm from '../components/sections/ContactForm'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import { AGENT_INFO } from '@/lib/constants'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us - Assumable Mortgage Inquiry',
  description:
    'Contact Dr. Jan Duffy for assumable mortgage inquiries, home searches, and real estate services in Las Vegas and Henderson, Nevada. Call (702) 500-1971.',
  path: '/contact',
  keywords: ['contact assumable mortgage', 'Las Vegas real estate contact', 'Dr. Jan Duffy contact'],
})

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Get in touch about assumable mortgages, home searches, or real estate services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <ContactForm
              title="Send Us a Message"
              description="Fill out the form below and we'll get back to you soon"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Direct Contact
              </h2>
              <div className="space-y-4 text-neutral-600">
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Phone</p>
                  <a
                    href={AGENT_INFO.phoneLink}
                    className="text-lg text-[var(--color-primary)] hover:underline"
                  >
                    {AGENT_INFO.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Email</p>
                  <a
                    href={`mailto:${AGENT_INFO.email}`}
                    className="text-lg text-[var(--color-primary)] hover:underline"
                  >
                    {AGENT_INFO.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">License</p>
                  <p className="text-lg">{AGENT_INFO.license}</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Brokerage</p>
                  <p className="text-lg">{AGENT_INFO.brokerage}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Service Areas
              </h2>
              <ul className="space-y-2 text-neutral-600">
                {AGENT_INFO.primaryMarket.map((area) => (
                  <li key={area} className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Office Hours
              </h3>
              <p className="text-sm text-neutral-600">
                Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                Saturday: 10:00 AM - 4:00 PM PST<br />
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Schema Markup */}
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'Contact Us - Assumable Mortgage Inquiry',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/contact',
          breadcrumb: generateBreadcrumbSchema('/contact', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'Contact', url: 'https://assumablehomefinder.com/contact' },
          ]),
        })}
      />
    </div>
  )
}
