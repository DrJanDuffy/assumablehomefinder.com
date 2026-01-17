import type { Metadata } from 'next'
import { AGENT_INFO } from '@/lib/constants'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import { generateRealEstateAgentSchema } from '@/lib/schema-generators'
import Button from '../components/ui/Button'
import Image from 'next/image'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Dr. Jan Duffy - Assumable Mortgage Specialist',
  description:
    'Dr. Jan Duffy is a Nevada-licensed REALTOR specializing in assumable mortgages, luxury homes, and Las Vegas real estate. 30+ years market expertise, License S.0197614.LLC.',
  path: '/about',
  keywords: ['Dr. Jan Duffy', 'Las Vegas real estate agent', 'assumable mortgage specialist'],
})

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Dr. Jan Duffy
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Your Nevada Assumable Mortgage Specialist
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Photo Placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-200">
                <div className="flex h-full items-center justify-center text-neutral-400">
                  <svg
                    className="h-32 w-32"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                {AGENT_INFO.name}
              </h2>
              <p className="mt-2 text-lg font-medium text-[var(--color-primary)]">
                {AGENT_INFO.title} | License {AGENT_INFO.license}
              </p>
              <p className="mt-4 text-lg font-medium text-neutral-900">
                {AGENT_INFO.brokerage}
              </p>

              <div className="mt-8 space-y-4 text-neutral-600">
                <p>
                  With over 30 years of real estate market expertise, Dr. Jan Duffy
                  specializes in helping homebuyers find assumable mortgage opportunities
                  in Las Vegas, Henderson, and throughout Nevada.
                </p>
                <p>
                  As an assumable mortgage specialist, Dr. Duffy understands the unique
                  benefits and challenges of assuming existing FHA, VA, and USDA loans.
                  She helps buyers navigate the assumption process, qualify with existing
                  lenders, and save thousands of dollars per month compared to getting
                  new loans at current market rates.
                </p>
                <p>
                  Whether you're a first-time homebuyer, experienced investor, or looking
                  for luxury homes in Las Vegas, Dr. Duffy provides personalized guidance
                  and expertise to help you achieve your real estate goals.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Specializations
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Assumable mortgages (FHA, VA, USDA)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Luxury homes in Las Vegas and Henderson
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    First-time homebuyer assistance
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Investment property guidance
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Market analysis and pricing
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Neighborhood expertise (Las Vegas, Henderson, North Las Vegas)
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Credentials & License
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Nevada Real Estate License: {AGENT_INFO.license}
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    {AGENT_INFO.brokerage}
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    30+ years of market expertise
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-neutral-500">•</span>
                    Assumable mortgage specialist
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Why Work with a Specialized Agent?
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Understanding of the assumption process and requirements
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Connections with loan servicers and lenders
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Experience with FHA, VA, and USDA requirements
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Local market expertise in Las Vegas and Henderson
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    Guidance on qualifying and documentation
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact">Contact Me</Button>
                <Button variant="outline" href="/find-homes">
                  Find Assumable Homes
                </Button>
              </div>

              <div className="mt-8 space-y-2 text-neutral-600">
                <p>
                  <strong className="text-neutral-900">Phone:</strong>{' '}
                  <a
                    href={AGENT_INFO.phoneLink}
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    {AGENT_INFO.phone}
                  </a>
                </p>
                <p>
                  <strong className="text-neutral-900">Email:</strong>{' '}
                  <a
                    href={`mailto:${AGENT_INFO.email}`}
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    {AGENT_INFO.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Schema Markup */}
      <SchemaMarkup schema={generateRealEstateAgentSchema()} />
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'About Dr. Jan Duffy - Assumable Mortgage Specialist',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/about',
          breadcrumb: generateBreadcrumbSchema('/about', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'About', url: 'https://assumablehomefinder.com/about' },
          ]),
        })}
      />
    </div>
  )
}
