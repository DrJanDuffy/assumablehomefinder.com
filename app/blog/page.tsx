import { BlogPosts } from 'app/components/posts'
import type { Metadata } from 'next'
import SchemaMarkup from '../components/seo/SchemaMarkup'
import OfficeListings from '../components/realscout/OfficeListings'
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from '@/lib/seo-config'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog - Assumable Mortgage Resources',
  description:
    'Learn about assumable mortgages, FHA loans, VA loans, USDA loans, and how to save thousands by assuming existing low-rate mortgages. Expert insights and buyer guides.',
  path: '/blog',
  keywords: ['assumable mortgage blog', 'VA loan articles', 'FHA loan guide'],
})

export default function Page() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Assumable Mortgage Blog
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-neutral-600">
            Expert insights on assumable mortgages, FHA, VA, and USDA loans
          </p>
        </div>

        {/* Primary Lead Magnet - Office Listings */}
        <div className="mb-12">
          <OfficeListings 
            title="Browse Luxury Homes with Assumable Mortgages"
            description="Explore our exclusive collection of luxury homes in Las Vegas and Henderson"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
            Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Assumable Mortgage Basics',
              'FHA Loans',
              'VA Loans',
              'USDA Loans',
              'Market Updates',
              'Buyer Tips',
              'Seller Tips',
            ].map((category) => (
              <span
                key={category}
                className="px-3 py-1 rounded-full bg-neutral-100 text-sm text-neutral-700 hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <section className="space-y-8">
          <BlogPosts />
        </section>
      </div>

      {/* SEO Schema Markup */}
      <SchemaMarkup
        schema={generateWebPageSchema({
          name: 'Blog - Assumable Mortgage Resources',
          description: metadata.description || '',
          url: 'https://assumablehomefinder.com/blog',
          breadcrumb: generateBreadcrumbSchema('/blog', [
            { name: 'Home', url: 'https://assumablehomefinder.com/' },
            { name: 'Blog', url: 'https://assumablehomefinder.com/blog' },
          ]),
        })}
      />
    </div>
  )
}
