import type { Metadata } from 'next'
import Calendly from '../components/sections/Calendly'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import OfficeListings from '../components/realscout/OfficeListings'
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
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-neutral-600">
            Get in touch about assumable mortgages, home searches, or real estate services
          </p>
        </div>

        {/* Introduction Section */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8 mb-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
            Get Expert Help with Assumable Mortgages in Las Vegas
          </h2>
          <p className="text-neutral-600 mb-4">
            Whether you're searching for assumable homes, need guidance on the assumption process, or want to market your assumable mortgage as a seller, Dr. Jan Duffy is here to help. With over 30 years of real estate experience and specialized knowledge in assumable mortgages, we provide personalized service to help you navigate this unique homebuying opportunity.
          </p>
          <p className="text-neutral-600 mb-4">
            Our team specializes in FHA, VA, and USDA assumable mortgages throughout Las Vegas, Henderson, North Las Vegas, and the greater Nevada area. We understand the nuances of the assumption process, from finding qualified assumable homes to navigating lender requirements and closing the deal.
          </p>
          <p className="text-neutral-600">
            Ready to explore assumable mortgage opportunities? Schedule a consultation using the calendar below, or contact us directly by phone or email. We typically respond to inquiries within 24 hours during business hours.
          </p>
        </section>

        {/* Primary Lead Magnet - Office Listings */}
        <div className="mb-12">
          <OfficeListings 
            title="Browse Our Luxury Listings"
            description="Explore our exclusive collection of luxury homes in Las Vegas and Henderson"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Calendly Scheduler */}
          <div>
            <Calendly
              title="Schedule a Consultation"
              description="Book a time to discuss assumable mortgage opportunities with Dr. Jan Duffy"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Direct Contact Information
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
                  <p className="text-sm mt-1">Call or text for immediate assistance</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Email</p>
                  <a
                    href={`mailto:${AGENT_INFO.email}`}
                    className="text-lg text-[var(--color-primary)] hover:underline break-all"
                  >
                    {AGENT_INFO.email}
                  </a>
                  <p className="text-sm mt-1">Email us for detailed inquiries</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">License</p>
                  <p className="text-lg">{AGENT_INFO.license}</p>
                  <p className="text-sm mt-1">Nevada Licensed REALTOR®</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-1">Brokerage</p>
                  <p className="text-lg">{AGENT_INFO.brokerage}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Primary Service Areas
              </h2>
              <p className="text-neutral-600 mb-4">
                Dr. Jan Duffy specializes in assumable mortgages throughout the greater Las Vegas metropolitan area:
              </p>
              <ul className="space-y-2 text-neutral-600">
                {AGENT_INFO.primaryMarket.map((area) => (
                  <li key={area} className="flex items-start">
                    <span className="mr-2 text-[var(--color-primary)]">✓</span>
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-neutral-600 mt-4 text-sm">
                We also assist buyers and sellers in surrounding Nevada communities. If you're outside these areas, we're happy to refer you to qualified assumable mortgage specialists in your location.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Office Hours & Availability
              </h3>
              <p className="text-sm text-neutral-600 mb-3">
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM PST<br />
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM PST<br />
                <strong>Sunday:</strong> By Appointment
              </p>
              <p className="text-sm text-neutral-600">
                For urgent inquiries or to schedule a consultation outside regular hours, please call or text and we'll do our best to accommodate your schedule.
              </p>
            </div>
          </div>
        </div>

        {/* What to Expect Section */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8 mt-12 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
            What to Expect When You Contact Us
          </h2>
          <p className="text-neutral-600 mb-6">
            When you reach out about assumable mortgages, here's what you can expect from our team:
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Initial Consultation
          </h3>
          <p className="text-neutral-600 mb-4">
            We'll start by understanding your situation - whether you're a buyer looking for assumable homes, a seller with an assumable mortgage to market, or someone exploring the concept for the first time. We'll answer your questions about assumable mortgages, explain the process, and help you understand if this is the right option for you.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Personalized Search Assistance
          </h3>
          <p className="text-neutral-600 mb-4">
            For buyers, we'll help you search for assumable mortgage opportunities using MLS, partner platforms, and our network of contacts. We know the Las Vegas market intimately and can identify homes with assumable FHA, VA, or USDA loans that match your criteria.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Guidance Through the Process
          </h3>
          <p className="text-neutral-600 mb-4">
            Once you've found a home with an assumable mortgage, we'll guide you through the entire assumption process. This includes helping you qualify with the existing lender, understanding the equity gap and down payment requirements, coordinating with loan servicers, and navigating the closing process. Our expertise helps ensure a smooth transaction.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Seller Marketing Support
          </h3>
          <p className="text-neutral-600 mb-4">
            If you're selling a home with an assumable mortgage, we'll help you market this valuable feature to attract more buyers and potentially sell for a higher price. We'll highlight the assumable mortgage in your listing, calculate potential buyer savings, and connect you with buyers specifically seeking assumable opportunities.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Ongoing Support
          </h3>
          <p className="text-neutral-600 mb-4">
            Our relationship doesn't end at closing. We're here to answer questions, help you understand your mortgage terms, and provide ongoing real estate guidance. Many clients return to us for future transactions, whether buying another home, selling, or investing in real estate.
          </p>
        </section>

        {/* Why Choose Our Team Section */}
        <section className="bg-white rounded-lg border border-neutral-200 p-6 sm:p-8 mt-8 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mb-4">
            Why Choose Our Team for Assumable Mortgages?
          </h2>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Specialized Expertise
          </h3>
          <p className="text-neutral-600 mb-4">
            Unlike many real estate agents who have limited experience with assumable mortgages, Dr. Jan Duffy specializes in this niche. We understand the unique requirements, processes, and benefits of FHA, VA, and USDA assumable loans. This specialized knowledge ensures you get accurate information and expert guidance throughout your journey.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Deep Local Market Knowledge
          </h3>
          <p className="text-neutral-600 mb-4">
            With 30+ years in the Las Vegas real estate market, we know the neighborhoods, market trends, and local nuances that matter when buying or selling. This includes understanding which areas have higher concentrations of assumable mortgages, current market conditions, and property values throughout Las Vegas, Henderson, and North Las Vegas.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Proven Track Record
          </h3>
          <p className="text-neutral-600 mb-4">
            We've successfully helped numerous buyers find and assume mortgages, and assisted sellers in marketing their assumable loans. Our clients consistently save thousands of dollars per month and achieve their real estate goals through assumable mortgage transactions. We're proud of our track record and the relationships we've built with satisfied clients.
          </p>

          <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
            Comprehensive Service
          </h3>
          <p className="text-neutral-600 mb-4">
            From initial consultation through closing and beyond, we provide comprehensive support. We'll help you understand your options, find the right opportunities, navigate the process, and close successfully. We also provide resources like this website, calculators, and educational content to empower you with knowledge.
          </p>
        </section>
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
