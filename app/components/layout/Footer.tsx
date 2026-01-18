import Link from 'next/link'
import { AGENT_INFO, SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">
              {SITE_CONFIG.name}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-4 space-y-2 text-sm text-neutral-600">
              <p className="font-medium text-neutral-900">
                {AGENT_INFO.name}, {AGENT_INFO.title}
              </p>
              <p>License: {AGENT_INFO.license}</p>
              <p>{AGENT_INFO.brokerage}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-neutral-600 hover:text-[var(--color-primary)]"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-sm text-neutral-600 hover:text-[var(--color-primary)]"
                >
                  Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-neutral-600 hover:text-[var(--color-primary)]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/for-sellers"
                  className="text-sm text-neutral-600 hover:text-[var(--color-primary)]"
                >
                  For Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li>
                <a
                  href={AGENT_INFO.phoneLink}
                  className="hover:text-[var(--color-primary)] min-h-[48px] inline-flex items-center touch-manipulation"
                >
                  {AGENT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENT_INFO.email}`}
                  className="hover:text-[var(--color-primary)] min-h-[48px] inline-flex items-center touch-manipulation break-all"
                >
                  {AGENT_INFO.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[var(--color-primary)] min-h-[48px] inline-flex items-center touch-manipulation"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-8">
          <p className="text-center text-sm text-neutral-600">
            © {currentYear} {AGENT_INFO.name}. All rights reserved. | License{' '}
            {AGENT_INFO.license}
          </p>
        </div>
      </div>

      {/* Schema Markup for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: AGENT_INFO.name,
            telephone: AGENT_INFO.phone,
            email: AGENT_INFO.email,
            url: SITE_CONFIG.baseUrl,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              addressCountry: 'US',
            },
            worksFor: {
              '@type': 'RealEstateAgent',
              name: AGENT_INFO.brokerage,
            },
            jobTitle: AGENT_INFO.title,
            additionalProperty: {
              '@type': 'PropertyValue',
              name: 'Real Estate License',
              value: AGENT_INFO.license,
            },
          }),
        }}
      />
    </footer>
  )
}
