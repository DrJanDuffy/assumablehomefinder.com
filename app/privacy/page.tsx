import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Assumable Home Finder website.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg max-w-none space-y-6 text-neutral-600">
          <p>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you fill out
              a contact form, request information, or communicate with us. This may include
              your name, email address, phone number, and any other information you choose
              to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Information Sharing
            </h2>
            <p>
              We do not sell or rent your personal information to third parties. We may
              share your information with service providers who assist us in operating our
              website and conducting our business, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:DrJanDuffy@bhhsnv.com" className="text-[var(--color-primary)] hover:underline">
                DrJanDuffy@bhhsnv.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
