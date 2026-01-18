import type { Metadata } from 'next'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import OfficeListings from '../components/realscout/OfficeListings'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Assumable Home Finder website. Learn how we collect, use, and protect your personal information.',
  path: '/privacy',
  keywords: ['privacy policy', 'data protection', 'assumable mortgage privacy'],
})

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-8">
          Privacy Policy
        </h1>

        {/* Primary Lead Magnet - Office Listings */}
        <div className="mb-12">
          <OfficeListings 
            title="Browse Our Luxury Listings"
            description="Explore our exclusive collection of luxury homes in Las Vegas and Henderson"
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-neutral-600">
          <p className="text-neutral-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p className="text-neutral-600 mb-6">
            At Assumable Home Finder, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this policy carefully to understand our practices regarding your personal data.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Information We Collect and How We Collect It
            </h2>
            <p className="mb-4">
              We collect information from you in several ways when you interact with our website and services. Understanding what we collect helps you make informed decisions about sharing your information:
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Information You Provide Directly
            </h3>
            <p className="mb-4">
              When you fill out contact forms, request information, use our calculator, or communicate with us, you may provide personal information including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Property search preferences and criteria (city, zip code, loan type interest)</li>
              <li>Calculator inputs and financial information (home price, loan amounts, interest rates) - note that calculator data is processed locally and not stored</li>
              <li>Any other information you choose to provide in messages or communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Automatically Collected Information
            </h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP address and location information</li>
              <li>Browser type and version</li>
              <li>Device information (operating system, device type)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Click patterns and navigation paths</li>
            </ul>
            <p className="mb-4">
              This information is collected through cookies, web beacons, and similar tracking technologies to help us understand how visitors use our site and improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect for various purposes to provide and improve our services:</p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Service Delivery and Communication
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Respond to your inquiries and provide customer service related to assumable mortgages</li>
              <li>Send you information about assumable mortgage opportunities, properties, and services</li>
              <li>Connect you with real estate services and assist with home searches</li>
              <li>Process and respond to contact form submissions and requests</li>
              <li>Communicate about real estate transactions, market updates, and relevant information</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Website Improvement and Analytics
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Analyze website usage patterns and user behavior to improve functionality</li>
              <li>Optimize website performance and user experience</li>
              <li>Personalize content and recommendations based on your interests</li>
              <li>Conduct research and analysis to better understand assumable mortgage market trends</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Legal and Business Operations
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Protect our rights, property, and safety, as well as that of our users</li>
              <li>Prevent fraud and ensure security</li>
              <li>Enforce our terms of service and other agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We respect your privacy and are committed to protecting your personal information. Here's how we handle information sharing:
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              We Do Not Sell Your Information
            </h3>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your trust is important to us, and we maintain strict confidentiality of your information.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Service Providers and Business Partners
            </h3>
            <p className="mb-4">
              We may share your information with trusted service providers who assist us in operating our website, conducting our business, or serving our users. These may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Real estate technology platforms and MLS services</li>
              <li>Website hosting and analytics providers (e.g., Vercel Analytics)</li>
              <li>Customer relationship management (CRM) systems</li>
              <li>Email service providers for communications</li>
            </ul>
            <p className="mb-4">
              All service providers are required to maintain confidentiality and are prohibited from using your information for any purpose other than providing services to us.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Legal Requirements
            </h3>
            <p className="mb-4">
              We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or comply with legal processes.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Business Transfers
            </h3>
            <p className="mb-4">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you of any such change in ownership or control of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Data Security and Protection
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Security Measures We Use
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure hosting infrastructure with industry-standard protections</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls limiting who can access personal information</li>
              <li>Secure data storage with backup and recovery procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Your Rights and Choices
            </h2>
            <p className="mb-4">
              You have certain rights regarding your personal information, depending on your location and applicable laws:
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Access and Correction
            </h3>
            <p className="mb-4">
              You may request access to the personal information we hold about you and request corrections if the information is inaccurate or incomplete.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Opt-Out and Unsubscribe
            </h3>
            <p className="mb-4">
              You can opt out of receiving marketing communications from us by following unsubscribe instructions in our emails or by contacting us directly. Note that you may still receive transactional communications related to services you've requested.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
              Cookie Preferences
            </h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through browser settings. You can set your browser to refuse cookies or alert you when cookies are being sent. However, some features of our website may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Third-Party Links and Services
            </h2>
            <p className="mb-4">
              Our website may contain links to third-party websites, including RealScout search platforms, partner platforms like Assumable.io and Roam, and other real estate services. We are not responsible for the privacy practices of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
            <p className="mb-4">
              When you use RealScout widgets or other third-party services integrated into our site, their respective privacy policies apply to information collected through those services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Children's Privacy
            </h2>
            <p className="mb-4">
              Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Contact Us About Privacy
            </h2>
            <p className="mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <p className="mb-4">
              <strong>Email:</strong>{' '}
              <a href="mailto:DrJanDuffy@bhhsnv.com" className="text-[var(--color-primary)] hover:underline">
                DrJanDuffy@bhhsnv.com
              </a>
            </p>
            <p className="mb-4">
              <strong>Phone:</strong>{' '}
              <a href="tel:+17025001971" className="text-[var(--color-primary)] hover:underline">
                (702) 500-1971
              </a>
            </p>
            <p className="mb-4">
              <strong>Agent:</strong> Dr. Jan Duffy<br />
              <strong>License:</strong> S.0197614<br />
              <strong>Brokerage:</strong> Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>
      </div>

      {/* SEO Schema Markup */}
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'Privacy Policy',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/privacy',
          breadcrumb: generateBreadcrumbSchema('/privacy', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'Privacy Policy', url: 'https://assumablehomefinder.com/privacy' },
          ]),
        })}
      />
    </div>
  )
}
