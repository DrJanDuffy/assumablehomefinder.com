import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SITE_CONFIG, REALSCOUT_CONFIG } from '@/lib/constants'
import SchemaMarkup from './components/seo/SchemaMarkup'
import { generateOrganizationSchema } from '@/lib/schema-generators'
import { generateAuthorPersonSchema } from '@/lib/author-info'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'assumable mortgage',
    'assumable homes',
    'FHA assumable loan',
    'VA assumable mortgage',
    'USDA assumable loan',
    'assume mortgage Las Vegas',
    'low rate mortgage assumption',
    'assumable mortgage calculator',
    'Las Vegas real estate',
    'Henderson homes',
  ],
  openGraph: {
    title: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.baseUrl}/og?title=${encodeURIComponent(SITE_CONFIG.tagline)}`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    creator: '@assumablehomes',
    site: '@assumablehomes',
    images: [`${SITE_CONFIG.baseUrl}/og?title=${encodeURIComponent(SITE_CONFIG.tagline)}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

const cx = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-neutral-900 bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        {/* RealScout Web Components Script - Required once for all widgets */}
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
        />
        {/* RealScout Widget Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              realscout-advanced-search {
                --rs-as-button-text-color: #ffffff;
                --rs-as-background-color: #ffffff;
                --rs-as-button-color: #4a90e2;
                --rs-as-widget-width: 100% !important;
              }
              realscout-simple-search {
                --rs-ss-font-primary-color: #000000;
                --rs-ss-searchbar-border-color: #8b572a;
                --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
                --rs-ss-widget-width: 100% !important;
              }
              realscout-office-listings {
                --rs-listing-divider-color: #0e64c8;
                width: 100%;
              }
              @media (min-width: 640px) {
                realscout-advanced-search {
                  --rs-as-widget-width: 500px !important;
                }
                realscout-simple-search {
                  --rs-ss-widget-width: 500px !important;
                }
              }
            `,
          }}
        />
      </head>
      <body className="antialiased text-neutral-900 bg-white">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen bg-white text-neutral-900">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <SchemaMarkup schema={generateOrganizationSchema()} />
        <SchemaMarkup schema={generateAuthorPersonSchema()} />
      </body>
    </html>
  )
}
