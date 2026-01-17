import type { Metadata } from 'next'
import AdvancedSearch from '../components/realscout/AdvancedSearch'
import SimpleSearch from '../components/realscout/SimpleSearch'
import Card from '../components/ui/Card'
import ContactForm from '../components/sections/ContactForm'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'Find Assumable Homes - Search FHA, VA, USDA Loans',
  description:
    'Search for homes with assumable FHA, VA, and USDA mortgages in Las Vegas and nationwide. Use RealScout widgets, partner platforms, or work with Dr. Jan Duffy.',
  path: '/find-homes',
  keywords: ['find assumable homes', 'assumable homes Las Vegas', 'search assumable mortgages'],
})

export default function FindHomesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find Assumable Homes
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Search for homes with assumable FHA, VA, and USDA mortgages in Las Vegas
            and throughout Nevada
          </p>
        </div>
      </section>

      {/* RealScout Search Widgets */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Search Assumable Homes
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Use our search tools to find homes with assumable mortgages
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Advanced Search
              </h3>
              <AdvancedSearch className="mb-8" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Simple Search
              </h3>
              <SimpleSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Integration */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Partner Platforms
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              We partner with leading assumable mortgage platforms to help you find homes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Assumable.io
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Search assumable homes nationwide and connect with sellers
              </p>
              <a
                href="https://assumable.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-primary)] hover:underline"
              >
                Visit Assumable.io →
              </a>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                Roam
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Find assumable homes with a 1% fee structure
              </p>
              <a
                href="https://roam.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-primary)] hover:underline"
              >
                Visit Roam →
              </a>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                AssumeList
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Marketplace for assumable mortgage opportunities
              </p>
              <a
                href="https://assumelist.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--color-primary)] hover:underline"
              >
                Visit AssumeList →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Tips */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 text-center mb-12">
            Search Tips
          </h2>
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                MLS Keywords to Use
              </h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  Search for "assumable" in listing descriptions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  Look for "VA loan" or "FHA loan" in listing details
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  Check for "USDA loan" in property information
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  Ask listing agents directly about assumable mortgages
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Questions to Ask Listing Agents
              </h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  "Is the current mortgage assumable?"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  "What type of loan is it (FHA, VA, USDA)?"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  "What is the current interest rate?"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  "What is the remaining loan balance?"
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  "Who is the current loan servicer?"
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Service */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Work Directly with Dr. Jan Duffy
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Get personalized assistance finding assumable homes in Nevada
            </p>
          </div>

          <ContactForm
            title="Get Help Finding Assumable Homes"
            description="Fill out the form below and we'll help you find assumable mortgage opportunities in your area"
          />
        </div>
      </section>

      {/* SEO Schema Markup */}
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'Find Assumable Homes - Search FHA, VA, USDA Loans',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/find-homes',
          breadcrumb: generateBreadcrumbSchema('/find-homes', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'Find Homes', url: 'https://assumablehomefinder.com/find-homes' },
          ]),
        })}
      />
    </div>
  )
}
