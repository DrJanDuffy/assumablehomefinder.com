'use client'

/**
 * RealScout Office Listings Widget
 * Primary lead magnet - displays luxury listings ($500K-$16M)
 */

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': {
        'agent-encoded-id': string
        'sort-order'?: string
        'listing-status'?: string
        'property-types'?: string
        'price-min'?: string
        'price-max'?: string
        children?: never
      }
    }
  }
}

type OfficeListingsProps = {
  className?: string
  title?: string
  description?: string
  showTitle?: boolean
}

export default function OfficeListings({
  className = '',
  title = 'Luxury Homes with Assumable Mortgages',
  description = 'Browse our exclusive collection of luxury homes in Las Vegas and Henderson ($500K - $16M)',
  showTitle = true,
}: OfficeListingsProps) {
  return (
    <section className={`w-full bg-white py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="w-full">
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR"
            price-min="500000"
            price-max="16000000"
          />
        </div>
      </div>
    </section>
  )
}
